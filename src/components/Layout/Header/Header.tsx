import {
  MouseParallaxChild,
  MouseParallaxContainer,
} from 'react-parallax-mouse'
import PageTitle from '@/components/Typography/PageTitle/PageTitle'
import s from './Header.module.scss'

const Header = () => {
  return (
    <header className={s.header}>
      <MouseParallaxContainer resetOnLeave>
        <MouseParallaxChild
          factorX={0.1}
          factorY={0.1}
          className={s.header__background}></MouseParallaxChild>
        <MouseParallaxChild
          factorX={0.1}
          factorY={0.1}
          className={s.header__title}>
          <PageTitle title='Alexander Fesenko' subtitle='Web Development' />
        </MouseParallaxChild>
      </MouseParallaxContainer>
    </header>
  )
}

export default Header
