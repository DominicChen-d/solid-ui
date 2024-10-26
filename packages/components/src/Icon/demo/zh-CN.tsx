import { createComponentDoc } from '@solid-ui/docs-utils';
import { Close } from '../Close';

export default createComponentDoc({
  name: 'Icon',
  description: '用于图标的容器组件',
  examples: [
    {
      title: '基础用法',
      description: '最基本的图标用法。',
      code: '',
      component: () => (
        <>
          <Close strokeWidth={1} />
        </>
      ),
    },
  ],
});
