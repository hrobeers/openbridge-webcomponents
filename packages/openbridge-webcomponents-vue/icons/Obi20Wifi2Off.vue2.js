import{defineComponent as a,reactive as u,useSlots as d,withDirectives as m,openBlock as v,createBlock as _,h}from"vue";import{assignSlotNodes as B}from"@lit-labs/vue-utils/wrapper-utils.js";import"@oicl/openbridge-webcomponents/dist/icons/icon-20-wifi2-off.js";const k=a({__name:"Obi20Wifi2Off",props:{useCssColor:{type:Boolean}},setup(i){const o=i,n=u({}),f={created(t){for(const e in o)n[e]=t[e]}};let r=!1;const p=d(),l=()=>{const e={};for(const s in o){const c=o[s];(c!==void 0||r)&&(e[s]=c??n[s])}return r=!0,h("obi-20-wifi2-off",e,B(p))};return(t,e)=>m((v(),_(l,null,null,512)),[[f]])}});export{k as default};
//# sourceMappingURL=Obi20Wifi2Off.vue2.js.map
