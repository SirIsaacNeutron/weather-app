(()=>{"use strict";var n={28:(n,e,t)=>{t.d(e,{Z:()=>s});var r=t(81),o=t.n(r),a=t(645),i=t.n(a)()(o());i.push([n.id,"* {\n    box-sizing: border-box;\n    margin: 0;\n    padding: 0;\n\n    font-family: 'Quicksand', sans-serif;\n}\n\nhtml,\nbody {\n    height: 100%;\n}\n\nbody {\n    display: flex;\n    flex-direction: column;\n\n    align-items: center;\n\n    background-color: hsl(0, 0%, 89%);\n}\n\nbody h1 {\n    margin-top: 2.5rem;\n    margin-bottom: 1rem;\n\n    font-size: 3rem;\n    \n    font-family: 'Nixie One', cursive;\n}\n\nmain {\n    margin-bottom: 15px;\n}\n\nh3 {\n    font-weight: 400;\n}\n\n.weather-form {\n    /* box-shadow: 0px 0px 5px 0px rgb(0, 0, 0, .2); */\n    border-radius: 5px;\n\n    /* background-color: hsl(0, 0%, 97%); */\n\n    padding: 10px 20px;\n}\n\n.weather-form input {\n    border-radius: 5px;\n    padding: 10px;\n\n    outline: none;\n    border: 1px solid black;\n\n    font-size: 1.5rem;\n}\n\n.error-msg {\n    display: none;\n    color: hsl(0, 100%, 42%);\n\n    margin-top: 10px;\n}\n\n.error-msg.active {\n    display: block;\n}\n\n.temp-units {\n    width: 100%;\n\n    padding: 10px;\n\n    font-size: 1rem;\n\n    margin-top: 10px;\n\n    color: black;\n    background-color: white;\n    border: 1px solid rgb(172, 172, 172);\n    border-radius: 5px;\n    outline: none;\n}\n\n.temp-units:hover {\n    background-color: rgb(240, 240, 240);\n}\n\nspan.current-unit {\n    font-weight: bold;\n}\n\n.hourly-weather {\n    display: flex;\n    gap: 20px;\n\n    overflow: auto;\n    min-height: 220px;\n\n    width: 100%;\n\n    margin-bottom: 10px;\n}\n\n.hidden {\n    display: none;\n}\n\n.hourly-card {\n    display: flex;\n    flex-direction: column;\n    align-items: center;\n    text-align: center;\n\n    width: 120px;\n\n    flex: 1;\n}\n\n.pop {\n    /* color: rgb(78, 181, 255); */\n    color: #026cde;\n}\n\n.weather-stats {\n    min-width: 100%;\n    background-color: hsl(0, 0%, 79%);\n    \n    padding: 10px 20px;\n}\n\n.stats-grid {\n    margin-top: 20px;\n\n    width: 100%;\n\n    display: grid;\n    grid-template-columns: repeat(5, 1fr);\n\n    gap: 20px;\n\n    padding-bottom: 20px;\n}\n\n.stats-grid > div {\n    text-align: center;\n}\n\n.stats-grid abbr {\n    cursor: help;\n}\n\n.weather-cards {\n    display: grid;\n\n    width: 100%;\n    grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));\n    gap: 10px;\n\n    padding: 20px;\n}\n\n.weather-card {\n    background-color: white;\n    padding: 10px;\n\n    border-radius: 5px;\n    box-shadow: 0px 0px 5px 0px rgb(0, 0, 0, .2);\n\n    display: flex;\n}\n\n.weather-card h2 {\n    font-weight: 400;\n}\n\n.weather-card img {\n    margin-left: auto;\n\n    height: 100px;\n    width: 100px;\n}\n\n.skeleton {\n    opacity: .7;\n    animation: skeleton-loading 1s linear infinite alternate;\n}\n\n@keyframes skeleton-loading {\n    0% {\n        background-color: hsl(200, 20%, 70%);\n    }\n\n    100% {\n        background-color: hsl(200, 20%, 95%);\n    }\n}\n\n.skeleton-text {\n    width: 100%;\n    height: .5rem;\n    margin-bottom: 10px;\n    padding: 10px 100px 10px 10px;\n\n    border-radius: 5px;\n}\n\nfooter {\n    display: flex;\n    align-items: center;\n    justify-content: center;\n    gap: 10px;\n\n    padding-bottom: 20px;\n}\n\n.fa-github {\n    font-size: 24px;\n    color: black; /* prevent icon from going red on click */\n    transition: transform 0.3s ease-in-out;\n}\n\n.fa-github:hover {\n    transform: rotate(360deg) scale(1.2);\n}\n\n@media screen and (max-width: 500px) {\n    .stats-grid {\n        grid-template-columns: repeat(3, minmax(100px, 1fr));\n    }\n}",""]);const s=i},645:n=>{n.exports=function(n){var e=[];return e.toString=function(){return this.map((function(e){var t="",r=void 0!==e[5];return e[4]&&(t+="@supports (".concat(e[4],") {")),e[2]&&(t+="@media ".concat(e[2]," {")),r&&(t+="@layer".concat(e[5].length>0?" ".concat(e[5]):""," {")),t+=n(e),r&&(t+="}"),e[2]&&(t+="}"),e[4]&&(t+="}"),t})).join("")},e.i=function(n,t,r,o,a){"string"==typeof n&&(n=[[null,n,void 0]]);var i={};if(r)for(var s=0;s<this.length;s++){var c=this[s][0];null!=c&&(i[c]=!0)}for(var l=0;l<n.length;l++){var p=[].concat(n[l]);r&&i[p[0]]||(void 0!==a&&(void 0===p[5]||(p[1]="@layer".concat(p[5].length>0?" ".concat(p[5]):""," {").concat(p[1],"}")),p[5]=a),t&&(p[2]?(p[1]="@media ".concat(p[2]," {").concat(p[1],"}"),p[2]=t):p[2]=t),o&&(p[4]?(p[1]="@supports (".concat(p[4],") {").concat(p[1],"}"),p[4]=o):p[4]="".concat(o)),e.push(p))}},e}},81:n=>{n.exports=function(n){return n[1]}},379:n=>{var e=[];function t(n){for(var t=-1,r=0;r<e.length;r++)if(e[r].identifier===n){t=r;break}return t}function r(n,r){for(var a={},i=[],s=0;s<n.length;s++){var c=n[s],l=r.base?c[0]+r.base:c[0],p=a[l]||0,d="".concat(l," ").concat(p);a[l]=p+1;var u=t(d),h={css:c[1],media:c[2],sourceMap:c[3],supports:c[4],layer:c[5]};if(-1!==u)e[u].references++,e[u].updater(h);else{var m=o(h,r);r.byIndex=s,e.splice(s,0,{identifier:d,updater:m,references:1})}i.push(d)}return i}function o(n,e){var t=e.domAPI(e);return t.update(n),function(e){if(e){if(e.css===n.css&&e.media===n.media&&e.sourceMap===n.sourceMap&&e.supports===n.supports&&e.layer===n.layer)return;t.update(n=e)}else t.remove()}}n.exports=function(n,o){var a=r(n=n||[],o=o||{});return function(n){n=n||[];for(var i=0;i<a.length;i++){var s=t(a[i]);e[s].references--}for(var c=r(n,o),l=0;l<a.length;l++){var p=t(a[l]);0===e[p].references&&(e[p].updater(),e.splice(p,1))}a=c}}},569:n=>{var e={};n.exports=function(n,t){var r=function(n){if(void 0===e[n]){var t=document.querySelector(n);if(window.HTMLIFrameElement&&t instanceof window.HTMLIFrameElement)try{t=t.contentDocument.head}catch(n){t=null}e[n]=t}return e[n]}(n);if(!r)throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");r.appendChild(t)}},216:n=>{n.exports=function(n){var e=document.createElement("style");return n.setAttributes(e,n.attributes),n.insert(e,n.options),e}},565:(n,e,t)=>{n.exports=function(n){var e=t.nc;e&&n.setAttribute("nonce",e)}},795:n=>{n.exports=function(n){var e=n.insertStyleElement(n);return{update:function(t){!function(n,e,t){var r="";t.supports&&(r+="@supports (".concat(t.supports,") {")),t.media&&(r+="@media ".concat(t.media," {"));var o=void 0!==t.layer;o&&(r+="@layer".concat(t.layer.length>0?" ".concat(t.layer):""," {")),r+=t.css,o&&(r+="}"),t.media&&(r+="}"),t.supports&&(r+="}");var a=t.sourceMap;a&&"undefined"!=typeof btoa&&(r+="\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(a))))," */")),e.styleTagTransform(r,n,e.options)}(e,n,t)},remove:function(){!function(n){if(null===n.parentNode)return!1;n.parentNode.removeChild(n)}(e)}}}},589:n=>{n.exports=function(n,e){if(e.styleSheet)e.styleSheet.cssText=n;else{for(;e.firstChild;)e.removeChild(e.firstChild);e.appendChild(document.createTextNode(n))}}}},e={};function t(r){var o=e[r];if(void 0!==o)return o.exports;var a=e[r]={id:r,exports:{}};return n[r](a,a.exports,t),a.exports}t.n=n=>{var e=n&&n.__esModule?()=>n.default:()=>n;return t.d(e,{a:e}),e},t.d=(n,e)=>{for(var r in e)t.o(e,r)&&!t.o(n,r)&&Object.defineProperty(n,r,{enumerable:!0,get:e[r]})},t.o=(n,e)=>Object.prototype.hasOwnProperty.call(n,e),t.nc=void 0,(()=>{var n=t(379),e=t.n(n),r=t(795),o=t.n(r),a=t(569),i=t.n(a),s=t(565),c=t.n(s),l=t(216),p=t.n(l),d=t(589),u=t.n(d),h=t(28),m={};m.styleTagTransform=u(),m.setAttributes=c(),m.insert=i().bind(null,"head"),m.domAPI=o(),m.insertStyleElement=p(),e()(h.Z,m),h.Z&&h.Z.locals&&h.Z.locals;const f=document.querySelector(".weather-form input"),g=document.querySelector(".weather-form"),x=g.querySelector(".temp-units");x.addEventListener("click",(()=>{const n=x.querySelectorAll("span");let e;n[0].classList.contains("current-unit")?(n[0].classList.remove("current-unit"),n[1].classList.add("current-unit"),e="F"):(n[0].classList.add("current-unit"),n[1].classList.remove("current-unit"),e="C"),document.querySelectorAll(".temp").forEach((n=>{const t=n.textContent.split("°")[0],r=parseInt(t);n.textContent="F"===e?`${function(n){const e=1.8*n+32;return Math.round(e)}(r)}°`:`${function(n){const e=5*(n-32)/9;return Math.round(e)}(r)}°`}))})),g.addEventListener("submit",(n=>{n.preventDefault()})),f.addEventListener("keydown",(n=>{if("Enter"===n.key){!function(){const n=x.querySelectorAll("span");n[0].classList.remove("current-unit"),n[1].classList.add("current-unit"),x.classList.add("hidden")}();const e=g.querySelector(".error-msg");e.classList.remove("active");const t=g.querySelector("input").value;!function(){const n=document.querySelector(".hourly-weather");n.replaceChildren(),n.classList.remove("hidden");for(let e=0;e<10;++e)n.innerHTML+='\n        <article class="hourly-card">\n            <h3 class="skeleton skeleton-text"></h3>\n            <img class="skeleton" style="height: 100px; width: 100px; margin-bottom: 20px;">\n\n            <p class="skeleton skeleton-text"></p>\n            <p class="skeleton skeleton-text"></p>\n        </article>\n        '}(),function(){const n=document.querySelector(".weather-cards");n.replaceChildren();const e=document.querySelector("template");for(let t=0;t<8;++t){const t=e.content.cloneNode(!0);n.appendChild(t)}}(),fetch(`https://api.openweathermap.org/data/2.5/weather?q=${t}&appid=51508559a54a70928ab3aed23d3a0b63`,{mode:"cors"}).then((n=>n.json())).then((n=>{if("404"===n.cod){e.textContent=`${t} not found`,e.classList.add("active"),x.classList.add("hidden"),document.querySelector(".weather-cards").replaceChildren();const n=document.querySelector(".hourly-weather");n.replaceChildren(),n.classList.add("hidden")}else e.classList.remove("active"),r=n.coord.lat,o=n.coord.lon,fetch(`https://api.openweathermap.org/data/3.0/onecall?lat=${r}&lon=${o}&appid=51508559a54a70928ab3aed23d3a0b63&units=imperial`,{mode:"cors"}).then((n=>n.json())).then((n=>{console.log(n),function(n){const e=document.querySelector(".hourly-weather");e.replaceChildren();for(let t=0;t<24;++t){const r=n.hourly[t];let o=new Date(1e3*r.dt).toLocaleTimeString("us-EN"),a=o.split(" ")[1],i=o.split(":")[0];o=`${i} ${a}`;const s=`https://openweathermap.org/img/wn/${r.weather[0].icon}@2x.png`;let c=r.weather[0].description;c=c.charAt(0).toUpperCase()+c.slice(1),e.innerHTML+=`\n        <article class="hourly-card">\n            <h3>${o}</h3>\n            <img src=${s}>\n\n            <p class="pop">${100*r.pop}%</p>\n            <p class="temp">${Math.round(r.feels_like)}&deg;</p>\n            <p>${c}</p>\n        </article>\n        `}}(n),function(n){const e=document.querySelector(".stats-grid");for(const n of e.children)n.querySelector("p.stat").textContent="";const t=e.querySelector(".sunrise p.stat"),r=new Date(1e3*n.current.sunrise).toLocaleTimeString("en-US");t.textContent=r,e.querySelector(".sunset p.stat").textContent=new Date(1e3*n.current.sunset).toLocaleTimeString("en-US"),e.querySelector(".rain-chance p.stat").textContent=100*n.daily[0].pop+"%",e.querySelector(".humidity p.stat").textContent=`${n.current.humidity}%`,e.querySelector(".wind p.stat").textContent=`${n.current.wind_speed} m/s`,e.querySelector(".feels-like p.stat").textContent=`${Math.round(n.current.feels_like)}°`;const o=e.querySelector(".precipitation p.stat");n.current.rain?o.textContent=`${n.current.rain["1h"]} mm/h`:n.current.snow?o.textContent=`${n.current.snow["1h"]} mm/h`:o.textContent="0 mm/h",e.querySelector(".pressure p.stat").textContent=`${n.current.pressure} hPa`;const a=e.querySelector(".visibility p.stat"),i=n.current.visibility/1e3;a.textContent=`${i} km`,e.querySelector(".uv-index p.stat").textContent=`${n.current.uvi}`}(n),function(n){const e=n.daily,t=document.querySelector(".weather-cards");t.replaceChildren(),e.forEach(((n,e)=>{const r=new Date(1e3*n.dt).toLocaleDateString("us-en",{weekday:"long"}),o=[];n.weather.forEach((n=>{o.push(n.description)}));const a=`https://openweathermap.org/img/wn/${n.weather[0].icon}@2x.png`;let i=o.join("; ");i=i.charAt(0).toUpperCase()+i.slice(1),t.innerHTML+=`\n            <article class="weather-card">\n                <div class="main-weather">\n                    <h2>${r}</h2>\n                    <div>\n                        <p>H: <span class="temp">${Math.round(n.temp.max)}&deg;</span></p>\n                        <p>L: <span class="temp">${Math.round(n.temp.min)}&deg;</span></p>\n                    </div>\n                    <p>Chance of precipitation: <span class="pop">${100*n.pop}%</span></p>\n                    <p>${i}</p>\n                </div>\n                <img src=${a}>\n            </article>\n        `}))}(n),x.classList.remove("hidden")}));var r,o})),n.preventDefault()}}))})()})();