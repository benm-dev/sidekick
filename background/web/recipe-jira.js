window.sidekick(t=>{let e={badge:'#notificationsGlobalItem div[data-test-selector="NotificationIndicator"] span',notifications:"#notificationsGlobalItem"},n=()=>{let o=document.querySelector(e.badge),s=o?parseInt(o.innerText,10):0;t.setBadge(s)};t.observe(e.notifications,n)});

