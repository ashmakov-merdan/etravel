import { FC, useMemo } from "react";


interface StarIconProps {
  type?: "solid" | "outline"
  color?: string
}

const StarIcon: FC<StarIconProps> = ({ type = "solid", color = "#FF9D37" }) => {
  const renderIcon = useMemo(() => {
    switch (type) {
      case "solid":
        return <Solid color={color} />
      case "outline":
        return <Outline color={color} />
      default:
        return <Solid color={color} />
    }
  }, [type, color]);

  return renderIcon;
};

const Solid: FC<{ color: string }> = ({ color }) => {
  return (
    <svg width="20" height="19" viewBox="0 0 20 19" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path fillRule="evenodd" clipRule="evenodd" d="M9.99966 0.3125C10.1747 0.312388 10.3462 0.361268 10.4949 0.453609C10.6436 0.54595 10.7634 0.678065 10.8409 0.835L13.1934 5.60375L18.4559 6.36875C18.629 6.39389 18.7915 6.46694 18.9253 6.57965C19.059 6.69235 19.1585 6.84022 19.2127 7.00654C19.2668 7.17286 19.2733 7.351 19.2314 7.52081C19.1895 7.69062 19.101 7.84535 18.9759 7.9675L15.1684 11.68L16.0672 16.92C16.0968 17.0924 16.0777 17.2696 16.0118 17.4317C15.9459 17.5939 15.836 17.7342 15.6945 17.8371C15.553 17.94 15.3855 18.0012 15.211 18.0139C15.0365 18.0265 14.862 17.9901 14.7072 17.9087L9.99966 15.4337L5.29216 17.9087C5.13739 17.99 4.96299 18.0264 4.78865 18.0137C4.6143 18.0011 4.44696 17.94 4.30551 17.8374C4.16406 17.7346 4.05415 17.5944 3.98817 17.4325C3.9222 17.2706 3.9028 17.0936 3.93216 16.9212L4.83216 11.6787L1.02216 7.9675C0.896614 7.8454 0.807781 7.69059 0.765721 7.52059C0.723662 7.35059 0.730058 7.17221 0.784187 7.00566C0.838316 6.83911 0.938011 6.69105 1.07198 6.57826C1.20594 6.46547 1.36882 6.39246 1.54216 6.3675L6.80466 5.60375L9.15841 0.835C9.23589 0.678065 9.35573 0.54595 9.50441 0.453609C9.65309 0.361268 9.82464 0.312388 9.99966 0.3125Z" fill={color} />
    </svg>
  )
}

const Outline: FC<{ color: string }> = ({ color }) => {
  return (
    <svg width="20" height="19" viewBox="0 0 20 19" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path fillRule="evenodd" clipRule="evenodd" d="M9.99965 0.3125C10.1747 0.312388 10.3462 0.361268 10.4949 0.453609C10.6436 0.54595 10.7634 0.678065 10.8409 0.835L13.1934 5.60375L18.4559 6.36875C18.629 6.39389 18.7916 6.46694 18.9253 6.57965C19.059 6.69235 19.1586 6.84022 19.2126 7.00654C19.2668 7.17286 19.2733 7.351 19.2314 7.52081C19.1896 7.69062 19.1011 7.84535 18.9759 7.9675L15.1684 11.68L16.0671 16.92C16.0968 17.0924 16.0776 17.2696 16.0118 17.4317C15.9459 17.5939 15.836 17.7342 15.6945 17.8371C15.553 17.94 15.3855 18.0012 15.211 18.0139C15.0365 18.0265 14.862 17.9901 14.7071 17.9087L9.99965 15.4337L5.29215 17.9087C5.13739 17.99 4.96299 18.0264 4.78864 18.0137C4.6143 18.0011 4.44695 17.94 4.3055 17.8374C4.16407 17.7346 4.05414 17.5944 3.98818 17.4325C3.9222 17.2706 3.90279 17.0936 3.93215 16.9212L4.83215 11.6787L1.02216 7.9675C0.896614 7.8454 0.80778 7.69059 0.765721 7.52059C0.723661 7.35059 0.730059 7.17221 0.784186 7.00566C0.838315 6.83911 0.93801 6.69105 1.07198 6.57826C1.20594 6.46547 1.36882 6.39246 1.54215 6.3675L6.80465 5.60375L9.1584 0.835C9.23588 0.678065 9.35574 0.54595 9.50442 0.453609C9.65309 0.361268 9.82464 0.312388 9.99965 0.3125ZM9.99965 3.36875L8.2684 6.875C8.20118 7.01112 8.10189 7.12889 7.97909 7.21816C7.85628 7.30744 7.71363 7.36555 7.5634 7.3875L3.69215 7.95L6.49215 10.68C6.60109 10.7861 6.6826 10.9171 6.72964 11.0617C6.77668 11.2063 6.78784 11.3601 6.76215 11.51L6.10215 15.365L9.5634 13.545C9.69794 13.4742 9.84767 13.4374 9.99965 13.4374C10.1517 13.4374 10.3014 13.4742 10.4359 13.545L13.8984 15.365L13.2359 11.51C13.2103 11.3601 13.2214 11.2063 13.2684 11.0617C13.3155 10.9171 13.397 10.7861 13.5059 10.68L16.3059 7.95125L12.4359 7.38875C12.2857 7.3668 12.143 7.30869 12.0202 7.21941C11.8974 7.13014 11.7981 7.01237 11.7309 6.87625L9.99965 3.3675V3.36875Z" fill={color} />
    </svg>
  )
}

export default StarIcon;