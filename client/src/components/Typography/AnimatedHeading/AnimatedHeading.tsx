import {
  animated,
  useChain,
  useSpringRef,
  useTransition,
} from '@react-spring/web'
import Heading from '../Heading/Heading'
import { TAnimatedHeading } from '@/types/typography'
import useDebounceTransition from '@/hooks/useDebounceTransition'

const AnimatedHeading = ({ text, semantic, className }: TAnimatedHeading) => {
  const transitionRef = useSpringRef()
  const splitText = text.split('')
  const { ref, inView, debounceTransition, initial } = useDebounceTransition({
    opacity: 0,
    transform: 'translate3d(50px, 30%, 0px)',
  })

  const debounced = [
    {
      opacity: 1,
      transform: 'translate3d(50px, -20%, 0px)',
    },
    {
      opacity: 1,
      transform: 'translate3d(0%,  -20%, 0px)',
    },
    {
      opacity: 1,
      transform: 'translate3d(0%,  0px, 0px)',
    },
  ]

  const transitions = useTransition(splitText, {
    ref: transitionRef,
    reset: inView,
    trail: 1000 / splitText.length,
    from: initial,
    enter: () => async next => {
      for (const one of debounced) {
        await next(debounceTransition(one))
      }
    },
    keys: null,
  })

  useChain([transitionRef], [0.5])

  return (
    <Heading semantic={semantic} className={className ? className : undefined}>
      {transitions((style, item) => (
        <animated.span
          ref={ref}
          style={{
            display: 'inline-block',
            width: item === ' ' ? '.5ch' : 'auto',
            ...style,
          }}>
          {item}
        </animated.span>
      ))}
    </Heading>
  )
}

export default AnimatedHeading
