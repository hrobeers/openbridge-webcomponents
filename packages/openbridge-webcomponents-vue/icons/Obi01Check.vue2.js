import{defineComponent as u,reactive as f,useSlots as d,withDirectives as m,openBlock as v,createBlock as h,h as _}from"vue";import{assignSlotNodes as k}from"@lit-labs/vue-utils/wrapper-utils.js";import"@oicl/openbridge-webcomponents/dist/icons/icon-01-check.js";const b=u({__name:"Obi01Check",props:{useCssColor:{type:Boolean}},setup(p){const o=p,n=f({}),i={created(t){for(const e in o)n[e]=t[e]}};let r=!1;const l=d(),a=()=>{const e={};for(const s in o){const c=o[s];(c!==void 0||r)&&(e[s]=c??n[s])}return r=!0,_("obi-01-check",e,k(l))};return(t,e)=>m((v(),h(a,null,null,512)),[[i]])}});export{b as default};
//# sourceMappingURL=Obi01Check.vue2.js.map
