import{a as h,S as m,i as f}from"./assets/vendor-KnZd4sWe.js";(function(){const s=document.createElement("link").relList;if(s&&s.supports&&s.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))o(e);new MutationObserver(e=>{for(const t of e)if(t.type==="childList")for(const r of t.addedNodes)r.tagName==="LINK"&&r.rel==="modulepreload"&&o(r)}).observe(document,{childList:!0,subtree:!0});function i(e){const t={};return e.integrity&&(t.integrity=e.integrity),e.referrerPolicy&&(t.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?t.credentials="include":e.crossOrigin==="anonymous"?t.credentials="omit":t.credentials="same-origin",t}function o(e){if(e.ep)return;e.ep=!0;const t=i(e);fetch(e.href,t)}})();function g(a){const s={params:{key:"48678129-2163769dcaa82a491114adb07",q:a,image_type:"photo",orientation:"horizontal",safesearch:!0}};return h.get("https://pixabay.com/api/",s)}const p="data:image/svg+xml,%3csvg%20width='24'%20height='24'%20viewBox='0%200%2024%2024'%20fill='none'%20xmlns='http://www.w3.org/2000/svg'%20%3e%3c!--%20Magnifying%20Glass%20--%3e%3ccircle%20cx='10'%20cy='10'%20r='7'%20stroke='%23fff'%20stroke-width='2'%20/%3e%3cline%20x1='15'%20y1='15'%20x2='21'%20y2='21'%20stroke='%23fff'%20stroke-width='2'%20stroke-linecap='round'%20/%3e%3c!--%20Cross%20inside%20the%20lens%20--%3e%3cline%20x1='7'%20y1='7'%20x2='13'%20y2='13'%20stroke='%23fff'%20stroke-width='2'%20stroke-linecap='round'%20/%3e%3cline%20x1='13'%20y1='7'%20x2='7'%20y2='13'%20stroke='%23fff'%20stroke-width='2'%20stroke-linecap='round'%20/%3e%3c/svg%3e",d=document.querySelector(".gallery"),c=document.querySelector(".loader-box");function y(a){const s=a.map(({webformatURL:i,largeImageURL:o,tags:e,likes:t,views:r,comments:l,downloads:u})=>`
          <li class="gallery-item">
            <a class="gallery-link" href="${o}">
              <figure class="thumb-container">
                <img
                  class="thumb-image"
                  src="${i}"
                  data-source="${o}"
                  alt="${e}"
                />

                <figcaption class="thumb-data">
                  <dl class="thumb-data-list">
                    <div class="thumb-data-item">
                      <dt class="thumb-data-title">Likes</dt>
                      <dd class="thumb-data-data">${t}</dd>
                    </div>
                    <div class="thumb-data-item">
                      <dt class="thumb-data-title">Views</dt>
                      <dd class="thumb-data-data">${r}</dd>
                    </div>
                    <div class="thumb-data-item">
                      <dt class="thumb-data-title">Comments</dt>
                      <dd class="thumb-data-data">${l}</dd>
                    </div>
                    <div class="thumb-data-item">
                      <dt class="thumb-data-title">Downloads</dt>
                      <dd class="thumb-data-data">${u}</dd>
                    </div>
                  </dl>
                </figcaption>
              </figure>
            </a>
          </li>
        `).join("");d.innerHTML=s,b.refresh(),x()}const b=new m(".gallery a",{captionsData:"alt",captionDelay:250});function v(){d.classList.add("hidden"),c.classList.remove("hidden")}function x(){d.classList.remove("hidden"),c.classList.add("hidden")}function w(){f.show({position:"topRight",message:"Sorry, there are no images matching your search query. Please try again!",messageSize:"16px",messageLineHeight:"24px",messageColor:"white",iconUrl:p,maxWidth:"432px",backgroundColor:"#EF4040"})}const L=document.querySelector("form"),n=document.querySelector("#search-text");L.addEventListener("submit",S);function S(a){a.preventDefault();const s=n.value;s&&(n.value="",v(),g(s).then(i=>k(i.data.hits)).catch(i=>console.log(i)))}function k(a){a.length||w(),y(a)}
//# sourceMappingURL=index.js.map
