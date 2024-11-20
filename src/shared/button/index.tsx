import { ButtonHTMLAttributes, forwardRef, ReactNode } from "react";

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  children: ReactNode
}

const Button = forwardRef<HTMLButtonElement, ButtonProps>(({
  className="bg-primary hover:bg-primary-700",
  children,
  ...args
}, ref) => {
  return <button ref={ref} className={`px-4 xl:px-6 py-2 xl:py-3 rounded-xl text-white font-semibold transition-colors ${className}`} {...args}>{children}</button>
});

Button.displayName = "Button"

export default Button;