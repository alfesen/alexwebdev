import { HTMLProps } from 'react'
import { BiEnvelope } from 'react-icons/bi'
import s from './ContactButton.module.scss'

const ContactButton = ({ onClick }: HTMLProps<HTMLButtonElement>) => {
  return (
    <div className={s.envelope__box}>
      <BiEnvelope
        className={s.envelope}
        color="#fff"
        size="4.5rem"
        onClick={onClick}
      />
    </div>
  )
}

export default ContactButton
