var v=Object.defineProperty,f=Object.defineProperties;var y=Object.getOwnPropertyDescriptors;var n=Object.getOwnPropertySymbols;var k=Object.prototype.hasOwnProperty,P=Object.prototype.propertyIsEnumerable;var _=(e,s,a)=>s in e?v(e,s,{enumerable:!0,configurable:!0,writable:!0,value:a}):e[s]=a,C=(e,s)=>{for(var a in s||(s={}))k.call(s,a)&&_(e,a,s[a]);if(n)for(var a of n(s))P.call(s,a)&&_(e,a,s[a]);return e},o=(e,s)=>f(e,y(s));import{m as W,r as w,o as c,c as p,b as t,n as l,F as x,g as B,i as $,w as u,t as d}from"./vendor.78f0539e.js";import{_ as F,C as I}from"./index.805d61b7.js";const L={name:"Products",components:{Card:I},data(){return{containerClass:"products"}},computed:o(C({},W(["products"])),{filterClass(){return`${this.containerClass}__filter_panel`},gridClass(){return`${this.containerClass}__grid`},imageWrapperClass(){return`${this.gridClass}__image_wrapper`},imageClass(){return`${this.gridClass}__image`},detailsClass(){return`${this.gridClass}__details`},titleClass(){return`${this.detailsClass}__title`},priceWrapperClass(){return`${this.detailsClass}__price`},priceCurrencyClass(){return`${this.priceWrapperClass}__currency`}}),methods:{goToProduct(e){const s=e.toLowerCase().replaceAll(" ","-");this.$router.push({name:"Product",params:{productId:s}})}}},S=["src"];function T(e,s,a,b,m,r){const g=w("Card");return c(),p("div",{class:l(m.containerClass)},[t("div",{class:l(r.filterClass)},"Filters",2),t("div",{class:l(r.gridClass)},[(c(!0),p(x,null,B(e.products,(i,h)=>(c(),$(g,{onClick:z=>r.goToProduct(i.details.title),key:h},{"card-image":u(()=>[t("div",{class:l(r.imageWrapperClass)},[t("img",{src:i.image,class:l(r.imageClass)},null,10,S)],2)]),"card-details":u(()=>[t("div",{class:l(r.detailsClass)},[t("div",{class:l(r.titleClass)},d(i.details.title),3),t("div",{class:l(r.priceWrapperClass)},[t("span",null,d(i.details.price),1),t("span",{class:l(r.priceCurrencyClass)},d(i.details.currency),3)],2)],2)]),_:2},1032,["onClick"]))),128))],2)],2)}var N=F(L,[["render",T],["__scopeId","data-v-368ee34a"]]);export{N as default};
