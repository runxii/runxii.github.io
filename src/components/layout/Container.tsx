import type { ReactNode } from 'react'

interface ContainerProps {
  children: ReactNode
  className?: string
}

export default function Container({ children, className = '' }: ContainerProps) {
  return (
    <div className={`mx-auto w-7/8 px-5 md:px-8 ${className}`}>
      {children}
    </div>
  )
}
