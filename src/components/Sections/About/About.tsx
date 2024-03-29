import Gallery from "@/components/UI/Gallery/Gallery"
import s from "./About.module.scss"
import { useInView } from "@react-spring/web"
import TechStackIcons from "../../Features/TechStackIcons/TechStackIcons"
import AnimatedHeading from "@/components/Typography/AnimatedHeading/AnimatedHeading"

const About = () => {
  const [ref, inView] = useInView({ once: true })

  return (
    <section ref={ref} className={`${s.about} ${inView ? s.shown : ''}`}>
      <div className={`${s.about__half}`}>
        <AnimatedHeading semantic="h2" className="u-center" text="Full Stack" />
        <TechStackIcons />
      </div>
      <div className={`${s.about__half}`}>
        <Gallery
          className={s.photo}
          images={[
            { src: '/assets/img/author.webp', minWidth: 769, alt: 'author' }
          ]}
        />
      </div>
    </section>
  )
}

export default About
