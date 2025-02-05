window.sidekick(e=>{let n={unread:".msg-unread-count"},o=()=>{let s=document.querySelectorAll(n.unread),t=0;s[0]&&(t=parseInt(s[0].innerHTML,10)),e.setBadge(t)};e.observe(n.unread,o)});

