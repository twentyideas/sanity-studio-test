import{u as d,j as a,r as p,Q as h,R as m,a as y,b as v}from"./vendor.74f02920.js";const A=function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const r of document.querySelectorAll('link[rel="modulepreload"]'))i(r);new MutationObserver(r=>{for(const n of r)if(n.type==="childList")for(const c of n.addedNodes)c.tagName==="LINK"&&c.rel==="modulepreload"&&i(c)}).observe(document,{childList:!0,subtree:!0});function s(r){const n={};return r.integrity&&(n.integrity=r.integrity),r.referrerpolicy&&(n.referrerPolicy=r.referrerpolicy),r.crossorigin==="use-credentials"?n.credentials="include":r.crossorigin==="anonymous"?n.credentials="omit":n.credentials="same-origin",n}function i(r){if(r.ep)return;r.ep=!0;const n=s(r);fetch(r.href,n)}};A();function u(e,t){return async()=>{const i=await(await fetch("https://xvjsnqg9.api.sanity.io/v1/graphql/production/default",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({query:e,variables:t})})).json();if(i.errors){const{message:r}=i.errors[0];throw new Error(r)}return i.data}}var f;(function(e){e.Asc="ASC",e.Desc="DESC"})(f||(f={}));const g=`
    query AllMovies {
  allMovie {
    title
    _id
  }
}
    `,j=(e,t)=>d(e===void 0?["AllMovies"]:["AllMovies",e],u(g,e),t),x=`
    query AllPersons {
  allPerson {
    name
    _id
  }
}
    `,M=(e,t)=>d(e===void 0?["AllPersons"]:["AllPersons",e],u(x,e),t);const o=a.exports.jsx,l=a.exports.jsxs;function P(){p.exports.useState(0);const{data:e}=j(),{data:t}=M();return l("div",{className:"App",children:[o("header",{className:"App-header",children:o("p",{children:"Hello Sanity Test"})}),l("div",{children:[o("a",{href:"https://xvjsnqg9.sanity.studio/",target:"_blank",rel:"noopener noreferrer",children:"Edit me!"}),l("div",{children:[o("h2",{children:"Movies:"}),e==null?void 0:e.allMovie.map(s=>o("div",{children:s.title},s._id))]}),l("div",{children:[o("h2",{children:"More:"}),t==null?void 0:t.allPerson.map(s=>o("div",{children:s.name},s._id))]})]})]})}const S=new h;m.render(o(y.StrictMode,{children:o(v,{client:S,children:o(P,{})})}),document.getElementById("root"));
