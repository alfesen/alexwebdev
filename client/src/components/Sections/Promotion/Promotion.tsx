import Slider from '@/components/UI/Slider/Slider'
import s from './Promotion.module.scss'
import { useQuery } from 'react-query'
import axios from 'axios'
import { AnyObject } from 'yup'

const Promotion = () => {
  const { data, isLoading } = useQuery({
    queryKey: ['promotion list items'],
    queryFn: async () => {
      const { data: promotions } = await axios.get(
        `${import.meta.env.VITE_SERVER_URL}/promotions`
      )
      return promotions.map(({ image, text }: AnyObject) => ({
        background: image.replaceAll('\\', '/'),
        text: text
      }))
    }
  })

  if(isLoading && !data) {
    return <></>
  }

  return (
    <div className={s.promotion__container}>
      {!isLoading && data && <Slider items={data} />}
    </div>
  )
}

export default Promotion
