var l=Object.create;var a=Object.defineProperty;var p=Object.getOwnPropertyDescriptor;var g=Object.getOwnPropertyNames;var x=Object.getPrototypeOf,y=Object.prototype.hasOwnProperty;var f=(r,t,n)=>t in r?a(r,t,{enumerable:!0,configurable:!0,writable:!0,value:n}):r[t]=n;var m=(r=>typeof require<"u"?require:typeof Proxy<"u"?new Proxy(r,{get:(t,n)=>(typeof require<"u"?require:t)[n]}):r)(function(r){if(typeof require<"u")return require.apply(this,arguments);throw new Error('Dynamic require of "'+r+'" is not supported')});var h=(r,t)=>()=>(r&&(t=r(r=0)),t);var D=(r,t)=>()=>(t||r((t={exports:{}}).exports,t),t.exports),P=(r,t)=>{for(var n in t)a(r,n,{get:t[n],enumerable:!0})},w=(r,t,n,u)=>{if(t&&typeof t=="object"||typeof t=="function")for(let o of g(t))!y.call(r,o)&&o!==n&&a(r,o,{get:()=>t[o],enumerable:!(u=p(t,o))||u.enumerable});return r};var j=(r,t,n)=>(n=r!=null?l(x(r)):{},w(t||!r||!r.__esModule?a(n,"default",{value:r,enumerable:!0}):n,r));var E=(r,t,n)=>(f(r,typeof t!="symbol"?t+"":t,n),n);var s,e=h(()=>{s={NODE_ENV:"production",SIDEKICK_API:"https://api.meetsidekick.com",SIDEKICK_APP:"https://app.meetsidekick.com",SIDEKICK_BILLING_PAGE:"https://billing.meetsidekick.com",SIDEKICK_TASKS:"https://tasks.meetsidekick.com",ENABLE_LOG:"true",SENTRY_DEBUG:"false",SENTRY_DSN:"https://2bad379634994829a0450df766bc3e9c@o263333.ingest.sentry.io/5838985",DISABLE_RETRY_DECORATOR:"",FIREHOSE_DSN:"https://fireplug.meetsidekick.com/v1",PUSHER_KEY:"ac9966a041412d05d1c8",PUSHER_CLUSTER:"us2",INTERCOM_KEY:"v22802fj",FIREBASE_API_KEY:"AIzaSyDYTW86p1_GeAGMXJ5JCmtnxTB8noQ9Ay0",FIREBASE_AUTH_DOMAIN:"sidekick-notifications-id.firebaseapp.com",FIREBASE_PROJECT_ID:"sidekick-notifications-id",FIREBASE_STORAGE_BUCKET:"sidekick-notifications-id.appspot.com",FIREBASE_MESSAGING_SENDER_ID:"695998778572",FIREBASE_APP_ID:"1:695998778572:web:b721cdfc8e5919ebd14669",FIREBASE_VAPID_KEY:"BCWBArLMp45YeERWtUG0PoLncFeUDfnKQHyblJ3hSybs57lct8AxkPqvUWYFF-kYHjdFnj3vPqjjEQZ9w99A0FY"}});e();function b(r){var t=typeof r;return r!=null&&(t=="object"||t=="function")}var C=b;e();var d=(r,t,n=!0)=>n?Object.prototype.hasOwnProperty.call(r,t):t in r;e();e();var i=class extends Error{context;constructor(t,n={}){super(t),this.name="DetailedError",this.context=n,d(Error,"captureStackTrace")&&typeof Error.captureStackTrace=="function"&&Error.captureStackTrace(this,this.constructor)}};var c=class extends i{constructor(t,n){super(t,{extra:n}),this.name="AssertionError"}};function A(r,t,n){if(!r)throw new c(t,n)}export{m as a,D as b,P as c,j as d,E as e,e as f,s as g,C as h,d as i,i as j,c as k,A as l};

