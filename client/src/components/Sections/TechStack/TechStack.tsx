import TechStackList from '@/components/Features/TechStackList/TechStackList'
import TechStackNavigation from '@/components/Features/TechStackList/TechStackNavigation'
import ContentGrid from '@/components/UI/Grid/ContentGrid'
import { animated, useInView, useSpring } from '@react-spring/web'
import { useState } from 'react'
import { TTechStackListItemProps } from '@/types/features'
import {
  BiLogoCss3,
  BiLogoHtml5,
  BiLogoNodejs,
  BiLogoReact
} from 'react-icons/bi'
import {
  SiExpress,
  SiJest,
  SiNestjs,
  SiNextdotjs,
  SiTypescript,
  SiVite,
  SiVitest
} from 'react-icons/si'

const TechStack = () => {
  const [ref, inView] = useInView({ once: true, rootMargin: '10%' })

  const stack: Record<string, TTechStackListItemProps[]> = {
    frontend: [
      {
        icon: <BiLogoReact />,
        heading: 'ReactJS',
        text: 'ReactJS enhances website interactivity for a better user experience'
      },
      {
        icon: <BiLogoHtml5 />,
        heading: 'HTML',
        text: 'Structures web content, creating intuitive and organized interfaces primarily for frontend development and user interface design'
      },
      {
        icon: <BiLogoCss3 />,
        heading: 'CSS',
        text: 'Transforms website aesthetics, adding style for a visually pleasing and memorable user experience, focusing on frontend styling'
      }
    ],
    backend: [
      {
        icon: <BiLogoNodejs />,
        heading: 'Node.js',
        text: 'Powers websites with swift and responsive interactions, excelling in server-side development and enabling dynamic backend functionality'
      },
      {
        icon: <SiExpress />,
        heading: 'Express.js',
        text: 'Fuels web servers and contributes to the efficiency and responsiveness of websites, specializing in server-side development and routing'
      },
      {
        icon: <SiNestjs />,
        heading: 'NestJS',
        text: 'A framework that empowers websites with sophisticated features, specializing in server-side development and ensuring a robust backend for enhanced user experiences'
      }
    ],
    fullstack: [
      {
        icon: <SiTypescript />,
        heading: 'TypeScript',
        text: 'A language that elevates web development with enhanced strength and dependability, primarily focusing on frontend and backend scripting for seamless interactions'
      },
      {
        icon: <SiNextdotjs />,
        heading: 'Next.js',
        text: 'Fuels web servers and contributes to the efficiency and responsiveness of websites, specializing in server-side development and routing'
      },
      {
        icon: <SiVite />,
        heading: 'Vite',
        text: 'Accelerates web presence by delivering a faster and more responsive user interface, focusing on frontend development and optimizing build processes'
      }
    ],
    testing: [
      {
        icon: <SiVitest />,
        heading: 'Vitest',
        text: 'Ensures the reliability and stability of web applications, specializing in frontend testing to maintain a dependable user experience'
      },
      {
        icon: <SiJest />,
        heading: 'Jest',
        text: 'Ensures the reliability of web applications through comprehensive testing, focusing on frontend and backend testing to maintain a consistent user experience'
      }
    ]
  }

  const keys = Object.keys(stack)

  const [page, setPage] = useState<string>(keys[0])

  const [props] = useSpring(() => ({
    from: { opacity: 0 },
    to: { opacity: 1 }
  }))

  const AnimatedContainer = animated(ContentGrid)

  return (
    <section ref={ref}>
      {inView && page && (
        <AnimatedContainer style={props}>
          <TechStackNavigation keys={keys} page={page} setPage={setPage} />
          <TechStackList items={stack[page]} />
        </AnimatedContainer>
      )}
    </section>
  )
}

export default TechStack
