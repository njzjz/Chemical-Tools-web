(function(e){function t(t){for(var n,o,r=t[0],i=t[1],s=0,l=[];s<r.length;s++)o=r[s],Object.prototype.hasOwnProperty.call(a,o)&&a[o]&&l.push(a[o][0]),a[o]=0;for(n in i)Object.prototype.hasOwnProperty.call(i,n)&&(e[n]=i[n]);c&&c(t);while(l.length)l.shift()()}var n={},a={app:0};function o(e){return r.p+"js/"+({acid:"acid",deviation:"deviation",element:"element",exam:"exam",gas:"gas",mass:"mass",setting:"setting"}[e]||e)+".js"}function r(t){if(n[t])return n[t].exports;var a=n[t]={i:t,l:!1,exports:{}};return e[t].call(a.exports,a,a.exports,r),a.l=!0,a.exports}r.e=function(e){var t=[],n=a[e];if(0!==n)if(n)t.push(n[2]);else{var i=new Promise((function(t,o){n=a[e]=[t,o]}));t.push(n[2]=i);var s,l=document.createElement("script");l.charset="utf-8",l.timeout=120,r.nc&&l.setAttribute("nonce",r.nc),l.src=o(e);var c=new Error;s=function(t){l.onerror=l.onload=null,clearTimeout(u);var n=a[e];if(0!==n){if(n){var o=t&&("load"===t.type?"missing":t.type),r=t&&t.target&&t.target.src;c.message="Loading chunk "+e+" failed.\n("+o+": "+r+")",c.name="ChunkLoadError",c.type=o,c.request=r,n[1](c)}a[e]=void 0}};var u=setTimeout((function(){s({type:"timeout",target:l})}),12e4);l.onerror=l.onload=s,document.head.appendChild(l)}return Promise.all(t)},r.m=e,r.c=n,r.d=function(e,t,n){r.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:n})},r.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},r.t=function(e,t){if(1&t&&(e=r(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(r.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var a in e)r.d(n,a,function(t){return e[t]}.bind(null,a));return n},r.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return r.d(t,"a",t),t},r.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},r.p="/",r.oe=function(e){throw console.error(e),e};var i=window["webpackJsonp"]=window["webpackJsonp"]||[],s=i.push.bind(i);i.push=t,i=i.slice();for(var l=0;l<i.length;l++)t(i[l]);var c=s;r(r.s=0)})({0:function(e,t,n){e.exports=n("56d7")},"12a8":function(e,t){e.exports=format},2877:function(e,t,n){"use strict";function a(e,t,n,a,o,r,i,s){var l,c="function"===typeof e?e.options:e;if(t&&(c.render=t,c.staticRenderFns=n,c._compiled=!0),a&&(c.functional=!0),r&&(c._scopeId="data-v-"+r),i?(l=function(e){e=e||this.$vnode&&this.$vnode.ssrContext||this.parent&&this.parent.$vnode&&this.parent.$vnode.ssrContext,e||"undefined"===typeof __VUE_SSR_CONTEXT__||(e=__VUE_SSR_CONTEXT__),o&&o.call(this,e),e&&e._registeredComponents&&e._registeredComponents.add(i)},c._ssrRegister=l):o&&(l=s?function(){o.call(this,(c.functional?this.parent:this).$root.$options.shadowRoot)}:o),l)if(c.functional){c._injectStyles=l;var u=c.render;c.render=function(e,t){return l.call(t),u(e,t)}}else{var m=c.beforeCreate;c.beforeCreate=m?[].concat(m,l):[l]}return{exports:e,options:c}}n.d(t,"a",(function(){return a}))},3504:function(e){e.exports=JSON.parse('{"message":{"chemicaltools":"化学e+","element":"元素查询","mass":"质量计算","acid":"酸碱计算","exam":"元素记忆","gas":"气体计算","deviation":"偏差计算","calculate":"计算","description":"化学专业学生的必备工具","homepage":"主页","settings":"设置","languages":"语言","search":"查询","wikipedia":"访问维基百科","elementhint":"元素名称/符号/原子序数/IUPAC名称","elementnodata":"请搜索一个元素","formula":"化学式","ab":"酸或碱","c":"分析浓度(mol/L)","question":"问题","wronginput":"输入错误！","inputdata":"请输入数据！","inputformula":"请输入化学式！","multpledata":"请输入多个数据！","massvalue":"相对分子质量","data":"数据","dataline":"每行一个数据","score":"回答正确{correct}题，回答错误{incorrect}题。","testmode":"测试模式","numberlimit":"原子序数上限","correct":"回答正确！","incorrect":"回答错误！正确答案为{correctanswer}，问题为{question}，你的答案为{answer}。"},"testmodes":[{"value":0,"text":"根据元素名称回答元素符号"},{"value":1,"text":"根据元素名称回答原子序数"},{"value":2,"text":"根据元素名称回答IUPAC名"},{"value":3,"text":"根据元素符号回答元素名称"},{"value":4,"text":"根据元素符号回答原子序数"},{"value":5,"text":"根据元素符号回答IUPAC名"},{"value":6,"text":"根据原子序数回答元素名称"},{"value":7,"text":"根据原子序数回答元素符号"},{"value":8,"text":"根据原子序数回答IUPAC名"},{"value":9,"text":"根据IUPAC名回答元素名称"},{"value":10,"text":"根据IUPAC名回答元素符号"},{"value":11,"text":"根据IUPAC名回答原子序数"}],"massheader":[{"text":"元素名称","align":"left","value":"name"},{"text":"IUPAC名称","align":"left","value":"name"},{"text":"元素符号","align":"right","value":"symbol"},{"text":"原子序数","align":"right","value":"atomnumber"},{"text":"质量","align":"right","value":"mass"},{"text":"质量分数(%)","align":"right","value":"massper"}],"element":{"name":"元素名称","symbol":"元素符号","iupac":"IUPAC名称","number":"原子序数","mass":"相对原子质量","origin":"元素起源"},"ablabel":[{"value":true,"text":"酸"},{"value":false,"text":"碱"}],"gas":{"p":"压强/kPa","V":"体积/L","n":"物质的量/mol","T":"温度/K"},"deviation":{"input":"输入的数据","average":"平均值","ad":"平均偏差","rad":"相对平均偏差","sd":"标准偏差","rsd":"相对标准偏差"}}')},"460d":function(e,t){e.exports=Vue2Storage},"49f8":function(e,t,n){var a={"./en.json":"edd4","./zh.json":"3504"};function o(e){var t=r(e);return n(t)}function r(e){if(!n.o(a,e)){var t=new Error("Cannot find module '"+e+"'");throw t.code="MODULE_NOT_FOUND",t}return a[e]}o.keys=function(){return Object.keys(a)},o.resolve=r,e.exports=o,o.id="49f8"},"56d7":function(e,t,n){"use strict";n.r(t);var a=n("8bbf"),o=n.n(a),r=n("a2c9"),i=n.n(r);o.a.use(i.a);var s,l=new i.a({icons:{iconfont:"fa"},theme:{dark:!1}}),c=n("460d"),u=n.n(c),m=function(){return Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/))};function d(e,t){void 0===t&&(t={});var n=t.registrationOptions;void 0===n&&(n={}),delete t.registrationOptions;var a=function(e){var n=[],a=arguments.length-1;while(a-- >0)n[a]=arguments[a+1];t&&t[e]&&t[e].apply(t,n)};"serviceWorker"in navigator&&s.then((function(){m()?(v(e,a,n),navigator.serviceWorker.ready.then((function(e){a("ready",e)}))):(g(e,a,n),navigator.serviceWorker.ready.then((function(e){a("ready",e)})))}))}function f(e,t){navigator.onLine||e("offline"),e("error",t)}function g(e,t,n){navigator.serviceWorker.register(e,n).then((function(e){t("registered",e),e.waiting?t("updated",e):e.onupdatefound=function(){t("updatefound",e);var n=e.installing;n.onstatechange=function(){"installed"===n.state&&(navigator.serviceWorker.controller?t("updated",e):t("cached",e))}}})).catch((function(e){return f(t,e)}))}function v(e,t,n){fetch(e).then((function(a){404===a.status?(t("error",new Error("Service worker not found at "+e)),p()):-1===a.headers.get("content-type").indexOf("javascript")?(t("error",new Error("Expected "+e+" to have javascript content-type, but received "+a.headers.get("content-type"))),p()):g(e,t,n)})).catch((function(e){return f(t,e)}))}function p(){"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()}))}"undefined"!==typeof window&&(s="undefined"!==typeof Promise?new Promise((function(e){return window.addEventListener("load",e)})):{then:function(e){return window.addEventListener("load",e)}}),d("".concat("","service-worker.js"),{ready:function(){console.log("App is being served from cache by a service worker.\nFor more details, visit https://goo.gl/AFskqB")},registered:function(){console.log("Service worker has been registered.")},cached:function(){console.log("Content has been cached for offline use.")},updatefound:function(){console.log("New content is downloading.")},updated:function(){console.log("New content is available; please refresh.")},offline:function(){console.log("No internet connection found. App is running in offline mode.")},error:function(e){console.error("Error during service worker registration:",e)}});var h=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("v-app",[a("v-navigation-drawer",{attrs:{fixed:"",app:""},model:{value:e.drawer,callback:function(t){e.drawer=t},expression:"drawer"}},[a("v-list",{attrs:{dense:""}},e._l(e.tools,(function(t,n){return a("v-list-item",{key:n,attrs:{to:t.to}},[a("v-list-item-action",[a("v-icon",[e._v(e._s(t.icon))])],1),a("v-list-item-content",[a("v-list-item-title",[e._v(e._s(e.$t(t.text)))])],1)],1)})),1)],1),a("v-app-bar",{attrs:{app:"",color:"purple",dark:""}},[a("v-app-bar-nav-icon",{on:{click:function(t){t.stopPropagation(),e.drawer=!e.drawer}}}),a("v-toolbar-title",{staticClass:"headline"},[e._v(e._s(e.title))]),a("v-spacer"),a("v-toolbar-title",{directives:[{name:"show",rawName:"v-show",value:!e.$vuetify.breakpoint.xs,expression:"!$vuetify.breakpoint.xs"}],staticClass:"headline"},[e._v(" "+e._s(e.$t("message.chemicaltools"))+" "),a("img",{attrs:{src:n("cf05"),contain:"",height:"25"}})]),a("v-menu",{attrs:{attach:"",bottom:"","offset-y":""},scopedSlots:e._u([{key:"activator",fn:function(t){var n=t.on;return[a("v-btn",e._g({staticStyle:{"min-width":"48px"},attrs:{"aria-label":e.$t("message.languages"),text:""}},n),[a("v-icon",[e._v("language")])],1)]}}])},[a("v-list",{attrs:{dense:"",light:""}},e._l(e.languages,(function(t){return a("v-list-item",{key:t.value,attrs:{avatar:""},on:{click:function(n){return e.updatelang(t.value)}}},[a("v-list-item-title",{domProps:{textContent:e._s(t.text)}})],1)})),1)],1)],1),a("v-content",[a("router-view"),a("v-footer",{attrs:{height:"auto",color:"purple lighten-1"}},[a("v-layout",{attrs:{"justify-center":"",row:"",wrap:""}},[e._l(e.links,(function(t,n){return a("v-btn",{key:n,attrs:{color:"white",text:"",rounded:"",href:t.href,target:"_blank"}},[e._v(e._s(t.text))])})),a("v-flex",{attrs:{purple:"","lighten-2":"","py-3":"","text-center":"",xs12:""}},[e._v("Copyright © 2016-2019 Jinzhe Zeng, Licensed under "),a("v-btn",{attrs:{rounded:"",text:"",href:"https://www.apache.org/licenses/LICENSE-2.0",target:"_blank"}},[e._v("the Apache License, Version 2.0")])],1)],2)],1)],1)],1)},x=[],b={name:"Chemical-Tools",data:function(){return{drawer:null,tools:[{text:"message.homepage",to:"/",icon:"fa-home"},{text:"message.element",to:"/element/",icon:"fa-atom"},{text:"message.mass",to:"/mass/",icon:"fa-balance-scale"},{text:"message.acid",to:"/acid/",icon:"fa-flask"},{text:"message.deviation",to:"/deviation/",icon:"fa-chart-bar"},{text:"message.gas",to:"/gas/",icon:"fa-burn"},{text:"message.exam",to:"/exam/",icon:"fa-question"},{text:"message.settings",to:"/setting/",icon:"fa-cog"}],links:[{text:"Jinzhe Zeng's Blog",href:"https://njzjz.win/"},{text:"Download",href:"https://chem.njzjz.win/"},{text:"GitHub",href:"https://github.com/njzjz/Chemical-Tools-web"}],languages:[{value:"en",text:"English"},{value:"zh",text:"中文"}]}},computed:{username:function(){return this.$route.params.username},title:function(){var e=this.$t(this.$route.meta.title),t=this.$t("message.chemicaltools");return window.document.title=e+" - "+t,e}},mounted:function(){this.$i18n.locale=this.$storage.get("lang",navigator.language.split("-")[0]||"en")},methods:{goBack:function(){window.history.length>1?this.$router.go(-1):this.$router.push("/")},updatelang:function(e){this.$i18n.locale=e,this.$storage.set("lang",e)}}},w=b,y=n("2877"),_=Object(y["a"])(w,h,x,!1,null,null,null),C=_.exports,k=n("85b3"),A=n.n(k);function P(){var e=n("49f8"),t={};return e.keys().forEach((function(n){var a=n.match(/([A-Za-z0-9-_]+)\./i);if(a&&a.length>1){var o=a[1];t[o]=e(n)}})),t}o.a.use(A.a);var j=new A.a({locale:"en",fallbackLocale:"en",messages:P()}),$=n("6389"),O=n.n($),E=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("v-container",[a("v-layout",{attrs:{"text-center":"",wrap:""}},[a("v-flex",{attrs:{xs12:""}},[a("v-img",{staticClass:"my-3",attrs:{src:n("cf05"),contain:"",height:"200"}})],1),a("v-flex",{attrs:{"mb-4":""}},[a("h1",{staticClass:"display-3 font-weight-bold mb-3"},[e._v(e._s(e.$t("message.chemicaltools")))]),a("p",{staticClass:"subheading font-weight-regular"},[e._v(e._s(e.$t("message.description")))])]),a("v-flex",{attrs:{"mb-3":""}},[a("v-row",{staticClass:"justify-center",attrs:{wrap:""}},e._l(e.tools,(function(t,n){return a("v-flex",{key:n,staticClass:"mx-3",staticStyle:{width:"200px"}},[a("v-btn",{staticClass:"ma-2",attrs:{to:t.to,block:"",dark:"",color:"purple lighten-1"}},[a("v-icon",[e._v(e._s(t.icon))]),e._v(" "+e._s(e.$t(t.text))+" ")],1)],1)})),1)],1)],1)],1)},S=[],I={data:function(){return{tools:[{text:"message.element",to:"/element/",icon:"fa-atom"},{text:"message.mass",to:"/mass/",icon:"fa-balance-scale"},{text:"message.acid",to:"/acid/",icon:"fa-flask"},{text:"message.deviation",to:"/deviation/",icon:"fa-chart-bar"},{text:"message.gas",to:"/gas/",icon:"fa-burn"},{text:"message.exam",to:"/exam/",icon:"fa-question"}]}}},T=I,U=Object(y["a"])(T,E,S,!1,null,null,null),L=U.exports;o.a.use(O.a);var N=new O.a({routes:[{path:"/",component:L,meta:{title:"message.homepage"}},{path:"/element/",component:function(){return n.e("element").then(n.bind(null,"bdc2"))},meta:{title:"message.element"}},{path:"/mass/",component:function(){return n.e("mass").then(n.bind(null,"38e1"))},meta:{title:"message.mass"}},{path:"/acid/",component:function(){return n.e("acid").then(n.bind(null,"ef80"))},meta:{title:"message.acid"}},{path:"/deviation/",component:function(){return n.e("deviation").then(n.bind(null,"b781"))},meta:{title:"message.deviation"}},{path:"/gas/",component:function(){return n.e("gas").then(n.bind(null,"41a5"))},meta:{title:"message.gas"}},{path:"/exam/",component:function(){return n.e("exam").then(n.bind(null,"8045"))},meta:{title:"message.exam"}},{path:"/setting/",component:function(){return n.e("setting").then(n.bind(null,"f49f"))},meta:{title:"message.settings"}}]});o.a.config.productionTip=!1,o.a.use(u.a,{prefix:"app_",driver:"local",ttl:31536e7}),o.a.filter("keepTwoNum",(function(e){return Number(e).toFixed(2)})),new o.a({router:N,vuetify:l,render:function(e){return e(C)},i18n:j}).$mount("#app")},6389:function(e,t){e.exports=VueRouter},"85b3":function(e,t){e.exports=VueI18n},"8bbf":function(e,t){e.exports=Vue},a2c9:function(e,t){e.exports=Vuetify},a61c:function(e,t){e.exports=chemicaltools},cf05:function(e,t,n){e.exports=n.p+"img/logo.png"},edd4:function(e){e.exports=JSON.parse('{"message":{"chemicaltools":"Chemical Tools","element":"Element Search","mass":"Mass Calculation","acid":"Acid-Base Calculation","exam":"Element Memory","gas":"Gas Calculation","deviation":"Deviation Calculation","calculate":"Calculate","description":"Essential tools for chemistry students","homepage":"Home Page","settings":"Settings","languages":"Languages","search":"Search","wikipedia":"Visit Wikipedia","elementhint":"Element name/symbol/number","elementnodata":"Please search an element.","formula":"Chemical formula","ab":"Acid or Base","c":"Analytical concentration (mol/L)","question":"Question","wronginput":"Wrong input.","inputdata":"Please input data!","inputformula":"Please input the chemical formula.","multpledata":"Please input multiple data.","massvalue":"Mass","data":"Data","dataline":"One data each line","score":"Answer {correct} questions correctly and {incorrect} questions incorrectly.","testmode":"Test mode","numberlimit":"Limit of atomic number","correct":"Answer correctly!","incorrect":"The answer is wrong. The correct answer is {correctanswer} and the question is {question}, but your answer is {answer}."},"testmodes":[{"value":0,"text":"Answer symbols for elements according to Chinese names"},{"value":1,"text":"Answer atomic numbers according to Chinese names"},{"value":2,"text":"Answer IUPAC names according to Chinese names"},{"value":3,"text":"Answer Chinese names according to symbols for elements"},{"value":4,"text":"Answer atomic numbers according to symbols for elements"},{"value":5,"text":"Answer IUPAC names according to symbols for elements"},{"value":6,"text":"Answer Chinese names according to atomic numbers"},{"value":7,"text":"Answer symbols for elements according to atomic numbers"},{"value":8,"text":"Answer IUPAC names according to atomic numbers"},{"value":9,"text":"Answer Chinese names according to IUPAC names"},{"value":10,"text":"Answer symbols for elements according to IUPAC names"},{"value":11,"text":"Answer atomic numbers according to IUPAC names"}],"massheader":[{"text":"Name","align":"left","value":"name"},{"text":"Symbol","align":"right","value":"symbol"},{"text":"Atom Number","align":"right","value":"atomnumber"},{"text":"Mass","align":"right","value":"mass"},{"text":"Mass fraction (%)","align":"right","value":"massper"}],"element":{"name":"Chinese name","symbol":"Symbol","iupac":"IUPAC name","number":"Atomic number","mass":"Mass","origin":"Origin of the name"},"ablabel":[{"value":true,"text":"Acid"},{"value":false,"text":"Base"}],"gas":{"p":"Pressure/kPa","V":"Volume/L","n":"Amount of substance/mol","T":"Temperature/K"},"deviation":{"input":"Input data","average":"Average","ad":"Average deviation","rad":"Relative average deviation","sd":"Standard deviation","rsd":"Relative standard deviation"}}')}});
//# sourceMappingURL=app.js.map