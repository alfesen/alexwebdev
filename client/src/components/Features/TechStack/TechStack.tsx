import {
  useTransition,
  useSpring,
  useChain,
  animated,
  useSpringRef,
  config,
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
  const [ref, inView] = useInView()
  const spring = useSpringRef()
  const transRef = useSpringRef()

  const { opacity, transform } = useSpring({
    ref: spring,
    config: config.stiff,
    from: { opacity: 0, transform: 'translateY(100%)' },
    to: {
      opacity: 1,
      transform: 'translateY(0)',
    },
  })

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

  useChain([spring, transRef], [0, 1])

  return (
    <animated.div
      ref={ref}
      style={{
        transform: transform,
        opacity: opacity,
      }}
      className={s.stack}>
      {transitions((style, Item) => (
        <animated.div className={s.icon} style={style}>
          <Item color='#fff' size='6rem' />
        </animated.div>
      ))}
    </animated.div>
  )
}

export default TechStack