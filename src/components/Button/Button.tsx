import { ReactElement, ReactNode } from 'react'

interface ButtonProps { 
  id?: string
  title: string
  leftIcon?: ReactElement | ReactNode,
  rightIcon?: ReactElement | ReactNode,
  containerClass?: string,
}
const Button = ({ id, title, leftIcon, rightIcon, containerClass }: ButtonProps) => {
  return (
    <button id={id} className={`group relative z-10 w-fit cursor-pointer overflow-hidden rounded-full bg-violet-50 px-7 py-3 text-black ${containerClass}`}>
      {leftIcon}
      <span className="raltive incline-flex overflow-hidden font-general text-xs uppercase">
        <div>{title}</div>
      </span>
      {rightIcon}
    </button>
  )
}

export default Button