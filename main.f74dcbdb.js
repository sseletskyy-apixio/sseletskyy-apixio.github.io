parcelRequire=function(e,r,n,t){var i="function"==typeof parcelRequire&&parcelRequire,o="function"==typeof require&&require;function u(n,t){if(!r[n]){if(!e[n]){var f="function"==typeof parcelRequire&&parcelRequire;if(!t&&f)return f(n,!0);if(i)return i(n,!0);if(o&&"string"==typeof n)return o(n);var c=new Error("Cannot find module '"+n+"'");throw c.code="MODULE_NOT_FOUND",c}p.resolve=function(r){return e[n][1][r]||r},p.cache={};var l=r[n]=new u.Module(n);e[n][0].call(l.exports,p,l,l.exports,this)}return r[n].exports;function p(e){return u(p.resolve(e))}}u.isParcelRequire=!0,u.Module=function(e){this.id=e,this.bundle=u,this.exports={}},u.modules=e,u.cache=r,u.parent=i,u.register=function(r,n){e[r]=[function(e,r){r.exports=n},{}]};for(var f=0;f<n.length;f++)u(n[f]);if(n.length){var c=u(n[n.length-1]);"object"==typeof exports&&"undefined"!=typeof module?module.exports=c:"function"==typeof define&&define.amd?define(function(){return c}):t&&(this[t]=c)}return u}({"XYG5":[function(require,module,exports) {
function t(t,o){return r(t)||e(t,o)||n()}function n(){throw new TypeError("Invalid attempt to destructure non-iterable instance")}function e(t,n){var e=[],r=!0,o=!1,a=void 0;try{for(var c,i=t[Symbol.iterator]();!(r=(c=i.next()).done)&&(e.push(c.value),!n||e.length!==n);r=!0);}catch(l){o=!0,a=l}finally{try{r||null==i.return||i.return()}finally{if(o)throw a}}return e}function r(t){if(Array.isArray(t))return t}!function(){var n=450;function e(t){return t.offsetTop-t.scrollTop}function r(){var t=Array.from(document.querySelectorAll("div.section[id]")),r=function(r){return function(){var o=function(t){return t.reduce(function(t,n){return t[n.id]=e(n),t},{})}(t),a="#".concat(r.dataset.scrollto);history.pushState?history.pushState(null,null,a):location.hash=a,function(){var t,e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:0,r=window.pageYOffset,o=Math.PI/(n/15),a=Math.abs(r-e)/2,c=0,i=r>e?setInterval(function(){window.pageYOffset>e?(c+=1,t=a-a*Math.cos(c*o),window.scrollTo(0,r-t)):clearInterval(i)},15):setInterval(function(){window.pageYOffset<e?(c+=1,t=a-a*Math.cos(c*o),window.scrollTo(0,r+t)):clearInterval(i)},15);setTimeout(function(){clearInterval(i)},n)}(o[r.dataset.scrollto])}};Array.from(document.querySelectorAll("a[data-scrollto]")).forEach(function(t){t.addEventListener("click",r(t),!1)})}window.addEventListener("load",function(){var n,e,o,a;window.setTimeout(function(){var t=document.body;t.classList.add("loaded"),t.classList.remove("loading")},300),n=new RegExp('src="([^"]*).*data-src="([^"]*)'),e=Array.from(document.getElementsByTagName("img")),o=Array.from(document.querySelectorAll("noscript")).reduce(function(e,r){return r.textContent.split("<img").map(function(r){var o=n.exec(r);if(Array.isArray(o)&&o.length>2){var a=t(o.slice(1),2),c=a[0],i=a[1];e[i]=c}}),e},{}),e.forEach(function(t){var n=t.getAttribute("data-src");n&&o[n]&&(t.setAttribute("src",o[n]),t.onload=function(t,n){return function(){console.log("img ".concat(n," is loaded")),$(t).removeClass("img-blurred")}}(t,n))}),r(),a=document.querySelectorAll("[data-speed]"),window.addEventListener("scroll",function(){var t=!0,n=!1,e=void 0;try{for(var r,o=a[Symbol.iterator]();!(t=(r=o.next()).done);t=!0){var c=r.value,i="up"==c.dataset.direction?"-":"",l=this.pageYOffset*c.dataset.speed;c.classList.contains("banner-title")?c.style.transform="translate3d(0,".concat(i).concat(l,"px,0) rotate(-").concat(parseFloat(this.pageYOffset/10),"deg)"):c.classList.contains("banner-subtitle")?c.style.transform="translate3d(0,".concat(i).concat(l,"px,0) rotate(-3deg)"):c.style.transform="translate3d(0,".concat(i).concat(l,"px,0)")}}catch(s){n=!0,e=s}finally{try{t||null==o.return||o.return()}finally{if(n)throw e}}})},!1)}();
},{}]},{},["XYG5"], null)