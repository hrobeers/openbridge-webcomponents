import{defineComponent as u,reactive as f,useSlots as d,withDirectives as m,openBlock as v,createBlock as _,h}from"vue";import{assignSlotNodes as B}from"@lit-labs/vue-utils/wrapper-utils.js";import"@oicl/openbridge-webcomponents/dist/icons/icon-08-battery-50.js";const P=u({__name:"Obi08Battery50",props:{useCssColor:{type:Boolean}},setup(p){const t=p,n=f({}),a={created(o){for(const e in t)n[e]=o[e]}};let r=!1;const i=d(),l=()=>{const e={};for(const s in t){const c=t[s];(c!==void 0||r)&&(e[s]=c??n[s])}return r=!0,h("obi-08-battery-50",e,B(i))};return(o,e)=>m((v(),_(l,null,null,512)),[[a]])}});export{P as default};
//# sourceMappingURL=Obi08Battery50.vue2.js.map
