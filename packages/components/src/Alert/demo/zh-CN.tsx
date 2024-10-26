import { Alert } from '../Alert';
import { createComponentDoc } from '@solid-ui/docs-utils';
export default createComponentDoc({
  name: 'Alert',
  description: '用于页面中展示重要的提示信息。',
  props: [
    {
      name: 'title',
      type: 'string',
      required: true,
      default: '',
      description: 'Alert 标题',
    },
  ],
  examples: [
    {
      title: '基础用法',
      description: '最基本的Alert用法。',
      code: `
        <div>
          <Alert title="Success alert" type="success" />
          <Alert title="Info alert" type="info" />
          <Alert title="Warning alert" type="warning" />
          <Alert title="Error alert" type="error" />
        </div>`,
      component: () => (
        <>
          <Alert title="Success alert" type="success" />
          <Alert title="Info alert" type="info" />
          <Alert title="Warning alert" type="warning" />
          <Alert title="Error alert" type="error" />
        </>
      ),
    },
    {
      title: '自定义关闭按钮',
      description: `你可以自定义关闭按钮为文字或其他符号。\r\n 你可以设置 Alert 组件是否为可关闭状态， 关闭按钮的内容以及关闭时的回调函数同样可以定制。`,
      code: `
      <div>
        <Alert title="Success alert" type="success" close={''} />
        <Alert title="Success alert" type="success" close={'hello world'} />
        <Alert title="Success alert" type="success" onClose={() => alert('hello world')} />
      </div>
      `,
      component: () => (
        <>
          <Alert title="Success alert" type="success" close={''} />
          <Alert title="Info alert" type="info" close={'hello world'} />
          <Alert title="Error alert" type="error" onClose={() => alert('hello world')} />
        </>
      ),
    },
  ],
});
