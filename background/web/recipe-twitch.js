window.sidekick(e=>{let n={chatUnread:".chat-line .mentioned",unread:".mentioned"},t=()=>{let o=document.querySelectorAll(n.chatUnread).length;e.setBadge(o)};e.observe(n.unread,t)});

