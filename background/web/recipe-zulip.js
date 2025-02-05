window.sidekick(e=>{let s={filters:"#global_filters",unread:"#global_filters .home-link .count .value"},t=()=>{let l=document.querySelector(s.unread),n=Math.round(Number(l.innerText));e.setBadge(n)};e.observe(s.filters,t)});

