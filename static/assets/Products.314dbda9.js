var $=Object.defineProperty,F=Object.defineProperties;var k=Object.getOwnPropertyDescriptors;var u=Object.getOwnPropertySymbols;var x=Object.prototype.hasOwnProperty,T=Object.prototype.propertyIsEnumerable;var p=(s,e,t)=>e in s?$(s,e,{enumerable:!0,configurable:!0,writable:!0,value:t}):s[e]=t,o=(s,e)=>{for(var t in e||(e={}))x.call(e,t)&&p(s,t,e[t]);if(u)for(var t of u(e))T.call(e,t)&&p(s,t,e[t]);return s},d=(s,e)=>F(s,k(e));import{o as i,c as C,n as r,m as W,u as B,r as g,b as l,t as n,d as I,F as w,j as b,l as L,w as m}from"./vendor.50e9f247.js";import{C as N}from"./Card.00f5e7fd.js";import{_ as y}from"./index.de880dc7.js";const S={name:"FilterPanel",data(){return{containerClass:"filter_panel"}}};function V(s,e,t,v,_,a){return i(),C("div",{class:r(_.containerClass)},null,2)}var j=y(S,[["render",V],["__scopeId","data-v-4e3b4934"]]);const z={name:"Products",components:{Card:N,FilterPanel:j},data(){return{containerClass:"products"}},created(){const s=this.$route.params.categoryId;this.setCategory(s)},computed:d(o({},W(["products","category"])),{categoryClass(){return`${this.containerClass}__category`},categoryLineClass(){return`${this.categoryClass}__line`},categoryTitleClass(){return`${this.categoryClass}__title`},contentClass(){return`${this.containerClass}__content`},filterClass(){return`${this.contentClass}__filters`},gridClass(){return`${this.contentClass}__grid`},imageWrapperClass(){return`${this.gridClass}__image_wrapper`},imageClass(){return`${this.gridClass}__image`},detailsClass(){return`${this.gridClass}__details`},titleClass(){return`${this.detailsClass}__title`},priceWrapperClass(){return`${this.detailsClass}__price`},priceCurrencyClass(){return`${this.priceWrapperClass}__currency`}}),methods:d(o({},B(["setCategory"])),{goToProduct(s){this.$router.push({name:"Product",params:{productId:s}})}})},A=["src"];function D(s,e,t,v,_,a){const h=g("FilterPanel"),f=g("Card");return i(),C("div",{class:r(_.containerClass)},[l("div",{class:r(a.categoryClass)},[l("div",{class:r(a.categoryTitleClass)},n(s.category.longTitle),3)],2),l("div",{class:r(a.contentClass)},[l("div",{class:r(a.filterClass)},[I(h)],2),l("div",{class:r(a.gridClass)},[(i(!0),C(w,null,b(s.products,(c,P)=>(i(),L(f,{onClick:E=>a.goToProduct(c.id),key:P},{"card-image":m(()=>[l("div",{class:r(a.imageWrapperClass)},[l("img",{class:r(a.imageClass),src:c.image},null,10,A)],2)]),"card-details":m(()=>[l("div",{class:r(a.detailsClass)},[l("div",{class:r(a.titleClass)},n(c.title),3),l("div",{class:r(a.priceWrapperClass)},[l("span",null,n(c.price),1),l("span",{class:r(a.priceCurrencyClass)},n(c.currency),3)],2)],2)]),_:2},1032,["onClick"]))),128))],2)],2)],2)}var K=y(z,[["render",D],["__scopeId","data-v-8f710edc"]]);export{K as default};