import{_ as u,C as m}from"./index.33581eaa.js";import{r as g,o as s,c as o,b as t,n as r,F as A,g as C,h as R,w as p,t as n}from"./vendor.92ded09a.js";const b={name:"Products",components:{Card:m},data(){return{containerClass:"products",products:[{image:"http://semineebolovan.ro/wp-content/uploads/2017/09/AL19R_H_anim_0-300x320_center_center.png",details:{title:"Albero AL19 R.H-D",price:10532,currency:"RON"}},{image:"https://semineebolovan.ro/wp-content/uploads/2018/01/AL9R_G_H_anim_0.png",details:{title:"Albero AL19 R.H-D",price:10532,currency:"RON"}},{image:"https://semineebolovan.ro/wp-content/uploads/2018/01/burlane2.png",details:{title:"Albero AL19 R.H-D",price:10532,currency:"RON"}},{image:'http://semineebolovan.ro/wp-content/uploads/2017/09/AL16L_G_H_anim_0-300x320_center_center.png"',details:{title:"Albero AL19 R.H-D",price:10532,currency:"RON"}},{image:"https://semineebolovan.ro/wp-content/uploads/2018/01/Distributie-aer-2.jpg",details:{title:"Albero AL12 R.H-D",price:10532,currency:"RON"}},{image:"http://semineebolovan.ro/wp-content/uploads/2017/08/AL9S_H_anim_0-300x320_center_center.png",details:{title:"Albero AL15 R.H-D",price:10532,currency:"RON"}},{image:"http://semineebolovan.ro/wp-content/uploads/2017/09/14R_G_H_anim_0-300x320_center_center.png",details:{title:"Albero AL19 L.H-D",price:7300,currency:"RON"}},{image:"http://semineebolovan.ro/wp-content/uploads/2017/09/AL19L_H_anim_0-300x320_center_center.png",details:{title:"Albero AL13 R.H-D",price:7300,currency:"RON"}},{image:"http://semineebolovan.ro/wp-content/uploads/2017/09/AL19R_H_anim_0-300x320_center_center.png",details:{title:"Albero AL19 R.H-D",price:7300,currency:"RON"}},{image:"https://semineebolovan.ro/wp-content/uploads/2018/01/AL9R_G_H_anim_0.png",details:{title:"Albero AL19 R.H-D",price:10532,currency:"RON"}},{image:"https://semineebolovan.ro/wp-content/uploads/2018/01/burlane2.png",details:{title:"Albero AL25 R.G-D",price:1032,currency:"RON"}},{image:"http://semineebolovan.ro/wp-content/uploads/2017/09/AL16L_G_H_anim_0-300x320_center_center.png",details:{title:"Marino AL19 R.H-D",price:10532,currency:"RON"}},{image:"https://semineebolovan.ro/wp-content/uploads/2018/01/Distributie-aer-2.jpg",details:{title:"Toro AL19 R.H-D",price:10532,currency:"RON"}},{image:"http://semineebolovan.ro/wp-content/uploads/2017/08/AL9S_H_anim_0-300x320_center_center.png",details:{title:"Tero AL19 R.H-",price:10.532,currency:"RON"}},{image:"http://semineebolovan.ro/wp-content/uploads/2017/09/14R_G_H_anim_0-300x320_center_center.png",details:{title:"Albero AL19 R.H-",price:11500,currency:"RON"}},{image:"http://semineebolovan.ro/wp-content/uploads/2017/09/AL19L_H_anim_0-300x320_center_center.png",details:{title:"Albero AL125 R.H-D",price:12532,currency:"RON"}}]}},computed:{filterClass(){return`${this.containerClass}__filter_panel`},gridClass(){return`${this.containerClass}__grid`},imageWrapperClass(){return`${this.gridClass}__image_wrapper`},imageClass(){return`${this.gridClass}__image`},detailsClass(){return`${this.gridClass}__details`},titleClass(){return`${this.detailsClass}__title`},priceWrapperClass(){return`${this.detailsClass}__price`},priceCurrencyClass(){return`${this.priceWrapperClass}__currency`}},methods:{goToProduct(i){const l=i.toLowerCase().replaceAll(" ","-");this.$router.push({name:"Product",params:{productId:l}})}}},L=["src"];function h(i,l,v,H,c,e){const _=g("Card");return s(),o("div",{class:r(c.containerClass)},[t("div",{class:r(e.filterClass)},"Filters",2),t("div",{class:r(e.gridClass)},[(s(!0),o(A,null,C(c.products,(a,d)=>(s(),R(_,{onClick:y=>e.goToProduct(a.details.title),key:d},{"card-image":p(()=>[t("div",{class:r(e.imageWrapperClass)},[t("img",{src:a.image,class:r(e.imageClass)},null,10,L)],2)]),"card-details":p(()=>[t("div",{class:r(e.detailsClass)},[t("div",{class:r(e.titleClass)},n(a.details.title),3),t("div",{class:r(e.priceWrapperClass)},[t("span",null,n(a.details.price),1),t("span",{class:r(e.priceCurrencyClass)},n(a.details.currency),3)],2)],2)]),_:2},1032,["onClick"]))),128))],2)],2)}var N=u(b,[["render",h],["__scopeId","data-v-e6796c6c"]]);export{N as default};
