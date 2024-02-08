import ContactButton from '@/components/UI/ContactButton/ContactButton'
import s from './Contact.module.scss'
import useMenu from '@/hooks/useMenu'
import ContactForm from '@/components/Features/ContactForm/ContactForm'
import Backdrop from '@/components/UI/Backdrop/Backdrop'
import { IoCloseCircleOutline } from 'react-icons/io5'

const Contact = () => {
  const { isMenuOpen, openMenu, closeMenu } = useMenu()

  return (
    <section className={s.contact}>
      <Backdrop isOpen={isMenuOpen} close={closeMenu} />
      <div
        className={`${s.contact__menu} ${isMenuOpen ? s.active : undefined}`}
      >
        <div className={s.close__icon}>
          <IoCloseCircleOutline onClick={closeMenu} size='40px' />
        </div>
        <ContactForm closeForm={closeMenu} />
      </div>
      <ContactButton onClick={openMenu} />
    </section>
  )
}

export default Contact
