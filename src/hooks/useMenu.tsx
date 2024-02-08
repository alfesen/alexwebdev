import { useState } from 'react'

const useMenu = () => {
  const [isMenuOpen, setIsMenuOpen] = useState<boolean>(false)

  const openMenu = () => {
    setIsMenuOpen(true)
    document.body.style.overflow = 'hidden'
  }
  const closeMenu = () => {
    document.body.style.overflow = 'visible'
    setIsMenuOpen(false)
  }

  return { isMenuOpen, openMenu, closeMenu }
}

export default useMenu
