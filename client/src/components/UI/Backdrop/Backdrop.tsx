import s from './Backdrop.module.scss'

const Backdrop = ({
  isOpen,
  close
}: {
  isOpen: boolean
  close: () => void
}) => {
  return (
    <div
      onClick={close}
      className={`${s.backdrop} ${isOpen ? s.active : undefined}`}
    />
  )
}

export default Backdrop
