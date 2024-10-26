import{$ as r,c as e,m as a,E as i}from"./index-eaf22fdc.js";import{n as m}from"./index-0702e26a.js";const n=t=>{const{theme:o}=r();return e(d,a(t,{get theme(){return o()},get class(){return`btn ${t.variant||"primary"} ${t.size||"medium"}`},get children(){return t.children}}))},d=i("button")`
  border: none;
  border-radius: 4px;
  cursor: pointer;
  transition: all 0.3s ease;

  &.primary {
    background-color: ${t=>t.theme.colors.primary};
    color: #ffffff;

    &:hover {
      opacity: 0.9;
      box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
    }
  }

  &.secondary {
    background-color: ${t=>t.theme.colors.secondary};
    color: #ffffff;

    &:hover {
      opacity: 0.9;
      box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
    }
  }

  &.small {
    padding: ${t=>t.theme.spacing.small};
    font-size: 12px;
  }

  &.medium {
    padding: ${t=>t.theme.spacing.medium};
    font-size: 14px;
  }

  &.large {
    padding: ${t=>t.theme.spacing.large};
    font-size: 16px;
  }
`,c=m({name:"Button",description:"按钮组件，用于触发操作。",props:[{name:"variant",type:'"primary" | "secondary"',required:!1,default:"primary",description:"按钮的样式变体"},{name:"size",type:'"small" | "medium" | "large"',required:!1,default:"medium",description:"按钮的大小"}],examples:[{title:"基础用法",description:"最基本的按钮用法。",code:"<Button>Default Button</Button>",component:()=>e(n,{children:"Default Button"})},{title:"按钮变体",description:"不同样式的按钮。",code:`
<Button variant="primary">Primary Button</Button>
<Button variant="secondary">Secondary Button</Button>
      `,component:()=>[e(n,{variant:"primary",children:"Primary Button"}),e(n,{variant:"secondary",children:"Secondary Button"})]},{title:"按钮大小",description:"不同尺寸的按钮。",code:`
<Button size="small">Small Button</Button>
<Button size="medium">Medium Button</Button>
<Button size="large">Large Button</Button>
      `,component:()=>[e(n,{size:"small",children:"Small Button"}),e(n,{size:"medium",children:"Medium Button"}),e(n,{size:"large",children:"Large Button"})]}]});export{c as default};
