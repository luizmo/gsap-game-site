import { ReactNode } from "react"

interface BentoCardProps {
  source: string,
  title: string | ReactNode,
  description?: string,
}

export const BentoCard = ({ source, title, description }: Readonly<BentoCardProps>) => {
  return (
    <div className="relative size-full">
      <video 
        src={source}
        loop
        muted
        autoPlay
        className="absolute left-0 top-0 size-full object-cover object-center"
      />
      <div className="relative z-10 flex size-full flex-col justify-between p-5 text-blue-50">
        <div>
          <h1 className="bento-title special-font">{title}</h1>
          {description && (
            <p className="mt-3 max-w-64 text-xs md:text-base">
              {description}
            </p>
          )}
        </div>
      </div>
      {title}
    </div>
  )
}