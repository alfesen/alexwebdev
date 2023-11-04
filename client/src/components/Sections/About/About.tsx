import s from './About.module.scss'

const About = () => {
  return (
    <section className={`${s.about} container`}>
      <div className={s.about__half}></div>
      <div className={`${s.about__half}`}></div>
    </section>
  )
}

export default About
