import Gallery from '@/components/UI/Gallery/Gallery'
import s from './About.module.scss'

import author from '@/assets/img/author.jpg'
import { useInView } from '@react-spring/web'
import TechStack from '../../Features/TechStack/TechStack'
const About = () => {
  const [techRef, techInView] = useInView()
  const [imageRef, imageInView] = useInView()

  return (
    <section className={`${s.about} container`}>
      <div
        ref={techRef}
        className={`${s.about__half} ${techInView ? s.shown : ''}`}>
        <TechStack />
      </div>
      <div
        ref={imageRef}
        className={`${s.about__half} ${imageInView ? s.shown : ''}`}>
        <Gallery
          className={s.photo}
          images={[{ src: author, minWidth: 769, alt: 'author' }]}
        />
      </div>
    </section>
  )
}

export default About
