import { useState } from 'react'

const useMenu = () => {
  const [isMenuOpen, setIsMenuOpen] = useState<boolean>(false)

  const openMenu = () => {
    setIsMenuOpen(true)
  }
  const closeMenu = () => {
    setIsMenuOpen(false)
  }

  return { isMenuOpen, openMenu, closeMenu }
}

export default useMenu
