import{defineComponent as f,reactive as u,useSlots as m,withDirectives as d,openBlock as v,createBlock as _,h}from"vue";import{assignSlotNodes as P}from"@lit-labs/vue-utils/wrapper-utils.js";import"@oicl/openbridge-webcomponents/dist/icons/icon-08-pump-off-horisontal.js";const k=f({__name:"Obi08PumpOffHorisontal",props:{useCssColor:{type:Boolean}},setup(p){const e=p,n=u({}),i={created(t){for(const o in e)n[o]=t[o]}};let r=!1;const l=m(),a=()=>{const o={};for(const s in e){const c=e[s];(c!==void 0||r)&&(o[s]=c??n[s])}return r=!0,h("obi-08-pump-off-horisontal",o,P(l))};return(t,o)=>d((v(),_(a,null,null,512)),[[i]])}});export{k as default};
//# sourceMappingURL=Obi08PumpOffHorisontal.vue2.js.map
