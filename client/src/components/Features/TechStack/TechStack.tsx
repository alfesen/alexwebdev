import {
  useTransition,
  useChain,
  animated,
  useSpringRef,
  useInView,
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
import s from './TechStack.module.scss'

const TechStack = () => {
  const [ref, inView] = useInView({
    rootMargin: '-10% 0px',
    once: true,
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
    reset: inView,
    from: { opacity: 0, scale: 0 },
    enter: { opacity: 1, scale: 1 },
    leave: { opacity: 0, scale: 0 },
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

export default TechStack
