(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-23299010"],{"09b2":function(t,e,s){},1941:function(t,e,s){},"26e9":function(t,e,s){"use strict";var a=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",[s("loading",{attrs:{active:t.isLoading},on:{"update:active":function(e){t.isLoading=e}}},[s("div",{staticClass:"logoLoadingWrap d-flex flex-column\n                justify-content-center align-items-center"},[s("div",{staticClass:"logo bgCover",staticStyle:{"background-image":"url(img/logo.png)"}}),s("div",{staticClass:"loading d-flex justify-content-center align-items-center"},[s("div",{staticClass:"boxone"}),s("div",{staticClass:"boxtwo"})])])])],1)},i=[],n={props:["isLoading"]},r=n,c=(s("bf0c"),s("2877")),o=Object(c["a"])(r,a,i,!1,null,"3be6b206",null);e["a"]=o.exports},7188:function(t,e,s){},8418:function(t,e,s){"use strict";var a=s("c04e"),i=s("9bf2"),n=s("5c6c");t.exports=function(t,e,s){var r=a(e);r in t?i.f(t,r,n(0,s)):t[r]=s}},"96fd":function(t,e,s){"use strict";var a=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",[s("div",{staticClass:"step my-5 d-flex justify-content-center"},[s("ul",{staticClass:"d-flex"},[s("li",{staticClass:"px-2 px-sm-3 d-flex flex-column justify-content-center align-items-center",class:{now:"cart"===t.stepActive}},[s("i",{staticClass:"fas fa-list-ol fa-3x d-flex\n                    justify-content-center align-items-center"}),s("h2",{staticClass:"mt-1"},[t._v("01")]),s("h5",[t._v("確認訂單")])]),s("li",{staticClass:"px-2 px-sm-3 d-flex flex-column justify-content-center align-items-center",class:{now:"data"===t.stepActive}},[s("i",{staticClass:"fas fas fa-digital-tachograph fa-3x\n                    d-flex justify-content-center align-items-center"}),s("h2",{staticClass:"mt-1"},[t._v("02")]),s("h5",[t._v("填寫資料")])]),s("li",{staticClass:"px-2 px-sm-3 d-flex flex-column justify-content-center align-items-center",class:{now:"pay"===t.stepActive}},[s("i",{staticClass:"far fa-money-bill-alt fa-3x d-flex\n                    justify-content-center align-items-center"}),s("h2",{staticClass:"mt-1"},[t._v("03")]),s("h5",[t._v("完成付款")])])])])])},i=[],n={props:["stepActive"]},r=n,c=(s("e50f"),s("2877")),o=Object(c["a"])(r,a,i,!1,null,"1b012b93",null);e["a"]=o.exports},"99af":function(t,e,s){"use strict";var a=s("23e7"),i=s("d039"),n=s("e8b5"),r=s("861d"),c=s("7b0b"),o=s("50c4"),l=s("8418"),d=s("65f0"),u=s("1dde"),f=s("b622"),p=s("60ae"),v=f("isConcatSpreadable"),h=9007199254740991,g="Maximum allowed index exceeded",_=p>=51||!i((function(){var t=[];return t[v]=!1,t.concat()[0]!==t})),x=u("concat"),m=function(t){if(!r(t))return!1;var e=t[v];return void 0!==e?!!e:n(t)},C=!_||!x;a({target:"Array",proto:!0,forced:C},{concat:function(t){var e,s,a,i,n,r=c(this),u=d(r,0),f=0;for(e=-1,a=arguments.length;e<a;e++)if(n=-1===e?r:arguments[e],m(n)){if(i=o(n.length),f+i>h)throw TypeError(g);for(s=0;s<i;s++,f++)s in n&&l(u,f,n[s])}else{if(f>=h)throw TypeError(g);l(u,f++,n)}return u.length=f,u}})},b305:function(t,e,s){"use strict";s.r(e);var a=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",[s("BaseLogoLoading",{key:t.isLoading,attrs:{isLoading:t.isLoading}}),s("div",{staticClass:"container"},[s("ShoppingCartStep",{attrs:{stepActive:t.stepActive}}),s("div",{staticClass:"tableWrap d-flex"},[s("div",{staticClass:"boxone"}),s("div",{staticClass:"boxtwo"}),s("table",[t._m(0),s("tbody",[t._l(t.order.products,(function(e){return s("tr",{key:e.id,staticClass:"p-1"},[s("td",{staticClass:"align-middle text-left bgCover p-1",style:{backgroundImage:"url("+e.product.imageUrl+")"}},[s("div",{staticClass:"name bgCover p-1"},[t._v(t._s(e.product.title))]),e.coupon?s("div",{staticClass:"name p-1"},[t._v("已套用優惠券")]):t._e()]),s("td",{staticClass:"align-middle text-center"},[t._v(t._s(e.qty))]),s("td",{staticClass:"price align-middle text-right"},[t._v(t._s(t._f("currency")(e.final_total)))])])})),s("tr",[s("td",{attrs:{colspan:"3"}},[s("div",{staticClass:"text-right pt-3"},[s("h6",[t._v("總計 : "),s("span",[t._v(t._s(t._f("currency")(t.order.total)))])])])])])],2)])]),s("div",{staticClass:"formWrap d-flex my-3 px-4"},[s("div",{staticClass:"boxone"}),s("div",{staticClass:"boxtwo"}),s("form",{staticClass:"form p-3",on:{submit:function(e){return e.preventDefault(),t.payOrder(e)}}},[s("table",{staticClass:"table"},[s("tbody",[s("tr",[s("th",{attrs:{width:"200"}},[t._v("Email")]),s("td",[t._v(t._s(t.order.user.email))])]),s("tr",[s("th",[t._v("姓名")]),s("td",[t._v(t._s(t.order.user.name))])]),s("tr",[s("th",[t._v("收件人電話")]),s("td",[t._v(t._s(t.order.user.tel))])]),s("tr",[s("th",[t._v("收件人地址")]),s("td",[t._v(t._s(t.order.user.address))])]),s("tr",[s("th",[t._v("付款狀態")]),s("td",[t.order.is_paid?s("span",{staticClass:"text-danger"},[t._v("付款完成")]):s("span",[t._v("尚未付款")])])])])]),!1===t.order.is_paid?s("div",{staticClass:"text-right"},[s("button",{staticClass:"btn btn-success "},[t._v("確認付款去")])]):t._e()])])],1)],1)},i=[function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("thead",[s("th",{staticClass:"name text-left p-2"},[t._v("品名")]),s("th",{staticClass:"text-center p-2",attrs:{width:"50"}},[t._v("數量")]),s("th",{staticClass:"price text-right p-2",attrs:{width:"80"}},[t._v("小計")])])}],n=(s("99af"),s("26e9")),r=s("96fd"),c={components:{BaseLogoLoading:n["a"],ShoppingCartStep:r["a"]},data:function(){return{order:{user:{}},orderId:"",stepActive:"pay"}},methods:{getOrder:function(){var t=this,e="".concat("https://vue-course-api.hexschool.io","/api/").concat("perseverepoch","/order/").concat(t.orderId);t.isLoading=!0,this.$http.get(e).then((function(e){t.order=e.data.order,t.isLoading=!1}))},payOrder:function(){var t=this,e="".concat("https://vue-course-api.hexschool.io","/api/").concat("perseverepoch","/pay/").concat(t.orderId);t.isLoading=!0,this.$http.post(e).then((function(e){e.data.success&&t.getOrder(),t.isLoading=!1}))}},created:function(){this.orderId=this.$route.params.orderId,this.getOrder(),this.$bus.$emit("pageActivePush",this.$route.path)}},o=c,l=(s("daea"),s("2877")),d=Object(l["a"])(o,a,i,!1,null,"0f80e252",null);e["default"]=d.exports},bf0c:function(t,e,s){"use strict";var a=s("1941"),i=s.n(a);i.a},daea:function(t,e,s){"use strict";var a=s("7188"),i=s.n(a);i.a},e50f:function(t,e,s){"use strict";var a=s("09b2"),i=s.n(a);i.a}}]);
//# sourceMappingURL=chunk-23299010.7096500a.js.map