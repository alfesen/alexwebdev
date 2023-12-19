import {
  useTransition,
  useChain,
  animated,
  useSpringRef,
} from '@react-spring/web'
import {
  BiLogoTypescript,
  BiLogoNodejs,
  BiLogoReact,
  BiLogoHtml5,
  BiLogoCss3,
  BiLogoDocker,
} from 'react-icons/bi'
import { SiNestjs } from 'react-icons/si'
import s from './TechStackIcons.module.scss'
import useDebounceTransition from '@/hooks/useDebounceTransition'

const TechStackIcons = () => {
  const { ref, inView, debounceTransition, initial } = useDebounceTransition({
    opacity: 0,
    scale: 0,
  })
  const transRef = useSpringRef()

  const icons = [
    BiLogoHtml5,
    BiLogoCss3,
    BiLogoNodejs,
    BiLogoTypescript,
    BiLogoReact,
    SiNestjs,
    BiLogoDocker,
  ]

  const transitions = useTransition(icons, {
    ref: transRef,
    trail: 1000 / icons.length,
    reset: inView ? true : false,
    initial: initial,
    from: { opacity: 0, scale: 0 },
    enter: debounceTransition({ opacity: 1, scale: 1 }),
    leave: debounceTransition({ opacity: 0, scale: 0 }),
  })

  useChain([transRef], [1])

  return (
    <animated.div className={s.stack}>
      {transitions((style, Item) => (
        <animated.div className={s.icon} ref={ref} style={style}>
          <Item color='#fff' size='6rem' />
        </animated.div>
      ))}
    </animated.div>
  )
}

export default TechStackIcons
