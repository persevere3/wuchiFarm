(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-f56755d2"],{"0549":function(t,a,e){"use strict";var s=e("1a15"),n=e.n(s);n.a},1941:function(t,a,e){},"1a15":function(t,a,e){},"26e9":function(t,a,e){"use strict";var s=function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("div",[e("loading",{attrs:{active:t.isLoading},on:{"update:active":function(a){t.isLoading=a}}},[e("div",{staticClass:"logoLoadingWrap d-flex flex-column\n                justify-content-center align-items-center"},[e("div",{staticClass:"logo bgCover",staticStyle:{"background-image":"url(img/logo.png)"}}),e("div",{staticClass:"loading d-flex justify-content-center align-items-center"},[e("div",{staticClass:"boxone"}),e("div",{staticClass:"boxtwo"})])])])],1)},n=[],i={props:["isLoading"]},r=i,c=(e("bf0c"),e("2877")),o=Object(c["a"])(r,s,n,!1,null,"3be6b206",null);a["a"]=o.exports},3324:function(t,a,e){"use strict";var s=e("349a"),n=e("795c"),i=(e("7f4e"),e("2877")),r=Object(i["a"])(n["default"],s["a"],s["b"],!1,null,"6385329f",null);a["default"]=r.exports},"349a":function(t,a,e){"use strict";var s=function(){var t=this,a=t.$createElement;t._self._c;return t._m(0)},n=[function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("div",[e("div",{staticClass:"footer p-3 d-flex justify-content-center align-items-center"},[t._v(" © 資料、圖片皆來自網路，僅個人練習使用，不作任何商業用途 ")])])}];e.d(a,"a",(function(){return s})),e.d(a,"b",(function(){return n}))},7171:function(t,a,e){},"795c":function(t,a,e){"use strict";var s=e("c37b"),n=e.n(s);a["default"]=n.a},"7f4e":function(t,a,e){"use strict";var s=e("7171"),n=e.n(s);n.a},9863:function(t,a,e){},a66a:function(t,a,e){},a8cc:function(t,a,e){"use strict";var s=e("a66a"),n=e.n(s);n.a},ae18:function(t,a,e){"use strict";var s=e("c221"),n=e.n(s);n.a},bea1:function(t,a,e){"use strict";var s=e("da82"),n=e.n(s);n.a},bf0c:function(t,a,e){"use strict";var s=e("1941"),n=e.n(s);n.a},bf79:function(t,a,e){"use strict";e.r(a);var s=function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("div",[e("BaseNavbar",{key:t.pageActive,staticClass:"sticky-top",attrs:{pageActive:t.pageActive}}),e("BaseAlert"),e("BaseBanner"),e("router-view"),e("BaseLogoLoading",{key:t.isLoading,attrs:{isLoading:t.isLoading}}),"/customerBase/customerShoppingCart"!==t.pageActive&&"/customerBase/customerData"!==t.pageActive?e("BaseLikeModal"):t._e(),"/customerBase/customerShoppingCart"!==t.pageActive&&"/customerBase/customerData"!==t.pageActive?e("BaseCartModal"):t._e(),e("BaseFooter")],1)},n=[],i=function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("div",[e("nav",{staticClass:"navbar navbar-expand-lg navbar-light bg-light p-0"},[e("div",{staticClass:"container"},[e("a",{staticClass:"ml-2 navbar-brand navbar-brandExpand bgCover",style:{backgroundImage:"url("+t.imgUrl+")"},attrs:{href:"#"},on:{click:function(a){return a.preventDefault(),t.routerPush("/customerBase")}}},[e("h1",[t._v("午憩農場")])]),e("h5",{staticClass:"text-info align-self-end "},[t._v("午憩農場")]),t._m(0),e("div",{staticClass:"collapse navbar-collapse",attrs:{id:"navbarNavDropdown"}},[e("ul",{staticClass:"navbar-nav ml-auto"},[e("li",{staticClass:"nav-item ",class:{active:"/customerBase"===t.pageActive}},[e("a",{staticClass:"nav-link",on:{click:function(a){return a.preventDefault(),t.routerPush("/customerBase")}}},[e("span",{staticClass:"navbarTc"},[t._v("首頁")]),e("span",{staticClass:"navbarEn"},[t._v("Home")]),e("i",{staticClass:"fa fa-home "}),e("span",{staticClass:"sr-only"},[t._v("(current)")])])]),e("li",{staticClass:"nav-item",class:{active:"/customerBase/customerProductList"===t.pageActive}},[e("a",{staticClass:"nav-link",on:{click:function(a){return a.preventDefault(),t.routerPush("/customerBase/customerProductList")}}},[e("span",{staticClass:"navbarTc"},[t._v("產品列表")]),e("span",{staticClass:"navbarEn"},[t._v("Products")]),e("i",{staticClass:"fas fa-gift "})])]),e("li",{staticClass:"nav-item",class:{active:"/customerBase/customerShoppingCart"===t.pageActive}},[e("a",{staticClass:"nav-link",on:{click:function(a){return a.preventDefault(),t.routerPush("/customerBase/customerShoppingCart")}}},[e("span",{staticClass:"navbarTc"},[t._v("購物車")]),e("span",{staticClass:"navbarEn"},[t._v("Shopping Cart")]),e("i",{staticClass:"fas fa-shopping-cart "})])])])])])])])},r=[function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("button",{staticClass:"navbar-toggler ml-auto mr-2",attrs:{type:"button","data-toggle":"collapse","data-target":"#navbarNavDropdown","aria-controls":"navbarNavDropdown","aria-expanded":"false","aria-label":"Toggle navigation"}},[e("span",{staticClass:"navbar-toggler-icon"})])}],c={props:["pageActive"],data:function(){return{imgUrl:"img/logo.png"}},methods:{routerPush:function(t){t!==this.$route.path&&this.$router.push("".concat(t))}}},o=c,l=(e("bea1"),e("2877")),u=Object(l["a"])(o,i,r,!1,null,"753cea8c",null),d=u.exports,v=e("c0f7"),f=function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("div",[e("div",{staticClass:"banner"},[e("div",{staticClass:"swiper-container"},[e("div",{staticClass:"swiper-wrapper"},[e("div",{staticClass:"swiper-slide bgCover",style:{backgroundImage:"url("+t.imgUrl[0]+")"}}),e("div",{staticClass:"swiper-slide bgCover",style:{backgroundImage:"url("+t.imgUrl[1]+")"}}),e("div",{staticClass:"swiper-slide bgCover",style:{backgroundImage:"url("+t.imgUrl[2]+")"}})]),e("div",{staticClass:"swiper-pagination"})]),t._m(0)])])},g=[function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("div",{staticClass:"textbackground p-2"},[e("div",{staticClass:"textborder d-flex flex-column\n                  align-items-start p-3"},[e("h4",{staticClass:"textfirst"},[t._v("After dinner sit a while,")]),e("h4",{staticClass:"textsecond"},[t._v("after supper walk a mile.")])])])}],p=e("b619"),m=(e("f4bd"),{data:function(){return{imgUrl:["img/0_1.jpg","img/0_2.jpg","img/0_3.jpg"]}},mounted:function(){new p["a"](".swiper-container",{pagination:{el:".swiper-pagination"}})}}),C=m,h=(e("cbc0"),Object(l["a"])(C,f,g,!1,null,"56bee468",null)),b=h.exports,_=e("26e9"),x=function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("div",[e("div",{staticClass:"likeModalIcon"},[e("a",{staticClass:"d-flex justify-content-center align-items-center",on:{click:function(a){return a.preventDefault(),t.showLikeModal(a)}}},[e("i",{staticClass:"fas fa-heart fa-2x"}),e("div",{staticClass:"cartLength d-flex justify-content-center align-items-center"},[t._v(" "+t._s(t.getLikeProducts.length)+" ")])])]),e("div",{staticClass:"modal fade modalExpand",attrs:{id:"likeModal"}},[e("div",{staticClass:"modal-dialog modal-dialogExpand"},[e("div",{staticClass:"modal-content "},[t.getLikeProducts.length?e("div",{staticClass:"container mb-3"},[t._m(0),e("div",{staticClass:"modalTableWrap d-flex"},[e("div",{staticClass:"boxone"}),e("div",{staticClass:"boxtwo"}),e("table",[e("tbody",t._l(t.getLikeProducts,(function(a,s){return e("tr",{key:s,staticClass:"p-1"},[e("td",{staticClass:"align-middle text-left bgCover p-1",style:{backgroundImage:"url("+a.imageUrl+")"},attrs:{width:"200"}},[e("div",{staticClass:"name p-1",on:{click:function(e){return e.preventDefault(),t.routerPush("/customerBase/customerProduct/"+a.id)}}},[t._v(" "+t._s(a.content)+t._s(a.title)+" ")])]),e("td",{staticClass:"align-middle text-center"},[e("i",{staticClass:"fas fa-heart fa-2x like p-1",class:{likeActive:!0},attrs:{"aria-hidden":"true"},on:{click:function(e){return e.stopPropagation(),t.updateLikeProducts(a)}}})])])})),0)])])]):e("div",{staticClass:"cartLength0  d-flex justify-content-center"},[e("h5",{staticClass:"py-2 px-3 "},[t._v("最愛目前沒有商品喔!")])])])])])])},k=[function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("div",{staticClass:"p-2"},[e("h5",[t._v("已加入最愛 :")])])}],w=e("1157"),L=e.n(w),y={computed:{getLikeProducts:function(){return this.$store.state.likeProducts}},methods:{updateLikeProducts:function(t){this.$store.dispatch("updateLikeProducts",t)},showLikeModal:function(){L()("#likeModal").modal("show")},routerPush:function(t){L()("#likeModal").modal("hide"),t!==this.$route.path&&this.$router.push(t)}}},B=y,$=(e("d266"),Object(l["a"])(B,x,k,!1,null,null,null)),P=$.exports,j=function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("div",[e("div",{staticClass:"cartModalIcon"},[e("a",{staticClass:"d-flex justify-content-center align-items-center",on:{click:function(a){return a.preventDefault(),t.showCartModal(a)}}},[e("i",{staticClass:"fas fa-shopping-cart fa-2x"}),e("div",{staticClass:"cartLength d-flex justify-content-center align-items-center"},[t._v(" "+t._s(t.getCartsLength)+" ")])])]),e("div",{staticClass:"modal fade modalExpand",attrs:{id:"CartModal"}},[e("div",{staticClass:"modal-dialog modal-dialogExpand"},[e("div",{staticClass:"modal-content"},[t.getCartsLength?e("div",{staticClass:"container"},[t._m(0),e("div",{staticClass:"modalTableWrap d-flex"},[e("div",{staticClass:"boxone"}),e("div",{staticClass:"boxtwo"}),e("table",[e("tbody",t._l(t.carts.carts,(function(a){return e("tr",{key:a.id,staticClass:"p-1"},[e("td",{staticClass:"align-middle text-left bgCover p-1",style:{backgroundImage:"url("+a.product.imageUrl+")"},attrs:{width:"200"}},[e("div",{staticClass:"name p-1",on:{click:function(e){return e.preventDefault(),t.routerPush("/customerBase/customerProduct/"+a.product.id)}}},[t._v(" "+t._s(a.product.content)+t._s(a.product.title)+" ")])]),e("td",{staticClass:"align-middle text-center",attrs:{width:"30"}},[t._v(t._s(a.qty))]),e("td",{staticClass:"align-middle text-center",attrs:{width:"30"}},[e("button",{staticClass:"btn btn-outline-danger btn-sm",attrs:{type:"button",disabled:a.id===t.getLoadingItem},on:{click:function(e){return t.removeCartItem(a)}}},[a.id===t.getLoadingItem?e("i",{staticClass:"fas fa-spinner fa-spin"}):e("i",{staticClass:"far fa-trash-alt"})])])])})),0)])]),e("div",{staticClass:"pt-2 d-flex justify-content-between align-items-end",class:{lineThrough:t.carts.total!==t.carts.final_total}},[e("h5",[t._v("總計 :")]),e("h5",[t._v(" "+t._s(t._f("currency")(t.carts.total)))])]),t.carts.total!==t.carts.final_total?e("div",{staticClass:"pt-2 d-flex text-danger justify-content-between\n                      align-items-end"},[e("h5",[t._v("優惠價 :")]),e("h5",[t._v(" "+t._s(t._f("currency")(t.carts.final_total)))])]):t._e(),e("div",{staticClass:"couponBox  mb-2 mt-2"},[e("button",{staticClass:"btn btn-success",attrs:{type:"button"},on:{click:function(a){return a.preventDefault(),t.routerPush("/customerBase/customerShoppingCart")}}},[t._v(" 結帳去 ")])])]):e("div",{staticClass:"cartLength0  d-flex justify-content-center"},[e("h5",{staticClass:"py-2 px-3 "},[t._v("購物車目前沒有商品喔!")])])])])])])},E=[function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("div",{staticClass:"p-2"},[e("h5",[t._v("已加入購物車 :")])])}],M={computed:{carts:function(){return this.$store.state.carts},getCartsLength:function(){return this.$store.state.cartsLength},getLoadingItem:function(){return this.$store.state.loadingItem}},methods:{getCart:function(){this.$store.dispatch("getCart")},removeCartItem:function(t){this.$store.dispatch("removeCartItem",t),this.$store.dispatch("updateMessage",{message:"從購物車刪除",item:t})},showCartModal:function(){L()("#CartModal").modal("show")},routerPush:function(t){L()("#CartModal").modal("hide"),t!==this.$route.path&&this.$router.push(t)}},created:function(){this.getCart()}},A=M,I=(e("0549"),Object(l["a"])(A,j,E,!1,null,null,null)),D=I.exports,O=e("3324"),U={components:{BaseNavbar:d,BaseAlert:v["a"],BaseBanner:b,BaseLogoLoading:_["a"],BaseLikeModal:P,BaseCartModal:D,BaseFooter:O["default"]},data:function(){return{pageActive:""}},computed:{isLoading:function(){return this.$store.state.isLoading}},created:function(){var t=this;this.$bus.$on("pageActivePush",(function(a){t.pageActive=a}))}},S=U,T=(e("ae18"),Object(l["a"])(S,s,n,!1,null,null,null));a["default"]=T.exports},c0f7:function(t,a,e){"use strict";var s=function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("div",{staticClass:"message-alert"},t._l(t.getMessages,(function(a,s){return e("div",{key:s,staticClass:"alert alertExpand"},[t._v(" "+t._s(a.message)+" ")])})),0)},n=[],i={computed:{getMessages:function(){return this.$store.state.messages}}},r=i,c=(e("a8cc"),e("2877")),o=Object(c["a"])(r,s,n,!1,null,null,null);a["a"]=o.exports},c221:function(t,a,e){},c37b:function(t,a){},cbc0:function(t,a,e){"use strict";var s=e("f706"),n=e.n(s);n.a},d266:function(t,a,e){"use strict";var s=e("9863"),n=e.n(s);n.a},da82:function(t,a,e){},f706:function(t,a,e){}}]);
//# sourceMappingURL=chunk-f56755d2.89d07eae.js.map