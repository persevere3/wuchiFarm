(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-0cbc5b91"],{"0549":function(t,a,e){"use strict";var s=e("1a15"),n=e.n(s);n.a},"159b":function(t,a,e){var s=e("da84"),n=e("fdbc"),i=e("17c2"),r=e("9112");for(var c in n){var o=s[c],l=o&&o.prototype;if(l&&l.forEach!==i)try{r(l,"forEach",i)}catch(u){l.forEach=i}}},1617:function(t,a,e){"use strict";var s=e("961e"),n=e.n(s);n.a},"17c2":function(t,a,e){"use strict";var s=e("b727").forEach,n=e("b301");t.exports=n("forEach")?function(t){return s(this,t,arguments.length>1?arguments[1]:void 0)}:[].forEach},"1a15":function(t,a,e){},3324:function(t,a,e){"use strict";var s=e("ddd2"),n=e("795c"),i=(e("1617"),e("2877")),r=Object(i["a"])(n["default"],s["a"],s["b"],!1,null,"ed968dee",null);a["default"]=r.exports},4160:function(t,a,e){"use strict";var s=e("23e7"),n=e("17c2");s({target:"Array",proto:!0,forced:[].forEach!=n},{forEach:n})},"795c":function(t,a,e){"use strict";var s=e("c37b"),n=e.n(s);a["default"]=n.a},"961e":function(t,a,e){},a434:function(t,a,e){"use strict";var s=e("23e7"),n=e("23cb"),i=e("a691"),r=e("50c4"),c=e("7b0b"),o=e("65f0"),l=e("8418"),u=e("1dde"),d=Math.max,f=Math.min,v=9007199254740991,p="Maximum allowed length exceeded";s({target:"Array",proto:!0,forced:!u("splice")},{splice:function(t,a){var e,s,u,g,h,m,C=c(this),b=r(C.length),_=n(t,b),x=arguments.length;if(0===x?e=s=0:1===x?(e=0,s=b-_):(e=x-2,s=f(d(i(a),0),b-_)),b+e-s>v)throw TypeError(p);for(u=o(C,s),g=0;g<s;g++)h=_+g,h in C&&l(u,g,C[h]);if(u.length=s,e<s){for(g=_;g<b-s;g++)h=g+s,m=g+e,h in C?C[m]=C[h]:delete C[m];for(g=b;g>b-s+e;g--)delete C[g-1]}else if(e>s)for(g=b-s;g>_;g--)h=g+s-1,m=g+e-1,h in C?C[m]=C[h]:delete C[m];for(g=0;g<e;g++)C[g+_]=arguments[g+2];return C.length=b-s+e,u}})},a66a:function(t,a,e){},a8cc:function(t,a,e){"use strict";var s=e("a66a"),n=e.n(s);n.a},ae18:function(t,a,e){"use strict";var s=e("c221"),n=e.n(s);n.a},b301:function(t,a,e){"use strict";var s=e("d039");t.exports=function(t,a){var e=[][t];return!e||!s((function(){e.call(null,a||function(){throw 1},1)}))}},bea1:function(t,a,e){"use strict";var s=e("da82"),n=e.n(s);n.a},bf79:function(t,a,e){"use strict";e.r(a);var s=function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("div",[e("BaseNavbar",{key:t.pageActive,staticClass:"sticky-top",attrs:{pageActive:t.pageActive}}),e("BaseAlert"),e("BaseBanner"),e("router-view"),"/customerBase/customerShoppingCart"!==t.pageActive&&"/customerBase/customerData"!==t.pageActive?e("BaseCartModal"):t._e(),e("BaseFooter")],1)},n=[],i=function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("div",[e("nav",{staticClass:"navbar navbar-expand-lg navbar-light bg-light p-0"},[e("div",{staticClass:"container"},[e("a",{staticClass:"ml-2 navbar-brand navbar-brandExpand bgCover",style:{backgroundImage:"url("+t.imgUrl+")"},attrs:{href:"#"},on:{click:function(a){return a.preventDefault(),t.routerPush("/customerBase")}}},[e("h1",[t._v("午憩農場")])]),e("h5",{staticClass:"text-info align-self-end "},[t._v("午憩農場")]),t._m(0),e("div",{staticClass:"collapse navbar-collapse",attrs:{id:"navbarNavDropdown"}},[e("ul",{staticClass:"navbar-nav ml-auto"},[e("li",{staticClass:"nav-item ",class:{active:"/customerBase"===t.pageActive}},[e("a",{staticClass:"nav-link",on:{click:function(a){return a.preventDefault(),t.routerPush("/customerBase")}}},[e("span",{staticClass:"navbarTc"},[t._v("首頁")]),e("span",{staticClass:"navbarEn"},[t._v("Home")]),e("i",{staticClass:"fa fa-home "}),e("span",{staticClass:"sr-only"},[t._v("(current)")])])]),e("li",{staticClass:"nav-item",class:{active:"/customerBase/customerProductList"===t.pageActive}},[e("a",{staticClass:"nav-link",on:{click:function(a){return a.preventDefault(),t.routerPush("/customerBase/customerProductList")}}},[e("span",{staticClass:"navbarTc"},[t._v("產品列表")]),e("span",{staticClass:"navbarEn"},[t._v("Products")]),e("i",{staticClass:"fas fa-gift "})])]),e("li",{staticClass:"nav-item",class:{active:"/customerBase/customerShoppingCart"===t.pageActive}},[e("a",{staticClass:"nav-link",on:{click:function(a){return a.preventDefault(),t.routerPush("/customerBase/customerShoppingCart")}}},[e("span",{staticClass:"navbarTc"},[t._v("購物車")]),e("span",{staticClass:"navbarEn"},[t._v("Shopping Cart")]),e("i",{staticClass:"fas fa-shopping-cart "})])])])])])])])},r=[function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("button",{staticClass:"navbar-toggler ml-auto mr-2",attrs:{type:"button","data-toggle":"collapse","data-target":"#navbarNavDropdown","aria-controls":"navbarNavDropdown","aria-expanded":"false","aria-label":"Toggle navigation"}},[e("span",{staticClass:"navbar-toggler-icon"})])}],c={props:["pageActive"],data:function(){return{imgUrl:"img/logo.png"}},methods:{routerPush:function(t){t!==this.$route.path&&this.$router.push("".concat(t))}}},o=c,l=(e("bea1"),e("2877")),u=Object(l["a"])(o,i,r,!1,null,"753cea8c",null),d=u.exports,f=e("c0f7"),v=function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("div",[e("div",{staticClass:"banner"},[e("div",{staticClass:"swiper-container"},[e("div",{staticClass:"swiper-wrapper"},[e("div",{staticClass:"swiper-slide bgCover",style:{backgroundImage:"url("+t.imgUrl[0]+")"}}),e("div",{staticClass:"swiper-slide bgCover",style:{backgroundImage:"url("+t.imgUrl[1]+")"}}),e("div",{staticClass:"swiper-slide bgCover",style:{backgroundImage:"url("+t.imgUrl[2]+")"}})]),e("div",{staticClass:"swiper-pagination"})]),t._m(0)])])},p=[function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("div",{staticClass:"textbackground p-2"},[e("div",{staticClass:"textborder d-flex flex-column\n                  align-items-start p-3"},[e("h4",{staticClass:"textfirst"},[t._v("After dinner sit a while,")]),e("h4",{staticClass:"textsecond"},[t._v("after supper walk a mile.")])])])}],g=e("b619"),h=(e("f4bd"),{data:function(){return{imgUrl:["img/0_1.jpg","img/0_2.jpg","img/0_3.jpg"]}},mounted:function(){new g["a"](".swiper-container",{pagination:{el:".swiper-pagination"}})}}),m=h,C=(e("cbc0"),Object(l["a"])(m,v,p,!1,null,"56bee468",null)),b=C.exports,_=function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("div",[e("div",{staticClass:"cartModalIcon"},[e("a",{staticClass:"d-flex justify-content-center align-items-center",on:{click:function(a){return a.preventDefault(),t.showCartModal(a)}}},[e("i",{staticClass:"fas fa-shopping-cart fa-2x"}),e("div",{staticClass:"cartLength d-flex justify-content-center align-items-center"},[t._v(" "+t._s(t.cartLength)+" ")])])]),e("div",{staticClass:"modal fade modalExpand",attrs:{id:"CartModal"}},[e("div",{staticClass:"modal-dialog modal-dialogExpand"},[e("div",{staticClass:"modal-content"},[t.cartLength?e("div",{staticClass:"container"},[t._m(0),e("div",{staticClass:"modalTableWrap d-flex"},[e("div",{staticClass:"boxone"}),e("div",{staticClass:"boxtwo"}),e("table",[e("tbody",t._l(t.carts.carts,(function(a){return e("tr",{key:a.id,staticClass:"p-1"},[e("td",{staticClass:"align-middle text-left bgCover p-1",style:{backgroundImage:"url("+a.product.imageUrl+")"},attrs:{width:"200"}},[e("div",{staticClass:"name p-1"},[t._v(t._s(a.product.title))])]),e("td",{staticClass:"align-middle text-center",attrs:{width:"30"}},[t._v(t._s(a.qty))]),e("td",{staticClass:"align-middle text-center",attrs:{width:"30"}},[e("button",{staticClass:"btn btn-outline-danger btn-sm",attrs:{type:"button",disabled:a.id===t.status.loadingItem},on:{click:function(e){return t.removeCartItem(a.id)}}},[a.id===t.status.loadingItem?e("i",{staticClass:"fas fa-spinner fa-spin"}):e("i",{staticClass:"far fa-trash-alt"})])])])})),0)])]),e("div",{staticClass:"pt-2 d-flex justify-content-between align-items-end",class:{lineThrough:t.carts.total!==t.carts.final_total}},[e("h5",[t._v("總計 :")]),e("h5",[t._v(" "+t._s(t._f("currency")(t.carts.total)))])]),t.carts.total!==t.carts.final_total?e("div",{staticClass:"pt-2 d-flex text-danger justify-content-between\n                      align-items-end"},[e("h5",[t._v("優惠價 :")]),e("h5",[t._v(" "+t._s(t._f("currency")(t.carts.final_total)))])]):t._e(),e("div",{staticClass:"couponBox  my-1"},[e("button",{staticClass:"btn btn-success",attrs:{type:"button"},on:{click:function(a){return a.preventDefault(),t.routerPush("/customerBase/customerShoppingCart")}}},[t._v(" 結帳去 ")])])]):e("div",{staticClass:"cartLength0  d-flex justify-content-center"},[e("h5",{staticClass:"py-2 px-3 "},[t._v("購物車目前沒有商品喔!")])])])])])])},x=[function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("div",{staticClass:"p-2"},[e("h5",[t._v("已加入購物車 :")])])}],L=(e("99af"),e("1157")),w=e.n(L),y={data:function(){return{carts:{},cartLength:0,isLoading:!1,status:{loadingItem:""}}},methods:{getCart:function(){var t=this,a="".concat("https://vue-course-api.hexschool.io","/api/").concat("perseverepoch","/cart");this.$http.get(a).then((function(a){t.carts=a.data.data,t.cartLength=a.data.data.carts.length}))},showCartModal:function(){w()("#CartModal").modal("show")},removeCartItem:function(t){var a=this;a.status.loadingItem=t;var e="".concat("https://vue-course-api.hexschool.io","/api/").concat("perseverepoch","/cart/").concat(t);this.$http.delete(e).then((function(){a.getCart(),a.status.loadingItem=""}))},routerPush:function(t){w()("#CartModal").modal("hide"),this.$router.push("".concat(t))}},created:function(){var t=this;this.getCart(),this.$bus.$on("getCartEmit",(function(){t.getCart()}))}},E=y,k=(e("0549"),Object(l["a"])(E,_,x,!1,null,null,null)),M=k.exports,S=e("3324"),B={components:{BaseNavbar:d,BaseAlert:f["a"],BaseBanner:b,BaseCartModal:M,BaseFooter:S["default"]},data:function(){return{pageActive:""}},created:function(){var t=this;this.$bus.$on("pageActivePush",(function(a){t.pageActive=a}))}},T=B,$=(e("ae18"),Object(l["a"])(T,s,n,!1,null,null,null));a["default"]=$.exports},c0f7:function(t,a,e){"use strict";var s=function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("div",{staticClass:"message-alert"},t._l(t.messages,(function(a,s){return e("div",{key:s,staticClass:"alert alertExpand"},[t._v(" "+t._s(a.message)+" ")])})),0)},n=[],i=(e("4160"),e("a434"),e("0d03"),e("159b"),{data:function(){return{messages:[]}},methods:{updateMessage:function(t,a){var e=Math.floor(new Date/1e3);this.messages.push({message:t,status:a,timestamp:e}),this.removeMessageWithTiming(e)},removeMessageWithTiming:function(t){var a=this;setTimeout((function(){a.messages.forEach((function(e,s){e.timestamp===t&&a.messages.splice(s,1)}))}),5e3)}},created:function(){var t=this;t.$bus.$on("messagePush",(function(a,e){t.updateMessage(a,e)}))}}),r=i,c=(e("a8cc"),e("2877")),o=Object(c["a"])(r,s,n,!1,null,null,null);a["a"]=o.exports},c221:function(t,a,e){},c37b:function(t,a){},cbc0:function(t,a,e){"use strict";var s=e("f706"),n=e.n(s);n.a},da82:function(t,a,e){},ddd2:function(t,a,e){"use strict";var s=function(){var t=this,a=t.$createElement;t._self._c;return t._m(0)},n=[function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("div",[e("div",{staticClass:"footer p-3 d-flex justify-content-center align-items-center"},[t._v(" © 資料、圖片皆來自網路，僅個人練習使用，不作任何商業用途 ")])])}];e.d(a,"a",(function(){return s})),e.d(a,"b",(function(){return n}))},f706:function(t,a,e){},fdbc:function(t,a){t.exports={CSSRuleList:0,CSSStyleDeclaration:0,CSSValueList:0,ClientRectList:0,DOMRectList:0,DOMStringList:0,DOMTokenList:1,DataTransferItemList:0,FileList:0,HTMLAllCollection:0,HTMLCollection:0,HTMLFormElement:0,HTMLSelectElement:0,MediaList:0,MimeTypeArray:0,NamedNodeMap:0,NodeList:1,PaintRequestList:0,Plugin:0,PluginArray:0,SVGLengthList:0,SVGNumberList:0,SVGPathSegList:0,SVGPointList:0,SVGStringList:0,SVGTransformList:0,SourceBufferList:0,StyleSheetList:0,TextTrackCueList:0,TextTrackList:0,TouchList:0}}}]);
//# sourceMappingURL=chunk-0cbc5b91.763012ea.js.map