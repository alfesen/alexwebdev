import Slider from '@/components/UI/Slider/Slider'
import s from './Promotion.module.scss'
import { TPromotion } from '@/types/features'

const data: TPromotion[] = [
  {
    text: 'Building more than websites, building connections. Bridging the gap between your brand and your users with intuitive and impactful web solutions!',
    background: './assets/img/modern.webp'
  },
  {
    text: 'The power of pixels, unleashed. Transforming ideas into dynamic and engaging online landscapes that leave a lasting impression',
    background: './assets/img/header-lg.webp'
  },
  {
    text: 'From pixels to perfection. Weaving code and creativity to craft digital experiences that captivate and convert',
    background: './assets/img/wish.webp'
  }
]

const Promotion = () => {
  return (
    <section className={s.promotion__container}>
      {<Slider items={data} />}
    </section>
  )
}

export default Promotion
