(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["acid"],{5319:function(t,a,r){"use strict";var e=r("d784"),n=r("825a"),o=r("7b0b"),c=r("50c4"),i=r("a691"),u=r("1d80"),s=r("8aa5"),l=r("14c3"),f=Math.max,p=Math.min,d=Math.floor,v=/\$([$&'`]|\d\d?|<[^>]*>)/g,b=/\$([$&'`]|\d\d?)/g,h=function(t){return void 0===t?t:String(t)};e("replace",2,(function(t,a,r,e){var g=e.REGEXP_REPLACE_SUBSTITUTES_UNDEFINED_CAPTURE,m=e.REPLACE_KEEPS_$0,x=g?"$":"$0";return[function(r,e){var n=u(this),o=void 0==r?void 0:r[t];return void 0!==o?o.call(r,n,e):a.call(String(n),r,e)},function(t,e){if(!g&&m||"string"===typeof e&&-1===e.indexOf(x)){var o=r(a,t,this,e);if(o.done)return o.value}var u=n(t),d=String(this),v="function"===typeof e;v||(e=String(e));var b=u.global;if(b){var A=u.unicode;u.lastIndex=0}var E=[];while(1){var S=l(u,d);if(null===S)break;if(E.push(S),!b)break;var $=String(S[0]);""===$&&(u.lastIndex=s(d,c(u.lastIndex),A))}for(var _="",k=0,B=0;B<E.length;B++){S=E[B];for(var K=String(S[0]),M=f(p(i(S.index),d.length),0),y=[],C=1;C<S.length;C++)y.push(h(S[C]));var F=S.groups;if(v){var L=[K].concat(y,M,d);void 0!==F&&L.push(F);var P=String(e.apply(void 0,L))}else P=w(K,d,M,y,F,e);M>=k&&(_+=d.slice(k,M)+P,k=M+K.length)}return _+d.slice(k)}];function w(t,r,e,n,c,i){var u=e+t.length,s=n.length,l=b;return void 0!==c&&(c=o(c),l=v),a.call(i,l,(function(a,o){var i;switch(o.charAt(0)){case"$":return"$";case"&":return t;case"`":return r.slice(0,e);case"'":return r.slice(u);case"<":i=c[o.slice(1,-1)];break;default:var l=+o;if(0===l)return a;if(l>s){var f=d(l/10);return 0===f?a:f<=s?void 0===n[f-1]?o.charAt(1):n[f-1]+o.charAt(1):a}i=n[l-1]}return void 0===i?"":i}))}}))},"7afa":function(t,a,r){"use strict";r.d(a,"a",(function(){return e})),r.d(a,"b",(function(){return n}));r("b680"),r("ac1f"),r("5319");function e(t){return t=t.replace(/[\d]/g,(function(t){return"<sub>"+t+"</sub>"})),t=t.replace(/(\+|-)/g,(function(t){return"<sup>"+t+"</sup>"})),t=t.replace(/<sub>[\d]<\/sub><sup>(\+|-)<\/sup>/g,(function(t){return"<sup>"+t.replace(/<\/?su(b|p)>/g,"")+"</sup>"})),t}function n(t,a){var e=r("12a8");if(e.extend(String.prototype,{}),0===t)return t;var n=Math.floor(Math.log(Math.abs(t))/Math.LN10),o=t*Math.pow(10,-n);return o.toFixed(a)+(0===n?"":"×10<sup>{0}</sup>".format(n))}},b0c0:function(t,a,r){var e=r("83ab"),n=r("9bf2").f,o=Function.prototype,c=o.toString,i=/^\s*function ([^ (]*)/,u="name";e&&!(u in o)&&n(o,u,{configurable:!0,get:function(){try{return c.call(this).match(i)[1]}catch(t){return""}}})},d81d:function(t,a,r){"use strict";var e=r("23e7"),n=r("b727").map,o=r("1dde"),c=r("ae40"),i=o("map"),u=c("map");e({target:"Array",proto:!0,forced:!i||!u},{map:function(t){return n(this,t,arguments.length>1?arguments[1]:void 0)}})},ef80:function(t,a,r){"use strict";r.r(a);var e=function(){var t=this,a=t.$createElement,r=t._self._c||a;return r("v-container",[r("v-row",{attrs:{wrap:""}},[r("v-text-field",{attrs:{label:t.AorB?"pKa":"pKb"},model:{value:t.pKa,callback:function(a){t.pKa=a},expression:"pKa"}}),r("v-select",{attrs:{items:t.$t("ablabel"),label:t.$t("message.ab")},model:{value:t.AorB,callback:function(a){t.AorB=a},expression:"AorB"}})],1),r("v-row",{attrs:{wrap:""}},[r("v-text-field",{attrs:{label:t.$t("message.c")},model:{value:t.c,callback:function(a){t.c=a},expression:"c"}}),r("v-btn",{attrs:{color:"success"},on:{click:function(a){return t.calacid(t.c,t.pKa,t.AorB)}}},[t._v(t._s(t.$t("message.calculate")))])],1),r("div",{directives:[{name:"show",rawName:"v-show",value:!t.output,expression:"!output"}],staticClass:"pt-3"},[t._v(t._s(t.$t("message.inputdata")))]),r("div",{staticClass:"pt-3",domProps:{innerHTML:t._s(t.output)}})],1)},n=[],o=(r("4160"),r("d81d"),r("b0c0"),r("b680"),r("ac1f"),r("1276"),r("159b"),r("7afa")),c=r("a61c"),i=r("12a8");i.extend(String.prototype,{});var u={data:function(){return{output:"",results:[],pKa:"",c:"",AorB:!0}},methods:{calacid:function(t,a,r){var e=arguments.length>3&&void 0!==arguments[3]?arguments[3]:14;if(a&&t){var n=a.split(/[\r\n\\s ,;]+/),i=c.calculateAcid(t,n.map(parseFloat),r,e),u="<b>{0}</b>, c={1}mol/L, ".format(r?"HA":"BOH",t),s=1;n.forEach((function(t){u+="pK<sub>{0}</sub>{1}={2}, ".format(r?"a":"b",n.length>1?"<sub>{0}</sub>".format(s++):"",t)})),u+="<br>{0}{1}.".format("pH=",i.pH.toFixed(2)),i.ion.forEach((function(t){u+="<br>c({0})={1}mol/L,".format(Object(o["a"])(t.name),Object(o["b"])(t.c,2))})),u=u.substring(0,u.length-1)+".",this.output=u}else this.output=""}}},s=u,l=r("2877"),f=r("6544"),p=r.n(f),d=r("8336"),v=r("a523"),b=r("0fd9"),h=r("b974"),g=r("8654"),m=Object(l["a"])(s,e,n,!1,null,null,null);a["default"]=m.exports;p()(m,{VBtn:d["a"],VContainer:v["a"],VRow:b["a"],VSelect:h["a"],VTextField:g["a"]})}}]);
//# sourceMappingURL=acid.c09ceb02.js.map