import type { ReactNode } from 'react'

export type THeading = {
  semantic: 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6'
  children: ReactNode
  className?: string
}
export type TAnimatedHeading = Omit<THeading, 'children'> & { text: string }

export type TPageTitle = {
  title: string
  subtitle: string
}

export type TTypewriter = {
  text: string
  delay: number
  className?: string
}
