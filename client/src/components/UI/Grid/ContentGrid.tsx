import { ReactNode } from "react"

const ContentGrid = ({ children }: { children: ReactNode }) => {
  return (
    <div className="grid">
      <div className="grid-content">{children}</div>
    </div>
  )
}

export default ContentGrid
