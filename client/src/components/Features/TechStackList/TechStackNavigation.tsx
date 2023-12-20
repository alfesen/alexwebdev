import { nanoid } from "nanoid"
import { capitalize } from "string-ts"
import s from "./TechStackNavigation.module.scss"
import { TTechStackNavigation } from "@/types/features"

const TechStackNavigation = ({ keys, page, setPage }: TTechStackNavigation) => {
  const renderButtons = () => {
    return keys.map(($) => (
      <button
        className={`${s.btn} ${page === $ ? s.active : undefined}`}
        key={nanoid()}
        onClick={() => setPage($)}
      >
        <span className={s.btn__text}>{capitalize($)}</span>
      </button>
    ))
  }

  return (
    <nav className={`u-flex-center ${s.navigation}`}>{renderButtons()}</nav>
  )
}

export default TechStackNavigation
