import{defineComponent as u,reactive as f,useSlots as d,withDirectives as m,openBlock as v,createBlock as _,h}from"vue";import{assignSlotNodes as g}from"@lit-labs/vue-utils/wrapper-utils.js";import"@oicl/openbridge-webcomponents/dist/icons/icon-17-rowing.js";const P=u({__name:"Obi17Rowing",props:{useCssColor:{type:Boolean}},setup(i){const e=i,n=f({}),p={created(t){for(const o in e)n[o]=t[o]}};let r=!1;const l=d(),a=()=>{const o={};for(const s in e){const c=e[s];(c!==void 0||r)&&(o[s]=c??n[s])}return r=!0,h("obi-17-rowing",o,g(l))};return(t,o)=>m((v(),_(a,null,null,512)),[[p]])}});export{P as default};
//# sourceMappingURL=Obi17Rowing.vue2.js.map
