var r="__sidekick_scripts",t=class{register(p){this.getScriptMap().set(p.scriptName,p)}getScriptMap(){let p=globalThis[r];if(p)return p;let i=new Map;return globalThis[r]=i,i}},c=new t;export{c as scriptsRegister};

