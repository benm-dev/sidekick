window.sidekick(o=>{let e={folderCount:".Folder-count",threadFromLabel:".ThreadListItem-from-label",threadItem:".ThreadListItem",threadSubject:".ThreadListItem-subject"},h=()=>{let n=document.querySelector(e.folderCount);if(!n)return;let c=n.innerText,t=c&&Number(c),r=Number.isNaN(t)?0:t;o.setBadge(r>0?r:0)},f=async()=>{await o.waitDocReady();let n=/(https:\/\/mail.superhuman.com\/[^/]+\/inbox)/,c=/ThreadListItem-([a-z0-9]{10,})/,t=document.location.href;if(!t)return;let r=n.exec(t);if(!r)return;let[,a]=r;if(!a)return;Array.from(document.querySelectorAll(e.threadItem)).forEach(s=>{let u=c.exec(s.id);if(!u)return;let[d]=u;if(!d)return;let m=s.querySelector(e.threadFromLabel);if(!m)return;let T=m.innerText,l=s.querySelector(e.threadSubject);if(!l)return;let i=l.innerText;i.length>2&&o.putResource(`${a}/${d}`,{title:`${i} -- ${T}`})})};o.observe(e.folderCount,h),f().catch(console.error)});

