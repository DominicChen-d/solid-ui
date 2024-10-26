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
  ],
});
