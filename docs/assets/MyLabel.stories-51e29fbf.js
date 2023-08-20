import{j as v}from"./jsx-runtime-4ca860c5.js";import"./index-61bf1805.js";import"./_commonjsHelpers-de833af9.js";const l=({label:s,size:f="normal",allCaps:x=!1,color:L="text-primary",fontColor:q})=>v.jsx("span",{className:`${f} ${L}`,style:{color:q},children:x?s.toLocaleUpperCase():s});try{l.displayName="MyLabel",l.__docgenInfo={description:"",displayName:"MyLabel",props:{label:{defaultValue:null,description:"Texto para mostrar",name:"label",required:!0,type:{name:"string"}},size:{defaultValue:{value:"normal"},description:"Tamaño del label",name:"size",required:!1,type:{name:"enum",value:[{value:'"normal"'},{value:'"h1"'},{value:'"h2"'},{value:'"h3"'}]}},allCaps:{defaultValue:{value:"false"},description:"Texto en mayúscula o minúscula",name:"allCaps",required:!1,type:{name:"boolean"}},color:{defaultValue:{value:"text-primary"},description:"Color del texto",name:"color",required:!1,type:{name:"enum",value:[{value:'"text-primary"'},{value:'"text-secondary"'},{value:'"text-tertiary"'}]}},fontColor:{defaultValue:null,description:"Font Color",name:"fontColor",required:!1,type:{name:"string"}}}}}catch{}const M={title:"AppsMataro/Labels/MyLabel",component:l,tags:["autodocs"],parameters:{layout:"centered"},argTypes:{size:{control:"inline-radio"},fontColor:{control:"color"}}},e={args:{label:"Basic Label"}},a={args:{label:"AllCaps Label",size:"normal",allCaps:!0}},o={args:{label:"Secondary Label",color:"text-secondary"}},r={args:{label:"CustomColor Label",fontColor:"#CCC134"}};var t,n,p;e.parameters={...e.parameters,docs:{...(t=e.parameters)==null?void 0:t.docs,source:{originalSource:`{
  args: {
    //aquí tenemos que pasar las props
    label: 'Basic Label' //esta es obligatoria en las props del componente
  }
}`,...(p=(n=e.parameters)==null?void 0:n.docs)==null?void 0:p.source}}};var c,u,m;a.parameters={...a.parameters,docs:{...(c=a.parameters)==null?void 0:c.docs,source:{originalSource:`{
  args: {
    //aquí tenemos que pasar las props
    label: 'AllCaps Label',
    //esta es obligatoria en las props del componente
    size: 'normal',
    //poner la opción por defecto
    allCaps: true
  }
}`,...(m=(u=a.parameters)==null?void 0:u.docs)==null?void 0:m.source}}};var i,d,C;o.parameters={...o.parameters,docs:{...(i=o.parameters)==null?void 0:i.docs,source:{originalSource:`{
  args: {
    //aquí tenemos que pasar las props
    label: 'Secondary Label',
    //esta es obligatoria en las props del componente
    color: 'text-secondary'
  }
}`,...(C=(d=o.parameters)==null?void 0:d.docs)==null?void 0:C.source}}};var b,y,g;r.parameters={...r.parameters,docs:{...(b=r.parameters)==null?void 0:b.docs,source:{originalSource:`{
  args: {
    //aquí tenemos que pasar las props
    label: 'CustomColor Label',
    //esta es obligatoria en las props del componente
    fontColor: '#CCC134'
  }
}`,...(g=(y=r.parameters)==null?void 0:y.docs)==null?void 0:g.source}}};const h=["Basic","AllCaps","Secondary","CustomColor"];export{a as AllCaps,e as Basic,r as CustomColor,o as Secondary,h as __namedExportsOrder,M as default};
//# sourceMappingURL=MyLabel.stories-51e29fbf.js.map
