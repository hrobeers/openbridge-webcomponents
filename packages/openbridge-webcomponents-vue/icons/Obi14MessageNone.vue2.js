import{defineComponent as u,reactive as f,useSlots as d,withDirectives as m,openBlock as v,createBlock as _,h}from"vue";import{assignSlotNodes as g}from"@lit-labs/vue-utils/wrapper-utils.js";import"@oicl/openbridge-webcomponents/dist/icons/icon-14-message-none.js";const b=u({__name:"Obi14MessageNone",props:{useCssColor:{type:Boolean}},setup(p){const o=p,n=f({}),a={created(s){for(const e in o)n[e]=s[e]}};let r=!1;const i=d(),l=()=>{const e={};for(const t in o){const c=o[t];(c!==void 0||r)&&(e[t]=c??n[t])}return r=!0,h("obi-14-message-none",e,g(i))};return(s,e)=>m((v(),_(l,null,null,512)),[[a]])}});export{b as default};
//# sourceMappingURL=Obi14MessageNone.vue2.js.map
