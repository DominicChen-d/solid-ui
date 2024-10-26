// components/Dialog/Dialog.tsx
import { Show, createSignal, createMemo, JSX, createEffect } from 'solid-js';
import { Portal } from 'solid-js/web';
import { zIndexManager } from '@solid-ui/utils/src/zIndexManager';
import { Close } from '@solid-ui/components/src/Icon';
import { styled } from '@solid-ui/utils';
import { useTheme } from '@solid-ui/theme';

export interface DialogProps extends JSX.HTMLAttributes<HTMLDivElement> {
  open?: boolean;
  onClose?: () => void;
  title?: string;
  width?: string;
  height?: string;
  showClose?: boolean;
  onCancel?: () => void;
  onConfirm?: () => void;
  maskClosable?: boolean;
  appendToBody?: boolean;
}

export function Dialog(props: DialogProps) {
  const [zIndex, setZIndex] = createSignal(0);

  // 使用 createMemo 来响应式地处理 props
  const dialogStyle = createMemo(() => ({
    width: props.width || '500px',
    height: props.height,
    'max-height': '90vh',
    'max-width': '90vw',
  }));

  // 只存储那些不会动态变化的配置
  const [local] = createSignal({
    showClose: props.showClose ?? true,
    maskClosable: props.maskClosable ?? true,
    appendToBody: props.appendToBody ?? false,
  });

  const { theme } = useTheme();

  createEffect(() => {
    if (props.open) {
      setZIndex(zIndexManager.generate('dialog'));
    } else {
      zIndexManager.release('dialog');
    }
  });

  const handleClose = () => {
    if (props.onClose) {
      props.onClose();
    }
  };

  const handleCancel = () => {
    handleClose();
    if (props.onCancel) {
      props.onCancel();
    }
  };

  const handleConfirm = () => {
    handleClose();
    if (props.onConfirm) {
      props.onConfirm();
    }
  };

  const DialogContent = () => (
    <Show when={props.open}>
      <StyledDialog
        theme={theme()}
        style={{
          'z-index': zIndex(),
        }}
      >
        <div style={dialogStyle()} class="dialog">
          <div>
            <Show when={props.title || local().showClose}>
              <div>
                <Show when={props.title}>
                  <div class="header">
                    <span class="title">{props.title}</span>
                    <div class="close-btn" onClick={handleClose}>
                      <Close size={24} strokeWidth={1} />
                    </div>
                  </div>
                </Show>
              </div>
            </Show>

            <div class="content">{props.children}</div>

            <div class="footer">
              <button onClick={handleCancel}>取消</button>
              <button onClick={handleConfirm}>确定</button>
            </div>
          </div>
        </div>
      </StyledDialog>
    </Show>
  );

  return (
    <Show when={props.appendToBody} fallback={<DialogContent />}>
      <Portal>
        <DialogContent />
      </Portal>
    </Show>
  );
}

const StyledDialog = styled('div')`
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
`;
