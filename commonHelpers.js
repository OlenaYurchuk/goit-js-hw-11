import{S as u,i as f}from"./assets/vendor-7659544d.js";(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))l(e);new MutationObserver(e=>{for(const s of e)if(s.type==="childList")for(const a of s.addedNodes)a.tagName==="LINK"&&a.rel==="modulepreload"&&l(a)}).observe(document,{childList:!0,subtree:!0});function r(e){const s={};return e.integrity&&(s.integrity=e.integrity),e.referrerPolicy&&(s.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?s.credentials="include":e.crossOrigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function l(e){if(e.ep)return;e.ep=!0;const s=r(e);fetch(e.href,s)}})();const m="42222554-b2624bd1f455ca6190f2bf509",d=document.querySelector(".search-form"),p=document.querySelector(".search-field"),c=document.querySelector(".gallery"),n=document.querySelector(".loader");let i="",h=new u(".gallery a",{});n.classList.add("hidden");d.addEventListener("submit",g);function g(o){if(o.preventDefault(),c.innerHTML="",i=p.value.trim(),i===""){v();return}y(i)}function y(o){fetch(`https://pixabay.com/api/?key=${m}&q=${o}s&image_type=photo&orientation=horizontal&safesearch=true`).then(t=>{if(!t.ok)throw new Error(t.status);return t.json()}).then(t=>{n.classList.remove("hidden"),t.totalHits===0?f.error({position:"topRight",message:"Sorry, there are no images matching your search query. Please try again!"}):(n.classList.add("hidden"),L(t.hits),h.refresh())}).catch(t=>console.log(t)).finally(()=>{d.reset()})}function L(o){const t=o.map(r=>`<li class="gallery-item">
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
