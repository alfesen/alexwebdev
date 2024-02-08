import { useInView } from '@react-spring/web'

const useDebounceTransition = (
  initial: Record<string, unknown>,
  once: boolean = false
) => {
  const [ref, inView] = useInView({ rootMargin: '0px -15%', once })

  const debounceTransition = (styleObject: Record<string, unknown>) =>
    inView ? styleObject : initial

  return {ref, initial, inView, debounceTransition}
}

export default useDebounceTransition
