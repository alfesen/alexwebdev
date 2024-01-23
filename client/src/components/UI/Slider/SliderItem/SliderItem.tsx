import { ParallaxLayer } from '@react-spring/parallax'
import s from './SliderItem.module.scss'
import type { TSliderItem } from '@/types/features'

const SliderItem = ({
  offset,
  onClick,
  text,
  backgroundImage
}: TSliderItem) => {
  const randomColor = () => {
    const colors = ['#5bc0eb', '#fde74c', '#9bc53d', '#e55934', '#fa7921']

    const color = colors[Math.floor(Math.random() * colors.length)]

    return color
  }
  console.log(backgroundImage.replace('\\', '/'))
  return (
    <>
      <ParallaxLayer offset={offset} speed={0.6} onClick={onClick}>
        <div
          style={{
            backgroundImage: `linear-gradient(-60deg, transparent 5%, ${randomColor()}, ${randomColor()} ,${randomColor()})`
          }}
          className={`${s.slope} ${s.slope__end}`}
        />
      </ParallaxLayer>

      <ParallaxLayer offset={offset} speed={0.2} onClick={onClick}>
        <div
          className={`${s.slope} ${s.slope__start}`}
          style={{
            backgroundImage: `linear-gradient(to bottom, #131313 , transparent), url(${`${
              import.meta.env.VITE_SERVER_URL
            }/${backgroundImage}`})`
          }}
        >
          <p className={s['slope__start-text']}>{text}</p>
        </div>
      </ParallaxLayer>
    </>
  )
}
export default SliderItem
