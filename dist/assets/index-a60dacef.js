(function(){const o=document.createElement("link").relList;if(o&&o.supports&&o.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))r(e);new MutationObserver(e=>{for(const t of e)if(t.type==="childList")for(const n of t.addedNodes)n.tagName==="LINK"&&n.rel==="modulepreload"&&r(n)}).observe(document,{childList:!0,subtree:!0});function s(e){const t={};return e.integrity&&(t.integrity=e.integrity),e.referrerPolicy&&(t.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?t.credentials="include":e.crossOrigin==="anonymous"?t.credentials="omit":t.credentials="same-origin",t}function r(e){if(e.ep)return;e.ep=!0;const t=s(e);fetch(e.href,t)}})();const c="/assets/javascript-8dac5379.svg",a="/assets/vite-4a748afd.svg";function l(i){let o=0;const s=r=>{o=r,i.innerHTML=`count is ${o}`};i.addEventListener("click",()=>s(o+1)),s(0)}const u="/assets/sass-logo-749f2ce2.png",d="_img_1if7j_1",g={img:d},f={name:"Yave Felipe",lastName:"Barrera Pico",age:21},{name:p,lastName:m,age:v}=f;document.querySelector("#app").innerHTML=`
  <div>
    <a href="https://vitejs.de-v" target="_blank">
      <img src="${a}" class="logo" alt="Vite logo" />
    </a>
    <a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript" target="_blank">
      <img src="${c}" class="logo vanilla" alt="JavaScript logo" />
    </a>
    <img id="logo-sass" src="${u}" alt="logoSass" width="200" />.
    <h1>Hello FELIPE!</h1>
    <div class="card">
      <button id="counter" type="button"></button>
    </div>
    <p class="read-the-docs">
      Click on the Vite logo to learn more
    </p>
    <p>${JSON.stringify(p)}</p>
  </div>
`;document.getElementById("logo-sass").setAttribute("class",g.img);l(document.querySelector("#counter"));
