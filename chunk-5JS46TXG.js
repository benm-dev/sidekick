import{b as l}from"./chunk-OBPWZYQZ.js";import{f as i}from"./chunk-LGMSABOQ.js";i();var r=class{events={};allHandlers=new Set;on(e,n){return this.getEventListByName(e).add(n),()=>this.removeListener(e,n)}onSeveral(e,n){let s=e.map(t=>this.on(t,n));return()=>s.forEach(t=>t())}onAll(e){return this.allHandlers.add(e),()=>this.allHandlers.delete(e)}once(e,n){let s=(...t)=>{this.removeListener(e,s),n.call(this,...t)};return this.on(e,s)}emit(e,...n){this.allHandlers.forEach(s=>{s.call(this,e,...n)}),this.hasListeners(e)&&this.getEventListByName(e).forEach(s=>{s.call(this,...n)})}removeListener(e,n){this.hasListeners(e)&&this.getEventListByName(e).delete(n)}hasListeners(e){let n=this.events[e];return n==null?!1:Boolean(n.size)}size(){return Object.values(this.events).reduce((e,n)=>e+n.size,0)}clear(){this.events=Object.create(null)}filter(e){let n=new r;return this.onAll((...s)=>{e(...s)&&n.emit(...s)}),n}getEventListByName(e){let n=this.events[e];if(l(n))return n;let s=new Set;return this.events[e]=s,s}};export{r as a};

