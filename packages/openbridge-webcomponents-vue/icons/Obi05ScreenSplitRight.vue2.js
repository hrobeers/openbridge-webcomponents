import{defineComponent as u,reactive as f,useSlots as d,withDirectives as m,openBlock as v,createBlock as h,h as _}from"vue";import{assignSlotNodes as S}from"@lit-labs/vue-utils/wrapper-utils.js";import"@oicl/openbridge-webcomponents/dist/icons/icon-05-screen-split-right.js";const P=u({__name:"Obi05ScreenSplitRight",props:{useCssColor:{type:Boolean}},setup(i){const t=i,n=f({}),p={created(o){for(const e in t)n[e]=o[e]}};let r=!1;const l=d(),a=()=>{const e={};for(const s in t){const c=t[s];(c!==void 0||r)&&(e[s]=c??n[s])}return r=!0,_("obi-05-screen-split-right",e,S(l))};return(o,e)=>m((v(),h(a,null,null,512)),[[p]])}});export{P as default};
//# sourceMappingURL=Obi05ScreenSplitRight.vue2.js.map
