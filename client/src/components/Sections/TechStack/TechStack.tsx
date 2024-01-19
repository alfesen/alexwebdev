import TechStackList from '@/components/Features/TechStackList/TechStackList'
import TechStackNavigation from '@/components/Features/TechStackList/TechStackNavigation'
import ContentGrid from '@/components/UI/Grid/ContentGrid'
import { animated, useInView, useSpring } from '@react-spring/web'
import { useState } from 'react'
import { useQuery } from 'react-query'
import axios from 'axios'

const TechStack = () => {
  const [page, setPage] = useState<string>()
  const [ref, inView] = useInView({ once: true, rootMargin: '10%' })

  const [props] = useSpring(() => ({
    from: { opacity: 0 },
    to: { opacity: 1 }
  }))

  const { data, isLoading, isError, error } = useQuery({
    queryKey: ['tech stack categories'],
    queryFn: async () => {
      const { data } = await axios.get(
        `${import.meta.env.VITE_SERVER_URL}/tech`
      )
      const categories = Object.keys(data).sort(
        (a, b) => data[a].length + data[b].length
      )
      const page = categories[0]
      setPage(page)
      return data
    },
    refetchOnWindowFocus: false,
    refetchOnReconnect: true,
    refetchOnMount: 'always'
  })

  if (isLoading) {
    return <></>
  }
  
  if (isError) {
    console.error(error)
    return <></>
  }

  const keys = Object.keys(data)
  const sortedKeys = keys.sort((a, b) => data[a].length + data[b].length)

  const AnimatedContainer = animated(ContentGrid)

  return (
    <section ref={ref}>
      {!isLoading && inView && page && (
        <AnimatedContainer style={props}>
          <TechStackNavigation
            keys={sortedKeys}
            page={page}
            setPage={setPage}
          />
          <TechStackList items={data[page]} />
        </AnimatedContainer>
      )}
    </section>
  )
}

export default TechStack
