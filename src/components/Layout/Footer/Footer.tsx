import {
  useChain,
  useSpringRef,
  useTransition,
  animated
} from '@react-spring/web'
import s from './Footer.module.scss'
import useDebounceTransition from '@/hooks/useDebounceTransition'

const Footer = () => {
  const { ref, inView, debounceTransition, initial } = useDebounceTransition(
    {
      opacity: 0
    },
    true
  )

  const transRef = useSpringRef()

  const name = [
    <span>
      <span className={s['red__letter--corner']}>A</span>lexan
      <span className={s.red__letter}>d</span>er
    </span>,
    <span>
      Fe<span className={s.red__letter}>s</span>enk
      <span className={s['red__letter--corner']}>o</span>
    </span>
  ]

  const transitions = useTransition(name, {
    ref: transRef,
    trail: 1000 / name.length,
    reset: inView,
    initial: initial,
    from: { opacity: 0 },
    enter: debounceTransition({ opacity: 1 }),
    leave: debounceTransition({ opacity: 1 })
  })

  useChain([transRef], [1])

  return (
    <footer>
      <div ref={ref} className={s.footer}>
        {transitions((style, item) => {
          return (
            <animated.p className={s.name} style={style}>
              {item}
            </animated.p>
          )
        })}
      </div>
      <p className={s.copy}>
        &copy; {new Date().getFullYear()} Alexander Fesenko Web Development
      </p>
    </footer>
  )
}

export default Footer
