import Slider from '@/components/UI/Slider/Slider'
import s from './Promotion.module.scss'
import { TPromotion } from '@/types/features'
import wish from '@/assets/img/wish.webp'
import code from '@/assets/img/header-lg.webp'
import modern from '@/assets/img/modern.webp'

const data: TPromotion[] = [
  {
    text: 'Building more than websites, building connections. Bridging the gap between your brand and your users with intuitive and impactful web solutions!',
    background: modern
  },
  {
    text: 'The power of pixels, unleashed. Transforming ideas into dynamic and engaging online landscapes that leave a lasting impression',
    background: code
  },
  {
    text: 'From pixels to perfection. Weaving code and creativity to craft digital experiences that captivate and convert',
    background: wish
  }
]

const Promotion = () => {
  return <div className={s.promotion__container}>{<Slider items={data} />}</div>
}

export default Promotion