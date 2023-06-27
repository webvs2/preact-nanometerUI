interface formItemProps {
  label?: string;
  prop?: string | number | undefined;
  required?: boolean;
  children?: any;
}

function formItem(props: formItemProps) {
  return (
    <div class={`na-form-item`}>
      <label class={`na-form-item__label`}>{props.label}</label>
      <div class={`na-form-item__content`}>{props.children}</div>
    </div>
  );
}
export default formItem;
export type { formItemProps };
