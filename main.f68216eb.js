parcelRequire=function(e,r,n,t){var i="function"==typeof parcelRequire&&parcelRequire,o="function"==typeof require&&require;function u(n,t){if(!r[n]){if(!e[n]){var f="function"==typeof parcelRequire&&parcelRequire;if(!t&&f)return f(n,!0);if(i)return i(n,!0);if(o&&"string"==typeof n)return o(n);var c=new Error("Cannot find module '"+n+"'");throw c.code="MODULE_NOT_FOUND",c}p.resolve=function(r){return e[n][1][r]||r},p.cache={};var l=r[n]=new u.Module(n);e[n][0].call(l.exports,p,l,l.exports,this)}return r[n].exports;function p(e){return u(p.resolve(e))}}u.isParcelRequire=!0,u.Module=function(e){this.id=e,this.bundle=u,this.exports={}},u.modules=e,u.cache=r,u.parent=i,u.register=function(r,n){e[r]=[function(e,r){r.exports=n},{}]};for(var f=0;f<n.length;f++)u(n[f]);if(n.length){var c=u(n[n.length-1]);"object"==typeof exports&&"undefined"!=typeof module?module.exports=c:"function"==typeof define&&define.amd?define(function(){return c}):t&&(this[t]=c)}return u}({"XYG5":[function(require,module,exports) {
!function(){var t=450;function e(){var e,n=arguments.length>0&&void 0!==arguments[0]?arguments[0]:0,r=window.pageYOffset,o=Math.PI/(t/15),a=Math.abs(r-n)/2,c=0,i=r>n?setInterval(function(){window.pageYOffset>n?(c+=1,e=a-a*Math.cos(c*o),window.scrollTo(0,r-e)):clearInterval(i)},15):setInterval(function(){window.pageYOffset<n?(c+=1,e=a-a*Math.cos(c*o),window.scrollTo(0,r+e)):clearInterval(i)},15);return!0}function n(t){return t.offsetTop-t.scrollTop}function r(){var r=Array.from(document.querySelectorAll("div.section[id]"));window.addEventListener("keyup",function o(a){var c,i=window.pageYOffset||document.documentElement.scrollTop,s=function(t){return t.map(function(t){return n(t)})}(r);"ArrowDown"===a.code?c=Math.min.apply(null,s.filter(function(t){return t>i})):"ArrowUp"===a.code&&(c=Math.max.apply(null,s.filter(function(t){return t<i}))),Number.isFinite(c)&&(window.removeEventListener("keyup",o,!1),setTimeout(function(){return e(c)},0),setTimeout(function(){return window.addEventListener("keyup",o,!1)},2*t))},!1);var o=function(t){return function(){e(function(t){return t.reduce(function(t,e){return t[e.id]=n(e),t},{})}(r)[t.dataset.scrollto])}};Array.from(document.querySelectorAll("a[data-scrollto]")).forEach(function(t){t.addEventListener("click",o(t),!1)})}window.addEventListener("load",function(){var t,e,n;window.setTimeout(function(){var t=document.body;t.classList.add("loaded"),t.classList.remove("loading")},300),t=Array.from(document.getElementsByTagName("img")),e=Array.from(document.querySelectorAll("noscript")).reduce(function(t,e){var n=e.textContent.match(/\ssrc="([^"]*)"/i),r=e.textContent.match(/\sdata-src="([^"]*)"/i);return r&&r[1]&&n&&n[1]&&(t[r[1]]=n[1]),t},{}),t.forEach(function(t){var n=t.getAttribute("data-src");n&&e[n]&&t.setAttribute("src",e[n])}),r(),n=document.querySelectorAll("[data-speed]"),window.addEventListener("scroll",function(){var t=!0,e=!1,r=void 0;try{for(var o,a=n[Symbol.iterator]();!(t=(o=a.next()).done);t=!0){var c=o.value,i="up"==c.dataset.direction?"-":"",s=this.pageYOffset*c.dataset.speed;c.classList.contains("banner-title")?c.style.transform="translate3d(0,".concat(i).concat(s,"px,0) rotate(-").concat(parseFloat(this.pageYOffset/10),"deg)"):c.classList.contains("banner-subtitle")?c.style.transform="translate3d(0,".concat(i).concat(s,"px,0) rotate(-3deg)"):c.style.transform="translate3d(0,".concat(i).concat(s,"px,0)")}}catch(l){e=!0,r=l}finally{try{t||null==a.return||a.return()}finally{if(e)throw r}}})},!1)}();
},{}]},{},["XYG5"], null)