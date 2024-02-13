import{S as u,i as f}from"./assets/vendor-7659544d.js";(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))l(e);new MutationObserver(e=>{for(const s of e)if(s.type==="childList")for(const i of s.addedNodes)i.tagName==="LINK"&&i.rel==="modulepreload"&&l(i)}).observe(document,{childList:!0,subtree:!0});function r(e){const s={};return e.integrity&&(s.integrity=e.integrity),e.referrerPolicy&&(s.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?s.credentials="include":e.crossOrigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function l(e){if(e.ep)return;e.ep=!0;const s=r(e);fetch(e.href,s)}})();const m="42222554-b2624bd1f455ca6190f2bf509";function p(o){return fetch(`https://pixabay.com/api/?key=${m}&q=${o}s&image_type=photo&orientation=horizontal&safesearch=true`)}const d=document.querySelector(".search-form"),h=document.querySelector(".search-field"),c=document.querySelector(".gallery"),a=document.querySelector(".loader");let n="",g=new u(".gallery a",{});a.classList.add("hidden");d.addEventListener("submit",y);function y(o){if(o.preventDefault(),c.innerHTML="",n=h.value.trim(),n===""){v();return}p(n).then(t=>{if(!t.ok)throw new Error(t.status);return t.json()}).then(t=>{a.classList.remove("hidden"),t.hits.length===0?(a.classList.add("hidden"),f.error({position:"topRight",message:"Sorry, there are no images matching <br/> your search query. Please try again!"})):(a.classList.add("hidden"),L(t.hits),g.refresh())}).catch(t=>console.log(t)).finally(()=>{d.reset()})}function L(o){const t=o.map(r=>`<li class="gallery-item">
             <div class="card-top">
            <a class="card-link" href="${r.largeImageURL}">
                <img class="card-image" src="${r.webformatURL}" alt="${r.tags}">
            </a>
        </div>
        <div class="card-bottom">
            <p class="card-likes">Likes <span class="card-value">${r.likes}</span></p>
            <p class="card-views">Views <span class="card-value">${r.views}</span></p>
            <p class="card-comments">Comments <span class="card-value">${r.comments}</span></p>
            <p class="card-downloads">Downloads <span class="card-value">${r.downloads}</span></p>
        </div>
        </li>`).join("");c.insertAdjacentHTML("beforeend",t)}function v(){c.innerHTML=""}
//# sourceMappingURL=commonHelpers.js.map
