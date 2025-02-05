window.sidekick(t=>{let a={badge:".J-Ke n0",badgeWrapper:".J-Ke"},s=()=>{let e=0,n=document.querySelectorAll(a.badge),r=document.querySelector(a.badge);if(!r)return t.setBadge(e);let g=r.getAttribute("aria-label");n.length>0&&g!=null&&(e=parseInt(g.replace(/[^0-9.]/g,""),10)),Number.isNaN(e)&&(e=0),t.setBadge(e)};t.observe(a.badgeWrapper,s)});

