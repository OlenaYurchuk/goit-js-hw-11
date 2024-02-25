import{S as p,i as d}from"./assets/vendor-7659544d.js";(function(){const r=document.createElement("link").relList;if(r&&r.supports&&r.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))l(e);new MutationObserver(e=>{for(const t of e)if(t.type==="childList")for(const a of t.addedNodes)a.tagName==="LINK"&&a.rel==="modulepreload"&&l(a)}).observe(document,{childList:!0,subtree:!0});function s(e){const t={};return e.integrity&&(t.integrity=e.integrity),e.referrerPolicy&&(t.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?t.credentials="include":e.crossOrigin==="anonymous"?t.credentials="omit":t.credentials="same-origin",t}function l(e){if(e.ep)return;e.ep=!0;const t=s(e);fetch(e.href,t)}})();const h="42222554-b2624bd1f455ca6190f2bf509",c=document.querySelector(".gallery");function g(o){const r=o.map(s=>`<li class="gallery-item">
             <div class="card-top">
            <a class="card-link" href="${s.largeImageURL}">
                <img class="card-image" src="${s.webformatURL}" alt="${s.tags}">
            </a>
        </div>
        <div class="card-bottom">
            <p class="card-likes">Likes <span class="card-value">${s.likes}</span></p>
            <p class="card-views">Views <span class="card-value">${s.views}</span></p>
            <p class="card-comments">Comments <span class="card-value">${s.comments}</span></p>
            <p class="card-downloads">Downloads <span class="card-value">${s.downloads}</span></p>
        </div>
        </li>`).join("");return c.insertAdjacentHTML("beforeend",r),r}const u=document.querySelector(".search-form"),y=document.querySelector(".search-field"),f=document.querySelector(".loader");let n="",L=new p(".gallery a",{});u.addEventListener("submit",v);function v(o){if(o.preventDefault(),c.innerHTML="",n=y.value.trim(),n===""){m();return}b(n),u.reset()}function b(o){return m(),w(),fetch(`https://pixabay.com/api/?key=${h}&q=${o}&image_type=photo&orientation=horizontal&safesearch=true`).then(r=>{if(!r.ok)throw new Error(r.status);return r.json()}).then(r=>{r.hits.length===0?(i(),d.error({position:"topRight",message:"Sorry, there are no images matching <br/> your search query. Please try again!"})):(i(),g(r.hits),L.refresh())}).catch(r=>{i(),d.error({position:"topRight",message:"Something went wrong. Please try again!"})})}function m(){c.innerHTML=""}function w(){f.classList.remove("hidden")}function i(){f.classList.add("hidden")}
//# sourceMappingURL=commonHelpers.js.map
