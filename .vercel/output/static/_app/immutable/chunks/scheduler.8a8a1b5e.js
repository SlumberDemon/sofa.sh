function k(){}const A=t=>t;function w(t,n){for(const e in n)t[e]=n[e];return t}function B(t){return!!t&&(typeof t=="object"||typeof t=="function")&&typeof t.then=="function"}function j(t){return t()}function C(){return Object.create(null)}function E(t){t.forEach(j)}function P(t){return typeof t=="function"}function S(t,n){return t!=t?n==n:t!==n||t&&typeof t=="object"||typeof t=="function"}let f;function U(t,n){return t===n?!0:(f||(f=document.createElement("a")),f.href=n,t===f.href)}function D(t){return Object.keys(t).length===0}function q(t,...n){if(t==null){for(const o of n)o(void 0);return k}const e=t.subscribe(...n);return e.unsubscribe?()=>e.unsubscribe():e}function G(t,n,e){t.$$.on_destroy.push(q(n,e))}function H(t,n,e,o){if(t){const r=y(t,n,e,o);return t[0](r)}}function y(t,n,e,o){return t[1]&&o?w(e.ctx.slice(),t[1](o(n))):e.ctx}function I(t,n,e,o){if(t[2]&&o){const r=t[2](o(e));if(n.dirty===void 0)return r;if(typeof r=="object"){const a=[],_=Math.max(n.dirty.length,r.length);for(let u=0;u<_;u+=1)a[u]=n.dirty[u]|r[u];return a}return n.dirty|r}return n.dirty}function J(t,n,e,o,r,a){if(r){const _=y(n,e,o,a);t.p(_,r)}}function K(t){if(t.ctx.length>32){const n=[],e=t.ctx.length/32;for(let o=0;o<e;o++)n[o]=-1;return n}return-1}function L(t){const n=typeof t=="string"&&t.match(/^\s*(-?[\d.]+)([^\s]*)\s*$/);return n?[parseFloat(n[1]),n[2]||"px"]:[t,"px"]}let l;function h(t){l=t}function m(){if(!l)throw new Error("Function called outside component initialization");return l}function N(t){m().$$.on_mount.push(t)}function Q(t){m().$$.after_update.push(t)}const i=[],b=[];let s=[];const g=[],x=Promise.resolve();let p=!1;function O(){p||(p=!0,x.then(F))}function R(){return O(),x}function z(t){s.push(t)}const d=new Set;let c=0;function F(){if(c!==0)return;const t=l;do{try{for(;c<i.length;){const n=i[c];c++,h(n),M(n.$$)}}catch(n){throw i.length=0,c=0,n}for(h(null),i.length=0,c=0;b.length;)b.pop()();for(let n=0;n<s.length;n+=1){const e=s[n];d.has(e)||(d.add(e),e())}s.length=0}while(i.length);for(;g.length;)g.pop()();p=!1,d.clear(),h(t)}function M(t){if(t.fragment!==null){t.update(),E(t.before_update);const n=t.dirty;t.dirty=[-1],t.fragment&&t.fragment.p(t.ctx,n),t.after_update.forEach(z)}}function T(t){const n=[],e=[];s.forEach(o=>t.indexOf(o)===-1?n.push(o):e.push(o)),e.forEach(o=>o()),s=n}export{j as A,i as B,O as C,Q as a,b,H as c,I as d,G as e,z as f,K as g,m as h,B as i,h as j,F as k,w as l,L as m,k as n,N as o,U as p,P as q,E as r,S as s,R as t,J as u,A as v,C as w,D as x,T as y,l as z};
