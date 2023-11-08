import { useRef } from 'react'
import { Parallax } from '@react-spring/parallax'
import type { IParallax } from '@react-spring/parallax'
import { nanoid } from 'nanoid'
import s from './Slider.module.scss'
import SliderItem from './SliderItem/SliderItem'
import { TSlider } from '@/types/features'

const Slider = ({ items }: TSlider) => {
  const parallax = useRef<IParallax>(null)

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
    <Parallax
      className={s.container}
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
              backgroundImage={`linear-gradient(to bottom, #131313 10%, transparent), url(${background})`}
              text={`${index + 1}. ${text} `}
            />
          )
        }
      )}
    </Parallax>
  )
}

export default Slider
