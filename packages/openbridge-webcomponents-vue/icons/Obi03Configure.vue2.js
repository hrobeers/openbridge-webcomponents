import{defineComponent as a,reactive as f,useSlots as d,withDirectives as m,openBlock as v,createBlock as _,h}from"vue";import{assignSlotNodes as C}from"@lit-labs/vue-utils/wrapper-utils.js";import"@oicl/openbridge-webcomponents/dist/icons/icon-03-configure.js";const b=a({__name:"Obi03Configure",props:{useCssColor:{type:Boolean}},setup(i){const o=i,n=f({}),p={created(t){for(const e in o)n[e]=t[e]}};let r=!1;const l=d(),u=()=>{const e={};for(const s in o){const c=o[s];(c!==void 0||r)&&(e[s]=c??n[s])}return r=!0,h("obi-03-configure",e,C(l))};return(t,e)=>m((v(),_(u,null,null,512)),[[p]])}});export{b as default};
//# sourceMappingURL=Obi03Configure.vue2.js.map
