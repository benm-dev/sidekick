window.sidekick(n=>{let t={messagesLink:'a[href="/im"]',messagesLinkBadge:".left_count"},a=e=>{if(!e)return 0;let s=Number.parseInt(e.innerText,10);return Number.isNaN(s)?0:s},r=()=>{let e=n.expectSelector(document,"messagesLink",t.messagesLink);if(!e)return 0;let s=e.querySelector(t.messagesLinkBadge);return s?a(s):0},o=()=>{let e=r();n.setBadge(e)};n.observe(t.messagesLinkBadge,o)});

