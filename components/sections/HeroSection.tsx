import React, { useRef } from 'react'
import { AnimatedSection } from '../common/AnimatedSection'
import { Button } from 'react-day-picker'
import { ArrowRight } from 'lucide-react'
import Image from 'next/image'

const HeroSection = () => {
  const heroRef = useRef(null)
  const projectsRef = useRef(null)
  const contactRef = useRef(null)

  const slideInLeft = {
    hidden: { x: -50, opacity: 0 },
    visible: { x: 0, opacity: 1, transition: { duration: 0.5 } },
  }

  const slideInRight = {
    hidden: { x: 50, opacity: 0 },
    visible: { x: 0, opacity: 1, transition: { duration: 0.5 } },
  }

  const scrollToSection = (ref: React.RefObject<HTMLElement>) => {
    // setIsMenuOpen(false)
    ref.current?.scrollIntoView({ behavior: "smooth" })
  }
  return (
    <section ref={heroRef} className="py-20 bg-light dark:bg-dark-navy">
      <div className="container grid md:grid-cols-2 gap-8 items-center">
        <AnimatedSection animation={slideInLeft}>
          <div className="space-y-6">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-light-blue dark:bg-dark-blue/30 text-primary text-sm font-medium">
              <span className="h-2 w-2 rounded-full bg-primary"></span>
              MERN Stack Developer
            </div>
            <h1 className="text-4xl md:text-5xl font-bold text-secondary dark:text-white leading-tight">
              Crafting Modern Web Solutions with Next.js and TypeScript
            </h1>
            <p className="text-muted-foreground dark:text-gray-300 text-lg">
              Experienced in building responsive and performant web applications using Next.js, TypeScript, and
              Tailwind CSS.
            </p>
            <div className="flex flex-wrap gap-4">
              <Button
                className="bg-primary hover:bg-primary/90 hover:shadow-lg transition-all duration-300 transform hover:-translate-y-1"
                onClick={() => scrollToSection(projectsRef)}
              >
                View My Work
              </Button>
              <Button
                // variant="outline"
                className="gap-2 dark:border-gray-700 dark:text-white hover:bg-primary hover:text-white transition-all duration-300"
                onClick={() => scrollToSection(contactRef)}
              >
                Let's Connect <ArrowRight className="h-4 w-4" />
              </Button>
            </div>
          </div>
        </AnimatedSection>
        <AnimatedSection animation={slideInRight}>
          <div className="relative">
            <div className="absolute -z-10 top-0 right-0 h-64 w-64 rounded-full bg-accent-purple/20 dark:bg-accent-purple/10 blur-3xl"></div>
            <Image
              src="/placeholder.svg?height=400&width=500"
              alt="Your Name - Full Stack Developer"
              width={500}
              height={400}
              className="rounded-lg shadow-lg border border-gray-100 dark:border-dark-navy"
            />
          </div>
        </AnimatedSection>
      </div>
    </section>)
}

export default HeroSection