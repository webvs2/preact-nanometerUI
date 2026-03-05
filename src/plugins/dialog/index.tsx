import "./style.scss";
import { h } from "preact";
import { useEffect } from "preact/hooks";

interface DialogProps {
  visible: boolean;
  title?: string;
  width?: string | number;
  onClose?: () => void;
  onConfirm?: () => void;
  confirmText?: string;
  cancelText?: string;
  showFooter?: boolean;
  showCloseIcon?: boolean;
  maskClosable?: boolean;
  children?: any;
}

function Dialog(props: DialogProps) {
  const {
    visible,
    title = "提示",
    width = 520,
    onClose,
    onConfirm,
    confirmText = "确定",
    cancelText = "取消",
    showFooter = true,
    showCloseIcon = true,
    maskClosable = true,
    children,
  } = props;

  useEffect(() => {
    if (visible) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [visible]);

  const handleMaskClick = () => {
    if (maskClosable && onClose) {
      onClose();
    }
  };

  const handleDialogClick = (e: any) => {
    e.stopPropagation();
  };

  if (!visible) return null;

  return (
    <div class="na-dialog-mask" onClick={handleMaskClick}>
      <div
        class="na-dialog"
        style={{ width: typeof width === "number" ? `${width}px` : width }}
        onClick={handleDialogClick}
      >
        {(title || showCloseIcon) && (
          <div class="na-dialog__header">
            {title && <span class="na-dialog__title">{title}</span>}
            {showCloseIcon && (
              <button
                class="na-dialog__close"
                onClick={onClose}
                type="button"
              >
                ×
              </button>
            )}
          </div>
        )}
        <div class="na-dialog__body">{children}</div>
        {showFooter && (
          <div class="na-dialog__footer">
            <button class="na-dialog__btn na-dialog__btn--cancel" onClick={onClose} type="button">
              {cancelText}
            </button>
            <button class="na-dialog__btn na-dialog__btn--confirm" onClick={onConfirm} type="button">
              {confirmText}
            </button>
          </div>
        )}
      </div>
    </div>
  );
}

export default Dialog;
export type { DialogProps };
