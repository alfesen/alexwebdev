import { ParallaxLayer } from '@react-spring/parallax'
import s from './SliderItem.module.scss'
import type { TSliderItem } from '@/types/features'

const SliderItem = ({
  offset,
  onClick,
  text,
  backgroundImage,
}: TSliderItem) => {
  const randomGradient = () => {
    const color = `rgb(${Math.floor(Math.random() * 256)}, ${Math.floor(
      Math.random() * 256
    )}, ${Math.floor(Math.random() * 256)})`

    return {
      backgroundImage: `linear-gradient(to bottom, #131313 10%, ${color}, ${color})`,
      opacity: '.6',
    }
  }
  
  return (
    <>
      <ParallaxLayer
        className={`${s.text}`}
        offset={offset}
        speed={0.1}></ParallaxLayer>

      <ParallaxLayer offset={offset} speed={0.6} onClick={onClick}>
        <div
          style={randomGradient()}
          className={`${s.slope} ${s.slope__end}`}
        />
      </ParallaxLayer>

      <ParallaxLayer offset={offset} speed={0.2} onClick={onClick}>
        <div
          className={`${s.slope} ${s.slope__start}`}
          style={{
            backgroundImage,
          }}>
          <p className={s['slope__start-text']}>{text}</p>
        </div>
      </ParallaxLayer>
    </>
  )
}
export default SliderItem
