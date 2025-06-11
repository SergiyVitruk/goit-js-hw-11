import{a as d,S as f,i}from"./assets/vendor-1AYLTIiv.js";(function(){const o=document.createElement("link").relList;if(o&&o.supports&&o.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))a(e);new MutationObserver(e=>{for(const t of e)if(t.type==="childList")for(const n of t.addedNodes)n.tagName==="LINK"&&n.rel==="modulepreload"&&a(n)}).observe(document,{childList:!0,subtree:!0});function r(e){const t={};return e.integrity&&(t.integrity=e.integrity),e.referrerPolicy&&(t.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?t.credentials="include":e.crossOrigin==="anonymous"?t.credentials="omit":t.credentials="same-origin",t}function a(e){if(e.ep)return;e.ep=!0;const t=r(e);fetch(e.href,t)}})();const m="https://pixabay.com/api/",p=void 0;function y(s){const o={key:p,q:s,image_type:"photo",orientation:"horizontal",safesearch:!0,per_page:18};return d.get(m,{params:o}).then(r=>r.data)}const l=document.querySelector(".gallery");let h=new f(".gallery a");const c=document.querySelector(".loader");function g(s){const o=s.map(r=>`
    <li class="gallery-item">
      <a href="${r.largeImageURL}">
        <img src="${r.webformatURL}" alt="${r.tags}"/>
      </a>
      <div>
        <p>Likes: ${r.likes}</p>
        <p>Views: ${r.views}</p>
        <p>Comments: ${r.comments}</p>
        <p>Downloads: ${r.downloads}</p>
      </div>
    </li>`).join("");l.insertAdjacentHTML("afterbegin",o),h.refresh()}function L(){l.innerHTML=""}function b(){c.classList.remove("hidden")}function q(){c.classList.add("hidden")}const u=document.querySelector(".form"),v=u.querySelector('input[name="search-text"]');u.addEventListener("submit",s=>{s.preventDefault();const o=v.value.trim();if(!o){i.warning({message:"Please enter a search query."});return}L(),b(),y(o).then(r=>{r.hits.length>0?g(r.hits):i.error({title:"Error!",message:"Sorry, there are no images matching your search query. Please try again!"})}).catch(()=>{i.error({title:"Error!",message:"Failed to load images"})}).finally(q)});
//# sourceMappingURL=index.js.map
