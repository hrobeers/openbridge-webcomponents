import{defineComponent as u,reactive as f,useSlots as v,withDirectives as d,openBlock as m,createBlock as _,h}from"vue";import{assignSlotNodes as B}from"@lit-labs/vue-utils/wrapper-utils.js";import"@oicl/openbridge-webcomponents/dist/icons/icon-05-server.js";const b=u({__name:"Obi05Server",props:{useCssColor:{type:Boolean}},setup(p){const o=p,r=f({}),i={created(t){for(const e in o)r[e]=t[e]}};let n=!1;const l=v(),a=()=>{const e={};for(const s in o){const c=o[s];(c!==void 0||n)&&(e[s]=c??r[s])}return n=!0,h("obi-05-server",e,B(l))};return(t,e)=>d((m(),_(a,null,null,512)),[[i]])}});export{b as default};
//# sourceMappingURL=Obi05Server.vue2.js.map
