window.sidekick(u=>{let t={badge:".notion-sidebar > div:nth-child(3) > div > div:nth-child(2) > div:nth-child(2) > div > div:last-child",crawlerContentElement:"[contenteditable]",sidebar:".notion-sidebar-container"},d="LRU:KeyValueStore2:current-user-id",a=/notion\.so\/\S+\/\S+-[0-9a-f]{30,}/,r=45e3,o=u.assert,c=e=>`No element for selector: ${e}`,s=async()=>{if(!u.isLocalStorageItemExist(d)){u.setBadge(0);return}let e=await u.waitUntilElementExist(document,t.badge,r);o(!!e,c("badge"),{clearBadges:!0}),u.setBadge(Number.parseInt(e.textContent||"",10)||0)},i=e=>e.replace(/(?:[\u2700-\u27bf]|(?:\ud83c[\udde6-\uddff]){2}|[\ud800-\udbff][\udc00-\udfff]|[\u0023-\u0039]\ufe0f?\u20e3|\u3299|\u3297|\u303d|\u3030|\u24c2|\ud83c[\udd70-\udd71]|\ud83c[\udd7e-\udd7f]|\ud83c\udd8e|\ud83c[\udd91-\udd9a]|\ud83c[\udde6-\uddff]|\ud83c[\ude01-\ude02]|\ud83c\ude1a|\ud83c\ude2f|\ud83c[\ude32-\ude3a]|\ud83c[\ude50-\ude51]|\u203c|\u2049|[\u25aa-\u25ab]|\u25b6|\u25c0|[\u25fb-\u25fe]|\u00a9|\u00ae|\u2122|\u2139|\ud83c\udc04|[\u2600-\u26FF]|\u2b05|\u2b06|\u2b07|\u2b1b|\u2b1c|\u2b50|\u2b55|\u231a|\u231b|\u2328|\u23cf|[\u23e9-\u23f3]|[\u23f8-\u23fa]|\ud83c\udccf|\u2934|\u2935|[\u2190-\u21ff]|\n)/g,""),l=async()=>{u.isLocalStorageItemExist(d)&&(await u.waitDocReady(),await u.waitUntilElementExist(document,t.sidebar,r),await u.waitMS(500),Array.from(document.querySelectorAll("a")).filter(e=>a.exec(e.href)).forEach(e=>{let n=e.querySelector(t.crawlerContentElement),f=i(n?n.innerText:e.innerText);u.putResource(e.href,{title:f})}))};u.observe(`${t.sidebar}, ${t.badge}`,s),l().catch(console.error)});

