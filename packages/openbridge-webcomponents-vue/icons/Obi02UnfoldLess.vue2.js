import{defineComponent as u,reactive as f,useSlots as d,withDirectives as m,openBlock as v,createBlock as _,h}from"vue";import{assignSlotNodes as B}from"@lit-labs/vue-utils/wrapper-utils.js";import"@oicl/openbridge-webcomponents/dist/icons/icon-02-unfold-less.js";const k=u({__name:"Obi02UnfoldLess",props:{useCssColor:{type:Boolean}},setup(l){const o=l,n=f({}),p={created(s){for(const e in o)n[e]=s[e]}};let r=!1;const i=d(),a=()=>{const e={};for(const t in o){const c=o[t];(c!==void 0||r)&&(e[t]=c??n[t])}return r=!0,h("obi-02-unfold-less",e,B(i))};return(s,e)=>m((v(),_(a,null,null,512)),[[p]])}});export{k as default};
//# sourceMappingURL=Obi02UnfoldLess.vue2.js.map
