import {
  animated,
  useChain,
  useSpringRef,
  useTransition,
} from '@react-spring/web'
import Heading from '../Heading/Heading'
import { TAnimatedHeading } from '@/types/typography'

const AnimatedHeading = ({ text, semantic, className }: TAnimatedHeading) => {
  const transitionRef = useSpringRef()

  const splitText = text.split('')

  const transitions = useTransition(splitText, {
    ref: transitionRef,
    trail: 1000 / splitText.length,
    from: { opacity: 0, transform: 'translate3d(0%, 30%, 0px)' },
    enter: { opacity: 1, transform: 'translate3d(0%, 0px, 0px)' },
    keys: null,
  })

  useChain([transitionRef], [0.5])

  return (
    <Heading semantic={semantic} className={className ? className : undefined}>
      {transitions((style, item) => (
        <animated.span
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
