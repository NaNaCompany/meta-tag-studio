export function escapeHtml(value){return String(value).replace(/[&<>"']/g,c=>({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'}[c]));}
export function buildTags(data){
 const title=data.title.trim(),description=data.description.trim();
 if(!title||!description)throw new Error('required');
 if(title.length>300||description.length>2000||data.site.length>200||data.alt.length>1000)throw new Error('length');
 const urlCheck=(s)=>{if(!s)return '';let u;try{u=new URL(s);}catch{throw new Error('url');}if(!['https:','http:'].includes(u.protocol)||u.username||u.password)throw new Error('url');return u.href;};
 const canonical=urlCheck(data.canonical.trim()),image=urlCheck(data.image.trim());
 if(!canonical)throw new Error('required');
 const esc=escapeHtml,meta=(k,v,p=false)=>`<meta ${p?'property':'name'}="${k}" content="${esc(v)}">`;
 const lines=[`<title>${esc(title)}</title>`,meta('description',description),`<link rel="canonical" href="${esc(canonical)}">`,meta('og:title',title,true),meta('og:description',description,true),meta('og:type','website',true),meta('og:url',canonical,true)];
 if(data.site.trim())lines.push(meta('og:site_name',data.site.trim(),true));
 if(image){lines.push(meta('og:image',image,true));if(data.alt.trim())lines.push(meta('og:image:alt',data.alt.trim(),true));}
 lines.push(meta('twitter:card',image?'summary_large_image':'summary'),meta('twitter:title',title),meta('twitter:description',description));
 if(image)lines.push(meta('twitter:image',image));
 return {code:lines.join('\n'),title,description,canonical,image,titleLength:[...title].length,descriptionLength:[...description].length};
}
