"use client"

import type React from "react"

import { useEffect, useState, useRef } from "react"
import Image from "next/image"
import Link from "next/link"
import { motion, useAnimation, useInView } from "framer-motion"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import {
  ArrowRight,
  CheckCircle,
  Linkedin,
  Twitter,
  FileText,
  Layout,
  Code,
  Moon,
  Sun,
  Menu,
  X,
  Database,
  Github,
  Award,
  Briefcase,
  GraduationCap,
} from "lucide-react"
import { Card, CardContent } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { AnimatedSection } from "@/components/common/AnimatedSection"

// Animation variants (unchanged)
const fadeIn = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { duration: 0.5 } },
}

const slideInLeft = {
  hidden: { x: -50, opacity: 0 },
  visible: { x: 0, opacity: 1, transition: { duration: 0.5 } },
}

const slideInRight = {
  hidden: { x: 50, opacity: 0 },
  visible: { x: 0, opacity: 1, transition: { duration: 0.5 } },
}

export default function Home() {
  const [theme, setTheme] = useState<"light" | "dark">("light")
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  // Refs for scrolling
  const heroRef = useRef<HTMLElement>(null)
  const skillsRef = useRef<HTMLElement>(null)
  const projectsRef = useRef<HTMLElement>(null)
  const processRef = useRef<HTMLElement>(null)
  const certificationsRef = useRef<HTMLElement>(null)
  const postsRef = useRef<HTMLElement>(null)
  const contactRef = useRef<HTMLElement>(null)
  const testimonialsRef = useRef<HTMLElement>(null)
  const blogRef = useRef<HTMLElement>(null)
  const experienceRef = useRef<HTMLElement>(null)

  // Theme toggle logic (unchanged)
  useEffect(() => {
    const savedTheme = localStorage.getItem("theme")
    if (savedTheme === "dark" || (!savedTheme && window.matchMedia("(prefers-color-scheme: dark)").matches)) {
      setTheme("dark")
      document.documentElement.classList.add("dark")
    } else {
      setTheme("light")
      document.documentElement.classList.remove("dark")
    }
  }, [])

  const toggleTheme = () => {
    const newTheme = theme === "light" ? "dark" : "light"
    setTheme(newTheme)
    localStorage.setItem("theme", newTheme)

    if (newTheme === "dark") {
      document.documentElement.classList.add("dark")
    } else {
      document.documentElement.classList.remove("dark")
    }
  }

  const scrollToSection = (ref: React.RefObject<HTMLElement>) => {
    setIsMenuOpen(false)
    ref.current?.scrollIntoView({ behavior: "smooth" })
  }

  return (
    <div className="min-h-screen bg-white dark:bg-dark text-foreground dark:text-white transition-colors duration-200">
      {/* Header/Navigation */}
      <header className="sticky top-0 z-50 border-b border-gray-100 dark:border-dark-navy bg-white/90 dark:bg-dark/90 backdrop-blur-sm">
        <div className="container flex items-center justify-between py-4">
          <div className="flex items-center gap-2">
            <div className="h-8 w-8 bg-primary rounded-md flex items-center justify-center">
              <span className="text-white font-bold">YI</span>
            </div>
            <span className="font-bold text-lg text-secondary dark:text-white">Faisal Bukhari</span>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center gap-8">
            <button
              onClick={() => scrollToSection(heroRef)}
              className="text-sm font-medium text-gray-600 dark:text-gray-300 hover:text-primary dark:hover:text-primary"
            >
              Home
            </button>
            <button
              onClick={() => scrollToSection(skillsRef)}
              className="text-sm font-medium text-gray-600 dark:text-gray-300 hover:text-primary dark:hover:text-primary"
            >
              Skills
            </button>
            <button
              onClick={() => scrollToSection(projectsRef)}
              className="text-sm font-medium text-gray-600 dark:text-gray-300 hover:text-primary dark:hover:text-primary"
            >
              Projects
            </button>
            <button
              onClick={() => scrollToSection(processRef)}
              className="text-sm font-medium text-gray-600 dark:text-gray-300 hover:text-primary dark:hover:text-primary"
            >
              Process
            </button>
            <button
              onClick={() => scrollToSection(certificationsRef)}
              className="text-sm font-medium text-gray-600 dark:text-gray-300 hover:text-primary dark:hover:text-primary"
            >
              Certifications
            </button>
            <button
              onClick={() => scrollToSection(postsRef)}
              className="text-sm font-medium text-gray-600 dark:text-gray-300 hover:text-primary dark:hover:text-primary"
            >
              Posts
            </button>
            <button
              onClick={() => scrollToSection(testimonialsRef)}
              className="text-sm font-medium text-gray-600 dark:text-gray-300 hover:text-primary dark:hover:text-primary"
            >
              Testimonials
            </button>
            <button
              onClick={() => scrollToSection(blogRef)}
              className="text-sm font-medium text-gray-600 dark:text-gray-300 hover:text-primary dark:hover:text-primary"
            >
              Blog
            </button>
            <button
              onClick={() => scrollToSection(contactRef)}
              className="text-sm font-medium text-gray-600 dark:text-gray-300 hover:text-primary dark:hover:text-primary"
            >
              Contact
            </button>
            <button
              onClick={() => scrollToSection(experienceRef)}
              className="text-sm font-medium text-gray-600 dark:text-gray-300 hover:text-primary dark:hover:text-primary"
            >
              Experience
            </button>
          </nav>

          <div className="flex items-center gap-3">
            <Button
              variant="ghost"
              size="icon"
              onClick={toggleTheme}
              className="rounded-full hover:bg-gray-100 dark:hover:bg-gray-800 transition-all duration-300"
            >
              {theme === "light" ? <Moon className="h-5 w-5" /> : <Sun className="h-5 w-5" />}
            </Button>
            <Button className="bg-primary hover:bg-primary/90 hover:shadow-lg transition-all duration-300 transform hover:-translate-y-1">
              Hire Me
            </Button>

            {/* Mobile menu button */}
            <Button
              variant="ghost"
              size="icon"
              className="md:hidden hover:bg-gray-100 dark:hover:bg-gray-800 transition-all duration-300"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              {isMenuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
            </Button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden bg-white dark:bg-dark border-t border-gray-100 dark:border-dark-navy">
            <div className="container py-4 flex flex-col space-y-3">
              <button
                onClick={() => scrollToSection(heroRef)}
                className="text-sm font-medium text-gray-600 dark:text-gray-300 hover:text-primary dark:hover:text-primary py-2"
              >
                Home
              </button>
              <button
                onClick={() => scrollToSection(skillsRef)}
                className="text-sm font-medium text-gray-600 dark:text-gray-300 hover:text-primary dark:hover:text-primary py-2"
              >
                Skills
              </button>
              <button
                onClick={() => scrollToSection(projectsRef)}
                className="text-sm font-medium text-gray-600 dark:text-gray-300 hover:text-primary dark:hover:text-primary py-2"
              >
                Projects
              </button>
              <button
                onClick={() => scrollToSection(processRef)}
                className="text-sm font-medium text-gray-600 dark:text-gray-300 hover:text-primary dark:hover:text-primary py-2"
              >
                Process
              </button>
              <button
                onClick={() => scrollToSection(certificationsRef)}
                className="text-sm font-medium text-gray-600 dark:text-gray-300 hover:text-primary dark:hover:text-primary py-2"
              >
                Certifications
              </button>
              <button
                onClick={() => scrollToSection(postsRef)}
                className="text-sm font-medium text-gray-600 dark:text-gray-300 hover:text-primary dark:hover:text-primary py-2"
              >
                Posts
              </button>
              <button
                onClick={() => scrollToSection(testimonialsRef)}
                className="text-sm font-medium text-gray-600 dark:text-gray-300 hover:text-primary dark:hover:text-primary py-2"
              >
                Testimonials
              </button>
              <button
                onClick={() => scrollToSection(blogRef)}
                className="text-sm font-medium text-gray-600 dark:text-gray-300 hover:text-primary dark:hover:text-primary py-2"
              >
                Blog
              </button>
              <button
                onClick={() => scrollToSection(contactRef)}
                className="text-sm font-medium text-gray-600 dark:text-gray-300 hover:text-primary dark:hover:text-primary py-2"
              >
                Contact
              </button>
              <button
                onClick={() => scrollToSection(experienceRef)}
                className="text-sm font-medium text-gray-600 dark:text-gray-300 hover:text-primary dark:hover:text-primary py-2"
              >
                Experience
              </button>
            </div>
          </div>
        )}
      </header>

      {/* Hero Section */}
      <section ref={heroRef} className="py-20 bg-light dark:bg-dark-navy">
        <div className="container grid md:grid-cols-2 gap-8 items-center">
          <AnimatedSection animation={slideInLeft}>
            <div className="space-y-6">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-light-blue dark:bg-dark-blue/30 text-primary text-sm font-medium">
                <span className="h-2 w-2 rounded-full bg-primary"></span>
                Full Stack Developer
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
                  variant="outline"
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
      </section>

      {/* Skills Section */}
      <section ref={skillsRef} className="py-20">
        <div className="container">
          <AnimatedSection animation={fadeIn}>
            <div className="text-center max-w-2xl mx-auto mb-16">
              <h2 className="text-3xl font-bold text-secondary dark:text-white mb-4">Technical Expertise</h2>
              <p className="text-muted-foreground dark:text-gray-300">
                Leveraging modern technologies to build efficient and scalable web applications
              </p>
            </div>
          </AnimatedSection>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              {
                icon: <Code className="h-6 w-6 text-primary" />,
                title: "Next.js",
                description: "Building performant and SEO-friendly React applications",
              },
              {
                icon: <FileText className="h-6 w-6 text-accent-purple" />,
                title: "TypeScript",
                description: "Developing type-safe and maintainable code",
              },
              {
                icon: <Layout className="h-6 w-6 text-accent-teal" />,
                title: "Tailwind CSS",
                description: "Creating responsive and customizable user interfaces",
              },
              {
                icon: <Database className="h-6 w-6 text-accent" />,
                title: "Full Stack",
                description: "Integrating frontend with backend services and databases",
              },
            ].map((skill, index) => (
              <AnimatedSection key={index} animation={index % 2 === 0 ? slideInLeft : slideInRight}>
                <div className="bg-white dark:bg-dark-navy p-6 rounded-lg border border-gray-100 dark:border-dark-blue hover:shadow-md transition-shadow">
                  <div className="h-12 w-12 rounded-full bg-light dark:bg-dark-blue/30 flex items-center justify-center mb-4">
                    {skill.icon}
                  </div>
                  <h3 className="font-semibold text-lg mb-2 dark:text-white">{skill.title}</h3>
                  <p className="text-muted-foreground dark:text-gray-400 text-sm">{skill.description}</p>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section ref={projectsRef} className="py-20 bg-light dark:bg-dark-blue/10">
        <div className="container">
          <AnimatedSection animation={fadeIn}>
            <div className="text-center max-w-2xl mx-auto mb-16">
              <h2 className="text-3xl font-bold text-secondary dark:text-white mb-4">Featured Projects</h2>
              <p className="text-muted-foreground dark:text-gray-300">A showcase of my best work in web development</p>
            </div>
          </AnimatedSection>

          <Tabs defaultValue="all" className="w-full">
            <TabsList className="grid w-full grid-cols-3 mb-8">
              <TabsTrigger value="all">All Projects</TabsTrigger>
              <TabsTrigger value="company">Company Projects</TabsTrigger>
              <TabsTrigger value="personal">Personal Projects</TabsTrigger>
            </TabsList>
            <TabsContent value="all">
              <ProjectGrid projects={allProjects} />
            </TabsContent>
            <TabsContent value="company">
              <ProjectGrid projects={companyProjects} />
            </TabsContent>
            <TabsContent value="personal">
              <ProjectGrid projects={personalProjects} />
            </TabsContent>
          </Tabs>
        </div>
      </section>

      {/* Testimonials Section */}
      <section ref={testimonialsRef} className="py-20 bg-light dark:bg-dark-blue/10">
        <div className="container">
          <AnimatedSection animation={fadeIn}>
            <div className="text-center max-w-2xl mx-auto mb-16">
              <h2 className="text-3xl font-bold text-secondary dark:text-white mb-4">Client Testimonials</h2>
              <p className="text-muted-foreground dark:text-gray-300">Hear what clients say about our collaborations</p>
            </div>
          </AnimatedSection>

          <div className="grid md:grid-cols-2 gap-8">
            {[
              {
                name: "Alex Johnson",
                role: "CEO, TechStart",
                image: "/placeholder.svg?height=80&width=80",
                quote:
                  "Working with this developer was a game-changer for our startup. The web application they built exceeded our expectations in both functionality and design.",
              },
              {
                name: "Sarah Lee",
                role: "Marketing Director, GrowthCo",
                image: "/placeholder.svg?height=80&width=80",
                quote:
                  "The dashboard they created has revolutionized how we track and analyze our online presence. It's intuitive, powerful, and exactly what we needed.",
              },
            ].map((testimonial, index) => (
              <AnimatedSection key={index} animation={index % 2 === 0 ? slideInLeft : slideInRight}>
                <Card>
                  <CardContent className="p-6">
                    <div className="flex gap-4 mb-4">
                      <Image
                        src={testimonial.image || "/placeholder.svg"}
                        alt={testimonial.name}
                        width={80}
                        height={80}
                        className="rounded-full"
                      />
                      <div>
                        <h3 className="font-semibold dark:text-white">{testimonial.name}</h3>
                        <p className="text-sm text-muted-foreground dark:text-gray-400">{testimonial.role}</p>
                      </div>
                    </div>
                    <p className="text-sm text-muted-foreground dark:text-gray-400 italic">"{testimonial.quote}"</p>
                  </CardContent>
                </Card>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* Blog Section */}
      <section ref={blogRef} className="py-20">
        <div className="container">
          <AnimatedSection animation={fadeIn}>
            <div className="text-center max-w-2xl mx-auto mb-16">
              <h2 className="text-3xl font-bold text-secondary dark:text-white mb-4">Tech Insights</h2>
              <p className="text-muted-foreground dark:text-gray-300">
                Sharing knowledge and experiences from the world of web development
              </p>
            </div>
          </AnimatedSection>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              {
                title: "Optimizing Next.js for Performance",
                category: "Frontend",
                date: "Jun 15, 2023",
                image: "/placeholder.svg?height=150&width=300",
              },
              {
                title: "TypeScript Best Practices",
                category: "Development",
                date: "May 22, 2023",
                image: "/placeholder.svg?height=150&width=300",
              },
              {
                title: "Mastering Tailwind CSS",
                category: "CSS",
                date: "Apr 10, 2023",
                image: "/placeholder.svg?height=150&width=300",
              },
            ].map((post, index) => (
              <AnimatedSection key={index} animation={index % 2 === 0 ? slideInLeft : slideInRight}>
                <Card>
                  <div className="aspect-video bg-muted relative">
                    <Image src={post.image || "/placeholder.svg"} alt={post.title} fill className="object-cover" />
                  </div>
                  <CardContent className="p-4">
                    <span className="text-xs font-medium text-primary">{post.category}</span>
                    <h3 className="font-semibold my-2 dark:text-white">{post.title}</h3>
                    <div className="flex justify-between items-center">
                      <span className="text-xs text-muted-foreground">{post.date}</span>
                      <Button variant="ghost" size="sm" className="text-primary p-0 h-auto">
                        Read More
                      </Button>
                    </div>
                  </CardContent>
                </Card>
              </AnimatedSection>
            ))}
          </div>

          <AnimatedSection animation={fadeIn}>
            <div className="mt-10 text-center">
              <Button className="bg-primary hover:bg-primary/90 hover:shadow-lg transition-all duration-300 transform hover:-translate-y-1">
                View All Articles
              </Button>
            </div>
          </AnimatedSection>
        </div>
      </section>

      {/* Development Process Section */}
      <section ref={processRef} className="py-20">
        <div className="container">
          <AnimatedSection animation={fadeIn}>
            <div className="text-center max-w-2xl mx-auto mb-16">
              <h2 className="text-3xl font-bold text-secondary dark:text-white mb-4">My Development Process</h2>
              <p className="text-muted-foreground dark:text-gray-300">
                A structured approach to bringing your web ideas to life
              </p>
            </div>
          </AnimatedSection>

          <div className="grid md:grid-cols-2 gap-8 items-center">
            <AnimatedSection animation={slideInLeft}>
              <div className="space-y-6">
                {[
                  {
                    icon: <FileText className="h-5 w-5 text-primary" />,
                    title: "1. Requirements Gathering",
                    description: "Detailed discussion to understand your project needs and goals",
                  },
                  {
                    icon: <Layout className="h-5 w-5 text-accent-purple" />,
                    title: "2. Design & Prototyping",
                    description: "Creating wireframes and interactive prototypes for your approval",
                  },
                  {
                    icon: <Code className="h-5 w-5 text-accent-teal" />,
                    title: "3. Development",
                    description: "Coding the solution using Next.js, TypeScript, and Tailwind CSS",
                  },
                  {
                    icon: <CheckCircle className="h-5 w-5 text-accent" />,
                    title: "4. Testing & Deployment",
                    description: "Rigorous testing and smooth deployment to your preferred platform",
                  },
                ].map((step, index) => (
                  <div key={index} className="flex gap-4 items-start">
                    <div className="h-10 w-10 rounded-full bg-light-blue dark:bg-dark-blue/30 flex items-center justify-center flex-shrink-0">
                      {step.icon}
                    </div>
                    <div>
                      <h3 className="font-semibold mb-1 dark:text-white">{step.title}</h3>
                      <p className="text-sm text-muted-foreground dark:text-gray-400">{step.description}</p>
                    </div>
                  </div>
                ))}
              </div>
            </AnimatedSection>

            <AnimatedSection animation={slideInRight}>
              <div className="relative">
                <div className="absolute -z-10 bottom-0 right-0 h-64 w-64 rounded-full bg-accent/20 dark:bg-accent/10 blur-3xl"></div>
                <Image
                  src="/placeholder.svg?height=400&width=500"
                  alt="Development Process"
                  width={500}
                  height={400}
                  className="rounded-lg shadow-lg border border-gray-100 dark:border-dark-navy"
                />
              </div>
            </AnimatedSection>
          </div>
        </div>
      </section>

      {/* Certifications Section */}
      <section ref={certificationsRef} className="py-20 bg-light dark:bg-dark-blue/10">
        <div className="container">
          <AnimatedSection animation={fadeIn}>
            <div className="text-center max-w-2xl mx-auto mb-16">
              <h2 className="text-3xl font-bold text-secondary dark:text-white mb-4">Certifications & Assessments</h2>
              <p className="text-muted-foreground dark:text-gray-300">
                Validating my skills through industry-recognized certifications
              </p>
            </div>
          </AnimatedSection>

          <div className="grid md:grid-cols-3 gap-6">
            {[
              {
                title: "LinkedIn Skill Assessment 1",
                issuer: "LinkedIn",
                date: "2023",
                icon: <Linkedin className="h-6 w-6 text-[#0077B5]" />,
              },
              {
                title: "LinkedIn Skill Assessment 2",
                issuer: "LinkedIn",
                date: "2023",
                icon: <Linkedin className="h-6 w-6 text-[#0077B5]" />,
              },
              {
                title: "HackerRank Certification",
                issuer: "HackerRank",
                date: "2023",
                icon: <Award className="h-6 w-6 text-[#2EC866]" />,
              },
            ].map((cert, index) => (
              <AnimatedSection key={index} animation={fadeIn}>
                <div className="bg-white dark:bg-dark-navy p-6 rounded-lg border border-gray-100 dark:border-dark-blue hover:shadow-md transition-shadow">
                  <div className="flex items-center gap-4 mb-4">
                    {cert.icon}
                    <div>
                      <h3 className="font-semibold text-lg dark:text-white">{cert.title}</h3>
                      <p className="text-sm text-muted-foreground dark:text-gray-400">
                        {cert.issuer} • {cert.date}
                      </p>
                    </div>
                  </div>
                  <Button variant="outline" className="w-full">
                    View Certificate
                  </Button>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* LinkedIn Posts Section */}
      <section ref={postsRef} className="py-20">
        <div className="container">
          <AnimatedSection animation={fadeIn}>
            <div className="text-center max-w-2xl mx-auto mb-16">
              <h2 className="text-3xl font-bold text-secondary dark:text-white mb-4">LinkedIn Posts</h2>
              <p className="text-muted-foreground dark:text-gray-300">
                Sharing insights and experiences from my development journey
              </p>
            </div>
          </AnimatedSection>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              {
                title: "Optimizing Next.js Performance",
                excerpt: "Sharing my top tips for improving the performance of your Next.js applications...",
                date: "Jun 15, 2023",
                likes: 45,
                comments: 12,
              },
              {
                title: "TypeScript Best Practices",
                excerpt: "Exploring some of the best practices I've learned while working with TypeScript...",
                date: "May 22, 2023",
                likes: 38,
                comments: 8,
              },
              {
                title: "Tailwind CSS Tips and Tricks",
                excerpt: "Discover some lesser-known Tailwind CSS features that can supercharge your development...",
                date: "Apr 10, 2023",
                likes: 52,
                comments: 15,
              },
            ].map((post, index) => (
              <AnimatedSection key={index} animation={index % 2 === 0 ? slideInLeft : slideInRight}>
                <div className="bg-white dark:bg-dark-navy rounded-lg overflow-hidden border border-gray-100 dark:border-dark-blue hover:shadow-md transition-shadow p-6">
                  <h3 className="font-semibold text-lg mb-2 dark:text-white">{post.title}</h3>
                  <p className="text-sm text-muted-foreground dark:text-gray-400 mb-4">{post.excerpt}</p>
                  <div className="flex justify-between items-center text-sm text-muted-foreground dark:text-gray-400">
                    <span>{post.date}</span>
                    <div className="flex items-center gap-4">
                      <span>{post.likes} likes</span>
                      <span>{post.comments} comments</span>
                    </div>
                  </div>
                </div>
              </AnimatedSection>
            ))}
          </div>

          <AnimatedSection animation={fadeIn}>
            <div className="mt-10 text-center">
              <Button className="bg-primary hover:bg-primary/90 hover:shadow-lg transition-all duration-300 transform hover:-translate-y-1">
                View All Posts on LinkedIn
              </Button>
            </div>
          </AnimatedSection>
        </div>
      </section>

      {/* Experience and Education Section */}
      <section ref={experienceRef} className="py-20 bg-light dark:bg-dark-blue/10">
        <div className="container">
          <AnimatedSection animation={fadeIn}>
            <div className="text-center max-w-2xl mx-auto mb-16">
              <h2 className="text-3xl font-bold text-secondary dark:text-white mb-4">Experience & Education</h2>
              <p className="text-muted-foreground dark:text-gray-300">
                My professional journey and academic background
              </p>
            </div>
          </AnimatedSection>

          <div className="grid md:grid-cols-2 gap-8">
            <AnimatedSection animation={slideInLeft}>
              <Card>
                <CardContent className="p-6">
                  <h3 className="text-xl font-semibold mb-4 flex items-center gap-2">
                    <Briefcase className="h-5 w-5 text-primary" />
                    Work Experience
                  </h3>
                  {[
                    {
                      company: "Company A",
                      role: "Senior Developer",
                      period: "2021 - Present",
                      description: "Led development of key projects and mentored junior developers.",
                    },
                    {
                      company: "Company B",
                      role: "Full Stack Developer",
                      period: "2019 - 2021",
                      description: "Developed and maintained multiple web applications using MERN stack.",
                    },
                    {
                      company: "Company C",
                      role: "Junior Developer",
                      period: "2018 - 2019",
                      description: "Assisted in frontend development and learned backend technologies.",
                    },
                  ].map((job, index) => (
                    <div key={index} className="mb-4 last:mb-0">
                      <h4 className="font-semibold">{job.role}</h4>
                      <p className="text-sm text-muted-foreground">
                        {job.company} | {job.period}
                      </p>
                      <p className="text-sm mt-1">{job.description}</p>
                    </div>
                  ))}
                </CardContent>
              </Card>
            </AnimatedSection>

            <AnimatedSection animation={slideInRight}>
              <Card>
                <CardContent className="p-6">
                  <h3 className="text-xl font-semibold mb-4 flex items-center gap-2">
                    <GraduationCap className="h-5 w-5 text-primary" />
                    Education
                  </h3>
                  <div>
                    <h4 className="font-semibold">Bachelor of Science in Computer Science</h4>
                    <p className="text-sm text-muted-foreground">University Name | 2014 - 2018</p>
                    <p className="text-sm mt-1">Focused on software engineering and web technologies.</p>
                  </div>
                </CardContent>
              </Card>
            </AnimatedSection>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section ref={contactRef} className="py-20 bg-light dark:bg-dark-blue/10">
        <div className="container">
          <AnimatedSection animation={fadeIn}>
            <div className="text-center max-w-2xl mx-auto mb-16">
              <h2 className="text-3xl font-bold text-secondary dark:text-white mb-4">Let's Work Together</h2>
              <p className="text-muted-foreground dark:text-gray-300">
                Have a project in mind? Get in touch and let's bring your ideas to life.
              </p>
            </div>
          </AnimatedSection>

          <div className="max-w-md mx-auto">
            <form className="space-y-4">
              <Input type="text" placeholder="Your Name" />
              <Input type="email" placeholder="Your Email" />
              <Input type="text" placeholder="Subject" />
              <Textarea placeholder="Your Message" rows={4} />
              <Button
                type="submit"
                className="w-full bg-primary hover:bg-primary/90 hover:shadow-lg transition-all duration-300 transform hover:-translate-y-1"
              >
                Send Message
              </Button>
            </form>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-dark py-16 text-white">
        <div className="container">
          <div className="grid md:grid-cols-4 gap-8">
            <div>
              <div className="flex items-center gap-2 mb-4">
                <div className="h-8 w-8 bg-white rounded-md flex items-center justify-center">
                  <span className="text-primary font-bold">YI</span>
                </div>
                <span className="font-bold text-lg">Faisal Bukhari</span>
              </div>
              <p className="text-gray-400 text-sm mb-4">
                Full Stack Developer specializing in Next.js, TypeScript, and Tailwind CSS.
              </p>
              <div className="flex gap-4">
                <Link href="#" className="text-gray-400 hover:text-white">
                  <Twitter className="h-5 w-5" />
                </Link>
                <Link href="#" className="text-gray-400 hover:text-white">
                  <Github className="h-5 w-5" />
                </Link>
                <Link href="#" className="text-gray-400 hover:text-white">
                  <Linkedin className="h-5 w-5" />
                </Link>
              </div>
            </div>

            <div>
              <h3 className="font-semibold mb-4">Quick Links</h3>
              <ul className="space-y-2">
                <li>
                  <Link href="#" className="text-gray-400 hover:text-white text-sm">
                    About Me
                  </Link>
                </li>
                <li>
                  <Link href="#" className="text-gray-400 hover:text-white text-sm">
                    Services
                  </Link>
                </li>
                <li>
                  <Link href="#" className="text-gray-400 hover:text-white text-sm">
                    Portfolio
                  </Link>
                </li>
                <li>
                  <Link href="#" className="text-gray-400 hover:text-white text-sm">
                    Blog
                  </Link>
                </li>
              </ul>
            </div>

            <div>
              <h3 className="font-semibold mb-4">Services</h3>
              <ul className="space-y-2">
                <li>
                  <Link href="#" className="text-gray-400 hover:text-white text-sm">
                    Web Development
                  </Link>
                </li>
                <li>
                  <Link href="#" className="text-gray-400 hover:text-white text-sm">
                    Frontend Development
                  </Link>
                </li>
                <li>
                  <Link href="#" className="text-gray-400 hover:text-white text-sm">
                    Backend Development
                  </Link>
                </li>
                <li>
                  <Link href="#" className="text-gray-400 hover:text-white text-sm">
                    UI/UX Consultation
                  </Link>
                </li>
              </ul>
            </div>

            <div>
              <h3 className="font-semibold mb-4">Contact</h3>
              <ul className="space-y-2">
                <li className="text-gray-400 text-sm">email@example.com</li>
                <li className="text-gray-400 text-sm">+1 (123) 456-7890</li>
                <li className="text-gray-400 text-sm">City, Country</li>
              </ul>
            </div>
          </div>

          <div className="border-t border-gray-800 mt-12 pt-6 flex flex-col md:flex-row justify-between items-center">
            <p className="text-gray-400 text-sm">©All rights reserved.</p>
            <div className="flex gap-4 mt-4 md:mt-0">
              <Link href="#" className="text-gray-400 hover:text-white text-sm">
                Privacy Policy
              </Link>
              <Link href="#" className="text-gray-400 hover:text-white text-sm">
                Terms of Service
              </Link>
            </div>
          </div>
        </div>
      </footer>
    </div>
  )
}

