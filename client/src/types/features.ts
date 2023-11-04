export type TImage = { src: string; minWidth?: number; maxWidth?: number; alt: string }

export type TGallery = {
  images: TImage[]
  caption?: string
  className?: string
  
}
