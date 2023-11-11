import { useRef } from 'react'
import { Parallax } from '@react-spring/parallax'
import type { IParallax } from '@react-spring/parallax'
import { nanoid } from 'nanoid'
import s from './Slider.module.scss'
import SliderItem from './SliderItem/SliderItem'
import { TSlider } from '@/types/features'
import { useInView } from '@react-spring/web'

const Slider = ({ items }: TSlider) => {
  const parallax = useRef<IParallax>(null)

  const [ref, inView] = useInView({
    rootMargin: '-200px 0%',
    once: true,
  })

  const scroll = () => {
    if (parallax.current) {
      parallax.current.scrollTo(
        parallax.current.offset !== items.length - 1
          ? parallax.current.offset + 1
          : 0
      )
    }
  }

  return (
    <div ref={ref} className={!inView ? s['before-view'] : undefined}>
      {inView && (
        <Parallax
          className={s.slider}
          ref={parallax}
          pages={items.length}
          horizontal
          innerStyle={{ height: '500px', display: 'flex' }}
          config={{ damping: 1 }}>
          {items.map(
            ({ text, background }: Record<string, string>, index: number) => {
              return (
                <SliderItem
                  key={nanoid()}
                  offset={index}
                  onClick={scroll}
                  backgroundImage={background}
                  text={`${index + 1}. ${text}`}
                />
              )
            }
          )}
        </Parallax>
      )}
    </div>
  )
}

export default Slider
