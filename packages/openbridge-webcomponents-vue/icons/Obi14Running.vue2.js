import{defineComponent as a,reactive as f,useSlots as d,withDirectives as m,openBlock as v,createBlock as _,h}from"vue";import{assignSlotNodes as g}from"@lit-labs/vue-utils/wrapper-utils.js";import"@oicl/openbridge-webcomponents/dist/icons/icon-14-running.js";const b=a({__name:"Obi14Running",props:{useCssColor:{type:Boolean}},setup(i){const o=i,s=f({}),p={created(t){for(const e in o)s[e]=t[e]}};let r=!1;const l=d(),u=()=>{const e={};for(const n in o){const c=o[n];(c!==void 0||r)&&(e[n]=c??s[n])}return r=!0,h("obi-14-running",e,g(l))};return(t,e)=>m((v(),_(u,null,null,512)),[[p]])}});export{b as default};
//# sourceMappingURL=Obi14Running.vue2.js.map
