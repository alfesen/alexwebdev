import TechStackList from "@/components/Features/TechStackList/TechStackList"
import TechStackNavigation from "@/components/Features/TechStackList/TechStackNavigation"
import ContentGrid from "@/components/UI/Grid/ContentGrid"
import { TTechStackListItemProps } from "@/types/features"
import { useState } from "react"

const LIST_ITEMS: { [key: string]: TTechStackListItemProps[] } = {}

const TechStack = () => {
  const [page, setPage] = useState("frontend")

  const keys = Object.keys(LIST_ITEMS)

  return (
    <ContentGrid>
      <TechStackNavigation keys={keys} page={page} setPage={setPage} />
      <TechStackList items={LIST_ITEMS[page]} />
    </ContentGrid>
  )
}

export default TechStack
