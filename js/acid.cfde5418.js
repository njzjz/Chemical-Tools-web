(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["acid"],{"0cb2":function(t,r,n){var a=n("7b0b"),e=Math.floor,c="".replace,o=/\$([$&'`]|\d{1,2}|<[^>]*>)/g,i=/\$([$&'`]|\d{1,2})/g;t.exports=function(t,r,n,u,s,l){var f=n+t.length,p=u.length,d=i;return void 0!==s&&(s=a(s),d=o),c.call(l,d,(function(a,c){var o;switch(c.charAt(0)){case"$":return"$";case"&":return t;case"`":return r.slice(0,n);case"'":return r.slice(f);case"<":o=s[c.slice(1,-1)];break;default:var i=+c;if(0===i)return a;if(i>p){var l=e(i/10);return 0===l?a:l<=p?void 0===u[l-1]?c.charAt(1):u[l-1]+c.charAt(1):a}o=u[i-1]}return void 0===o?"":o}))}},5319:function(t,r,n){"use strict";var a=n("d784"),e=n("d039"),c=n("825a"),o=n("50c4"),i=n("a691"),u=n("1d80"),s=n("8aa5"),l=n("0cb2"),f=n("14c3"),p=n("b622"),d=p("replace"),v=Math.max,b=Math.min,h=function(t){return void 0===t?t:String(t)},g=function(){return"$0"==="a".replace(/./,"$0")}(),m=function(){return!!/./[d]&&""===/./[d]("a","$0")}(),x=!e((function(){var t=/./;return t.exec=function(){var t=[];return t.groups={a:"7"},t},"7"!=="".replace(t,"$<a>")}));a("replace",(function(t,r,n){var a=m?"$":"$0";return[function(t,n){var a=u(this),e=void 0==t?void 0:t[d];return void 0!==e?e.call(t,a,n):r.call(String(a),t,n)},function(t,e){if("string"===typeof e&&-1===e.indexOf(a)&&-1===e.indexOf("$<")){var u=n(r,this,t,e);if(u.done)return u.value}var p=c(this),d=String(t),g="function"===typeof e;g||(e=String(e));var m=p.global;if(m){var x=p.unicode;p.lastIndex=0}var w=[];while(1){var $=f(p,d);if(null===$)break;if(w.push($),!m)break;var A=String($[0]);""===A&&(p.lastIndex=s(d,o(p.lastIndex),x))}for(var M="",S=0,k=0;k<w.length;k++){$=w[k];for(var y=String($[0]),B=v(b(i($.index),d.length),0),K=[],_=1;_<$.length;_++)K.push(h($[_]));var O=$.groups;if(g){var E=[y].concat(K,B,d);void 0!==O&&E.push(O);var F=String(e.apply(void 0,E))}else F=l(y,d,B,K,O,e);B>=S&&(M+=d.slice(S,B)+F,S=B+y.length)}return M+d.slice(S)}]}),!x||!g||m)},"7afa":function(t,r,n){"use strict";n.d(r,"a",(function(){return a})),n.d(r,"b",(function(){return e}));n("ac1f"),n("5319"),n("b680");function a(t){return t=t.replace(/[\d]/g,(function(t){return"<sub>"+t+"</sub>"})),t=t.replace(/(\+|-)/g,(function(t){return"<sup>"+t+"</sup>"})),t=t.replace(/<sub>[\d]<\/sub><sup>(\+|-)<\/sup>/g,(function(t){return"<sup>"+t.replace(/<\/?su(b|p)>/g,"")+"</sup>"})),t}function e(t,r){if(0===t)return t;var n=Math.floor(Math.log(Math.abs(t))/Math.LN10),a=t*Math.pow(10,-n);return a.toFixed(r)+(0===n?"":"×10<sup>".concat(n,"</sup>"))}},8418:function(t,r,n){"use strict";var a=n("c04e"),e=n("9bf2"),c=n("5c6c");t.exports=function(t,r,n){var o=a(r);o in t?e.f(t,o,c(0,n)):t[o]=n}},"99af":function(t,r,n){"use strict";var a=n("23e7"),e=n("d039"),c=n("e8b5"),o=n("861d"),i=n("7b0b"),u=n("50c4"),s=n("8418"),l=n("65f0"),f=n("1dde"),p=n("b622"),d=n("2d00"),v=p("isConcatSpreadable"),b=9007199254740991,h="Maximum allowed index exceeded",g=d>=51||!e((function(){var t=[];return t[v]=!1,t.concat()[0]!==t})),m=f("concat"),x=function(t){if(!o(t))return!1;var r=t[v];return void 0!==r?!!r:c(t)},w=!g||!m;a({target:"Array",proto:!0,forced:w},{concat:function(t){var r,n,a,e,c,o=i(this),f=l(o,0),p=0;for(r=-1,a=arguments.length;r<a;r++)if(c=-1===r?o:arguments[r],x(c)){if(e=u(c.length),p+e>b)throw TypeError(h);for(n=0;n<e;n++,p++)n in c&&s(f,p,c[n])}else{if(p>=b)throw TypeError(h);s(f,p++,c)}return f.length=p,f}})},b0c0:function(t,r,n){var a=n("83ab"),e=n("9bf2").f,c=Function.prototype,o=c.toString,i=/^\s*function ([^ (]*)/,u="name";a&&!(u in c)&&e(c,u,{configurable:!0,get:function(){try{return o.call(this).match(i)[1]}catch(t){return""}}})},d81d:function(t,r,n){"use strict";var a=n("23e7"),e=n("b727").map,c=n("1dde"),o=c("map");a({target:"Array",proto:!0,forced:!o},{map:function(t){return e(this,t,arguments.length>1?arguments[1]:void 0)}})},ef80:function(t,r,n){"use strict";n.r(r);var a=function(){var t=this,r=t.$createElement,n=t._self._c||r;return n("v-container",[n("v-row",{attrs:{wrap:""}},[n("v-text-field",{attrs:{label:t.AorB?"pKa":"pKb"},model:{value:t.pKa,callback:function(r){t.pKa=r},expression:"pKa"}}),n("v-select",{attrs:{items:t.$t("ablabel"),label:t.$t("message.ab")},model:{value:t.AorB,callback:function(r){t.AorB=r},expression:"AorB"}})],1),n("v-row",{attrs:{wrap:""}},[n("v-text-field",{attrs:{label:t.$t("message.c")},model:{value:t.c,callback:function(r){t.c=r},expression:"c"}}),n("v-btn",{attrs:{color:"success"},on:{click:function(r){return t.calacid(t.c,t.pKa,t.AorB)}}},[t._v(t._s(t.$t("message.calculate")))])],1),n("div",{directives:[{name:"show",rawName:"v-show",value:!t.output,expression:"!output"}],staticClass:"pt-3"},[t._v(t._s(t.$t("message.inputdata")))]),n("div",{staticClass:"pt-3",domProps:{innerHTML:t._s(t.output)}})],1)},e=[],c=(n("ac1f"),n("1276"),n("d81d"),n("99af"),n("159b"),n("b680"),n("b0c0"),n("7afa")),o=n("a61c"),i={data:function(){return{output:"",results:[],pKa:"",c:"",AorB:!0}},methods:{calacid:function(t,r,n){var a=arguments.length>3&&void 0!==arguments[3]?arguments[3]:14;if(r&&t){var e=r.split(/[\r\n\\s ,;]+/),i=o.calculateAcid(t,e.map(parseFloat),n,a),u="<b>".concat(n?"HA":"BOH","</b>, c=").concat(t,"mol/L, "),s=1;e.forEach((function(t){var r=e.length>1?"<sub>".concat(s++,"</sub>"):"";u+="pK<sub>".concat(n?"a":"b","</sub>").concat(r,"=").concat(t,", ")})),u+="<br>pH=".concat(i.pH.toFixed(2),"."),i.ion.forEach((function(t){u+="<br>c(".concat(Object(c["a"])(t.name),")=").concat(Object(c["b"])(t.c,2),"mol/L,")})),u=u.substring(0,u.length-1)+".",this.output=u}else this.output=""}}},u=i,s=n("2877"),l=n("6544"),f=n.n(l),p=n("8336"),d=n("a523"),v=n("0fd9"),b=n("b974"),h=n("8654"),g=Object(s["a"])(u,a,e,!1,null,null,null);r["default"]=g.exports;f()(g,{VBtn:p["a"],VContainer:d["a"],VRow:v["a"],VSelect:b["a"],VTextField:h["a"]})}}]);
//# sourceMappingURL=acid.cfde5418.js.map