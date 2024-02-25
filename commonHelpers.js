import{S as m,i as d}from"./assets/vendor-7659544d.js";(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))l(e);new MutationObserver(e=>{for(const r of e)if(r.type==="childList")for(const i of r.addedNodes)i.tagName==="LINK"&&i.rel==="modulepreload"&&l(i)}).observe(document,{childList:!0,subtree:!0});function s(e){const r={};return e.integrity&&(r.integrity=e.integrity),e.referrerPolicy&&(r.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?r.credentials="include":e.crossOrigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function l(e){if(e.ep)return;e.ep=!0;const r=s(e);fetch(e.href,r)}})();const f="42222554-b2624bd1f455ca6190f2bf509",c=document.querySelector(".gallery");function p(o){const t=o.map(s=>`<li class="gallery-item">
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
        </li>`).join("");return c.insertAdjacentHTML("beforeend",t),t}const u=document.querySelector(".search-form"),h=document.querySelector(".search-field"),a=document.querySelector(".loader");let n="",g=new m(".gallery a",{});u.addEventListener("submit",y);function y(o){if(o.preventDefault(),c.innerHTML="",n=h.value.trim(),n===""){v();return}L(n),u.reset()}function L(o){return fetch(`https://pixabay.com/api/?key=${f}&q=${o}&image_type=photo&orientation=horizontal&safesearch=true`).then(t=>{if(!t.ok)throw new Error(t.status);return t.json()}).then(t=>{a.classList.remove("hidden"),t.hits.length===0?(a.classList.add("hidden"),d.error({position:"topRight",message:"Sorry, there are no images matching <br/> your search query. Please try again!"})):(a.classList.add("hidden"),p(t.hits),g.refresh())}).catch(t=>{a.classList.add("hidden"),d.error({position:"topRight",message:"Something went wrong. Please try again!"})})}function v(){c.innerHTML=""}
//# sourceMappingURL=commonHelpers.js.map
