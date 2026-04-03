import{a as p,S as f,i as n}from"./assets/vendor-DQvd0HNi.js";(function(){const r=document.createElement("link").relList;if(r&&r.supports&&r.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))a(e);new MutationObserver(e=>{for(const t of e)if(t.type==="childList")for(const s of t.addedNodes)s.tagName==="LINK"&&s.rel==="modulepreload"&&a(s)}).observe(document,{childList:!0,subtree:!0});function i(e){const t={};return e.integrity&&(t.integrity=e.integrity),e.referrerPolicy&&(t.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?t.credentials="include":e.crossOrigin==="anonymous"?t.credentials="omit":t.credentials="same-origin",t}function a(e){if(e.ep)return;e.ep=!0;const t=i(e);fetch(e.href,t)}})();const m="https://pixabay.com/api/",h="55293382-56d7845179b77e1ce3559f450";async function y(o){return(await p.get(m,{params:{key:h,q:o,image_type:"photo",orientation:"horizontal",safesearch:!0}})).data}const l=document.querySelector(".gallery"),c=document.querySelector(".loader"),g=new f(".gallery a",{captions:!0,captionsData:"alt",captionPosition:"bottom",captionDelay:250});function L(o){const r=o.map(({webformatURL:i,tags:a,largeImageURL:e,likes:t,views:s,comments:u,downloads:d})=>`<li class="gallery-item">
        <a class="gallery-link" href="${e}">
          <img
            class="gallery-image"
            src="${i}"
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
    <p>${u}</p>
  </li>
  <li>
    <h2>Downloads</h2>
    <p>${d}</p>
  </li>
</ul>
      </li>`).join("");l.insertAdjacentHTML("beforeend",r),g.refresh()}function b(){l.innerHTML=""}function w(){c.classList.add("is-visible")}function S(){c.classList.remove("is-visible")}const q=document.querySelector(".form");q.addEventListener("submit",v);async function v(o){o.preventDefault();const r=o.target.elements["search-text"].value.trim();if(r){b(),w();try{const i=await y(r);if(i.hits.length===0){n.show({message:"Sorry, there are no images matching your search query. Please try again!",messageColor:"white",backgroundColor:"red",position:"topRight"});return}L(i.hits)}catch{n.show({message:"error",messageColor:"white",backgroundColor:"red",position:"topRight"})}finally{S()}}}
//# sourceMappingURL=index.js.map
