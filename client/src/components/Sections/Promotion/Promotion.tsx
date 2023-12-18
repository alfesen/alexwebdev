import Slider from "@/components/UI/Slider/Slider"
import author from "@/assets/img/author.jpg"
import modern from "@/assets/img/modern.jpg"
import headerLg from "@/assets/img/header-lg.png"
import s from "./Promotion.module.scss"

const Promotion = () => {
  return (
    <div className={s.promotion__container}>
      <Slider
        items={[
          {
            text: `From pixels to perfection. Weaving code and creativity to craft digital experiences that captivate and convert`,
            background: author,
          },
          {
            text: `Building more than websites, building connections. Bridging the gap between your brand and your users with intuitive and impactful web solutions.`,
            background: modern,
          },
          {
            text: `The power of pixels, unleashed. Transforming ideas into dynamic and engaging online landscapes that leave a lasting impression.`,
            background: headerLg,
          },
        ]}
      />
    </div>
  )
}

export default Promotion
