var z=Object.defineProperty,B=Object.defineProperties;var V=Object.getOwnPropertyDescriptors;var R=Object.getOwnPropertySymbols;var G=Object.prototype.hasOwnProperty,j=Object.prototype.propertyIsEnumerable;var I=(e,t,n)=>t in e?z(e,t,{enumerable:!0,configurable:!0,writable:!0,value:n}):e[t]=n,p=(e,t)=>{for(var n in t||(t={}))G.call(t,n)&&I(e,n,t[n]);if(R)for(var n of R(t))j.call(t,n)&&I(e,n,t[n]);return e},v=(e,t)=>B(e,V(t));import{m as b,a as L,o as c,c as d,b as l,n as o,r as _,d as m,p as x,e as A,f as W,g as q,h as U,i as K,F as y,j as k,k as H,t as f,l as Z,q as J}from"./vendor.bfd18af9.js";const Q=function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const r of document.querySelectorAll('link[rel="modulepreload"]'))i(r);new MutationObserver(r=>{for(const s of r)if(s.type==="childList")for(const a of s.addedNodes)a.tagName==="LINK"&&a.rel==="modulepreload"&&i(a)}).observe(document,{childList:!0,subtree:!0});function n(r){const s={};return r.integrity&&(s.integrity=r.integrity),r.referrerpolicy&&(s.referrerPolicy=r.referrerpolicy),r.crossorigin==="use-credentials"?s.credentials="include":r.crossorigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function i(r){if(r.ep)return;r.ep=!0;const s=n(r);fetch(r.href,s)}};Q();var h=(e,t)=>{const n=e.__vccOpts||e;for(const[i,r]of t)n[i]=r;return n};const X={name:"MenuIcon",data(){return{containerClass:"menu_icon"}},watch:{showMenu(e,t){this.triggerIconAnimation(e)}},computed:v(p({},b(["showMenu"])),{menuAnimationClass(){return`${this.containerClass}__animation`},firstLineClass(){return`${this.containerClass}__first_line`},firstLineRotateClass(){return`${this.firstLineClass}__rotate`},firstLineRotateReversedClass(){return`${this.firstLineRotateClass}__reversed`},secondLineClass(){return`${this.containerClass}__second_line`},secondLineRotateClass(){return`${this.secondLineClass}__rotate`},secondLineRotateReversedClass(){return`${this.secondLineRotateClass}__reversed`}}),methods:v(p({},L(["setShowMenu"])),{triggerIconAnimation(e){const t=document.getElementById("dropdown-icon-first-line"),n=document.getElementById("dropdown-icon-second-line");e?(t.classList.add(this.firstLineRotateClass),n.classList.add(this.secondLineRotateClass),t.classList.remove(this.firstLineRotateReversedClass),n.classList.remove(this.secondLineRotateReversedClass)):(t.classList.add(this.firstLineRotateReversedClass),n.classList.add(this.secondLineRotateReversedClass),t.classList.remove(this.firstLineRotateClass),n.classList.remove(this.secondLineRotateClass))},toggleMenu(){this.triggerIconAnimation(),this.setShowMenu(!this.showMenu)}})};function Y(e,t,n,i,r,s){return c(),d("div",{onClick:t[0]||(t[0]=(...a)=>s.toggleMenu&&s.toggleMenu(...a)),class:o(r.containerClass)},[l("div",{class:o(s.firstLineClass),id:"dropdown-icon-first-line"},null,2),l("div",{class:o(s.secondLineClass),id:"dropdown-icon-second-line"},null,2)],2)}var ee=h(X,[["render",Y],["__scopeId","data-v-51c07504"]]);const te={},se={version:"1.1",id:"Capa_1",xmlns:"http://www.w3.org/2000/svg","xmlns:xlink":"http://www.w3.org/1999/xlink",x:"0px",y:"0px",width:"20",height:"20",viewBox:"0 0 30.239 30.239",style:{"enable-background":"new 0 0 30.239 30.239"},"xml:space":"preserve"},re=l("path",{d:`M20.194,3.46c-4.613-4.613-12.121-4.613-16.734,0c-4.612,4.614-4.612,12.121,0,16.735\r
		c4.108,4.107,10.506,4.547,15.116,1.34c0.097,0.459,0.319,0.897,0.676,1.254l6.718,6.718c0.979,0.977,2.561,0.977,3.535,0\r
		c0.978-0.978,0.978-2.56,0-3.535l-6.718-6.72c-0.355-0.354-0.794-0.577-1.253-0.674C24.743,13.967,24.303,7.57,20.194,3.46z\r
		 M18.073,18.074c-3.444,3.444-9.049,3.444-12.492,0c-3.442-3.444-3.442-9.048,0-12.492c3.443-3.443,9.048-3.443,12.492,0\r
		C21.517,9.026,21.517,14.63,18.073,18.074z`},null,-1),ne=[re];function ae(e,t){return c(),d("svg",se,ne)}var N=h(te,[["render",ae]]);const oe={name:"SearchboxDesktop",components:{MagnifyingGlassIcon:N},data(){return{containerClass:"searchbox_desktop"}},computed:{searchIconClass(){return`${this.containerClass}__icon`}}},ie=e=>(x("data-v-b0c74e94"),e=e(),A(),e),ce=ie(()=>l("input",{type:"text",placeholder:"Ce cau\u021Bi ast\u0103zi?"},null,-1));function le(e,t,n,i,r,s){const a=_("MagnifyingGlassIcon");return c(),d("div",{class:o(r.containerClass)},[ce,m(a,{class:o(s.searchIconClass)},null,8,["class"])],2)}var de=h(oe,[["render",le],["__scopeId","data-v-b0c74e94"]]);const ue={},_e={xmlns:"http://www.w3.org/2000/svg","xmlns:xlink":"http://www.w3.org/1999/xlink",version:"1.1",width:"40",height:"40",viewBox:"0 0 256 256","xml:space":"preserve"},pe=W('<desc>Created with Fabric.js 1.7.22</desc><defs></defs><g transform="translate(128 128) scale(0.72 0.72)" style=""><g style="stroke:none;stroke-width:0;stroke-dasharray:none;stroke-linecap:butt;stroke-linejoin:miter;stroke-miterlimit:10;fill:none;fill-rule:nonzero;opacity:1;" transform="translate(-175.05 -175.05000000000004) scale(3.89 3.89)"><path d="M 89.26 25.686 c -0.707 -0.946 -1.789 -1.488 -2.97 -1.488 H 74.974 H 30.6 l -0.686 -2.642 c -0.595 -2.291 -2.664 -3.892 -5.031 -3.892 h -7.565 c -0.552 0 -1 0.448 -1 1 c 0 0.552 0.448 1 1 1 h 7.565 c 1.457 0 2.729 0.984 3.096 2.394 l 9.095 35.022 c 0.114 0.441 0.512 0.749 0.968 0.749 h 42.52 c 0.553 0 1 -0.447 1 -1 s -0.447 -1 -1 -1 H 38.814 l -1.857 -7.149 h 43.176 c 2.284 0 4.332 -1.53 4.979 -3.72 l 4.732 -16.006 C 90.18 27.823 89.966 26.631 89.26 25.686 z M 87.927 28.388 l -4.732 16.006 c -0.398 1.347 -1.657 2.287 -3.061 2.287 H 36.438 l -5.319 -20.483 h 43.855 H 86.29 c 0.544 0 1.042 0.25 1.367 0.685 C 87.983 27.318 88.081 27.867 87.927 28.388 z" style="stroke:black;stroke-width:1;stroke-dasharray:none;stroke-linecap:butt;stroke-linejoin:miter;stroke-miterlimit:10;fill:rgb(0, 0, 0);fill-rule:nonzero;opacity:1;" transform=" matrix(1 0 0 1 0 0) " stroke-linecap="round"></path><path d="M 45.396 72.335 c -3.167 0 -5.743 -2.576 -5.743 -5.743 c 0 -3.166 2.576 -5.742 5.743 -5.742 c 3.166 0 5.743 2.576 5.743 5.742 C 51.139 69.759 48.563 72.335 45.396 72.335 z M 45.396 62.85 c -2.064 0 -3.743 1.679 -3.743 3.742 c 0 2.064 1.679 3.743 3.743 3.743 s 3.743 -1.679 3.743 -3.743 C 49.139 64.529 47.46 62.85 45.396 62.85 z" style="stroke:black;stroke-width:1;stroke-dasharray:none;stroke-linecap:butt;stroke-linejoin:miter;stroke-miterlimit:10;fill:rgb(0, 0, 0);fill-rule:nonzero;opacity:1;" transform=" matrix(1 0 0 1 0 0) " stroke-linecap="round"></path><path d="M 72.113 72.335 c -3.166 0 -5.742 -2.576 -5.742 -5.743 c 0 -3.166 2.576 -5.742 5.742 -5.742 c 3.167 0 5.743 2.576 5.743 5.742 C 77.856 69.759 75.28 72.335 72.113 72.335 z M 72.113 62.85 c -2.063 0 -3.742 1.679 -3.742 3.742 c 0 2.064 1.679 3.743 3.742 3.743 c 2.064 0 3.743 -1.679 3.743 -3.743 C 75.856 64.529 74.177 62.85 72.113 62.85 z" style="stroke:black;stroke-width:1;stroke-dasharray:none;stroke-linecap:butt;stroke-linejoin:miter;stroke-miterlimit:10;fill:rgb(0, 0, 0);fill-rule:nonzero;opacity:1;" transform=" matrix(1 0 0 1 0 0) " stroke-linecap="round"></path><path d="M 20.936 32.205 H 1 c -0.552 0 -1 -0.448 -1 -1 s 0.448 -1 1 -1 h 19.936 c 0.552 0 1 0.448 1 1 S 21.488 32.205 20.936 32.205 z" style="stroke:black;stroke-width:1;stroke-dasharray:none;stroke-linecap:butt;stroke-linejoin:miter;stroke-miterlimit:10;fill:rgb(0, 0, 0);fill-rule:nonzero;opacity:1;" transform=" matrix(1 0 0 1 0 0) " stroke-linecap="round"></path><path d="M 21.972 40.443 H 2.037 c -0.552 0 -1 -0.448 -1 -1 c 0 -0.552 0.448 -1 1 -1 h 19.936 c 0.552 0 1 0.448 1 1 C 22.972 39.995 22.524 40.443 21.972 40.443 z" style="stroke:black;stroke-width:1;stroke-dasharray:none;stroke-linecap:butt;stroke-linejoin:miter;stroke-miterlimit:10;fill:rgb(0, 0, 0);fill-rule:nonzero;opacity:1;" transform=" matrix(1 0 0 1 0 0) " stroke-linecap="round"></path><path d="M 23.228 48.681 H 3.292 c -0.552 0 -1 -0.447 -1 -1 s 0.448 -1 1 -1 h 19.936 c 0.552 0 1 0.447 1 1 S 23.78 48.681 23.228 48.681 z" style="stroke:black;stroke-width:1;stroke-dasharray:none;stroke-linecap:butt;stroke-linejoin:miter;stroke-miterlimit:10;fill:rgb(0, 0, 0);fill-rule:nonzero;opacity:1;" transform=" matrix(1 0 0 1 0 0) " stroke-linecap="round"></path></g></g>',3),me=[pe];function he(e,t){return c(),d("svg",_e,me)}var ve=h(ue,[["render",he]]);const ge={name:"Header",components:{MenuIcon:ee,SearchboxDesktop:de,CartIcon:ve},data(){return{containerClass:"header"}},computed:{brandNameClass(){return`${this.containerClass}__name`},dropdownIconClass(){return`${this.containerClass}__dropdown_icon`},searchboxClass(){return`${this.containerClass}__searchbox`},cartClass(){return`${this.containerClass}__cart`},cartAnimationClass(){return`${this.cartClass}__animation`},cartAnimationReversedClass(){return`${this.cartAnimationClass}__reversed`}},methods:v(p({},L(["setShowMenu"])),{addCartAnimation(){const e=document.getElementById("cart-icon");e.classList.add(this.cartAnimationClass),setTimeout(()=>{e.classList.add(this.cartAnimationReversedClass),this.$router.push({name:"Cart"})},500),setTimeout(()=>{e.classList.remove(this.cartAnimationClass),e.classList.remove(this.cartAnimationReversedClass)},1e3),this.setShowMenu(!1)},goHome(){this.$router.push({name:"Categories"}),this.setShowMenu(!1)}})};function Ce(e,t,n,i,r,s){const a=_("MenuIcon"),u=_("SearchboxDesktop"),g=_("CartIcon");return c(),d("div",{class:o(r.containerClass)},[l("div",{class:o(s.dropdownIconClass)},[m(a)],2),l("div",{class:o(s.brandNameClass),onClick:t[0]||(t[0]=(...C)=>s.goHome&&s.goHome(...C))},"\u0218EMINEE BOLOVAN",2),l("div",{class:o(s.searchboxClass)},[m(u)],2),l("div",{class:o(s.cartClass),onClick:t[1]||(t[1]=(...C)=>s.addCartAnimation&&s.addCartAnimation(...C)),id:"cart-icon"},[m(g)],2)],2)}var fe=h(ge,[["render",Ce],["__scopeId","data-v-6e898dec"]]);const be="modulepreload",M={},ye="/",w=function(t,n){return!n||n.length===0?t():Promise.all(n.map(i=>{if(i=`${ye}${i}`,i in M)return;M[i]=!0;const r=i.endsWith(".css"),s=r?'[rel="stylesheet"]':"";if(document.querySelector(`link[href="${i}"]${s}`))return;const a=document.createElement("link");if(a.rel=r?"stylesheet":be,r||(a.as="script",a.crossOrigin=""),a.href=i,document.head.appendChild(a),r)return new Promise((u,g)=>{a.addEventListener("load",u),a.addEventListener("error",()=>g(new Error(`Unable to preload CSS for ${i}`)))})})).then(()=>t())},ke=()=>w(()=>import("./Categories.06e4e810.js"),["assets/Categories.06e4e810.js","assets/Categories.53501a10.css","assets/vendor.bfd18af9.js","assets/Card.87ff2a06.js","assets/Card.302fd119.css"]),we=()=>w(()=>import("./Products.83f76045.js"),["assets/Products.83f76045.js","assets/Products.973139e5.css","assets/vendor.bfd18af9.js","assets/Card.87ff2a06.js","assets/Card.302fd119.css"]),Le=()=>w(()=>import("./Product.afbb4777.js"),["assets/Product.afbb4777.js","assets/Product.093a16ce.css","assets/vendor.bfd18af9.js"]),xe=()=>w(()=>import("./Cart.02ca3787.js"),["assets/Cart.02ca3787.js","assets/Cart.00b70515.css","assets/vendor.bfd18af9.js"]),Ae=[{path:"/",component:ke,name:"Categories"},{path:"/:categoryId",component:we,name:"Products"},{path:"/:categoryId/:productId",component:Le,name:"Product"},{path:"/cart",component:xe,name:"Cart"}],E=q({history:U(),routes:Ae});var S=[{shortTitle:"Focare",longTitle:"Focare \u0219emineu",image:"https://semineebolovan.ro/wp-content/uploads/2018/01/AL9R_H_anim_0.png",id:"focare-\u0219emineu"},{shortTitle:"Termocamine",longTitle:"Termocamine",image:"https://semineebolovan.ro/wp-content/uploads/2018/01/AL9R_G_H_anim_0.png",id:"termocamine"},{shortTitle:"Burlane",longTitle:"Burlane din o\u021Bel",image:"https://semineebolovan.ro/wp-content/uploads/2018/01/burlane2.png",id:"burlane-din-o\u021Bel"},{shortTitle:"Bio\u0219eminee",longTitle:"Bio\u0219eminee",image:"https://semineebolovan.ro/wp-content/uploads/2018/01/grill_gall01_alpha.png",id:"bio\u0219eminee"},{shortTitle:"Elemente distribu\u021Bie",longTitle:"Elemente distribu\u021Bie aer",image:"https://semineebolovan.ro/wp-content/uploads/2018/01/Distributie-aer-2.jpg",id:"elemente-distribu\u021Bie-aer"},{shortTitle:"Grile",longTitle:"Grile aer",image:"https://semineebolovan.ro/wp-content/uploads/2018/01/SL_56x56x9_perspective_.png",id:"grile-aer"},{shortTitle:"Sobe",longTitle:"Sobe pe lemne",image:"https://semineebolovan.ro/wp-content/uploads/2018/01/lupo_m_7-copy.png",id:"sobe-pe-lemne"},{shortTitle:"Acumulatoare",longTitle:"Acumulatoare de c\u0103ldur\u0103",image:"https://semineebolovan.ro/wp-content/uploads/2018/01/WCPW02_1.png",id:"acumulatoare-de-c\u0103ldur\u0103"}],T=[{image:"https://semineebolovan.ro/wp-content/uploads/2018/01/Distributie-aer-2.jpg",title:"Albero AL12 R.H-D",price:10532,currency:"RON",id:"albero-al12-r.h-d"},{image:"http://semineebolovan.ro/wp-content/uploads/2017/08/AL9S_H_anim_0-300x320_center_center.png",title:"Albero AL15 R.H-D",price:10532,currency:"RON",id:"albero-al15-r.h-d"},{image:"http://semineebolovan.ro/wp-content/uploads/2017/09/14R_G_H_anim_0-300x320_center_center.png",title:"Albero AL19 L.H-D",price:7300,currency:"RON",id:"albero-al19-L.H-D"},{image:"http://semineebolovan.ro/wp-content/uploads/2017/09/AL19L_H_anim_0-300x320_center_center.png",title:"Albero AL13 R.H-D",price:7300,currency:"RON",id:"albero-al13-r.h-d"},{image:"http://semineebolovan.ro/wp-content/uploads/2017/09/AL19R_H_anim_0-300x320_center_center.png",title:"Albero AL80 R.H-D",price:7300,currency:"RON",id:"albero-al80-r.h-d"},{image:"https://semineebolovan.ro/wp-content/uploads/2018/01/AL9R_G_H_anim_0.png",title:"Albero AL81 R.H-D",price:10532,currency:"RON",id:"albero-al81-r.h-d"},{image:"https://semineebolovan.ro/wp-content/uploads/2018/01/burlane2.png",title:"Albero AL25 R.G-D",price:1032,currency:"RON",id:"albero-al25-R.G-D"},{image:"http://semineebolovan.ro/wp-content/uploads/2017/09/AL16L_G_H_anim_0-300x320_center_center.png",title:"Marino AL33 R.H-D",price:10532,currency:"RON",id:"marino-al33-r.h-d"},{image:"https://semineebolovan.ro/wp-content/uploads/2018/01/Distributie-aer-2.jpg",title:"Toro AL23 R.H-D",price:10532,currency:"RON",id:"toro-al23-r.h-d"},{image:"http://semineebolovan.ro/wp-content/uploads/2017/08/AL9S_H_anim_0-300x320_center_center.png",title:"Tero AL35 R.H-D",price:10.532,currency:"RON",id:"tero-al35-r.h-d"},{image:"http://semineebolovan.ro/wp-content/uploads/2017/09/14R_G_H_anim_0-300x320_center_center.png",title:"Albero AL55 R.H-D",price:11500,currency:"RON",id:"albero-al55-r.h-d"},{image:"http://semineebolovan.ro/wp-content/uploads/2017/09/AL19L_H_anim_0-300x320_center_center.png",title:"Albero AL55 R.H-L",price:12532,currency:"RON",id:"albero-al55-r.h-l"}],$e=[{id:"putere",name:"Putere",expanded:!0,options:[{name:10,id:0,selected:!1},{name:15,id:1,selected:!1},{name:3,id:2,selected:!1},{name:9,id:3,selected:!1},{name:5,id:4,selected:!1},{name:4,id:5,selected:!1}]},{id:"tip-sticl\u0103",name:"Tip sticl\u0103",expanded:!0,options:[{name:"Standard",id:0,selected:!1},{name:"Sticl\u0103 dreapta",id:1,selected:!1},{name:"Sticl\u0103 st\xE2nga",id:2,selected:!1}]},{id:"tip-deschidere",name:"Tip deschidere",expanded:!0,options:[{name:"Vertical\u0103",id:0,selected:!1}]},{id:"tip-material",name:"Tip material",expanded:!0,options:[{name:"Font\u0103",id:0,selected:!1},{name:"O\u021Bel \u0219i \u0219amot\u0103",id:1,selected:!1}]}],Re=[{title:"CONTACT",details:[{key:"Adresa: ",value:"Alba Iulia, B-dul Tudor Vladimirescu, nr. 66"},{key:"Tel: ",value:"0744.792.373, 0747.297.127"},{key:"Fax: ",value:"0358.110.556"},{key:"Email: ",value:"semineebolovan@gmail.com"}]},{title:"SUPORT CLIEN\u021AI",details:[{key:"Adresa: ",value:"Alba Iulia, B-dul Tudor Vladimirescu, nr. 66"},{key:"Tel: ",value:"0744.792.373, 0747.297.127"},{key:"Fax: ",value:"0358.110.556"},{key:"Email: ",value:"semineebolovan@gmail.com"}]},{title:"COMENZI \u0218I LIVRARE",details:[{key:"Adresa: ",value:"Alba Iulia, B-dul Tudor Vladimirescu, nr. 66"},{key:"Tel: ",value:"0744.792.373, 0747.297.127"},{key:"Fax: ",value:"0358.110.556"},{key:"Email: ",value:"semineebolovan@gmail.com"}]}],O=K({state:{showMenu:!1,categories:S,products:T,filters:$e,footerInfo:Re,category:{},product:{}},mutations:{setShowMenu(e,t){e.showMenu=t},setCategory(e,t){e.category=p({},t)},setProduct(e,t){e.product=p({},t)},setFilters(e,t){e.filters=t}},actions:{setCategory({commit:e},t){const n=S.find(i=>i.id===t);e("setCategory",n)},setProduct({commit:e},t){const n=T.find(i=>i.id===t);e("setProduct",n)}}});const D=e=>{E.push({name:"Products",params:{categoryId:e}}),O.dispatch("setCategory",e)};const Ie={name:"Menu",data(){return{containerClass:"menu"}},computed:v(p({},b(["categories","showMenu"])),{categoriesClass(){return`${this.containerClass}__categories`},categoryClass(){return`${this.categoriesClass}__category`}}),methods:v(p({},L(["setShowMenu"])),{renderProducts:D})},Me=["onClick"];function Se(e,t,n,i,r,s){return e.showMenu?(c(),d("div",{key:0,class:o(r.containerClass)},[l("ul",{class:o(s.categoriesClass)},[(c(!0),d(y,null,k(e.categories,a=>(c(),d("li",{class:o(s.categoryClass),onClick:u=>(s.renderProducts(a.id),e.setShowMenu(!1))},f(a.longTitle),11,Me))),256))],2)],2)):H("",!0)}var Te=h(Ie,[["render",Se],["__scopeId","data-v-bbb87856"]]);const He={name:"SearchboxMobile",components:{MagnifyingGlassIcon:N},data(){return{containerClass:"searchbox_mobile"}},computed:{searchIconClass(){return`${this.containerClass}__icon`}}},Ne=e=>(x("data-v-06f0f997"),e=e(),A(),e),Ee=Ne(()=>l("input",{type:"text",placeholder:"Ce cau\u021Bi ast\u0103zi?"},null,-1));function Oe(e,t,n,i,r,s){const a=_("MagnifyingGlassIcon");return c(),d("div",{class:o(r.containerClass)},[Ee,m(a,{class:o(s.searchIconClass)},null,8,["class"])],2)}var De=h(He,[["render",Oe],["__scopeId","data-v-06f0f997"]]);const Pe={name:"Navbar",components:{SearchboxMobile:De},data(){return{containerClass:"navbar"}},computed:v(p({},b(["categories"])),{searchboxClass(){return`${this.containerClass}__searchbox`},categoriesClass(){return`${this.containerClass}__categories`},categoryClass(){return`${this.categoriesClass}__category`},categoryNameClass(){return`${this.categoryClass}__name`},categoryNameActiveClass(){return e=>this.$route.params.categoryId===e?`${this.categoryNameClass}__active`:""}}),methods:{renderProducts:D}},Fe=["onClick"];function ze(e,t,n,i,r,s){const a=_("SearchboxMobile");return c(),d("div",{class:o(r.containerClass)},[l("div",{class:o(s.searchboxClass)},[m(a)],2),l("ul",{class:o(s.categoriesClass)},[(c(!0),d(y,null,k(e.categories,u=>(c(),d("li",{class:o(s.categoryClass),onClick:g=>s.renderProducts(u.id)},[l("div",{class:o([s.categoryNameClass,s.categoryNameActiveClass(u.id)])},f(u.shortTitle),3)],10,Fe))),256))],2)],2)}var Be=h(Pe,[["render",ze],["__scopeId","data-v-62f9be7e"]]),Ve="/assets/fireplace.b45495a3.mp4";const Ge={name:"Fireplace",data(){return{containerClass:"fireplace"}}},je=e=>(x("data-v-5d8df318"),e=e(),A(),e),We=je(()=>l("video",{autoplay:"",muted:"",loop:""},[l("source",{src:Ve,type:"video/mp4"})],-1)),qe=[We];function Ue(e,t,n,i,r,s){return c(),d("div",{class:o(r.containerClass)},qe,2)}var Ke=h(Ge,[["render",Ue],["__scopeId","data-v-5d8df318"]]);const Ze={name:"Footer",data(){return{containerClass:"footer"}},computed:v(p({},b(["footerInfo"])),{wrapperClass(){return`${this.containerClass}__wrapper`},contentClass(){return`${this.containerClass}__content`},titleClass(){return`${this.contentClass}__title`},detailsClass(){return`${this.contentClass}__details`},detailsTitleClass(){return`${this.detailsClass}__title`}})};function Je(e,t,n,i,r,s){return c(),d("div",{class:o(r.containerClass)},[l("ul",{class:o(s.wrapperClass)},[(c(!0),d(y,null,k(e.footerInfo,a=>(c(),d("li",{class:o(s.contentClass)},[l("div",{class:o(s.titleClass)},f(a.title),3),l("ul",{class:o(s.detailsClass)},[(c(!0),d(y,null,k(a.details,u=>(c(),d("li",null,[l("span",{class:o(s.detailsTitleClass)},f(u.key),3),l("span",null,f(u.value),1)]))),256))],2)],2))),256))],2)],2)}var Qe=h(Ze,[["render",Je],["__scopeId","data-v-05100c70"]]);const Xe={name:"App",components:{Header:fe,Navbar:Be,Footer:Qe,Fireplace:Ke,Menu:Te},data(){return{containerClass:"app"}},computed:v(p({},b(["showMenu"])),{contentClass(){return`${this.containerClass}__content`}})};function Ye(e,t,n,i,r,s){const a=_("Header"),u=_("Menu"),g=_("Navbar"),C=_("Fireplace"),P=_("router-view"),F=_("Footer");return c(),d("div",{class:o(r.containerClass)},[m(a),e.showMenu?(c(),Z(u,{key:0})):H("",!0),m(g),m(C),m(P,{class:o(s.contentClass)},null,8,["class"]),m(F)],2)}var et=h(Xe,[["render",Ye]]);const $=J(et);$.use(O);$.use(E);$.mount("#app");export{h as _,D as r};