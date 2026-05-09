import type { ReactNode } from 'react'

interface BlogContentProps {
  children: ReactNode
  className?: string
}

export default function BlogContent({
  children,
  className = '',
}: BlogContentProps) {
  return (
    <article
      className={[
        'mx-auto mt-12 w-full max-w-6xl rounded-[12px] bg-white/95 p-10 shadow-[0_10px_28px_rgba(0,0,0,0.035)]',
        className,
      ].join(' ')}
    >
      {children}
    </article>
  )
}
