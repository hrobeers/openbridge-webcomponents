import{defineComponent as u,reactive as f,useSlots as d,withDirectives as m,openBlock as v,createBlock as _,h}from"vue";import{assignSlotNodes as k}from"@lit-labs/vue-utils/wrapper-utils.js";import"@oicl/openbridge-webcomponents/dist/icons/icon-08-backward-fast.js";const C=u({__name:"Obi08BackwardFast",props:{useCssColor:{type:Boolean}},setup(a){const o=a,n=f({}),p={created(t){for(const e in o)n[e]=t[e]}};let r=!1;const i=d(),l=()=>{const e={};for(const s in o){const c=o[s];(c!==void 0||r)&&(e[s]=c??n[s])}return r=!0,h("obi-08-backward-fast",e,k(i))};return(t,e)=>m((v(),_(l,null,null,512)),[[p]])}});export{C as default};
//# sourceMappingURL=Obi08BackwardFast.vue2.js.map
