import{defineComponent as u,reactive as f,useSlots as d,withDirectives as m,openBlock as v,createBlock as _,h}from"vue";import{assignSlotNodes as y}from"@lit-labs/vue-utils/wrapper-utils.js";import"@oicl/openbridge-webcomponents/dist/icons/icon-01-sync.js";const S=u({__name:"Obi01Sync",props:{useCssColor:{type:Boolean}},setup(p){const o=p,n=f({}),i={created(t){for(const e in o)n[e]=t[e]}};let r=!1;const l=d(),a=()=>{const e={};for(const s in o){const c=o[s];(c!==void 0||r)&&(e[s]=c??n[s])}return r=!0,h("obi-01-sync",e,y(l))};return(t,e)=>m((v(),_(a,null,null,512)),[[i]])}});export{S as default};
//# sourceMappingURL=Obi01Sync.vue2.js.map
