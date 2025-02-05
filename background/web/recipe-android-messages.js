window.sidekick(e=>{let s={unread:".text-content.unread"},n=()=>{let t=Array.from(document.querySelectorAll(s.unread)).length;e.setBadge(t)};e.observe(s.unread,n)});

