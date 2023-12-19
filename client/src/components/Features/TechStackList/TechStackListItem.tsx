import Heading from "@/components/Typography/Heading/Heading"
import s from "./TechStackListItem.module.scss"
import type { TTechStackListProps } from "@/types/features"

const TechStackListItem = ({ logo, heading, text }: TTechStackListProps) => {
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
