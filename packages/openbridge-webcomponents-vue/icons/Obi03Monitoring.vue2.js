import{defineComponent as u,reactive as f,useSlots as d,withDirectives as m,openBlock as v,createBlock as _,h}from"vue";import{assignSlotNodes as g}from"@lit-labs/vue-utils/wrapper-utils.js";import"@oicl/openbridge-webcomponents/dist/icons/icon-03-monitoring.js";const b=u({__name:"Obi03Monitoring",props:{useCssColor:{type:Boolean}},setup(i){const e=i,s=f({}),p={created(t){for(const o in e)s[o]=t[o]}};let r=!1;const l=d(),a=()=>{const o={};for(const n in e){const c=e[n];(c!==void 0||r)&&(o[n]=c??s[n])}return r=!0,h("obi-03-monitoring",o,g(l))};return(t,o)=>m((v(),_(a,null,null,512)),[[p]])}});export{b as default};
//# sourceMappingURL=Obi03Monitoring.vue2.js.map
