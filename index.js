import{a as h,i as c,S as p}from"./assets/vendor-D5mnuR-h.js";(function(){const o=document.createElement("link").relList;if(o&&o.supports&&o.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))r(e);new MutationObserver(e=>{for(const t of e)if(t.type==="childList")for(const a of t.addedNodes)a.tagName==="LINK"&&a.rel==="modulepreload"&&r(a)}).observe(document,{childList:!0,subtree:!0});function s(e){const t={};return e.integrity&&(t.integrity=e.integrity),e.referrerPolicy&&(t.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?t.credentials="include":e.crossOrigin==="anonymous"?t.credentials="omit":t.credentials="same-origin",t}function r(e){if(e.ep)return;e.ep=!0;const t=s(e);fetch(e.href,t)}})();const y="48859120-c5edc5c574d1328ed42f58f74",L="https://pixabay.com/api/";async function m(n,o=1,s=15){try{const r=await h.get(L,{params:{key:y,q:n,image_type:"photo",orientation:"horizontal",safesearch:!0,per_page:s,page:o}});if(r.status!==200)throw new Error(`HTTP error! Status: ${r.status}`);const{hits:e,totalHits:t}=r.data;return e.length===0?(c.warning({title:"No results",message:"No images found. Try another search!"}),{hits:[],totalHits:0}):{hits:e,totalHits:t}}catch(r){return c.error({title:"Error",message:"Failed to fetch images. Try again!"}),console.error("Fetch error:",r),{hits:[],totalHits:0}}}let f;function g(n,o=!1){const s=document.querySelector(".gallery");if(!s||n.length===0)return;o||(s.innerHTML="");const r=n.map(({webformatURL:e,largeImageURL:t,tags:a,likes:i,views:l,comments:d,downloads:u})=>`<a href="${t}" class="gallery-item">
            <img src="${e}" alt="${a}" loading="lazy"/>
            <div class="info">
                <p><span class="label">Likes:</span> ${i}</p>
                <p><span class="label">Views:</span> ${l}</p>
                <p><span class="label">Comments:</span> ${d}</p>
                <p><span class="label">Downloads:</span> ${u}</p>
            </div>
        </a>`).join("");s.insertAdjacentHTML("beforeend",r),f||(f=new p(".gallery a",{captions:!0,captionsData:"alt",captionDelay:250})),f.refresh()}document.addEventListener("DOMContentLoaded",()=>{const n=document.querySelector(".form"),o=document.querySelector(".gallery"),s=document.querySelector("#load-more"),r=document.querySelector(".loader");if(!n||!o||!s||!r){console.error("❌ Помилка: Один або більше елементів не знайдено."),console.log("🔍 Форма:",n),console.log("🔍 Галерея:",o),console.log("🔍 Кнопка 'Load More':",s),console.log("🔍 Лоадер:",r);return}let e="",t=1;const a=40;n.addEventListener("submit",async i=>{if(i.preventDefault(),e=i.target.elements.searchQuery.value.trim(),!e){c.warning({title:"Warning",message:"Please enter a search term!"});return}t=1,o.innerHTML="",s.classList.add("hidden"),r.classList.remove("hidden");try{const{hits:l,totalHits:d}=await m(e,t,a);if(r.classList.add("hidden"),l.length===0){c.error({message:"No images found. Try again!"});return}g(l),a<d&&s.classList.remove("hidden")}catch{r.classList.add("hidden"),c.error({message:"An error occurred. Please try again later!"})}}),s.addEventListener("click",async()=>{t+=1,r.classList.remove("hidden");try{const{hits:i,totalHits:l}=await m(e,t,a);if(r.classList.add("hidden"),i.length===0)return;g(i,!0),setTimeout(()=>{const d=document.querySelector(".gallery-item");if(d){const{height:u}=d.getBoundingClientRect();window.scrollBy({top:u*2,behavior:"smooth"})}},300),t*a>=l&&(s.classList.add("hidden"),c.info({message:"We're sorry, but you've reached the end of search results."}))}catch{r.classList.add("hidden"),c.error({message:"Failed to load more images. Try again!"})}})});
//# sourceMappingURL=index.js.map
