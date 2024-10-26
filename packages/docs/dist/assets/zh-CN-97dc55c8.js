var D=Object.defineProperty;var T=(e,t,n)=>t in e?D(e,t,{enumerable:!0,configurable:!0,writable:!0,value:n}):e[t]=n;var c=(e,t,n)=>(T(e,typeof t!="symbol"?t+"":t,n),n);import{f as h,g as E,$ as j,h as M,c as i,P as O,S as g,j as I,i as r,d as P,s as W,M as N,t as a}from"./index-8596a95a.js";import{n as R}from"./index-0702e26a.js";import{C as Z}from"./Close-4c52b502.js";const o=class o{constructor(){c(this,"baseIndex",1e3);c(this,"indexes",new Map)}static getInstance(){return o.instance||(o.instance=new o),o.instance}getBaseZIndex(t){return{dialog:1e3,drawer:900,popup:800,tooltip:700,dropdown:600}[t]||this.baseIndex}generate(t){const n=this.getBaseZIndex(t),l=(this.indexes.get(t)||n)+1;return this.indexes.set(t,l),l}release(t){const n=this.indexes.get(t);n&&this.indexes.set(t,n-1)}};c(o,"instance");let b=o;const k=b.getInstance();var q=a("<div class=header><span class=title></span><div class=close-btn>"),A=a("<div>"),F=a("<div class=dialog><div><div class=content></div><div class=footer><button>取消</button><button>确定");function G(e){const[t,n]=h(0),s=E(()=>({width:e.width||"500px",height:e.height,"max-height":"90vh","max-width":"90vw"})),[l]=h({showClose:e.showClose??!0,maskClosable:e.maskClosable??!0,appendToBody:e.appendToBody??!1}),{theme:_}=j();M(()=>{e.open?n(k.generate("dialog")):k.release("dialog")});const x=()=>{e.onClose&&e.onClose()},z=()=>{x(),e.onCancel&&e.onCancel()},S=()=>{x(),e.onConfirm&&e.onConfirm()},p=()=>i(g,{get when(){return e.open},get children(){return i(H,{get theme(){return _()},get style(){return{"z-index":t()}},get children(){var u=F(),m=u.firstChild,f=m.firstChild,y=f.nextSibling,$=y.firstChild,B=$.nextSibling;return r(m,i(g,{get when(){return e.title||l().showClose},get children(){var d=A();return r(d,i(g,{get when(){return e.title},get children(){var w=q(),C=w.firstChild,v=C.nextSibling;return r(C,()=>e.title),v.$$click=x,r(v,i(Z,{size:24,strokeWidth:1})),w}})),d}}),f),r(f,()=>e.children),$.$$click=z,B.$$click=S,P(d=>W(u,s(),d)),u}})}});return i(g,{get when(){return e.appendToBody},get fallback(){return i(p,{})},get children(){return i(O,{get children(){return i(p,{})}})}})}const H=N("div")`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: rgba(0, 0, 0, 0.5);

  .dialog {
    position: relative;
    margin: 15vh auto 50px;
    background: #fff;
    border-radius: 4px;
    box-sizing: border-box;
    padding: 16px;
    overflow-wrap: break-word;
    box-shadow:
      0px 12px 32px 4px rgba(0, 0, 0, 0.04),
      0px 8px 20px rgba(0, 0, 0, 0.08);
  }

  .header {
    padding-bottom: 16px;
    box-sizing: border-box;
  }

  .title {
    line-height: 24px;
    font-size: 18px;
    color: #303133;
  }

  .close-btn {
    position: absolute;
    top: 0;
    right: 0;
    padding: 0;
    width: 48px;
    height: 48px;
    background: transparent;
    border: none;
    outline: none;
    cursor: pointer;
    font-size: 16px;
    display: flex;
    align-items: center;
    justify-content: center;

    &:hover {
      color: #409eff;
    }
  }

  .content {
    color: #606266;
    font-size: 14px;
  }

  .footer {
    text-align: right;
  }
`;I(["click"]);var J=a('<button class="px-4 py-2 bg-blue-500 text-white rounded">打开对话框'),K=a("<p>This is a message");const X=R({name:"Dialog",description:"在保留当前页面状态的情况下，告知用户并承载相关操作。",props:[],examples:[{title:"基础用法",description:"最基本的Dialog用法。",code:"",component:()=>{const[e,t]=h(!1),[n]=h("600px");return[(()=>{var s=J();return s.$$click=()=>t(!0),s})(),i(G,{get open(){return e()},onClose:()=>t(!1),title:"响应式宽度对话框",get width(){return n()},get children(){return K()}})]}}]});I(["click"]);export{X as default};