// Project data
const companyProjects = [
  {
    title: "E-commerce Platform",
    description: "A full-featured online store with real-time inventory management",
    tech: ["Next.js", "TypeScript", "Tailwind CSS", "Node.js"],
    image: "/placeholder.svg?height=200&width=300",
  },
  {
    title: "CRM System",
    description: "Customer relationship management system with analytics dashboard",
    tech: ["React", "Express", "MongoDB", "Chart.js"],
    image: "/placeholder.svg?height=200&width=300",
  },
]

const personalProjects = [
  {
    title: "Portfolio Website",
    description: "Personal portfolio showcasing projects and skills",
    tech: ["Next.js", "TypeScript", "Tailwind CSS"],
    image: "/placeholder.svg?height=200&width=300",
  },
  {
    title: "Weather App",
    description: "Real-time weather application with location-based forecasts",
    tech: ["React", "OpenWeatherMap API", "Geolocation API"],
    image: "/placeholder.svg?height=200&width=300",
  },
]

const allProjects = [...companyProjects, ...personalProjects]

// ProjectGrid component
const ProjectGrid = ({ projects }: any) => (
  <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
    {projects.map((project: any, index: number) => (
      <AnimatedSection key={index} animation={index % 2 === 0 ? slideInLeft : slideInRight}>
        <Card>
          <div className="aspect-video bg-muted relative">
            <Image src={project.image || "/placeholder.svg"} alt={project.title} fill className="object-cover" />
          </div>
          <CardContent className="p-4">
            <h3 className="font-semibold text-lg mb-2 dark:text-white">{project.title}</h3>
            <p className="text-sm text-muted-foreground dark:text-gray-400 mb-4">{project.description}</p>
            <div className="flex flex-wrap gap-2">
              {project.tech.map((tech: any, techIndex: number) => (
                <span
                  key={techIndex}
                  className="text-xs font-medium bg-light-blue dark:bg-dark-blue/30 text-primary px-2 py-1 rounded-full"
                >
                  {tech}
                </span>
              ))}
            </div>
          </CardContent>
        </Card>
      </AnimatedSection>
    ))}
  </div>
)

