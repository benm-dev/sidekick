var _={accountsNameFormat:"workspace",accountsType:"slack",authDomains:["app.slack.com","join.slack.com","slack.com","accounts.google.com","appleid.apple.com","edgeapi.slack.com"],hasFocusMode:!0,hasHint:!0,hasNotificationSound:!0,hostnameForSearch:"app.slack.com",id:"slack",isMessagingApp:!0,name:"Slack",onboardingGrade:68,startURL:"https://{account}.slack.com/",welcomeURL:"https://app.slack.com/client"};window.sidekick(t=>{let o={channel:'[data-qa="slack_kit_scrollbar"] .p-channel_sidebar__channel',clearStatusNeverItem:"#custom_status_duration_default_option_1",closePopupButton:'[data-qa="sk_close_modal_button"]',customStatusInput:'[data-qa="custom_status_input_body"] [contenteditable]',expandClearStatusButton:"#custom_status_duration_default_button",fastSetCustomStatusButton:'[aria-label="Update your status"]',menu:'[data-qa="menu"]',setCustomStatusButton:'[data-qa="main-menu-custom-status-item"]',submitStatusButton:'[data-qa="custom_status_input_go"]',teamIcon:".c-team_icon",teamMenuTrigger:"[data-qa='team-menu-trigger']",title:"head title",unreadChats:'[data-qa="slack_kit_scrollbar"] .p-channel_sidebar__channel--unread[data-qa-channel-sidebar-channel-is-muted="false"]',userButton:'[data-qa="user-button"]',workspaceTextId:"#team-blurb-text"},f="ia_slackbot_survey_sent",b=/(\d+)/,h=/(https:\/\/app.slack.com\/client\/[^/]+\/)/,p=45e3,r=e=>`No element for selector ${e}`,c=t.assert,S=0,E=async()=>Promise.race([new Promise(e=>requestAnimationFrame(()=>e(!1))),new Promise(e=>setTimeout(()=>e(!0),100))]),y=async()=>{if(!t.isLocalStorageItemExist(f)){t.setBadge(0);return}if(!h.exec(window.location.href)){t.setBadge(0);return}if(document.documentElement.dataset.appNameOverride!=="client")return;if(await E()){let u=b.exec(document.title);S=u?.[1]&&parseInt(u[1],10)||0,t.setBadge(S);return}let s=document.querySelectorAll(o.unreadChats);t.setBadge(s.length)},g=!1;document.addEventListener("focusin",()=>{g=!0}),document.addEventListener("focusout",()=>{g=!1});let T=async()=>{if(!t.isLocalStorageItemExist(f))return;let e=()=>{let n=document.querySelector(o.teamIcon);c(!!n,r(o.teamIcon));let a=n.style.backgroundImage;if(!a)return null;let i=a.split(/"/);return i[0]!=="url("||!i[1]?null:i[1]},s=()=>{let n=document.querySelector(o.workspaceTextId);c(!!n,r(o.workspaceTextId));let a=n.innerText;return a.endsWith(".slack.com")?a.replace(".slack.com",""):null},u=()=>{if(!document.querySelector(o.menu))return null;let a=e(),i=s();return!a||!i?null:{account:i,avatar:a,isCurrent:!0}},d=async()=>{let n=await t.waitUntilElementExist(document,o.teamMenuTrigger,p);c(!!n,r("teamMenuTrigger"),{extra:{url:document.URL,windowWidth:window.innerWidth}}),n.click(),await t.waitMS(20);let a=u();return n.click(),a};if(await E()||g)return;let l=await d();l&&t.setAccounts([l])},m=null,x=async({text:e,requestedAt:s,force:u=!1,dontClearStatus:d=!1})=>{if(!u&&window.localStorage.getItem("sidekick.last_status_text")===e)return!1;let w=document.querySelector(o.fastSetCustomStatusButton);if(w)w.click();else{let a=await t.waitUntilElementExist(document,o.userButton,p);if(c(!!a,r("userButton")),m!==s)return!1;a.click();let i=await t.waitUntilElementExist(document,o.setCustomStatusButton,p);if(c(!!i,r("setCustomStatusButton")),m!==s)return!1;i.click()}let l=await t.waitUntilElementExist(document,o.customStatusInput,p);if(c(!!l,r("customStatusInput")),m!==s||l.innerText&&l.innerText===e){let a=document.querySelector(o.closePopupButton);return c(!!a,r("closePopupButton")),a.click(),u&&window.localStorage.setItem("sidekick.last_auto_sync_at",JSON.stringify(Date.now())),!1}if(l.innerHTML=e,l?.dispatchEvent(new window.Event("input",{bubbles:!0,cancelable:!0})),await t.waitMS(20),m!==s)return!1;if(d){let a=await t.waitUntilElementExist(document,o.expandClearStatusButton,p);c(!!a,r("expandClearStatusButton")),a.click();let i=await t.waitUntilElementExist(document,o.clearStatusNeverItem,p);c(!!i,r("clearStatusNeverItem")),i.click()}let n=await t.waitUntilElementExist(document,o.submitStatusButton,p);return c(!!n,r("submitStatusButton")),m!==s?!1:(n.click(),window.localStorage.setItem("sidekick.last_status_text",e),!0)},I=async()=>{if(!t.isLocalStorageItemExist(f))return;await t.waitDocReady();let e=document.location.href;if(!e)return;let u=/(https:\/\/app.slack.com\/client\/[^/]+\/)/.exec(e);if(!u)return;let[d]=u;if(!d)return;let w=await t.waitUntilElementExist(document,"[data-qa-channel-sidebar-channel-id]",p);c(!!w,r("qa-channel-sidebar"),{extra:{url:document.URL,windowWidth:window.innerWidth}}),Array.from(document.querySelectorAll("[data-qa-channel-sidebar-channel-id]")).forEach(l=>{let n=l.dataset.qaChannelSidebarChannelId;if(!n)return;let a=l.querySelector("span.p-channel_sidebar__name");c(!!a,r("p-channel_sidebar__name")),t.putResource(`${d}${n}`,{title:a.innerText})})};t.observe(`${o.title}, ${o.channel}`,y),T().catch(console.error),I().catch(console.error),t.subscribeFocusMode(async e=>{if(!t.isLocalStorageItemExist(f))return;let s=Date.now();if(m=s,await t.waitDocReady(),s!==m||e.shouldBeSilent&&(await t.waitPageWillBeHidden(),s!==m||(await t.waitPageWillBeVisible(),s!==m)))return;let u=Number(window.localStorage.getItem("sidekick.last_auto_sync_at")||""),d=n=>n/864e5,w=e.runEveryDays&&d(Date.now()-u)>e.runEveryDays;await x({dontClearStatus:Boolean(e.dontClearStatus),force:!!w,requestedAt:s,text:`${e.enabled?"Focus mode":"Available"} (via Sidekick Browser)`})&&(t.triggerAnalyticEvent("content-script.focus-mode-changed",{"is-focus-mode-set":e.enabled,"recipe-id":_.id}),w&&window.localStorage.setItem("sidekick.last_auto_sync_at",JSON.stringify(Date.now())))})});

