import{defineComponent as u,reactive as f,useSlots as m,withDirectives as d,openBlock as v,createBlock as _,h}from"vue";import{assignSlotNodes as B}from"@lit-labs/vue-utils/wrapper-utils.js";import"@oicl/openbridge-webcomponents/dist/icons/icon-06-time.js";const k=u({__name:"Obi06Time",props:{useCssColor:{type:Boolean}},setup(i){const o=i,n=f({}),p={created(t){for(const e in o)n[e]=t[e]}};let r=!1;const l=m(),a=()=>{const e={};for(const s in o){const c=o[s];(c!==void 0||r)&&(e[s]=c??n[s])}return r=!0,h("obi-06-time",e,B(l))};return(t,e)=>d((v(),_(a,null,null,512)),[[p]])}});export{k as default};
//# sourceMappingURL=Obi06Time.vue2.js.map
