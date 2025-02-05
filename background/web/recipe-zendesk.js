window.sidekick(e=>{let o={topPanel:".dashboard-top-panel",unread:".dashboard-top-panel .indicators .stats-group .cell-value"},n=()=>{let t=0,a=document.querySelector(o.unread);a&&(t=parseInt(a.innerHTML,10)),e.setBadge(t)};e.observe(o.topPanel,n)});

