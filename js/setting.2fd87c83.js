(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["setting"],{"615b":function(e,t,s){},f49f:function(e,t,s){"use strict";s.r(t);var a=function(){var e=this,t=e.$createElement,s=e._self._c||t;return s("v-card",[s("v-list",{attrs:{subheader:"","two-line":""}},[s("v-subheader",[e._v(e._s(e.$t("message.exam")))]),s("v-list-item",[s("v-list-item-content",{attrs:{block:""}},[s("v-select",{attrs:{items:e.$t("testmodes"),label:e.$t("message.testmode")},on:{change:function(t){return e.updatevalue("mode",e.mode)}},model:{value:e.mode,callback:function(t){e.mode=t},expression:"mode"}})],1)],1),s("v-list-item",[s("v-list-item-content",{attrs:{block:""}},[s("v-select",{attrs:{items:e.testnumbers,label:e.$t("message.numberlimit")},on:{change:function(t){return e.updatevalue("number",e.number)}},model:{value:e.number,callback:function(t){e.number=t},expression:"number"}})],1)],1)],1),s("v-divider"),s("v-list",{attrs:{subheader:"","two-line":""}},[s("v-subheader",[e._v(e._s(e.$t("message.acid")))]),s("v-list-item",[s("v-list-item-content",{attrs:{block:""}},[s("v-text-field",{attrs:{label:"pKw"},on:{change:function(t){return e.updatevalue("pkw",e.pkw)}},model:{value:e.pkw,callback:function(t){e.pkw=t},expression:"pkw"}})],1)],1)],1)],1)},n=[],r={data:function(){return{testnumbers:[18,36,54,86,118],mode:2,number:86,pkw:14}},mounted:function(){var e=this;["mode","number","pkw"].forEach((function(t){e[t]=e.$storage.get(t,e[t])}))},methods:{updatevalue:function(e,t){this.$storage.set(e,t)}}},i=r,o=s("2877"),l=s("6544"),c=s.n(l),d=(s("615b"),s("10d2")),u=s("297c"),m=s("1c87"),v=s("58df"),h=Object(v["a"])(u["a"],m["a"],d["a"]).extend({name:"v-card",props:{flat:Boolean,hover:Boolean,img:String,link:Boolean,loaderHeight:{type:[Number,String],default:4},raised:Boolean},computed:{classes(){return{"v-card":!0,...m["a"].options.computed.classes.call(this),"v-card--flat":this.flat,"v-card--hover":this.hover,"v-card--link":this.isClickable,"v-card--loading":this.loading,"v-card--disabled":this.disabled,"v-card--raised":this.raised,...d["a"].options.computed.classes.call(this)}},styles(){const e={...d["a"].options.computed.styles.call(this)};return this.img&&(e.background=`url("${this.img}") center center / cover no-repeat`),e}},methods:{genProgress(){const e=u["a"].options.methods.genProgress.call(this);return e?this.$createElement("div",{staticClass:"v-card__progress",key:"progress"},[e]):null}},render(e){const{tag:t,data:s}=this.generateRouteLink();return s.style=this.styles,this.isClickable&&(s.attrs=s.attrs||{},s.attrs.tabindex=0),e(t,this.setBackgroundColor(this.color,s),[this.genProgress(),this.$slots.default])}}),b=s("ce7e"),p=s("8860"),g=s("da13"),f=s("5d23"),k=s("b974"),w=s("e0c7"),$=s("8654"),x=Object(o["a"])(i,a,n,!1,null,null,null);t["default"]=x.exports;c()(x,{VCard:h,VDivider:b["a"],VList:p["a"],VListItem:g["a"],VListItemContent:f["a"],VSelect:k["a"],VSubheader:w["a"],VTextField:$["a"]})}}]);
//# sourceMappingURL=setting.2fd87c83.js.map