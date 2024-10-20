import { ButtonHTMLAttributes, forwardRef, ReactNode } from "react";

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  children: ReactNode
}

const Button = forwardRef<HTMLButtonElement, ButtonProps>(({
  className,
  children,
  ...args
}, ref) => {
  return <button ref={ref} className={`px-6 py-3 bg-primary rounded-xl text-white font-semibold ${className}`} {...args}>{children}</button>
});

export default Button;