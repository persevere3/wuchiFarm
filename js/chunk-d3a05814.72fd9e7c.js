(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-d3a05814"],{"09b2":function(e,t,a){},"3a3e":function(e,t,a){"use strict";var s=a("d899"),r=a.n(s);r.a},8418:function(e,t,a){"use strict";var s=a("c04e"),r=a("9bf2"),i=a("5c6c");e.exports=function(e,t,a){var n=s(t);n in e?r.f(e,n,i(0,a)):e[n]=a}},"96fd":function(e,t,a){"use strict";var s=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",[a("div",{staticClass:"step my-5 d-flex justify-content-center"},[a("ul",{staticClass:"d-flex"},[a("li",{staticClass:"px-2 px-sm-3 d-flex flex-column justify-content-center align-items-center",class:{now:"cart"===e.stepActive}},[a("i",{staticClass:"fas fa-list-ol fa-3x d-flex\n                    justify-content-center align-items-center"}),a("h2",{staticClass:"mt-1"},[e._v("01")]),a("h5",[e._v("確認訂單")])]),a("li",{staticClass:"px-2 px-sm-3 d-flex flex-column justify-content-center align-items-center",class:{now:"data"===e.stepActive}},[a("i",{staticClass:"fas fas fa-digital-tachograph fa-3x\n                    d-flex justify-content-center align-items-center"}),a("h2",{staticClass:"mt-1"},[e._v("02")]),a("h5",[e._v("填寫資料")])]),a("li",{staticClass:"px-2 px-sm-3 d-flex flex-column justify-content-center align-items-center",class:{now:"pay"===e.stepActive}},[a("i",{staticClass:"far fa-money-bill-alt fa-3x d-flex\n                    justify-content-center align-items-center"}),a("h2",{staticClass:"mt-1"},[e._v("03")]),a("h5",[e._v("完成付款")])])])])])},r=[],i={props:["stepActive"]},n=i,o=(a("e50f"),a("2877")),l=Object(o["a"])(n,s,r,!1,null,"1b012b93",null);t["a"]=l.exports},"99af":function(e,t,a){"use strict";var s=a("23e7"),r=a("d039"),i=a("e8b5"),n=a("861d"),o=a("7b0b"),l=a("50c4"),c=a("8418"),u=a("65f0"),m=a("1dde"),d=a("b622"),f=a("60ae"),v=d("isConcatSpreadable"),p=9007199254740991,x="Maximum allowed index exceeded",g=f>=51||!r((function(){var e=[];return e[v]=!1,e.concat()[0]!==e})),h=m("concat"),C=function(e){if(!n(e))return!1;var t=e[v];return void 0!==t?!!t:i(e)},b=!g||!h;s({target:"Array",proto:!0,forced:b},{concat:function(e){var t,a,s,r,i,n=o(this),m=u(n,0),d=0;for(t=-1,s=arguments.length;t<s;t++)if(i=-1===t?n:arguments[t],C(i)){if(r=l(i.length),d+r>p)throw TypeError(x);for(a=0;a<r;a++,d++)a in i&&c(m,d,i[a])}else{if(d>=p)throw TypeError(x);c(m,d++,i)}return m.length=d,m}})},b7e1:function(e,t,a){"use strict";a.r(t);var s=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",[a("div",{staticClass:"container"},[a("ShoppingCartStep",{attrs:{stepActive:e.stepActive}}),a("div",{staticClass:"formWrap d-flex my-3 px-4"},[a("div",{staticClass:"boxone"}),a("div",{staticClass:"boxtwo"}),a("form",{staticClass:"form p-3",on:{submit:function(t){return t.preventDefault(),e.createOrder(t)}}},[a("div",{staticClass:"form-group"},[a("label",{attrs:{for:"useremail"}},[e._v("Email")]),a("input",{directives:[{name:"validate",rawName:"v-validate",value:"required|email",expression:"'required|email'"},{name:"model",rawName:"v-model",value:e.form.user.email,expression:"form.user.email"}],staticClass:"form-control",class:{"is-invalid":e.errors.has("email")},attrs:{type:"email",name:"email",id:"useremail",placeholder:"請輸入Email"},domProps:{value:e.form.user.email},on:{input:function(t){t.target.composing||e.$set(e.form.user,"email",t.target.value)}}}),e.errors.has("email")?a("span",{staticClass:"text-danger"},[e._v(" "+e._s(e.errors.first("email"))+" ")]):e._e()]),a("div",{staticClass:"form-group"},[a("label",{attrs:{for:"username"}},[e._v("收件人姓名")]),a("input",{directives:[{name:"validate",rawName:"v-validate",value:"required",expression:"'required'"},{name:"model",rawName:"v-model",value:e.form.user.name,expression:"form.user.name"}],staticClass:"form-control",class:{"is-invalid":e.errors.has("name")},attrs:{type:"text",name:"name",id:"username",placeholder:"請輸入姓名"},domProps:{value:e.form.user.name},on:{input:function(t){t.target.composing||e.$set(e.form.user,"name",t.target.value)}}}),e.errors.has("name")?a("span",{staticClass:"text-danger"},[e._v(" 請輸入姓名 ")]):e._e()]),a("div",{staticClass:"form-group"},[a("label",{attrs:{for:"usertel"}},[e._v("收件人電話")]),a("input",{directives:[{name:"validate",rawName:"v-validate",value:{required:!0,regex:/^([0-9]+)$/},expression:"{ required: true, regex: /^([0-9]+)$/ }"},{name:"model",rawName:"v-model",value:e.form.user.tel,expression:"form.user.tel"}],staticClass:"form-control",class:{"is-invalid":e.errors.has("regex")},attrs:{type:"tel",name:"regex",id:"usertel",placeholder:"請輸入電話"},domProps:{value:e.form.user.tel},on:{input:function(t){t.target.composing||e.$set(e.form.user,"tel",t.target.value)}}}),e.errors.has("regex")?a("span",{staticClass:"text-danger"},[e._v(" 請輸入電話 ")]):e._e()]),a("div",{staticClass:"form-group"},[a("label",{attrs:{for:"useraddress"}},[e._v("收件人地址")]),a("input",{directives:[{name:"model",rawName:"v-model",value:e.form.user.address,expression:"form.user.address"},{name:"validate",rawName:"v-validate",value:"required",expression:"'required'"}],staticClass:"form-control",class:{"is-invalid":e.errors.has("address")},attrs:{type:"address",name:"address",id:"useraddress",placeholder:"請輸入地址"},domProps:{value:e.form.user.address},on:{input:function(t){t.target.composing||e.$set(e.form.user,"address",t.target.value)}}}),e.errors.has("address")?a("span",{staticClass:"text-danger"},[e._v("請輸入地址")]):e._e()]),a("div",{staticClass:"form-group"},[a("label",{attrs:{for:"feedback"}},[e._v("留言")]),a("textarea",{directives:[{name:"model",rawName:"v-model",value:e.form.message,expression:"form.message"}],staticClass:"form-control",attrs:{name:"",id:"feedback",cols:"30",rows:"5"},domProps:{value:e.form.message},on:{input:function(t){t.target.composing||e.$set(e.form,"message",t.target.value)}}})]),e._m(0)])])],1)])},r=[function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{staticClass:"text-right"},[a("button",{staticClass:"btn btn-success"},[e._v("送出訂單")])])}],i=(a("99af"),a("96fd")),n={components:{ShoppingCartStep:i["a"]},data:function(){return{form:{user:{name:"",email:"",tel:"",address:""},message:""},stepActive:"data"}},methods:{createOrder:function(){var e=this,t=this,a="".concat("https://vue-course-api.hexschool.io","/api/").concat("perseverepoch","/order"),s=t.form;this.$validator.validate().then((function(r){r&&e.$http.post(a,{data:s}).then((function(e){e.data.success&&(t.$router.push("customerPay/".concat(e.data.orderId)),t.$bus.$emit("getCartEmit"))}))}))}},created:function(){this.$bus.$emit("pageActivePush",this.$route.path)}},o=n,l=(a("3a3e"),a("2877")),c=Object(l["a"])(o,s,r,!1,null,"244a1886",null);t["default"]=c.exports},d899:function(e,t,a){},e50f:function(e,t,a){"use strict";var s=a("09b2"),r=a.n(s);r.a}}]);
//# sourceMappingURL=chunk-d3a05814.72fd9e7c.js.map