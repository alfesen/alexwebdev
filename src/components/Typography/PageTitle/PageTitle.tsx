import type { TPageTitle } from '@/types/typography'
import Typewriter from '../Typewriter/Typewriter'
import s from './PageTitle.module.scss'
import Heading from '../Heading/Heading'

const PageTitle = ({ title, subtitle }: TPageTitle) => {
  return (
    <Heading semantic='h1' className={s.title}>
      {title}
      <Typewriter className={s.subtitle} text={subtitle} delay={100} />
    </Heading>
  )
}

export default PageTitle
