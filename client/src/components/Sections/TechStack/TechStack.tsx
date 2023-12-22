import TechStackList from "@/components/Features/TechStackList/TechStackList"
import TechStackNavigation from "@/components/Features/TechStackList/TechStackNavigation"
import ContentGrid from "@/components/UI/Grid/ContentGrid"
import { TTechStackListItemProps } from "@/types/features"
import { animated, useInView, useSpring } from "@react-spring/web"
import { useState } from "react"

const LIST_ITEMS: { [key: string]: TTechStackListItemProps[] } = {}

const TechStack = () => {
  const [page, setPage] = useState("frontend")
  const [ref, inView] = useInView({ once: true, rootMargin: "10%" })

  const [props] = useSpring(() => ({
    from: { opacity: 0 },
    to: { opacity: 1 },
  }))

  const keys = Object.keys(LIST_ITEMS)

  const AnimatedContainer = animated(ContentGrid)

  return (
    <section ref={ref}>
      {inView && (
        <AnimatedContainer style={props}>
          <TechStackNavigation keys={keys} page={page} setPage={setPage} />
          <TechStackList items={LIST_ITEMS[page]} />
        </AnimatedContainer>
      )}
    </section>
  )
}

export default TechStack
