import{defineComponent as u,reactive as f,useSlots as m,withDirectives as d,openBlock as v,createBlock as _,h}from"vue";import{assignSlotNodes as B}from"@lit-labs/vue-utils/wrapper-utils.js";import"@oicl/openbridge-webcomponents/dist/icons/icon-14-alarm-outline.js";const k=u({__name:"Obi14AlarmOutline",props:{useCssColor:{type:Boolean}},setup(l){const o=l,n=f({}),i={created(t){for(const e in o)n[e]=t[e]}};let r=!1;const a=m(),p=()=>{const e={};for(const s in o){const c=o[s];(c!==void 0||r)&&(e[s]=c??n[s])}return r=!0,h("obi-14-alarm-outline",e,B(a))};return(t,e)=>d((v(),_(p,null,null,512)),[[i]])}});export{k as default};
//# sourceMappingURL=Obi14AlarmOutline.vue2.js.map
