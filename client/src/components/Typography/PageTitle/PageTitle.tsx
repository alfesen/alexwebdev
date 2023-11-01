import Typewriter from '../Typewriter/Typewriter'
import s from './PageTitle.module.scss'

const PageTitle = ({
  title,
  subtitle,
}: {
  title: string
  subtitle: string
}) => {
  return (
    <h1 className={s.title}>
      {title}
      <Typewriter className={s.subtitle} text={subtitle} delay={100} />
    </h1>
  )
}

export default PageTitle
