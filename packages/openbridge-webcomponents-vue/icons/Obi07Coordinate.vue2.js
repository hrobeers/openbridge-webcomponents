import{defineComponent as u,reactive as d,useSlots as f,withDirectives as m,openBlock as v,createBlock as _,h}from"vue";import{assignSlotNodes as C}from"@lit-labs/vue-utils/wrapper-utils.js";import"@oicl/openbridge-webcomponents/dist/icons/icon-07-coordinate.js";const k=u({__name:"Obi07Coordinate",props:{useCssColor:{type:Boolean}},setup(i){const e=i,n=d({}),p={created(t){for(const o in e)n[o]=t[o]}};let r=!1;const a=f(),l=()=>{const o={};for(const s in e){const c=e[s];(c!==void 0||r)&&(o[s]=c??n[s])}return r=!0,h("obi-07-coordinate",o,C(a))};return(t,o)=>m((v(),_(l,null,null,512)),[[p]])}});export{k as default};
//# sourceMappingURL=Obi07Coordinate.vue2.js.map
