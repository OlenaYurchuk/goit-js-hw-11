import{S as u,i as f}from"./assets/vendor-7659544d.js";(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const t of document.querySelectorAll('link[rel="modulepreload"]'))l(t);new MutationObserver(t=>{for(const r of t)if(r.type==="childList")for(const a of r.addedNodes)a.tagName==="LINK"&&a.rel==="modulepreload"&&l(a)}).observe(document,{childList:!0,subtree:!0});function s(t){const r={};return t.integrity&&(r.integrity=t.integrity),t.referrerPolicy&&(r.referrerPolicy=t.referrerPolicy),t.crossOrigin==="use-credentials"?r.credentials="include":t.crossOrigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function l(t){if(t.ep)return;t.ep=!0;const r=s(t);fetch(t.href,r)}})();const m="42222554-b2624bd1f455ca6190f2bf509",c=document.querySelector(".gallery");function p(o){const e=o.map(s=>`<li class="gallery-item">
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
        </li>`).join("");return c.insertAdjacentHTML("beforeend",e),e}const d=document.querySelector(".search-form"),h=document.querySelector(".search-field"),n=document.querySelector(".loader");let i="",g=new u(".gallery a",{});d.addEventListener("submit",y);function y(o){if(o.preventDefault(),c.innerHTML="",i=h.value.trim(),i===""){v();return}L(i).then(e=>{n.classList.remove("hidden"),e.hits.length===0?(n.classList.add("hidden"),f.error({position:"topRight",message:"Sorry, there are no images matching <br/> your search query. Please try again!"})):(n.classList.add("hidden"),p(e.hits),g.refresh())}).catch(e=>console.log(e)).finally(()=>{d.reset()})}function L(o){return fetch(`https://pixabay.com/api/?key=${m}&q=${o}s&image_type=photo&orientation=horizontal&safesearch=true`).then(e=>{if(!e.ok)throw new Error(e.status);return e.json()})}function v(){c.innerHTML=""}
//# sourceMappingURL=commonHelpers.js.map
