
export type TImage = {
  src: string
  minWidth?: number
  maxWidth?: number
  alt: string
}

export type TGallery = {
  images: TImage[]
  caption?: string
  className?: string
}

export type TSlider = { items: Record<string, string>[] }

export type TSliderItem = {
  offset: number
  onClick: () => void
  text: string
  backgroundImage: string
}

export type TTechStackListItemProps = {
  icon: string
  heading: string
  text: string
}

export type TTechStackList = {
  items: TTechStackListItemProps[]
}

export type TTechStackNavigation = {
  keys: string[]
  page: string
  setPage: (key: string) => void
}
