import{u as a,j as d,r as h,Q as m,c as y,p as v,R as g,a as A,b as j}from"./vendor.7ad75386.js";const P=function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const r of document.querySelectorAll('link[rel="modulepreload"]'))i(r);new MutationObserver(r=>{for(const o of r)if(o.type==="childList")for(const c of o.addedNodes)c.tagName==="LINK"&&c.rel==="modulepreload"&&i(c)}).observe(document,{childList:!0,subtree:!0});function n(r){const o={};return r.integrity&&(o.integrity=r.integrity),r.referrerpolicy&&(o.referrerPolicy=r.referrerpolicy),r.crossorigin==="use-credentials"?o.credentials="include":r.crossorigin==="anonymous"?o.credentials="omit":o.credentials="same-origin",o}function i(r){if(r.ep)return;r.ep=!0;const o=n(r);fetch(r.href,o)}};P();function u(e,t){return async()=>{const i=await(await fetch("https://xvjsnqg9.api.sanity.io/v1/graphql/production/default",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({query:e,variables:t})})).json();if(i.errors){const{message:r}=i.errors[0];throw new Error(r)}return i.data}}var p;(function(e){e.Asc="ASC",e.Desc="DESC"})(p||(p={}));const x=`
    query AllMovies {
  allMovie {
    title
    _id
  }
}
    `,M=(e,t)=>a(e===void 0?["AllMovies"]:["AllMovies",e],u(x,e),t),S=`
    query AllPersons {
  allPerson {
    name
    _id
  }
}
    `,q=(e,t)=>a(e===void 0?["AllPersons"]:["AllPersons",e],u(S,e),t);const s=d.exports.jsx,l=d.exports.jsxs;function w(){h.exports.useState(0);const{data:e}=M(),{data:t}=q();return l("div",{className:"App",children:[s("header",{className:"App-header",children:s("p",{children:"Hello Sanity Test"})}),l("div",{children:[s("a",{href:"https://xvjsnqg9.sanity.studio/",target:"_blank",rel:"noopener noreferrer",children:"Edit me!"}),l("div",{children:[s("h2",{children:"Movies:"}),e==null?void 0:e.allMovie.map(n=>s("div",{children:n.title},n._id))]}),l("div",{children:[s("h2",{children:"More:"}),t==null?void 0:t.allPerson.map(n=>s("div",{children:n.name},n._id))]})]})]})}const f=new m({defaultOptions:{queries:{cacheTime:1e3*60*60*24}}}),O=y({storage:window.localStorage});v({queryClient:f,persistor:O});g.render(s(A.StrictMode,{children:s(j,{client:f,children:s(w,{})})}),document.getElementById("root"));
