import { TBackdropProps } from '@/types/ui'
import s from './Backdrop.module.scss'

const Backdrop = ({ isOpen, close }: TBackdropProps) => {
  return (
    <div
      onClick={close}
      className={`${s.backdrop} ${isOpen ? s.active : undefined}`}
    />
  )
}

export default Backdrop
