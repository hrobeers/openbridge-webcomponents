import{defineComponent as u,reactive as f,useSlots as d,withDirectives as m,openBlock as v,createBlock as _,h}from"vue";import{assignSlotNodes as k}from"@lit-labs/vue-utils/wrapper-utils.js";import"@oicl/openbridge-webcomponents/dist/icons/icon-08-battery-pack-70.js";const y=u({__name:"Obi08BatteryPack70",props:{useCssColor:{type:Boolean}},setup(a){const t=a,n=f({}),p={created(o){for(const e in t)n[e]=o[e]}};let r=!1;const i=d(),l=()=>{const e={};for(const s in t){const c=t[s];(c!==void 0||r)&&(e[s]=c??n[s])}return r=!0,h("obi-08-battery-pack-70",e,k(i))};return(o,e)=>m((v(),_(l,null,null,512)),[[p]])}});export{y as default};
//# sourceMappingURL=Obi08BatteryPack70.vue2.js.map
