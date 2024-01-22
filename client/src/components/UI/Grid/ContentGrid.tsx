import { TChildren } from "@/types/layout"

const ContentGrid = ({ children }: TChildren) => {
  return (
    <div className="grid">
      <div className="grid-content">{children}</div>
    </div>
  )
}

export default ContentGrid
