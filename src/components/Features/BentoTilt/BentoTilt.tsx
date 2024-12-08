import { ReactNode, useRef, useState } from "react"

interface BentoTilt {
  children: ReactNode,
  className: string
}

export const BentoTilt = ({ children, className = '' }: Readonly<BentoTilt>) => {
  const [transformStyle, setTransformStyle] = useState('')
  const itemRef = useRef<HTMLDivElement | null>(null)

  const handleMouseMove: React.MouseEventHandler<HTMLDivElement> = (e) => {
    if (!itemRef.current) return

    const { left, top, width, height } = itemRef.current.getBoundingClientRect()
    
    const relativeX = (e.clientX - left) / width
    const relativeY = (e.clientY - top) / height

    const tiltX = (relativeX - 0.5) * 5
    const tiltY = (relativeY - 0.5) * -5

    const newTransform = `perspective(700px) rotateX(${tiltX}deg) rotateY(${tiltY}deg) scale3d(0.98, 0.98, 0.98)`

    setTransformStyle(newTransform)
  }
  const handleMouseLeave = () => {
    setTransformStyle('')
  }
  return (
    <div 
      className={className} 
      ref={itemRef}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      style={{ transform: transformStyle }}
    >
      {children}
    </div>
  )
}