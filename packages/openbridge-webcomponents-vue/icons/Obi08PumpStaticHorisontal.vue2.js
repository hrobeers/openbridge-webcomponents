import{defineComponent as u,reactive as f,useSlots as m,withDirectives as d,openBlock as v,createBlock as _,h}from"vue";import{assignSlotNodes as P}from"@lit-labs/vue-utils/wrapper-utils.js";import"@oicl/openbridge-webcomponents/dist/icons/icon-08-pump-static-horisontal.js";const b=u({__name:"Obi08PumpStaticHorisontal",props:{useCssColor:{type:Boolean}},setup(i){const t=i,n=f({}),p={created(e){for(const o in t)n[o]=e[o]}};let r=!1;const a=m(),l=()=>{const o={};for(const s in t){const c=t[s];(c!==void 0||r)&&(o[s]=c??n[s])}return r=!0,h("obi-08-pump-static-horisontal",o,P(a))};return(e,o)=>d((v(),_(l,null,null,512)),[[p]])}});export{b as default};
//# sourceMappingURL=Obi08PumpStaticHorisontal.vue2.js.map
