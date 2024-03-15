var G=Object.defineProperty;var R=(t,e,n)=>e in t?G(t,e,{enumerable:!0,configurable:!0,writable:!0,value:n}):t[e]=n;var f=(t,e,n)=>(R(t,typeof e!="symbol"?e+"":e,n),n);function j(){}function z(t,e){for(const n in e)t[n]=e[n];return t}function F(t){return t()}function ot(){return Object.create(null)}function I(t){t.forEach(F)}function U(t){return typeof t=="function"}function at(t,e){return t!=t?e==e:t!==e||t&&typeof t=="object"||typeof t=="function"}function ut(t){return Object.keys(t).length===0}function L(t,...e){if(t==null){for(const i of e)i(void 0);return j}const n=t.subscribe(...e);return n.unsubscribe?()=>n.unsubscribe():n}function ft(t){let e;return L(t,n=>e=n)(),e}function _t(t,e,n){t.$$.on_destroy.push(L(e,n))}function ht(t,e,n,i){if(t){const s=M(t,e,n,i);return t[0](s)}}function M(t,e,n,i){return t[1]&&i?z(n.ctx.slice(),t[1](i(e))):n.ctx}function dt(t,e,n,i){if(t[2]&&i){const s=t[2](i(n));if(e.dirty===void 0)return s;if(typeof s=="object"){const r=[],c=Math.max(e.dirty.length,s.length);for(let o=0;o<c;o+=1)r[o]=e.dirty[o]|s[o];return r}return e.dirty|s}return e.dirty}function mt(t,e,n,i,s,r){if(s){const c=M(e,n,i,r);t.p(c,s)}}function pt(t){if(t.ctx.length>32){const e=[],n=t.ctx.length/32;for(let i=0;i<n;i++)e[i]=-1;return e}return-1}function yt(t){const e={};for(const n in t)n[0]!=="$"&&(e[n]=t[n]);return e}function bt(t,e){const n={};e=new Set(e);for(const i in t)!e.has(i)&&i[0]!=="$"&&(n[i]=t[i]);return n}function gt(t){return t&&U(t.destroy)?t.destroy:j}let p=!1;function xt(){p=!0}function Et(){p=!1}function W(t,e,n,i){for(;t<e;){const s=t+(e-t>>1);n(s)<=i?t=s+1:e=s}return t}function J(t){if(t.hydrate_init)return;t.hydrate_init=!0;let e=t.childNodes;if(t.nodeName==="HEAD"){const l=[];for(let a=0;a<e.length;a++){const u=e[a];u.claim_order!==void 0&&l.push(u)}e=l}const n=new Int32Array(e.length+1),i=new Int32Array(e.length);n[0]=-1;let s=0;for(let l=0;l<e.length;l++){const a=e[l].claim_order,u=(s>0&&e[n[s]].claim_order<=a?s+1:W(1,s,q=>e[n[q]].claim_order,a))-1;i[l]=n[u]+1;const A=u+1;n[A]=l,s=Math.max(A,s)}const r=[],c=[];let o=e.length-1;for(let l=n[s]+1;l!=0;l=i[l-1]){for(r.push(e[l-1]);o>=l;o--)c.push(e[o]);o--}for(;o>=0;o--)c.push(e[o]);r.reverse(),c.sort((l,a)=>l.claim_order-a.claim_order);for(let l=0,a=0;l<c.length;l++){for(;a<r.length&&c[l].claim_order>=r[a].claim_order;)a++;const u=a<r.length?r[a]:null;t.insertBefore(c[l],u)}}function K(t,e){if(p){for(J(t),(t.actual_end_child===void 0||t.actual_end_child!==null&&t.actual_end_child.parentNode!==t)&&(t.actual_end_child=t.firstChild);t.actual_end_child!==null&&t.actual_end_child.claim_order===void 0;)t.actual_end_child=t.actual_end_child.nextSibling;e!==t.actual_end_child?(e.claim_order!==void 0||e.parentNode!==t)&&t.insertBefore(e,t.actual_end_child):t.actual_end_child=e.nextSibling}else(e.parentNode!==t||e.nextSibling!==null)&&t.appendChild(e)}function Q(t,e,n){t.insertBefore(e,n||null)}function V(t,e,n){p&&!n?K(t,e):(e.parentNode!==t||e.nextSibling!=n)&&t.insertBefore(e,n||null)}function E(t){t.parentNode&&t.parentNode.removeChild(t)}function wt(t,e){for(let n=0;n<t.length;n+=1)t[n]&&t[n].d(e)}function S(t){return document.createElement(t)}function C(t){return document.createElementNS("http://www.w3.org/2000/svg",t)}function v(t){return document.createTextNode(t)}function Tt(){return v(" ")}function vt(){return v("")}function Nt(t,e,n,i){return t.addEventListener(e,n,i),()=>t.removeEventListener(e,n,i)}function N(t,e,n){n==null?t.removeAttribute(e):t.getAttribute(e)!==n&&t.setAttribute(e,n)}const X=["width","height"];function Y(t,e){const n=Object.getOwnPropertyDescriptors(t.__proto__);for(const i in e)e[i]==null?t.removeAttribute(i):i==="style"?t.style.cssText=e[i]:i==="__value"?t.value=t[i]=e[i]:n[i]&&n[i].set&&X.indexOf(i)===-1?t[i]=e[i]:N(t,i,e[i])}function At(t,e){for(const n in e)N(t,n,e[n])}function Z(t,e){Object.keys(e).forEach(n=>{$(t,n,e[n])})}function $(t,e,n){const i=e.toLowerCase();i in t?t[i]=typeof t[i]=="boolean"&&n===""?!0:n:e in t?t[e]=typeof t[e]=="boolean"&&n===""?!0:n:N(t,e,n)}function kt(t){return/-/.test(t)?Z:Y}function Ht(t){return t.dataset.svelteH}function jt(t){return Array.from(t.childNodes)}function P(t){t.claim_info===void 0&&(t.claim_info={last_index:0,total_claimed:0})}function D(t,e,n,i,s=!1){P(t);const r=(()=>{for(let c=t.claim_info.last_index;c<t.length;c++){const o=t[c];if(e(o)){const l=n(o);return l===void 0?t.splice(c,1):t[c]=l,s||(t.claim_info.last_index=c),o}}for(let c=t.claim_info.last_index-1;c>=0;c--){const o=t[c];if(e(o)){const l=n(o);return l===void 0?t.splice(c,1):t[c]=l,s?l===void 0&&t.claim_info.last_index--:t.claim_info.last_index=c,o}}return i()})();return r.claim_order=t.claim_info.total_claimed,t.claim_info.total_claimed+=1,r}function O(t,e,n,i){return D(t,s=>s.nodeName===e,s=>{const r=[];for(let c=0;c<s.attributes.length;c++){const o=s.attributes[c];n[o.name]||r.push(o.name)}r.forEach(c=>s.removeAttribute(c))},()=>i(e))}function Lt(t,e,n){return O(t,e,n,S)}function Mt(t,e,n){return O(t,e,n,C)}function tt(t,e){return D(t,n=>n.nodeType===3,n=>{const i=""+e;if(n.data.startsWith(i)){if(n.data.length!==i.length)return n.splitText(i.length)}else n.data=i},()=>v(e),!0)}function St(t){return tt(t," ")}function k(t,e,n){for(let i=n;i<t.length;i+=1){const s=t[i];if(s.nodeType===8&&s.textContent.trim()===e)return i}return-1}function Ct(t,e){const n=k(t,"HTML_TAG_START",0),i=k(t,"HTML_TAG_END",n+1);if(n===-1||i===-1)return new b(e);P(t);const s=t.splice(n,i-n+1);E(s[0]),E(s[s.length-1]);const r=s.slice(1,s.length-1);if(r.length===0)return new b(e);for(const c of r)c.claim_order=t.claim_info.total_claimed,t.claim_info.total_claimed+=1;return new b(e,r)}function Pt(t,e){e=""+e,t.data!==e&&(t.data=e)}function Dt(t,e,n,i){n==null?t.style.removeProperty(e):t.style.setProperty(e,n,i?"important":"")}function et(t,e,{bubbles:n=!1,cancelable:i=!1}={}){return new CustomEvent(t,{detail:e,bubbles:n,cancelable:i})}function Ot(t,e){const n=[];let i=0;for(const s of e.childNodes)if(s.nodeType===8){const r=s.textContent.trim();r===`HEAD_${t}_END`?(i-=1,n.push(s)):r===`HEAD_${t}_START`&&(i+=1,n.push(s))}else i>0&&n.push(s);return n}class nt{constructor(e=!1){f(this,"is_svg",!1);f(this,"e");f(this,"n");f(this,"t");f(this,"a");this.is_svg=e,this.e=this.n=null}c(e){this.h(e)}m(e,n,i=null){this.e||(this.is_svg?this.e=C(n.nodeName):this.e=S(n.nodeType===11?"TEMPLATE":n.nodeName),this.t=n.tagName!=="TEMPLATE"?n:n.content,this.c(e)),this.i(i)}h(e){this.e.innerHTML=e,this.n=Array.from(this.e.nodeName==="TEMPLATE"?this.e.content.childNodes:this.e.childNodes)}i(e){for(let n=0;n<this.n.length;n+=1)Q(this.t,this.n[n],e)}p(e){this.d(),this.h(e),this.i(this.a)}d(){this.n.forEach(E)}}class b extends nt{constructor(n=!1,i){super(n);f(this,"l");this.e=this.n=null,this.l=i}c(n){this.l?this.n=this.l:super.c(n)}i(n){for(let i=0;i<this.n.length;i+=1)V(this.t,this.n[i],n)}}function Bt(t,e){return new t(e)}let m;function g(t){m=t}function y(){if(!m)throw new Error("Function called outside component initialization");return m}function qt(t){y().$$.on_mount.push(t)}function Gt(t){y().$$.after_update.push(t)}function Rt(){const t=y();return(e,n,{cancelable:i=!1}={})=>{const s=t.$$.callbacks[e];if(s){const r=et(e,n,{cancelable:i});return s.slice().forEach(c=>{c.call(t,r)}),!r.defaultPrevented}return!0}}function zt(t){return y().$$.context.get(t)}function Ft(t,e){const n=t.$$.callbacks[e.type];n&&n.slice().forEach(i=>i.call(this,e))}const d=[],H=[];let h=[];const w=[],B=Promise.resolve();let T=!1;function it(){T||(T=!0,B.then(ct))}function It(){return it(),B}function st(t){h.push(t)}function Ut(t){w.push(t)}const x=new Set;let _=0;function ct(){if(_!==0)return;const t=m;do{try{for(;_<d.length;){const e=d[_];_++,g(e),lt(e.$$)}}catch(e){throw d.length=0,_=0,e}for(g(null),d.length=0,_=0;H.length;)H.pop()();for(let e=0;e<h.length;e+=1){const n=h[e];x.has(n)||(x.add(n),n())}h.length=0}while(d.length);for(;w.length;)w.pop()();T=!1,x.clear(),g(t)}function lt(t){if(t.fragment!==null){t.update(),I(t.before_update);const e=t.dirty;t.dirty=[-1],t.fragment&&t.fragment.p(t.ctx,e),t.after_update.forEach(st)}}function Wt(t){const e=[],n=[];h.forEach(i=>t.indexOf(i)===-1?e.push(i):n.push(i)),n.forEach(i=>i()),h=e}export{mt as $,It as A,ot as B,ct as C,ut as D,st as E,Wt as F,m as G,b as H,g as I,F as J,d as K,it as L,xt as M,Et as N,ft as O,Ot as P,bt as Q,zt as R,z as S,yt as T,Ft as U,C as V,Mt as W,At as X,Nt as Y,ht as Z,kt as _,at as a,pt as a0,dt as a1,gt as a2,Y as a3,Rt as a4,wt as a5,Ut as a6,V as b,tt as c,E as d,S as e,Tt as f,Lt as g,Ht as h,U as i,St as j,jt as k,Ct as l,N as m,j as n,K as o,Pt as p,_t as q,I as r,L as s,v as t,vt as u,Gt as v,qt as w,Dt as x,H as y,Bt as z};
