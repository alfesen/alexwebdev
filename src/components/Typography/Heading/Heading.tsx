import { createElement } from 'react'
import type { THeading } from '@/types/typography'
import s from './Heading.module.scss'

const Heading = ({ semantic, children, className }: THeading) => {
  const headingClassName = { className: `${className ?? ''} ${s[semantic]}` }

  return createElement(semantic, headingClassName, children)
}

export default Heading
