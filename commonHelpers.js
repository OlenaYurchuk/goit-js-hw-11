import{S as f,i as c}from"./assets/vendor-7659544d.js";(function(){const r=document.createElement("link").relList;if(r&&r.supports&&r.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))d(e);new MutationObserver(e=>{for(const t of e)if(t.type==="childList")for(const a of t.addedNodes)a.tagName==="LINK"&&a.rel==="modulepreload"&&d(a)}).observe(document,{childList:!0,subtree:!0});function s(e){const t={};return e.integrity&&(t.integrity=e.integrity),e.referrerPolicy&&(t.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?t.credentials="include":e.crossOrigin==="anonymous"?t.credentials="omit":t.credentials="same-origin",t}function d(e){if(e.ep)return;e.ep=!0;const t=s(e);fetch(e.href,t)}})();const p="42222554-b2624bd1f455ca6190f2bf509",l=document.querySelector(".gallery");function h(o){const r=o.map(s=>`<li class="gallery-item">
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
        </li>`).join("");return l.insertAdjacentHTML("beforeend",r),r}const u=document.querySelector(".search-form"),g=document.querySelector(".search-field"),m=document.querySelector(".loader");let n="",y=new f(".gallery a",{});u.addEventListener("submit",L);function L(o){if(o.preventDefault(),l.innerHTML="",n=g.value.trim(),n===""){c.error({position:"topRight",message:"Please enter a search term."});return}v(n),u.reset()}function v(o){return b(),w(),fetch(`https://pixabay.com/api/?key=${p}&q=${o}&image_type=photo&orientation=horizontal&safesearch=true`).then(r=>{if(!r.ok)throw new Error(r.status);return r.json()}).then(r=>{r.hits.length===0?(i(),c.info({position:"topRight",messageColor:"black",message:"Sorry, there are no images matching <br/> your search query. Please try again!"})):(i(),h(r.hits),y.refresh())}).catch(r=>{i(),c.error({position:"topRight",message:"Something went wrong. Please try again!"})})}function b(){l.innerHTML=""}function w(){m.classList.remove("hidden")}function i(){m.classList.add("hidden")}
//# sourceMappingURL=commonHelpers.js.map
