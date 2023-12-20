import Heading from "@/components/Typography/Heading/Heading"
import s from "./TechStackListItem.module.scss"
import type { TTechStackListItemProps } from "@/types/features"

const TechStackListItem = ({ logo, heading, text }: TTechStackListItemProps) => {
  const Logo = logo
  return (
    <li className={s.item}>
      <Logo className={s.logo} />
      <div>
        <Heading semantic="h3">{heading}</Heading>
        <p>{text}</p>
      </div>
    </li>
  )
}

export default TechStackListItem
