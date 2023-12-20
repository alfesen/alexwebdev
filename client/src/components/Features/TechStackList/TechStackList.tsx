import { TTechStackList } from "@/types/features"
import s from "./TechStackList.module.scss"
import TechStackListItem from "./TechStackListItem"
import { nanoid } from "nanoid"

const TechStackList = ({ items }: TTechStackList) => {
  const renderItems = () =>
    items.map((item) => {
      return <TechStackListItem key={nanoid()} {...item} />
    })

  return <ul className={s.list}>{renderItems()}</ul>
}

export default TechStackList
