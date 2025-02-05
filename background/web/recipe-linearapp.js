window.sidekick(e=>{let s={direct:"a[href$='inbox'] > span > div > div",inboxDiv:"a[href$='inbox'] > span > div"},t=()=>{let o=document.querySelector(s.direct);o?e.setBadge(parseFloat(o.innerText)):e.setBadge(0)};e.observe(s.inboxDiv,t),e.observe(s.direct,t)});

