import{a as f,S as d,i as p}from"./assets/vendor-DQvd0HNi.js";(function(){const r=document.createElement("link").relList;if(r&&r.supports&&r.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))a(e);new MutationObserver(e=>{for(const t of e)if(t.type==="childList")for(const s of t.addedNodes)s.tagName==="LINK"&&s.rel==="modulepreload"&&a(s)}).observe(document,{childList:!0,subtree:!0});function o(e){const t={};return e.integrity&&(t.integrity=e.integrity),e.referrerPolicy&&(t.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?t.credentials="include":e.crossOrigin==="anonymous"?t.credentials="omit":t.credentials="same-origin",t}function a(e){if(e.ep)return;e.ep=!0;const t=o(e);fetch(e.href,t)}})();const m="https://pixabay.com/api/",h="55293382-56d7845179b77e1ce3559f450";async function y(i){return(await f.get(m,{params:{key:h,q:i,image_type:"photo",orientation:"horizontal",safesearch:!0}})).data}const n=document.querySelector(".gallery"),l=document.querySelector(".loader"),g=new d(".gallery a",{captions:!0,captionsData:"alt",captionPosition:"bottom",captionDelay:250});function L(i){const r=i.map(({previewURL:o,tags:a,largeImageURL:e,likes:t,views:s,comments:c,downloads:u})=>`<li class="gallery-item">
        <a class="gallery-link" href="${e}">
          <img
            class="gallery-image"
            src="${o}"
            alt="${a}"
          />
        </a>
        <ul class="title-text">
  <li>
    <h2>Likes</h2>
    <p>${t}</p>
  </li>
  <li>
    <h2>Views</h2>
    <p>${s}</p>
  </li>
  <li>
    <h2>Comments</h2>
    <p>${c}</p>
  </li>
  <li>
    <h2>Downloads</h2>
    <p>${u}</p>
  </li>
</ul>
      </li>`).join("");n.insertAdjacentHTML("beforeend",r),g.refresh()}function b(){n.innerHTML=""}function S(){l.classList.add("is-visible")}function w(){l.classList.remove("is-visible")}console.log("MAIN JS LOADED");const q=document.querySelector(".form");q.addEventListener("submit",v);async function v(i){i.preventDefault();const r=i.target.elements["search-text"].value.trim();if(r){b(),S();try{const o=await y(r);if(o.hits.length===0){p.show({message:"Sorry, there are no images matching your search query. Please try again!",messageColor:"white",backgroundColor:"red",position:"topRight"});return}L(o.hits)}catch(o){console.log(o)}finally{w()}}}
//# sourceMappingURL=index.js.map
