window.sidekick(t=>{let r={title:".hp-list-item-title"};(async()=>{await t.waitDocReady(),/https:\/\/paper\.dropbox\.com/.test(document.location.href)&&Array.from(document.querySelectorAll("a.hp-list-item-doc")).filter(e=>/https:\/\/paper\.dropbox\.com\/doc\/.+/.exec(e.href)).forEach(e=>{let o=e.querySelector(r.title)?.innerText;t.putResource(e.href,{title:o})})})().catch(console.error)});

