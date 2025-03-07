import{a as p,S as L,i as l}from"./assets/vendor-mYwBqgd4.js";(function(){const s=document.createElement("link").relList;if(s&&s.supports&&s.supports("modulepreload"))return;for(const t of document.querySelectorAll('link[rel="modulepreload"]'))n(t);new MutationObserver(t=>{for(const o of t)if(o.type==="childList")for(const c of o.addedNodes)c.tagName==="LINK"&&c.rel==="modulepreload"&&n(c)}).observe(document,{childList:!0,subtree:!0});function i(t){const o={};return t.integrity&&(o.integrity=t.integrity),t.referrerPolicy&&(o.referrerPolicy=t.referrerPolicy),t.crossOrigin==="use-credentials"?o.credentials="include":t.crossOrigin==="anonymous"?o.credentials="omit":o.credentials="same-origin",o}function n(t){if(t.ep)return;t.ep=!0;const o=i(t);fetch(t.href,o)}})();p.defaults.baseURL="https://pixabay.com";async function d(e,s){const i="https://pixabay.com/api/",n={key:"48901588-d5168312fb6e442ccb66c926a",q:e,image_type:"photo",orientation:"horizontal",safesearch:!0,page:s,per_page:40};return await p.get(i,{params:n})}function b(e){return`<li class="gallery-item">
  <a class="gallery-link" href="${e.largeImageURL}">
    <img
      class="gallery-image"
      src="${e.webformatURL}"
      alt="${e.tags}"
    />
  </a>
  
  <ul class="image-info">
      <li class="info-item">
        <p class="text">Likes</p>
        <p class="text-value">${e.likes}</p>
      </li>
      <li class="info-item">
        <p class="text">Views</p>
        <p class="text-value">${e.views}</p>
      </li>
      <li class="info-item">
        <p class="text">Comments</p>
        <p class="text-value">${e.comments}</p>
      </li>
      <li class="info-item">
        <p class="text">Downloads</p>
        <p class="text-value">${e.downloads}</p>
      </li>
      </ul>
</li>`}const f=new L(".gallery a",{captionsData:"alt",captionDelay:250});function g(e){return e.map(b).join("")}const a={form:document.querySelector(".search-form"),input:document.querySelector("#image-input"),gallery:document.querySelector(".gallery"),btnLoadMore:document.querySelector(".js-load-btn"),loader:document.querySelector(".js-loader")},r={query:"",page:1,total:null,per_page:40};a.form.addEventListener("submit",async e=>{if(e.preventDefault(),y(),r.query=a.input.value.trim(),r.page=1,r.query===""){u();return}a.gallery.innerHTML="",a.form.reset(),m();try{const i=(await d(r.query,r.page,r.per_page)).data;i.hits.length===0?l.info({title:"",message:"Sorry, there are no images matching your search query. Please try again!",messageColor:"#fafafb",backgroundColor:"#ef4040",messageSize:"16px",position:"topRight",maxWidth:"432px"}):(a.gallery.innerHTML=g(i.hits),f.refresh(),r.total=i.totalHits,h())}catch{a.gallery.innerHTML="",l.error({title:"Error",message:"Something went wrong. Please try again.",position:"topRight"})}finally{u()}});a.btnLoadMore.addEventListener("click",async()=>{r.page+=1,y();try{const s=(await d(r.query,r.page,r.per_page)).data;a.gallery.insertAdjacentHTML("beforeend",g(s.hits)),f.refresh(),r.total=s.totalHits,h(),x()}catch{l.error({title:"Error",message:"Something went wrong. Please try again.",position:"topRight"})}finally{setTimeout(()=>{u()},5e3)}});function w(){a.btnLoadMore.classList.remove("hidden")}function m(){a.btnLoadMore.classList.add("hidden")}function h(){const e=Math.ceil(r.total/r.per_page);r.page>=e?(m(),l.info({title:"",message:'We"re sorry, but you"ve reached the end of search results.',position:"topRight"})):w()}function y(){a.loader.classList.remove("hidden")}function u(){a.loader.classList.add("hidden")}function x(){const{height:e}=a.gallery.firstElementChild.getBoundingClientRect();window.scrollBy({top:e*2,behavior:"smooth"})}
//# sourceMappingURL=index.js.map
