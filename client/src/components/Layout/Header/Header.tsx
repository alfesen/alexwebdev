import {
  MouseParallaxChild,
  MouseParallaxContainer,
} from 'react-parallax-mouse'
import PageTitle from '@/components/Typography/PageTitle/PageTitle'
import s from './Header.module.scss'

const sharedStyles = { height: '100%', width: '100%', overflow: 'hidden' }

const pageTitleParallaxStyles = {
  ...sharedStyles,
  display: 'flex',
  justifyContent: 'right',
  alignItems: 'center',
}

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
          style={pageTitleParallaxStyles}>
          <PageTitle title='Alexander Fesenko' subtitle='Web Development' />
        </MouseParallaxChild>
      </MouseParallaxContainer>
    </header>
  )
}

export default Header
