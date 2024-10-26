import { createComponentDoc } from '@solid-ui/docs-utils';
import { Dialog } from '../Dialog';
import { createSignal } from 'solid-js';
export default createComponentDoc({
  name: 'Dialog',
  description: '在保留当前页面状态的情况下，告知用户并承载相关操作。',
  props: [],
  examples: [
    {
      title: '基础用法',
      description: '最基本的Dialog用法。',
      code: ``,
      component: () => {
        const [isOpen, setIsOpen] = createSignal(false);
        const [dialogWidth] = createSignal('600px');

        return (
          <>
            <button
              class="px-4 py-2 bg-blue-500 text-white rounded"
              onClick={() => setIsOpen(true)}
            >
              打开对话框
            </button>

            <Dialog
              open={isOpen()}
              onClose={() => setIsOpen(false)}
              title="响应式宽度对话框"
              width={dialogWidth()}
            >
              <p>This is a message</p>
            </Dialog>
          </>
        );
      },
    },
  ],
});
