import{s as o,o as a}from"./scheduler.8a8a1b5e.js";import{S as s,i as n}from"./index.a9c7f32e.js";function l(e){return a(async()=>{localStorage.theme===void 0?window.matchMedia&&window.matchMedia("(prefers-color-scheme: dark)").matches?document.documentElement.classList.add("dark"):document.documentElement.classList.remove("dark"):localStorage.theme==="light"?(document.documentElement.classList.remove("dark"),localStorage.theme="light"):(document.documentElement.classList.add("dark"),localStorage.theme="dark")}),[]}class r extends s{constructor(t){super(),n(this,t,l,null,o,{})}}export{r as C};