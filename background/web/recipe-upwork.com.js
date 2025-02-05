window.sidekick(e=>{let t={badge:".badge-bubble"},s=()=>{let o=Array.from(document.querySelectorAll(t.badge)).filter(g=>g.clientHeight>0).length;e.setBadge(o)};e.observe(t.badge,s)});

