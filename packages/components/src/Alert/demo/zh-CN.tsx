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
    {
      name: 'type',
      type: `'success' | 'warning' | 'info' | 'error'`,
      required: false,
      default: '',
      description: 'Alert 类型',
    },
    {
      name: 'description',
      type: 'string',
      required: false,
      default: '',
      description: 'Alert 描述',
    },
    {
      name: 'onClose',
      type: '() => void',
      required: false,
      default: '',
      description: '关闭时的事件',
    },
    {
      name: 'close',
      type: 'JSXElement',
      required: false,
      default: '',
      description: '关闭元素自定义',
    },
    {
      name: 'showIcon',
      type: 'boolean',
      required: false,
      default: 'false',
      description: '是否显示图标',
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
    {
      title: '文字描述',
      description:
        '为 Alert 组件添加一个更加详细的描述来使用户了解更多信息。\r\n 除了必填的 title 属性外，你可以设置 description 属性来帮助你更好地介绍，我们称之为辅助性文字。 辅助性文字只能存放文本内容，当内容超出长度限制时会自动换行显示。',
      code: `
      <Alert type="success" description="This is a description." title="With description" />
      `,
      component: () => (
        <>
          <Alert type="success" description="This is a description." title="With description" />
        </>
      ),
    },
    {
      title: '带图标和描述',
      description: '在最后, 这是一个带有图标和描述的例子。',
      code: `
      <Alert showIcon type="success" description="This is a description." title="With description" />
      `,
      component: () => (
        <Alert
          showIcon
          type="success"
          description="This is a description."
          title="With description"
        />
      ),
    },
  ],
});
