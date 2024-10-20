import { forwardRef, TextareaHTMLAttributes } from "react";

interface TextareaProps extends TextareaHTMLAttributes<HTMLTextAreaElement> {}

const Textarea = forwardRef<HTMLTextAreaElement, TextareaProps>(({
  className,
  defaultValue,
  onChange,
  ...args
}, ref) => {
  return <textarea
    ref={ref}
    defaultValue={defaultValue}
    onChange={onChange}
    rows={5}
    autoComplete="off"
    className={`py-3 px-4 text-sm text-primary outline-none border-none focus:ring-2 focus:ring-primary-200 rounded-xl bg-primary-50 transition-colors resize-none ${className}`}
    {...args}></textarea>
});

export default Textarea;