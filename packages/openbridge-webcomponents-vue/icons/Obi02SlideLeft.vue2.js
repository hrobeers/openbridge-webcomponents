import{defineComponent as f,reactive as u,useSlots as d,withDirectives as m,openBlock as v,createBlock as _,h}from"vue";import{assignSlotNodes as B}from"@lit-labs/vue-utils/wrapper-utils.js";import"@oicl/openbridge-webcomponents/dist/icons/icon-02-slide-left.js";const b=f({__name:"Obi02SlideLeft",props:{useCssColor:{type:Boolean}},setup(l){const o=l,n=u({}),i={created(t){for(const e in o)n[e]=t[e]}};let r=!1;const p=d(),a=()=>{const e={};for(const s in o){const c=o[s];(c!==void 0||r)&&(e[s]=c??n[s])}return r=!0,h("obi-02-slide-left",e,B(p))};return(t,e)=>m((v(),_(a,null,null,512)),[[i]])}});export{b as default};
//# sourceMappingURL=Obi02SlideLeft.vue2.js.map
