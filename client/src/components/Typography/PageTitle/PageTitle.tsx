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
      <span className={s.subtitle}>{subtitle}</span>
    </h1>
  )
}

export default PageTitle
