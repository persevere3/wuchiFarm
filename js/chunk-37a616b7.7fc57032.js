(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-37a616b7"],{"4e82":function(t,e,a){"use strict";var n=a("23e7"),r=a("1c0b"),s=a("7b0b"),i=a("d039"),o=a("b301"),c=[].sort,u=[1,2,3],l=i((function(){u.sort(void 0)})),d=i((function(){u.sort(null)})),p=o("sort"),f=l||!d||p;n({target:"Array",proto:!0,forced:f},{sort:function(t){return void 0===t?c.call(s(this)):c.call(s(this),r(t))}})},8418:function(t,e,a){"use strict";var n=a("c04e"),r=a("9bf2"),s=a("5c6c");t.exports=function(t,e,a){var i=n(e);i in t?r.f(t,i,s(0,a)):t[i]=a}},"99af":function(t,e,a){"use strict";var n=a("23e7"),r=a("d039"),s=a("e8b5"),i=a("861d"),o=a("7b0b"),c=a("50c4"),u=a("8418"),l=a("65f0"),d=a("1dde"),p=a("b622"),f=a("60ae"),g=p("isConcatSpreadable"),v=9007199254740991,_="Maximum allowed index exceeded",h=f>=51||!r((function(){var t=[];return t[g]=!1,t.concat()[0]!==t})),m=d("concat"),b=function(t){if(!i(t))return!1;var e=t[g];return void 0!==e?!!e:s(t)},x=!h||!m;n({target:"Array",proto:!0,forced:x},{concat:function(t){var e,a,n,r,s,i=o(this),d=l(i,0),p=0;for(e=-1,n=arguments.length;e<n;e++)if(s=-1===e?i:arguments[e],b(s)){if(r=c(s.length),p+r>v)throw TypeError(_);for(a=0;a<r;a++,p++)a in s&&u(d,p,s[a])}else{if(p>=v)throw TypeError(_);u(d,p++,s)}return d.length=p,d}})},b301:function(t,e,a){"use strict";var n=a("d039");t.exports=function(t,e){var a=[][t];return!a||!n((function(){a.call(null,e||function(){throw 1},1)}))}},ec5c:function(t,e,a){"use strict";a.r(e);var n=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",[a("Loading",{attrs:{active:t.isLoading},on:{"update:active":function(e){t.isLoading=e}}}),t.orders.length?a("table",{staticClass:"table mt-4"},[t._m(0),a("tbody",t._l(t.sortOrder,(function(e,n){return a("tr",{key:n,class:{"text-secondary":!e.is_paid}},[a("td",[t._v(t._s(t._f("date")(e.create_at)))]),a("td",[e.user?a("span",{domProps:{textContent:t._s(e.user.email)}}):t._e()]),a("td",[a("ul",{staticClass:"list-unstyled"},t._l(e.products,(function(e,n){return a("li",{key:n},[t._v(" "+t._s(e.product.title)+" 數量："+t._s(e.qty)+" "+t._s(e.product.unit)+" ")])})),0)]),a("td",{staticClass:"text-right"},[t._v(t._s(t._f("currency")(e.total)))]),a("td",[e.is_paid?a("strong",{staticClass:"text-success"},[t._v("已付款")]):a("span",{staticClass:"text-muted"},[t._v("尚未起用")])])])})),0)]):t._e(),a("Pagination",{attrs:{pages:t.pagination},on:{emitPages:t.getOrders}})],1)},r=[function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("thead",[a("tr",[a("th",[t._v("購買時間")]),a("th",[t._v("Email")]),a("th",[t._v("購買款項")]),a("th",[t._v("應付金額")]),a("th",[t._v("是否付款")])])])}],s=(a("99af"),a("4e82"),function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("nav",{attrs:{"aria-label":"Page navigation-second example"}},[a("ul",{staticClass:"pagination  justify-content-center"},[a("li",{staticClass:"page-item",class:{disabled:!t.pages.has_pre}},[a("a",{staticClass:"page-link",attrs:{href:"#","aria-label":"Previous"},on:{click:function(e){return e.preventDefault(),t.updatePage(t.pages.current_page-1)}}},[a("span",{attrs:{"aria-hidden":"true"}},[t._v("«")]),a("span",{staticClass:"sr-only"},[t._v("Previous")])])]),t._l(t.pages.total_pages,(function(e){return a("li",{key:e,staticClass:"page-item",class:{active:t.pages.current_page==e}},[a("a",{staticClass:"page-link",attrs:{href:"#"},on:{click:function(a){return a.preventDefault(),t.updatePage(e)}}},[t._v(t._s(e))])])})),a("li",{staticClass:"page-item",class:{disabled:!t.pages.has_next}},[a("a",{staticClass:"page-link",attrs:{href:"#","aria-label":"Next"},on:{click:function(e){return e.preventDefault(),t.updatePage(t.pages.current_page+1)}}},[a("span",{attrs:{"aria-hidden":"true"}},[t._v("»")]),a("span",{staticClass:"sr-only"},[t._v("Next")])])])],2)])}),i=[],o={name:"Layout",props:["pages"],data:function(){return{msg:"Welcome to Your Vue.js App",uid:""}},methods:{updatePage:function(t){this.$emit("emitPages",t)}}},c=o,u=a("2877"),l=Object(u["a"])(c,s,i,!1,null,null,null),d=l.exports,p={data:function(){return{orders:{},isNew:!1,pagination:{},isLoading:!1}},components:{Pagination:d},methods:{getOrders:function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:1,e=this,a="".concat("https://vue-course-api.hexschool.io","/api/").concat("perseverepoch","/admin/orders?page=").concat(t);e.isLoading=!0,this.$http.get(a,e.tempProduct).then((function(t){e.orders=t.data.orders,e.pagination=t.data.pagination,e.isLoading=!1}))}},computed:{sortOrder:function(){var t=this,e=[];return t.orders.length&&(e=t.orders.sort((function(t,e){var a=t.is_paid?1:0,n=e.is_paid?1:0;return n-a}))),e}},created:function(){this.getOrders()}},f=p,g=Object(u["a"])(f,n,r,!1,null,null,null);e["default"]=g.exports}}]);
//# sourceMappingURL=chunk-37a616b7.7fc57032.js.map