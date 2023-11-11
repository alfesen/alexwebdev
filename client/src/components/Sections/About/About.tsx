import Gallery from '@/components/UI/Gallery/Gallery'
import s from './About.module.scss'

import author from '@/assets/img/author.jpg'
import { useInView } from '@react-spring/web'
import TechStack from '../../Features/TechStack/TechStack'
import Heading from '@/components/Typography/Heading/Heading'
const About = () => {
  const [ref, inView] = useInView({ once: true })

  return (
    <section
      ref={ref}
      className={`${s.about} ${inView ? s.shown : ''}`}>
      <div className={`${s.about__half}`}>
        <Heading semantic='h2' className='u-center'>
          Full Stack
        </Heading>
        <TechStack />
      </div>
      <div className={`${s.about__half}`}>
        <Gallery
          className={s.photo}
          images={[{ src: author, minWidth: 769, alt: 'author' }]}
        />
      </div>
    </section>
  )
}

export default About
