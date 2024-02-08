import Heading from '@/components/Typography/Heading/Heading'
import s from './TechStackListItem.module.scss'
import type { TTechStackListItemProps } from '@/types/features'

const TechStackListItem = ({
  icon,
  heading,
  text
}: TTechStackListItemProps) => {
  const Icon = icon
  return (
    <li className={s.item}>
      <div>
        <Icon size={60} />
      </div>
      <div className={s.item__content}>
        <Heading semantic="h3">{heading}</Heading>
        <p>{text}</p>
      </div>
    </li>
  )
}

export default TechStackListItem
