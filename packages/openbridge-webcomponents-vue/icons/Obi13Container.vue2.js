import{defineComponent as u,reactive as f,useSlots as d,withDirectives as m,openBlock as v,createBlock as _,h}from"vue";import{assignSlotNodes as C}from"@lit-labs/vue-utils/wrapper-utils.js";import"@oicl/openbridge-webcomponents/dist/icons/icon-13-container.js";const k=u({__name:"Obi13Container",props:{useCssColor:{type:Boolean}},setup(i){const o=i,s=f({}),p={created(t){for(const e in o)s[e]=t[e]}};let r=!1;const a=d(),l=()=>{const e={};for(const n in o){const c=o[n];(c!==void 0||r)&&(e[n]=c??s[n])}return r=!0,h("obi-13-container",e,C(a))};return(t,e)=>m((v(),_(l,null,null,512)),[[p]])}});export{k as default};
//# sourceMappingURL=Obi13Container.vue2.js.map
