export type TBackdropProps = {
  isOpen: boolean
  close: () => void
}


export type TInput = {
  label: string
  id: string
  name: string
} & ({ type: 'text' | 'email' } | { type: 'textarea'; rows: number })