import { useEffect, useRef } from "react"
import { motion, useAnimation, useInView } from "framer-motion"

interface AnimatedSectionProps {
  children: React.ReactNode
  animation: {
    hidden: { opacity?: number; y?: number }
    visible: { opacity?: number; y?: number }
  }
}

export const AnimatedSection = ({ children, animation }: AnimatedSectionProps) => {
  const controls = useAnimation()
  const ref = useRef(null)
  const inView = useInView(ref, { once: true })

  useEffect(() => {
    if (inView) {
      controls.start("visible")
    }
  }, [controls, inView])

  return (
    <motion.div ref={ref} initial="hidden" animate={controls} variants={animation}>
      {children}
    </motion.div>
  )
}