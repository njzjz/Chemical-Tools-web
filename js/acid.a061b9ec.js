(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["acid"],{"0cb2":function(t,a,r){var n=r("7b0b"),e=Math.floor,c="".replace,o=/\$([$&'`]|\d{1,2}|<[^>]*>)/g,i=/\$([$&'`]|\d{1,2})/g;t.exports=function(t,a,r,u,s,l){var f=r+t.length,p=u.length,d=i;return void 0!==s&&(s=n(s),d=o),c.call(l,d,(function(n,c){var o;switch(c.charAt(0)){case"$":return"$";case"&":return t;case"`":return a.slice(0,r);case"'":return a.slice(f);case"<":o=s[c.slice(1,-1)];break;default:var i=+c;if(0===i)return n;if(i>p){var l=e(i/10);return 0===l?n:l<=p?void 0===u[l-1]?c.charAt(1):u[l-1]+c.charAt(1):n}o=u[i-1]}return void 0===o?"":o}))}},5319:function(t,a,r){"use strict";var n=r("d784"),e=r("825a"),c=r("50c4"),o=r("a691"),i=r("1d80"),u=r("8aa5"),s=r("0cb2"),l=r("14c3"),f=Math.max,p=Math.min,d=function(t){return void 0===t?t:String(t)};n("replace",2,(function(t,a,r,n){var v=n.REGEXP_REPLACE_SUBSTITUTES_UNDEFINED_CAPTURE,b=n.REPLACE_KEEPS_$0,h=v?"$":"$0";return[function(r,n){var e=i(this),c=void 0==r?void 0:r[t];return void 0!==c?c.call(r,e,n):a.call(String(e),r,n)},function(t,n){if(!v&&b||"string"===typeof n&&-1===n.indexOf(h)){var i=r(a,t,this,n);if(i.done)return i.value}var g=e(t),m=String(this),x="function"===typeof n;x||(n=String(n));var w=g.global;if(w){var E=g.unicode;g.lastIndex=0}var A=[];while(1){var $=l(g,m);if(null===$)break;if(A.push($),!w)break;var S=String($[0]);""===S&&(g.lastIndex=u(m,c(g.lastIndex),E))}for(var _="",M=0,k=0;k<A.length;k++){$=A[k];for(var y=String($[0]),B=f(p(o($.index),m.length),0),K=[],T=1;T<$.length;T++)K.push(d($[T]));var C=$.groups;if(x){var F=[y].concat(K,B,m);void 0!==C&&F.push(C);var L=String(n.apply(void 0,F))}else L=s(y,m,B,K,C,n);B>=M&&(_+=m.slice(M,B)+L,M=B+y.length)}return _+m.slice(M)}]}))},"7afa":function(t,a,r){"use strict";r.d(a,"a",(function(){return n})),r.d(a,"b",(function(){return e}));r("5319"),r("ac1f"),r("b680");function n(t){return t=t.replace(/[\d]/g,(function(t){return"<sub>"+t+"</sub>"})),t=t.replace(/(\+|-)/g,(function(t){return"<sup>"+t+"</sup>"})),t=t.replace(/<sub>[\d]<\/sub><sup>(\+|-)<\/sup>/g,(function(t){return"<sup>"+t.replace(/<\/?su(b|p)>/g,"")+"</sup>"})),t}function e(t,a){if(0===t)return t;var r=Math.floor(Math.log(Math.abs(t))/Math.LN10),n=t*Math.pow(10,-r);return n.toFixed(a)+(0===r?"":"×10<sup>".concat(r,"</sup>"))}},8418:function(t,a,r){"use strict";var n=r("c04e"),e=r("9bf2"),c=r("5c6c");t.exports=function(t,a,r){var o=n(a);o in t?e.f(t,o,c(0,r)):t[o]=r}},"99af":function(t,a,r){"use strict";var n=r("23e7"),e=r("d039"),c=r("e8b5"),o=r("861d"),i=r("7b0b"),u=r("50c4"),s=r("8418"),l=r("65f0"),f=r("1dde"),p=r("b622"),d=r("2d00"),v=p("isConcatSpreadable"),b=9007199254740991,h="Maximum allowed index exceeded",g=d>=51||!e((function(){var t=[];return t[v]=!1,t.concat()[0]!==t})),m=f("concat"),x=function(t){if(!o(t))return!1;var a=t[v];return void 0!==a?!!a:c(t)},w=!g||!m;n({target:"Array",proto:!0,forced:w},{concat:function(t){var a,r,n,e,c,o=i(this),f=l(o,0),p=0;for(a=-1,n=arguments.length;a<n;a++)if(c=-1===a?o:arguments[a],x(c)){if(e=u(c.length),p+e>b)throw TypeError(h);for(r=0;r<e;r++,p++)r in c&&s(f,p,c[r])}else{if(p>=b)throw TypeError(h);s(f,p++,c)}return f.length=p,f}})},b0c0:function(t,a,r){var n=r("83ab"),e=r("9bf2").f,c=Function.prototype,o=c.toString,i=/^\s*function ([^ (]*)/,u="name";n&&!(u in c)&&e(c,u,{configurable:!0,get:function(){try{return o.call(this).match(i)[1]}catch(t){return""}}})},d81d:function(t,a,r){"use strict";var n=r("23e7"),e=r("b727").map,c=r("1dde"),o=c("map");n({target:"Array",proto:!0,forced:!o},{map:function(t){return e(this,t,arguments.length>1?arguments[1]:void 0)}})},ef80:function(t,a,r){"use strict";r.r(a);var n=function(){var t=this,a=t.$createElement,r=t._self._c||a;return r("v-container",[r("v-row",{attrs:{wrap:""}},[r("v-text-field",{attrs:{label:t.AorB?"pKa":"pKb"},model:{value:t.pKa,callback:function(a){t.pKa=a},expression:"pKa"}}),r("v-select",{attrs:{items:t.$t("ablabel"),label:t.$t("message.ab")},model:{value:t.AorB,callback:function(a){t.AorB=a},expression:"AorB"}})],1),r("v-row",{attrs:{wrap:""}},[r("v-text-field",{attrs:{label:t.$t("message.c")},model:{value:t.c,callback:function(a){t.c=a},expression:"c"}}),r("v-btn",{attrs:{color:"success"},on:{click:function(a){return t.calacid(t.c,t.pKa,t.AorB)}}},[t._v(t._s(t.$t("message.calculate")))])],1),r("div",{directives:[{name:"show",rawName:"v-show",value:!t.output,expression:"!output"}],staticClass:"pt-3"},[t._v(t._s(t.$t("message.inputdata")))]),r("div",{staticClass:"pt-3",domProps:{innerHTML:t._s(t.output)}})],1)},e=[],c=(r("1276"),r("ac1f"),r("d81d"),r("99af"),r("159b"),r("b680"),r("b0c0"),r("7afa")),o=r("a61c"),i={data:function(){return{output:"",results:[],pKa:"",c:"",AorB:!0}},methods:{calacid:function(t,a,r){var n=arguments.length>3&&void 0!==arguments[3]?arguments[3]:14;if(a&&t){var e=a.split(/[\r\n\\s ,;]+/),i=o.calculateAcid(t,e.map(parseFloat),r,n),u="<b>".concat(r?"HA":"BOH","</b>, c=").concat(t,"mol/L, "),s=1;e.forEach((function(t){var a=e.length>1?"<sub>".concat(s++,"</sub>"):"";u+="pK<sub>".concat(r?"a":"b","</sub>").concat(a,"=").concat(t,", ")})),u+="<br>pH=".concat(i.pH.toFixed(2),"."),i.ion.forEach((function(t){u+="<br>c(".concat(Object(c["a"])(t.name),")=").concat(Object(c["b"])(t.c,2),"mol/L,")})),u=u.substring(0,u.length-1)+".",this.output=u}else this.output=""}}},u=i,s=r("2877"),l=r("6544"),f=r.n(l),p=r("8336"),d=r("a523"),v=r("0fd9"),b=r("b974"),h=r("8654"),g=Object(s["a"])(u,n,e,!1,null,null,null);a["default"]=g.exports;f()(g,{VBtn:p["a"],VContainer:d["a"],VRow:v["a"],VSelect:b["a"],VTextField:h["a"]})}}]);
//# sourceMappingURL=acid.a061b9ec.js.map