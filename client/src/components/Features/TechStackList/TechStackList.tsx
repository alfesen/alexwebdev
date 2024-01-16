import { TTechStackList } from "@/types/features"
import s from "./TechStackList.module.scss"
import TechStackListItem from "./TechStackListItem"
import {
  animated,
  useChain,
  useSpringRef,
  useTransition,
} from "@react-spring/web"
const TechStackList = ({ items }: TTechStackList) => {

  console.log(items)

  const transRef = useSpringRef()
  const transitions = useTransition(items, {
    ref: transRef,
    trail: 1300 / items.length,
    reset: !!items,
    from: { opacity: 0, transform: "translate3d(-50px, 0, 0)" },
    enter: { opacity: 1, transform: "translate3d(0, 0, 0)" },
    leave: { opacity: 1, transform: "translate3d(0, 0, 0)" },
  })

  useChain([transRef], [0])

  return (
    <ul className={s.list}>
      {transitions((style, item) => {
        return (
          <animated.div style={style}>
            <TechStackListItem {...item} />
          </animated.div>
        )
      })}
    </ul>
  )
}

export default TechStackList
