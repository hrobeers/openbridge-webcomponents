import{defineComponent as u,reactive as d,useSlots as f,withDirectives as m,openBlock as v,createBlock as _,h}from"vue";import{assignSlotNodes as y}from"@lit-labs/vue-utils/wrapper-utils.js";import"@oicl/openbridge-webcomponents/dist/icons/icon-07-waypoint-edit.js";const b=u({__name:"Obi07WaypointEdit",props:{useCssColor:{type:Boolean}},setup(i){const o=i,n=d({}),p={created(t){for(const e in o)n[e]=t[e]}};let r=!1;const a=f(),l=()=>{const e={};for(const s in o){const c=o[s];(c!==void 0||r)&&(e[s]=c??n[s])}return r=!0,h("obi-07-waypoint-edit",e,y(a))};return(t,e)=>m((v(),_(l,null,null,512)),[[p]])}});export{b as default};
//# sourceMappingURL=Obi07WaypointEdit.vue2.js.map
