import{defineComponent as a,reactive as d,useSlots as f,withDirectives as m,openBlock as v,createBlock as _,h}from"vue";import{assignSlotNodes as B}from"@lit-labs/vue-utils/wrapper-utils.js";import"@oicl/openbridge-webcomponents/dist/icons/icon-20-sensor-gps-medium.js";const b=a({__name:"Obi20SensorGpsMedium",props:{useCssColor:{type:Boolean}},setup(p){const o=p,n=d({}),i={created(s){for(const e in o)n[e]=s[e]}};let r=!1;const l=f(),u=()=>{const e={};for(const t in o){const c=o[t];(c!==void 0||r)&&(e[t]=c??n[t])}return r=!0,h("obi-20-sensor-gps-medium",e,B(l))};return(s,e)=>m((v(),_(u,null,null,512)),[[i]])}});export{b as default};
//# sourceMappingURL=Obi20SensorGpsMedium.vue2.js.map
