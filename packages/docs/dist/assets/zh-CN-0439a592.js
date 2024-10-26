import{$ as s,c as r,i as o,S as d,E as p,t as c}from"./index-eaf22fdc.js";import{C as g}from"./Close-e75b583a.js";import{n as f}from"./index-0702e26a.js";var u=c("<p class=alert-description>"),b=c("<div class=alert-content><span class=alert-title>");const l=t=>{const{theme:i}=s();return r(m,{get theme(){return i()},get class(){return`${i().name} ${t.type}`},get children(){var e=b(),a=e.firstChild;return o(a,()=>t.title),o(e,r(d,{get when(){return t.description},get children(){var n=u();return o(n,()=>t.description),n}}),null),o(e,r(g,{get class(){return`${i().name} close-btn`}}),null),e}})},m=p("div")`
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
`,x=f({name:"Alert",description:"用于页面中展示重要的提示信息。",props:[{name:"title",type:"string",required:!0,default:"",description:"Alert 标题"}],examples:[{title:"基础用法",description:"最基本的Alert用法。",code:`
        <div>
          <Alert title="Success alert" type="success" />
          <Alert title="Info alert" type="info" />
          <Alert title="Warning alert" type="warning" />
          <Alert title="Error alert" type="error" />
        </div>`,component:()=>[r(l,{title:"Success alert",type:"success"}),r(l,{title:"Info alert",type:"info"}),r(l,{title:"Warning alert",type:"warning"}),r(l,{title:"Error alert",type:"error"})]}]});export{x as default};
