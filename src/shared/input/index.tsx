import { forwardRef, InputHTMLAttributes } from "react";

interface InputProps extends InputHTMLAttributes<HTMLInputElement> { 
  className?: string
}

const Input = forwardRef<HTMLInputElement, InputProps>(({
  className,
  type,
  onChange,
  ...args
}, ref) => {
  return <input
    ref={ref}
    type={type}
    autoComplete="off"
    className={`py-3 px-4 text-sm text-primary outline-none border-none focus:ring-2 focus:ring-primary-200 rounded-xl bg-primary-50 transition-colors ${className}`}
    onChange={onChange}
    {...args}
  />
});

Input.displayName = "Input"

export default Input;