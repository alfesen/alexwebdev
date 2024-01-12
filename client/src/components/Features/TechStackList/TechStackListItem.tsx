import Heading from "@/components/Typography/Heading/Heading"
import s from "./TechStackListItem.module.scss"
import type { TTechStackListItemProps } from "@/types/features"

const TechStackListItem = ({ icon, heading, text }: TTechStackListItemProps) => {
  console.log(icon)
  return (
    <li className={s.item}>
      <img src={`http://localhost:3000/${icon}`} className={s.logo} />
      <div>
        <Heading semantic="h3">{heading}</Heading>
        <p>{text}</p>
      </div>
    </li>
  )
}

export default TechStackListItem
