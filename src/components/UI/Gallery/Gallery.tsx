import { useState, useEffect } from 'react'
import { nanoid } from 'nanoid'

import type { TGallery } from '@/types/features'

const Gallery = ({ images, caption, className }: TGallery) => {
  const [windowWidth, setWindowWidth] = useState(window.innerWidth)

  useEffect(() => {
    const handleResize = () => {
      setWindowWidth(window.innerWidth)
    }

    window.addEventListener('resize', handleResize)

    return () => {
      window.removeEventListener('resize', handleResize)
    }
  }, [])

  return (
    <div className={className && className}>
      {images.map(
        ({ src, alt, maxWidth, minWidth }) =>
          windowWidth >= (minWidth || 0) &&
          windowWidth < (maxWidth || Infinity) && (
            <img key={nanoid()} src={src} alt={alt} />
          )
      )}
      {caption && <p>{caption}</p>}
    </div>
  )
}

export default Gallery
