import{defineComponent as u,reactive as f,useSlots as d,withDirectives as h,openBlock as m,createBlock as v,h as k}from"vue";import{assignSlotNodes as _}from"@lit-labs/vue-utils/wrapper-utils.js";import"@oicl/openbridge-webcomponents/dist/icons/icon-01-checkbox-uncheck.js";const B=u({__name:"Obi01CheckboxUncheck",props:{useCssColor:{type:Boolean}},setup(p){const o=p,n=f({}),i={created(t){for(const e in o)n[e]=t[e]}};let c=!1;const l=d(),a=()=>{const e={};for(const s in o){const r=o[s];(r!==void 0||c)&&(e[s]=r??n[s])}return c=!0,k("obi-01-checkbox-uncheck",e,_(l))};return(t,e)=>h((m(),v(a,null,null,512)),[[i]])}});export{B as default};
//# sourceMappingURL=Obi01CheckboxUncheck.vue2.js.map
