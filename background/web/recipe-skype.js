window.sidekick(d=>{let h={allChats:"body > div.app-container > div > div > div:nth-child(1) > div.css-1dbjc4n.r-13awgt0 > div > div > div:nth-child(1) > div > div:nth-child(1) > div:nth-child(3) > div:nth-child(1) > div:nth-child(3) > div:nth-child(2) > div:nth-child(1) > div > div.scrollViewport.scrollViewportV > div > div",closeButton:".app-container .css-1dbjc4n.r-13awgt0 > div > div > div:nth-child(1) > div > div:nth-child(1) > div:nth-child(2) > div:nth-child(2) > div > div:nth-child(1) > div:nth-child(1) > div:nth-child(2) > div:nth-child(2) > button",customStatusInput:['input[aria-label="Edit mood message"]',".app-container > div > div:nth-child(2) > div > div > div.reactxp-ignore-pointer-events > div > div > div > div > div > div > div > div:nth-child(2) > div:nth-child(2) > div:nth-child(1) > div:nth-child(2) > input[type=text]",".app-container > div > div:nth-child(1) > div:nth-child(2) > div > div > div:nth-child(2) > div:nth-child(3) > div > div > div > div > div:nth-child(2) > div:nth-child(2) > div:nth-child(1) > div:nth-child(2) > input[type=text]",".app-container > div > div:nth-child(1) > div:nth-child(2) > div > div > div:nth-child(2) > div > div > div > div > div:nth-child(2) > div:nth-child(2) > div:nth-child(1) > div:nth-child(2) > input[type=text]"],firstTab:"[role='tablist'] > [role='tab']",searchButton:".app-container .css-1dbjc4n.r-13awgt0 > div > div > div:nth-child(1) > div > div:nth-child(1) > div:nth-child(2) > div > div > div > button",searchGroupContacts:".app-container .css-1dbjc4n.r-13awgt0 > div > div > div:nth-child(1) > div > div:nth-child(1) > div:nth-child(2) > div:nth-child(2) > div > div:nth-child(2) > div > div > div.scrollViewport.scrollViewportV > div > div > div:nth-child(1)",searchInput:".app-container .css-1dbjc4n.r-13awgt0 > div > div > div:nth-child(1) > div > div:nth-child(1) > div:nth-child(2) > div:nth-child(2) > div > div:nth-child(1) > div:nth-child(1) > div:nth-child(2) > div:nth-child(1) > div > div > div > input[type=text]",searchResults:".app-container .css-1dbjc4n.r-13awgt0 > div > div > div:nth-child(1) > div > div:nth-child(1) > div:nth-child(2) > div:nth-child(2) > div > div:nth-child(2) > div > div > div.scrollViewport.scrollViewportV > div > div > div:nth-child(1) > div:nth-child(3)",setStatusButton:['button[aria-label="Set a status"]','button[aria-label^="Mood message: "]',".app-container > div > div:nth-child(1) > div:nth-child(2) > div > div:nth-child(1) > div > div:nth-child(1) > div:nth-child(1) > div:nth-child(2) > div > button",".app-container > div > div:nth-child(1) > div:nth-child(2) > div > div > div > div > div > div:nth-child(1) > div:nth-child(2) > div > button"],submitStatusButton:['button[aria-label="Done"]',".app-container > div > div:nth-child(2) > div > div > div.reactxp-ignore-pointer-events > div > div > div > div > div > div > div > div:nth-child(1) > div:nth-child(3) > button",".app-container > div > div:nth-child(1) > div:nth-child(2) > div > div > div:nth-child(2) > div:nth-child(3) > div > div > div > div > div:nth-child(1) > div:nth-child(3) > button",".app-container > div > div:nth-child(1) > div:nth-child(2) > div > div > div:nth-child(2) > div > div > div > div > div:nth-child(1) > div:nth-child(3) > button"],tablist:"[role='tablist']"},a="skypexSkypeId",o=0,s=14e3,v=t=>`No element for selector ${t}`,l=d.assert,r=(t,e)=>{e(t);let i=t.firstElementChild;for(;i;)r(i,e),i=i.nextElementSibling},m=t=>{let e=[];return r(t,i=>{let{textContent:c}=i;c&&e.push(c);let n=i.dataset.textAsPseudoElement;n&&e.push(n)}),e},E=t=>/^\s*\d+\s*$/.test(t),y=t=>{if(!t)return o;let e=Number.parseInt(t,10);return Number.isNaN(e)?o:e},g=()=>{let t=document.querySelector(h.firstTab);if(!t)return o;let i=m(t).find(E);return y(i)},f=()=>{d.isLocalStorageItemExist(a)&&d.setBadge(g())},u="#sidekick_",p=async()=>{if(!d.isLocalStorageItemExist(a))return;await d.waitDocReady();let t=await d.waitUntilElementExist(document,h.allChats,s);l(!!t,v("allChats")),await d.waitMS(50),Array.from(t.querySelectorAll('[role="button"]')).forEach(i=>{let c=i.ariaLabel;if(!c)return;let n=c.split(",")[0];n&&d.putResource(`https://web.skype.com/${u}${encodeURIComponent(n)}`,{title:n})})},L=t=>new Promise(e=>{let i=d.observe(h.searchGroupContacts,()=>{let c=document.querySelector(h.searchResults);if(!c)return;let n=c?.ariaLabel;!n||!n.startsWith(t)||(i(),e(c))})}),b=async()=>{await d.waitDocReady();let t=document.location.hash,i=decodeURIComponent(t).split(u)[1];if(!i)return;let c=await d.waitUntilElementExist(document,h.searchButton,s);l(!!c,v("searchButton")),c.click(),await d.waitMS(200);let n=document.querySelector(h.searchInput);l(!!n,v("input")),n.value=i,await d.waitMS(200),n.dispatchEvent(new window.Event("input",{bubbles:!0,cancelable:!0})),await L(i),n.dispatchEvent(new window.KeyboardEvent("keydown",{bubbles:!0,cancelable:!0,code:"Enter",key:"Enter",keyCode:13})),n.dispatchEvent(new window.KeyboardEvent("keydown",{bubbles:!0,cancelable:!0,code:"Enter",key:"Enter",keyCode:13})),await d.waitMS(50);let w=document.querySelector(h.closeButton);l(!!w,v("closeButton")),w.click()};b().catch(console.error),window.addEventListener("hashchange",()=>{b().catch(console.error)}),p().catch(console.error),d.observe(h.allChats,p),d.observe(h.tablist,f)});

