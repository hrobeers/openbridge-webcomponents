import{defineComponent as u,reactive as f,useSlots as d,withDirectives as m,openBlock as v,createBlock as _,h}from"vue";import{assignSlotNodes as C}from"@lit-labs/vue-utils/wrapper-utils.js";import"@oicl/openbridge-webcomponents/dist/icons/icon-08-cooling.js";const b=u({__name:"Obi08Cooling",props:{useCssColor:{type:Boolean}},setup(i){const e=i,n=f({}),l={created(t){for(const o in e)n[o]=t[o]}};let r=!1;const p=d(),a=()=>{const o={};for(const s in e){const c=e[s];(c!==void 0||r)&&(o[s]=c??n[s])}return r=!0,h("obi-08-cooling",o,C(p))};return(t,o)=>m((v(),_(a,null,null,512)),[[l]])}});export{b as default};
//# sourceMappingURL=Obi08Cooling.vue2.js.map
