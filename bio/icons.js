const ICON_SRC={lucide:'https://cdn.jsdelivr.net/npm/lucide-static@0.454.0/icons/',fab:'https://cdn.jsdelivr.net/npm/@fortawesome/fontawesome-free@6.7.2/svgs/brands/'};
const ICON_CACHE={};
function pintaIcones(raiz){
  (raiz||document).querySelectorAll('[data-icon]').forEach(el=>{
    const [set,name]=el.dataset.icon.split(':');
    const url=ICON_SRC[set]+name+'.svg';
    ICON_CACHE[url]=ICON_CACHE[url]||fetch(url).then(r=>r.ok?r.text():'').catch(()=>'');
    ICON_CACHE[url].then(t=>{if(t)el.innerHTML=t.replace('<svg','<svg fill="'+(set==='fab'?'currentColor':'none')+'" width="100%" height="100%" preserveAspectRatio="xMidYMid meet"')});
  });
}
function ondaToque(sel){
  document.querySelectorAll(sel||'[data-rip]').forEach(el=>{
    el.addEventListener('pointerdown',e=>{
      const r=el.getBoundingClientRect(),d=Math.max(r.width,r.height),s=document.createElement('span');
      s.className='rip';s.style.width=s.style.height=d+'px';
      s.style.left=(e.clientX-r.left-d/2)+'px';s.style.top=(e.clientY-r.top-d/2)+'px';
      el.appendChild(s);setTimeout(()=>s.remove(),600);
    });
  });
}
pintaIcones();ondaToque();
