import{defineComponent as u,reactive as f,useSlots as d,withDirectives as m,openBlock as v,createBlock as _,h}from"vue";import{assignSlotNodes as k}from"@lit-labs/vue-utils/wrapper-utils.js";import"@oicl/openbridge-webcomponents/dist/icons/icon-15-rank-1.js";const b=u({__name:"Obi15Rank1",props:{useCssColor:{type:Boolean}},setup(p){const o=p,n=f({}),a={created(t){for(const e in o)n[e]=t[e]}};let r=!1;const i=d(),l=()=>{const e={};for(const s in o){const c=o[s];(c!==void 0||r)&&(e[s]=c??n[s])}return r=!0,h("obi-15-rank-1",e,k(i))};return(t,e)=>m((v(),_(l,null,null,512)),[[a]])}});export{b as default};
//# sourceMappingURL=Obi15Rank1.vue2.js.map
