import{defineComponent as u,reactive as f,useSlots as v,withDirectives as d,openBlock as m,createBlock as _,h}from"vue";import{assignSlotNodes as C}from"@lit-labs/vue-utils/wrapper-utils.js";import"@oicl/openbridge-webcomponents/dist/icons/icon-06-cctv.js";const k=u({__name:"Obi06Cctv",props:{useCssColor:{type:Boolean}},setup(p){const o=p,n=f({}),i={created(t){for(const e in o)n[e]=t[e]}};let r=!1;const l=v(),a=()=>{const e={};for(const s in o){const c=o[s];(c!==void 0||r)&&(e[s]=c??n[s])}return r=!0,h("obi-06-cctv",e,C(l))};return(t,e)=>d((m(),_(a,null,null,512)),[[i]])}});export{k as default};
//# sourceMappingURL=Obi06Cctv.vue2.js.map
