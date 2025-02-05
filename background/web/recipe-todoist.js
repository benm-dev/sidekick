window.sidekick(e=>{let n={badge:".counter",inbox:"#filter_inbox .item_counter"},i=()=>{let o=0,t=document.querySelector(n.inbox);t&&(o=parseInt(t.innerHTML,10)),e.setBadge(o)};e.observe(n.badge,i)});

