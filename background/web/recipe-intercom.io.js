window.sidekick(e=>{let o={home:"o__home",inboxUnread:".unread"},t="product_store_identifier",a=()=>{let r=0,d=e.expectSelectorAll(document,"inboxUnread",o.inboxUnread);return Array.from(d).filter(n=>!n.classList.contains(o.home)).forEach(n=>{r+=parseFloat(n.innerText)}),r},s=()=>{e.isCookieExist(t)&&e.setBadge(a())};e.observe(o.inboxUnread,s)});

