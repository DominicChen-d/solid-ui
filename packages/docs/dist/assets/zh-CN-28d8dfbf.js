import{m as p,c as e,t as d,M as b,$ as w,S as a,a as C,b as o,i as n,d as v,e as A}from"./index-8596a95a.js";import{I as x,C as I}from"./Close-4c52b502.js";import{n as S}from"./index-0702e26a.js";var $=d('<svg><path fill-rule=evenodd clip-rule=evenodd d="M22 12C22 17.5228 17.5228 22 12 22C6.47715 22 2 17.5228 2 12C2 6.47715 6.47715 2 12 2C17.5228 2 22 6.47715 22 12ZM16.0303 8.96967C16.3232 9.26256 16.3232 9.73744 16.0303 10.0303L11.0303 15.0303C10.7374 15.3232 10.2626 15.3232 9.96967 15.0303L7.96967 13.0303C7.67678 12.7374 7.67678 12.2626 7.96967 11.9697C8.26256 11.6768 8.73744 11.6768 9.03033 11.9697L10.5 13.4393L12.7348 11.2045L14.9697 8.96967C15.2626 8.67678 15.7374 8.67678 16.0303 8.96967Z"></svg>',!1,!0);function l(t){const i=p({size:"1em",stroke:"currentColor",strokeWidth:2},t);return e(x,p(i,{get children(){return $()}}))}const W=b("div")`
  position: relative;
  width: 100%;
  padding: 8px 16px;
  box-sizing: border-box;
  border-radius: 4px;
  overflow: hidden;
  display: flex;
  align-items: center;
  transition: opacity 2s;
  margin: 20px 0;
  display: flex;
  align-items: center;

  > svg {
    margin-right: 12px;
  }

  .alert-title {
    font-size: 16px;
  }

  .alert-description {
    font-size: 14px;
    margin: 0;
    line-height: 1.7;
  }

  &:first-child {
    margin: 0;
  }

  &.light.success {
    background-color: rgb(239.8, 248.9, 235.3);
    color: #67c23a;
  }

  &.dark.success {
    background-color: #67c23a;
    color: #fff;
  }

  &.light.info {
    background-color: rgb(243.9, 244.2, 244.8);
    color: #909399;
  }

  &.dark.info {
    background-color: #909399;
    color: #fff;
  }

  &.light.warning {
    background-color: rgb(252.5, 245.7, 235.5);
    color: #e6a23c;
  }

  &.dark.warning {
    background-color: #e6a23c;
    color: #fff;
  }

  &.light.error {
    background-color: rgb(254, 240.3, 240.3);
    color: #f56c6c;
  }

  &.dark.error {
    background-color: #f56c6c;
    color: #fff;
  }

  .close-btn {
    opacity: 1;
    position: absolute;
    top: 12px;
    right: 16px;
    cursor: pointer;
    color: #a8abb2;
  }

  .dark.close-btn {
    color: #fff;
  }
`;var z=d("<p class=alert-description>"),_=d("<div class=alert-content><span class=alert-title></span><div>");const r=t=>{const{theme:i}=w(),g=()=>{t.onClose&&t.onClose()},h=()=>e(l,{fill:"#67c23a",size:32,strokeWidth:0,stroke:"#fff"}),m=()=>e(l,{fill:"#909399",size:32,strokeWidth:0,stroke:"#fff"}),y=()=>e(l,{fill:"#e6a23c",size:32,strokeWidth:0,stroke:"#fff"}),k=()=>e(l,{fill:"#f56c6c",size:32,strokeWidth:0,stroke:"#fff"});return e(W,{get theme(){return i()},get class(){return`${i().name} ${t.type}`},get children(){return[e(a,{get when(){return t.showIcon},get children(){return e(C,{get children(){return[e(o,{get when(){return t.type==="success"},get children(){return h()}}),e(o,{get when(){return t.type==="info"},get children(){return m()}}),e(o,{get when(){return t.type==="warning"},get children(){return y()}}),e(o,{get when(){return t.type==="error"},get children(){return k()}})]}})}}),(()=>{var s=_(),u=s.firstChild,c=u.nextSibling;return n(u,()=>t.title),n(s,e(a,{get when(){return t.description},get children(){var f=z();return n(f,()=>t.description),f}}),c),n(c,e(a,{get when(){return t.close},get fallback(){return e(I,{onclick:g})},get children(){return t.close}})),v(()=>A(c,`${i().name} close-btn`)),s})()]}})},M=S({name:"Alert",description:"用于页面中展示重要的提示信息。",props:[{name:"title",type:"string",required:!0,default:"",description:"Alert 标题"},{name:"type",type:"'success' | 'warning' | 'info' | 'error'",required:!1,default:"",description:"Alert 类型"},{name:"description",type:"string",required:!1,default:"",description:"Alert 描述"},{name:"onClose",type:"() => void",required:!1,default:"",description:"关闭时的事件"},{name:"close",type:"JSXElement",required:!1,default:"",description:"关闭元素自定义"},{name:"showIcon",type:"boolean",required:!1,default:"false",description:"是否显示图标"}],examples:[{title:"基础用法",description:"最基本的Alert用法。",code:`
        <div>
          <Alert title="Success alert" type="success" />
          <Alert title="Info alert" type="info" />
          <Alert title="Warning alert" type="warning" />
          <Alert title="Error alert" type="error" />
        </div>`,component:()=>[e(r,{title:"Success alert",type:"success"}),e(r,{title:"Info alert",type:"info"}),e(r,{title:"Warning alert",type:"warning"}),e(r,{title:"Error alert",type:"error"})]},{title:"自定义关闭按钮",description:`你可以自定义关闭按钮为文字或其他符号。\r
 你可以设置 Alert 组件是否为可关闭状态， 关闭按钮的内容以及关闭时的回调函数同样可以定制。`,code:`
      <div>
        <Alert title="Success alert" type="success" close={''} />
        <Alert title="Success alert" type="success" close={'hello world'} />
        <Alert title="Success alert" type="success" onClose={() => alert('hello world')} />
      </div>
      `,component:()=>[e(r,{title:"Success alert",type:"success",close:""}),e(r,{title:"Info alert",type:"info",close:"hello world"}),e(r,{title:"Error alert",type:"error",onClose:()=>alert("hello world")})]},{title:"文字描述",description:`为 Alert 组件添加一个更加详细的描述来使用户了解更多信息。\r
 除了必填的 title 属性外，你可以设置 description 属性来帮助你更好地介绍，我们称之为辅助性文字。 辅助性文字只能存放文本内容，当内容超出长度限制时会自动换行显示。`,code:`
      <Alert type="success" description="This is a description." title="With description" />
      `,component:()=>e(r,{type:"success",description:"This is a description.",title:"With description"})},{title:"带图标和描述",description:"在最后, 这是一个带有图标和描述的例子。",code:`
      <Alert showIcon type="success" description="This is a description." title="With description" />
      `,component:()=>e(r,{showIcon:!0,type:"success",description:"This is a description.",title:"With description"})}]});export{M as default};
