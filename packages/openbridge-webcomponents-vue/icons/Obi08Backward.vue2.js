import{defineComponent as u,reactive as d,useSlots as f,withDirectives as m,openBlock as v,createBlock as _,h}from"vue";import{assignSlotNodes as k}from"@lit-labs/vue-utils/wrapper-utils.js";import"@oicl/openbridge-webcomponents/dist/icons/icon-08-backward.js";const C=u({__name:"Obi08Backward",props:{useCssColor:{type:Boolean}},setup(a){const o=a,n=d({}),p={created(t){for(const e in o)n[e]=t[e]}};let r=!1;const i=f(),l=()=>{const e={};for(const s in o){const c=o[s];(c!==void 0||r)&&(e[s]=c??n[s])}return r=!0,h("obi-08-backward",e,k(i))};return(t,e)=>m((v(),_(l,null,null,512)),[[p]])}});export{C as default};
//# sourceMappingURL=Obi08Backward.vue2.js.map
