import { useEffect, useRef, useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {
  faExternalLinkAlt,
  faEye
} from '@fortawesome/free-solid-svg-icons'
import { faGithub } from '@fortawesome/free-brands-svg-icons'

const Portfolio = () => {
  const [isVisible, setIsVisible] = useState(false)
  const [activeFilter, setActiveFilter] = useState('all')
  const sectionRef = useRef(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true)
        }
      },
      { threshold: 0.1 }
    )

    if (sectionRef.current) {
      observer.observe(sectionRef.current)
    }

    return () => observer.disconnect()
  }, [])

  const filters = [
    { id: 'all', label: 'All Projects' },
    { id: 'web', label: 'Web Development' },
    { id: 'design', label: 'UI/UX Design' },
    { id: 'app', label: 'App Development' }
  ]

  const projects = [
    {
      id: 1,
      title: 'E-Commerce Platform',
      category: 'web',
      description: 'A modern e-commerce solution built with React and Node.js',
      image: '/images/work1.png',
      technologies: ['React', 'Node.js', 'MongoDB', 'Stripe'],
      liveUrl: '#',
      githubUrl: '#'
    },
    {
      id: 2,
      title: 'Mobile App Design',
      category: 'design',
      description: 'Clean and intuitive mobile app interface design',
      image: '/images/work2.png',
      technologies: ['Figma', 'Adobe XD', 'Prototyping'],
      liveUrl: '#',
      designUrl: '#'
    },
    {
      id: 3,
      title: 'Social Media App',
      category: 'app',
      description: 'Cross-platform social media application with real-time features',
      image: '/images/work3.jpeg',
      technologies: ['React Native', 'Firebase', 'Socket.io'],
      liveUrl: '#',
      githubUrl: '#'
    }
  ]

  const filteredProjects = activeFilter === 'all' 
    ? projects 
    : projects.filter(project => project.category === activeFilter)

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2
      }
    }
  }

  const cardVariants = {
    hidden: { opacity: 0, scale: 0.8 },
    visible: { 
      opacity: 1, 
      scale: 1,
      transition: {
        duration: 0.6,
        ease: "easeOut"
      }
    },
    exit: {
      opacity: 0,
      scale: 0.8,
      transition: {
        duration: 0.3
      }
    }
  }

  return (
    <section id="portfolio" ref={sectionRef} className="section-padding relative bg-gradient-to-br from-slate-50 via-indigo-50 to-blue-50 dark:from-bg-primary dark:via-bg-secondary dark:to-bg-tertiary overflow-hidden">
      {/* Premium Background Elements */}
      <div className="absolute inset-0">
        <div className="absolute top-1/4 right-1/4 w-96 h-96 bg-gradient-to-r from-primary-200 to-accent-200 dark:from-primary-900 dark:to-accent-900 rounded-full opacity-20 blur-3xl"></div>
        <div className="absolute bottom-1/4 left-1/4 w-80 h-80 bg-gradient-to-r from-accent-200 to-primary-200 dark:from-accent-900 dark:to-primary-900 rounded-full opacity-20 blur-3xl"></div>
      </div>

      <div className="container-wide relative z-10">
        {/* Enhanced Section Header */}
        <motion.div
          className="text-center mb-20"
          initial={{ opacity: 0, y: 30 }}
          animate={isVisible ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
        >
          <motion.div
            className="inline-block mb-6"
            whileHover={{ scale: 1.05 }}
          >
            <span className="text-sm font-semibold text-primary-600 dark:text-primary-400 uppercase tracking-[0.3em] bg-white bg-opacity-60 dark:bg-white dark:bg-opacity-10 backdrop-blur-xl px-6 py-2 rounded-full border border-white border-opacity-40 dark:border-white dark:border-opacity-20 shadow-[0_8px_32px_rgba(99,102,241,0.15)] dark:shadow-none">
              Portfolio
            </span>
          </motion.div>
          <h2 className="section-title">Featured Projects</h2>
          <p className="section-subtitle">Showcasing my latest work and creative solutions</p>
        </motion.div>

        {/* Premium Filter Buttons */}
        <motion.div
          className="flex flex-wrap justify-center gap-3 mb-16"
          initial={{ opacity: 0, y: 20 }}
          animate={isVisible ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          {filters.map((filter) => (
            <motion.button
              key={filter.id}
              onClick={() => setActiveFilter(filter.id)}
              className={`px-8 py-4 rounded-2xl font-semibold transition-all duration-500 backdrop-blur-xl border ${
                activeFilter === filter.id
                  ? 'bg-gradient-to-r from-primary-500 to-accent-500 text-white border-primary-400 shadow-[0_8px_32px_rgba(99,102,241,0.3)]'
                  : 'bg-white bg-opacity-60 dark:bg-white dark:bg-opacity-10 border-white border-opacity-40 dark:border-white dark:border-opacity-20 text-slate-700 dark:text-gray-300 hover:bg-primary-500 hover:text-white hover:border-primary-400 shadow-[0_4px_24px_rgba(99,102,241,0.1)] hover:shadow-[0_8px_32px_rgba(99,102,241,0.2)]'
              }`}
              whileHover={{ y: -3, scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              {filter.label}
            </motion.button>
          ))}
        </motion.div>

        {/* Premium Projects Grid */}
        <motion.div
          className="grid md:grid-cols-2 lg:grid-cols-3 gap-10 lg:gap-12 xl:gap-16"
          variants={containerVariants}
          initial="hidden"
          animate={isVisible ? "visible" : "hidden"}
        >
          <AnimatePresence mode="wait">
            {filteredProjects.map((project) => (
              <motion.div
                key={project.id}
                variants={cardVariants}
                initial="hidden"
                animate="visible"
                exit="exit"
                layout
                className="group"
              >
                <div className="card p-0 overflow-hidden h-full flex flex-col">
                  {/* Project Image */}
                  <div className="relative overflow-hidden aspect-video">
                    <img 
                      src={project.image} 
                      alt={project.title}
                      className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                    />
                    
                    {/* Overlay */}
                    <div className="absolute inset-0 bg-gradient-to-br from-primary-500/90 to-accent-500/90 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                      <div className="text-center text-white p-6">
                        <h3 className="font-heading text-2xl font-semibold mb-3">
                          {project.title}
                        </h3>
                        <p className="mb-6 leading-relaxed">
                          {project.description}
                        </p>
                        
                        {/* Project Links */}
                        <div className="flex justify-center gap-4">
                          <motion.a
                            href={project.liveUrl}
                            className="flex items-center justify-center w-12 h-12 bg-white/20 backdrop-blur-sm rounded-full text-white hover:bg-white hover:text-primary-500 transition-all duration-300"
                            whileHover={{ scale: 1.1 }}
                            whileTap={{ scale: 0.95 }}
                            aria-label="View project"
                          >
                            <FontAwesomeIcon icon={faExternalLinkAlt} />
                          </motion.a>
                          
                          {project.githubUrl && (
                            <motion.a
                              href={project.githubUrl}
                              className="flex items-center justify-center w-12 h-12 bg-white/20 backdrop-blur-sm rounded-full text-white hover:bg-white hover:text-primary-500 transition-all duration-300"
                              whileHover={{ scale: 1.1 }}
                              whileTap={{ scale: 0.95 }}
                              aria-label="View code"
                            >
                              <FontAwesomeIcon icon={faGithub} />
                            </motion.a>
                          )}
                          
                          {project.designUrl && (
                            <motion.a
                              href={project.designUrl}
                              className="flex items-center justify-center w-12 h-12 bg-white/20 backdrop-blur-sm rounded-full text-white hover:bg-white hover:text-primary-500 transition-all duration-300"
                              whileHover={{ scale: 1.1 }}
                              whileTap={{ scale: 0.95 }}
                              aria-label="View design"
                            >
                              <FontAwesomeIcon icon={faEye} />
                            </motion.a>
                          )}
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Project Info */}
                  <div className="p-6 flex-1 flex flex-col">
                    <h4 className="text-lg font-semibold light:text-[color:var(--text-primary)] dark:text-white mb-2">
                      {project.title}
                    </h4>
                    
                    <span className="inline-block px-3 py-1 bg-primary-500 light:text-white dark:text-white text-sm font-medium rounded-full mb-4 w-fit">
                      {filters.find(f => f.id === project.category)?.label.replace(' Development', '').replace('UI/UX ', '')}
                    </span>

                    {/* Technologies */}
                    <div className="flex flex-wrap gap-2 mt-auto">
                      {project.technologies.map((tech, index) => (
                        <span
                          key={index}
                          className="px-2 py-1 bg-white/10 light:text-[color:var(--text-tertiary)] dark:text-gray-300 text-xs rounded"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>

        {/* CTA */}
        <motion.div
          className="text-center mt-16"
          initial={{ opacity: 0, y: 30 }}
          animate={isVisible ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.6 }}
        >
          <a href="#contact" className="btn-primary">
            View All Projects
          </a>
        </motion.div>
      </div>
    </section>
  )
}

export default Portfolio
