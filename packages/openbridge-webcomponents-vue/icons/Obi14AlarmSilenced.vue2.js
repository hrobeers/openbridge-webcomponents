import{defineComponent as u,reactive as d,useSlots as f,withDirectives as m,openBlock as v,createBlock as _,h}from"vue";import{assignSlotNodes as B}from"@lit-labs/vue-utils/wrapper-utils.js";import"@oicl/openbridge-webcomponents/dist/icons/icon-14-alarm-silenced.js";const b=u({__name:"Obi14AlarmSilenced",props:{useCssColor:{type:Boolean}},setup(l){const o=l,n=d({}),i={created(t){for(const e in o)n[e]=t[e]}};let r=!1;const a=f(),p=()=>{const e={};for(const s in o){const c=o[s];(c!==void 0||r)&&(e[s]=c??n[s])}return r=!0,h("obi-14-alarm-silenced",e,B(a))};return(t,e)=>m((v(),_(p,null,null,512)),[[i]])}});export{b as default};
//# sourceMappingURL=Obi14AlarmSilenced.vue2.js.map
