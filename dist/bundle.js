!function(){"use strict";var e,t,n,c,s,a,i,o,d,l,r,u,m,v,f;m=document.querySelectorAll(".main-slider .slide"),v=0,f=function(e,t){return e[t].classList.add("dn"),++t>=e.length&&(t=0),e[t].classList.remove("dn"),t},function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:3e3;setInterval((function(){v=f(e,v)}),t)}(m,5e3),function(){for(var e=document.querySelector(".gallery-slider"),t=e.querySelectorAll(".slide"),n=e.querySelector(".slider-dots"),c=0;c<t.length;c++){var s=document.createElement("li"),a=document.createElement("button");s.classList.add("dot"),s.append(a),0===c&&s.classList.add("slick-active"),n.append(s)}var i,o=n.querySelectorAll(".dot"),d=0,l=function(e,t,n){e[t].classList.remove(n)},r=function(e,t,n){e[t].classList.add(n)},u=function(){l(t,d,"slide-active"),l(o,d,"slick-active"),++d>=t.length&&(d=0),r(t,d,"slide-active"),r(o,d,"slick-active")},m=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:3e3;i=setInterval(u,e)};e.addEventListener("click",(function(e){e.preventDefault();var n=e.target;(n.matches(".slider-arrow, .dot")||n.parentNode.matches(".slider-arrow, .dot"))&&(l(t,d,"slide-active"),l(o,d,"slick-active"),n.parentNode.matches(".prev")||n.matches(".prev")?d--:n.parentNode.matches(".next")||n.matches(".next")?d++:n.parentNode.matches(".dot")&&o.forEach((function(e,t){e===n.parentNode&&(d=t)})),d>=t.length&&(d=0),d<0&&(d=t.length-1),r(t,d,"slide-active"),r(o,d,"slick-active"))})),e.addEventListener("mouseover",(function(e){e.target.matches(".slider-arrow, .dot")&&clearInterval(i)})),e.addEventListener("mouseout",(function(e){e.target.matches(".slider-arrow, .dot")&&m(5e3)})),m(5e3)}(),r=document.querySelector(".clubs-list"),u=r.querySelector("ul"),r.addEventListener("click",(function(){u.classList.toggle("db")})),o=document.querySelector(".top-menu"),d=document.querySelector(".fixed-gift"),l=document.getElementById("totop"),window.addEventListener("scroll",(function(){screen.width<=768&&window.pageYOffset>o.offsetTop?(o.classList.add("fixed"),d&&(d.style.top="".concat(15+o.offsetHeight,"px"))):(o.classList.remove("fixed"),d&&(d.style.top="")),window.pageYOffset>document.querySelector("header").offsetHeight?l.classList.add("db"):l.classList.remove("db")})),function(){var e=document.querySelector(".right"),t=document.querySelector(".fixed-gift"),n=document.getElementById("free_visit_form"),c=document.getElementById("callback_form"),s=document.getElementById("gift"),a=function(e){screen.width,e.style.display="block"},i=function(e,t){var n=e.target;(n.classList.contains("overlay")||n.classList.contains("close-form")||n.classList.contains("close_icon")||n.classList.contains("close-btn"))&&(t.style.display="")};e.addEventListener("click",(function(e){var t=e.target;t.classList.contains("open-popup")?a(n):t.classList.contains("callback-btn")&&a(c)})),t&&t.addEventListener("click",(function(){a(s),t.style.display="none"})),n.addEventListener("click",(function(e){i(e,n)})),c.addEventListener("click",(function(e){i(e,c)})),s&&s.addEventListener("click",(function(e){i(e,s),"block"!==s.style.display&&(t.style.display="")}))}(),i=document.querySelector(".popup-menu"),document.querySelector(".menu-button").addEventListener("click",(function(){i.classList.add("df")})),i.addEventListener("click",(function(e){var t=e.target;(t.parentNode.matches(".close-menu-btn")||t.parentNode.matches(".scroll"))&&i.classList.remove("df")})),e=document.getElementById("form1"),t=document.getElementById("form2"),n=document.getElementById("banner-form"),c=document.getElementById("card_order"),s=document.getElementById("footer_form"),new Set,a=function(e){var t=e.target;"name"===t.name?t.parentNode.classList.contains("price-message")?t.value=t.value.replace(/[^а-яё0-9a-z ]/gi,""):t.value=t.value.replace(/[^а-яё ]/gi,""):"phone"===t.name&&(t.value=t.value.replace(/[^0-9+\-()]/gi,""))},e.addEventListener("input",a),t.addEventListener("input",a),n.addEventListener("input",a),c.addEventListener("input",a),s.addEventListener("input",a)}();