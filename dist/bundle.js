!function(){"use strict";var e,t,n,c,i,s,l,a,o,d,r,u;d=document.querySelector(".main-slider").querySelectorAll(".slide"),r=0,u=function(){d[r].classList.add("dn"),++r>=d.length&&(r=0),d[r].classList.remove("dn")},function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:3e3;setInterval(u,e)}(5e3),a=document.querySelector(".clubs-list"),o=a.querySelector("ul"),a.addEventListener("click",(function(){o.classList.toggle("db")})),e=document.querySelector(".right"),t=document.querySelector(".fixed-gift"),n=document.getElementById("free_visit_form"),c=document.getElementById("callback_form"),i=document.getElementById("gift"),s=function(e){screen.width,e.style.display="block"},l=function(e,t){var n=e.target;(n.classList.contains("overlay")||n.classList.contains("close-form")||n.classList.contains("close_icon")||n.classList.contains("close-btn"))&&(t.style.display="")},e.addEventListener("click",(function(e){var t=e.target;t.classList.contains("open-popup")?s(n):t.classList.contains("callback-btn")&&s(c)})),t&&t.addEventListener("click",(function(){s(i),t.style.display="none"})),n.addEventListener("click",(function(e){l(e,n)})),c.addEventListener("click",(function(e){l(e,c)})),i&&i.addEventListener("click",(function(e){l(e,i),"block"!==i.style.display&&(t.style.display="")})),function(){var e=document.getElementById("form1"),t=document.getElementById("form2"),n=document.getElementById("banner-form"),c=document.getElementById("card_order"),i=document.getElementById("footer_form"),s=(new Set,function(e){var t=e.target;"name"===t.name?t.parentNode.classList.contains("price-message")?t.value=t.value.replace(/[^а-яё0-9a-z ]/gi,""):t.value=t.value.replace(/[^а-яё ]/gi,""):"phone"===t.name&&(t.value=t.value.replace(/[^0-9+\-()]/gi,""))});e.addEventListener("input",s),t.addEventListener("input",s),n.addEventListener("input",s),c.addEventListener("input",s),i.addEventListener("input",s)}()}();