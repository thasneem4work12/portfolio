import { useState, useEffect, useRef } from 'react'
import { motion } from 'framer-motion'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {
  faCode,
  faBriefcase,
  faGraduationCap,
  faGlobe,
  faPaintBrush,
  faMobileAlt,
  faUniversity,
  faSchool,
  faLaptopCode,
  faServer,
  faDatabase,
  faCloud,
  faBrain,
  faRocket,
  faShieldAlt,
  faCog
} from '@fortawesome/free-solid-svg-icons'
import PremiumIcon from './PremiumIcon'

const About = () => {
  const [activeTab, setActiveTab] = useState('skills')
  const [isVisible, setIsVisible] = useState(false)
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



  const skills = [
    {
      icon: faLaptopCode,
      title: 'Frontend Development',
      description: 'Creating stunning, responsive user interfaces with React, Vue, and modern CSS frameworks',
      progress: 95,
      animation: 'float',
      gradient: 'primary'
    },
    {
      icon: faServer,
      title: 'Backend Development',
      description: 'Building robust server-side applications with Node.js, Python, and cloud technologies',
      progress: 90,
      animation: 'pulse',
      gradient: 'luxury'
    },
    {
      icon: faDatabase,
      title: 'Database Design',
      description: 'Designing and optimizing databases for performance and scalability',
      progress: 85,
      animation: 'rotate',
      gradient: 'accent'
    },
    {
      icon: faCloud,
      title: 'Cloud Architecture',
      description: 'Deploying and managing applications on AWS, Azure, and Google Cloud platforms',
      progress: 80,
      animation: 'float',
      gradient: 'premium'
    },
    {
      icon: faPaintBrush,
      title: 'UI/UX Design',
      description: 'Creating premium user experiences with modern design principles and tools',
      progress: 88,
      animation: 'pulse',
      gradient: 'luxury'
    },
    {
      icon: faMobileAlt,
      title: 'Mobile Development',
      description: 'Building high-performance mobile apps for iOS and Android platforms',
      progress: 82,
      animation: 'float',
      gradient: 'accent'
    }
  ]

  const experience = [
    {
      title: 'Freelance Developer',
      period: 'Current',
      description: 'Working on various web and mobile development projects for clients worldwide'
    },
    {
      title: 'Data Entry Operator',
      period: '2021 - 2022',
      description: 'HTC Leisure Pvt Company - Managed data processing and administrative tasks'
    },
    {
      title: 'Virtual Assistant',
      period: '2021',
      description: 'Provided remote administrative and technical support services'
    }
  ]

  const education = [
    {
      icon: faUniversity,
      title: 'Software Engineering Honors Degree',
      period: 'Current',
      institution: 'Open University of Sri Lanka'
    },
    {
      icon: faSchool,
      title: 'Advanced Level - Combined Mathematics',
      period: '2021',
      institution: 'D.S. Senanayake College'
    },
    {
      icon: faSchool,
      title: 'Ordinary Level',
      period: '2018',
      institution: 'D.S. Senanayake College'
    }
  ]

  const tabVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 }
  }

  return (
    <section id="about" ref={sectionRef} className="section-padding relative bg-gradient-to-br from-white via-slate-50/50 to-blue-50/30 dark:from-bg-primary dark:via-bg-secondary dark:to-bg-tertiary overflow-hidden">
      {/* Ultra-Premium Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        {/* Luxury gradient orbs */}
        <div className="absolute top-1/4 left-1/4 w-[600px] h-[600px] bg-gradient-to-r from-primary-200/30 via-accent-200/20 to-purple-200/25 dark:from-primary-900 dark:to-accent-900 rounded-full opacity-40 blur-3xl animate-pulse"></div>
        <div className="absolute bottom-1/4 right-1/4 w-[500px] h-[500px] bg-gradient-to-r from-accent-200/25 via-purple-200/20 to-primary-200/30 dark:from-accent-900 dark:to-primary-900 rounded-full opacity-35 blur-3xl animate-pulse" style={{animationDelay: '2s'}}></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[400px] h-[400px] bg-gradient-to-r from-indigo-200/20 to-pink-200/15 dark:from-indigo-900 dark:to-pink-900 rounded-full opacity-30 blur-3xl animate-pulse" style={{animationDelay: '4s'}}></div>

        {/* Subtle texture overlay */}
        <div className="absolute inset-0 opacity-[0.02] bg-[radial-gradient(circle_at_50%_50%,rgba(99,102,241,0.1),transparent_50%)]"></div>
      </div>

      <div className="container-wide relative z-10">
        {/* Enhanced Section Header */}
        <motion.div
          className="text-center mb-24"
          initial={{ opacity: 0, y: 30 }}
          animate={isVisible ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
        >
          <motion.div
            className="inline-block mb-6"
            whileHover={{ scale: 1.05 }}
          >
            <span className="text-sm font-semibold text-primary-600 dark:text-primary-400 uppercase tracking-[0.3em] bg-white bg-opacity-60 dark:bg-white dark:bg-opacity-10 backdrop-blur-xl px-6 py-2 rounded-full border border-white border-opacity-40 dark:border-white dark:border-opacity-20 shadow-[0_8px_32px_rgba(99,102,241,0.15)] dark:shadow-none">
              About Me
            </span>
          </motion.div>
          <h2 className="section-title">Crafting Digital Excellence</h2>
          <p className="section-subtitle">Discover my journey, expertise, and passion for creating innovative solutions</p>
        </motion.div>

        {/* Image and Story Section */}
        <div className="flex flex-col lg:flex-row gap-16 xl:gap-20 items-start mb-20">
          {/* Compact About Image */}
          <motion.div
            className="relative lg:w-80 xl:w-96 flex-shrink-0 mx-auto lg:mx-0"
            initial={{ opacity: 0, x: -50 }}
            animate={isVisible ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <div className="relative group">
              {/* Floating background elements */}
              <div className="absolute -inset-4 bg-gradient-to-r from-primary-400 to-accent-400 rounded-3xl opacity-20 blur-2xl group-hover:opacity-30 transition-opacity duration-500"></div>

              <div className="relative rounded-3xl overflow-hidden bg-white bg-opacity-80 dark:bg-white dark:bg-opacity-10 backdrop-blur-xl border border-white border-opacity-60 dark:border-white dark:border-opacity-20 shadow-[0_20px_60px_rgba(99,102,241,0.2)] dark:shadow-2xl">
                <img
                  src="/images/about.jpg"
                  alt="Thasneem Mohamed"
                  className="w-full h-auto max-h-96 object-cover transition-transform duration-700 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-br from-primary-500/20 via-transparent to-accent-500/20 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

                {/* Floating badge */}
                <div className="absolute top-4 right-4 bg-white bg-opacity-90 dark:bg-white dark:bg-opacity-20 backdrop-blur-xl px-3 py-1.5 rounded-full border border-white border-opacity-60 dark:border-white dark:border-opacity-30 shadow-[0_8px_32px_rgba(99,102,241,0.15)]">
                  <span className="text-xs font-semibold text-primary-600 dark:text-primary-400">Available for Work</span>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Story Content */}
          <motion.div
            className="flex-1"
            initial={{ opacity: 0, x: 50 }}
            animate={isVisible ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            {/* Enhanced About Text */}
            <motion.div
              className="bg-white bg-opacity-70 dark:bg-white dark:bg-opacity-10 backdrop-blur-xl border border-white border-opacity-60 dark:border-white dark:border-opacity-20 rounded-2xl p-6 shadow-[0_12px_40px_rgba(99,102,241,0.1)] dark:shadow-none"
              whileHover={{ scale: 1.01, y: -3 }}
              transition={{ duration: 0.3 }}
            >
              <h3 className="text-xl font-bold text-slate-800 dark:text-white mb-3 bg-gradient-to-r from-primary-600 to-accent-500 bg-clip-text text-transparent">
                My Story
              </h3>
              <p className="text-base font-medium text-slate-700 dark:text-white leading-relaxed mb-3">
                I'm a 20-year-old software engineering student at the Open University of Colombo,
                passionate about software development and committed to building a successful tech career.
              </p>
              <p className="text-sm text-slate-600 dark:text-gray-300 leading-relaxed">
                With a strong foundation in modern web technologies and a keen eye for design,
                I specialize in creating user-friendly applications that solve real-world problems.
                My journey in technology is driven by curiosity and a desire to make a positive impact
                through innovative digital solutions.
              </p>
            </motion.div>
          </motion.div>
        </div>

        {/* Centered Skills, Experience, Education Section */}
        <motion.div
          className="max-w-4xl mx-auto"
          initial={{ opacity: 0, y: 30 }}
          animate={isVisible ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.6 }}
        >
          {/* Enhanced Tab Navigation */}
          <div className="flex flex-wrap justify-center gap-3 mb-12">
              {[
                { id: 'skills', icon: faCode, label: 'Skills', gradient: 'primary', animation: 'none' },
                { id: 'experience', icon: faBriefcase, label: 'Experience', gradient: 'luxury', animation: 'none' },
                { id: 'education', icon: faGraduationCap, label: 'Education', gradient: 'accent', animation: 'none' }
              ].map((tab) => (
                <motion.button
                  key={tab.id}
                  onClick={() => setActiveTab(tab.id)}
                  className={`relative flex items-center gap-2 px-4 py-3 rounded-lg font-medium text-sm transition-all duration-300 overflow-hidden group ${
                    activeTab === tab.id
                      ? 'bg-gradient-to-r from-primary-500 to-primary-600 text-white shadow-glow'
                      : 'glass text-neutral-300 hover:bg-white/10 hover:text-white hover:shadow-soft'
                  }`}
                  whileHover={{ y: -2, scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                >
                  {/* Background gradient for active state */}
                  {activeTab === tab.id && (
                    <motion.div
                      className={`absolute inset-0 bg-gradient-to-r ${tab.color} opacity-20`}
                      layoutId="activeTab"
                      transition={{ type: "spring", bounce: 0.2, duration: 0.6 }}
                    />
                  )}

                  {/* Icon with enhanced styling */}
                  <div className={`relative z-10 w-4 h-4 flex items-center justify-center ${
                    activeTab === tab.id ? 'text-white' : 'text-primary-400'
                  }`}>
                    <PremiumIcon icon={tab.icon} size="sm" gradient={tab.gradient} animation="none" />
                  </div>

                  {/* Label */}
                  <span className="relative z-10">{tab.label}</span>

                  {/* Hover effect */}
                  <div className="absolute inset-0 bg-gradient-to-r from-primary-500/10 to-accent-500/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                </motion.button>
              ))}
            </div>

            {/* Premium Tab Content */}
            <motion.div
              key={activeTab}
              variants={tabVariants}
              initial="hidden"
              animate="visible"
              transition={{ duration: 0.5 }}
              className="min-h-[280px]"
            >
              {activeTab === 'skills' && (
                <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-1 xl:grid-cols-2">
                  {skills.map((skill, index) => (
                    <motion.div
                      key={skill.title}
                      className="relative group bg-white bg-opacity-60 dark:bg-white dark:bg-opacity-5 backdrop-blur-xl border border-white border-opacity-50 dark:border-white dark:border-opacity-10 rounded-2xl p-5 shadow-[0_8px_32px_rgba(99,102,241,0.08)] dark:shadow-none hover:shadow-[0_16px_48px_rgba(99,102,241,0.15)] transition-all duration-500"
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.5, delay: index * 0.1 }}
                      whileHover={{ y: -5, scale: 1.02 }}
                    >
                      {/* Premium gradient overlay */}
                      <div className="absolute inset-0 bg-gradient-to-br from-primary-500/5 via-transparent to-accent-500/5 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

                      <div className="relative z-10 flex items-start gap-4">
                        <div className={`flex-shrink-0 w-12 h-12 rounded-xl bg-gradient-to-br ${skill.gradient} flex items-center justify-center text-white shadow-lg group-hover:scale-110 transition-transform duration-300`}>
                          <PremiumIcon icon={skill.icon} size="lg" gradient={skill.gradient} animation="none" />
                        </div>

                        <div className="flex-1 min-w-0">
                          <div className="flex items-center justify-between mb-2">
                            <h4 className="text-lg font-bold text-slate-800 dark:text-white truncate">{skill.title}</h4>
                            <span className="text-primary-600 dark:text-primary-400 font-bold text-sm bg-primary-50 dark:bg-primary-900/30 px-2 py-1 rounded-full">
                              {skill.progress}%
                            </span>
                          </div>

                          <p className="text-sm text-slate-600 dark:text-gray-300 mb-3 leading-relaxed">{skill.description}</p>

                          {/* Modern Progress Bar */}
                          <div className="relative">
                            <div className="w-full bg-slate-200 dark:bg-neutral-800 rounded-full h-2 overflow-hidden">
                              <motion.div
                                className={`h-full bg-gradient-to-r ${skill.gradient} relative overflow-hidden rounded-full`}
                                initial={{ width: 0 }}
                                animate={isVisible ? { width: `${skill.progress}%` } : {}}
                                transition={{ duration: 1.2, delay: 0.3 + index * 0.1, ease: "easeOut" }}
                              >
                                {/* Subtle shine effect */}
                                <motion.div
                                  className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent"
                                  animate={{ x: ['-100%', '100%'] }}
                                  transition={{ duration: 1.5, repeat: Infinity, delay: 0.8 + index * 0.1 }}
                                />
                              </motion.div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </motion.div>
                  ))}
                </div>
              )}

              {activeTab === 'experience' && (
                <div className="relative">
                  {/* Premium timeline line */}
                  <div className="absolute left-6 top-0 bottom-0 w-0.5 bg-gradient-to-b from-primary-400 via-primary-500 to-accent-500 rounded-full shadow-sm" />

                  <div className="space-y-6 pl-16">
                    {experience.map((exp, index) => (
                      <motion.div
                        key={exp.title}
                        className="relative group"
                        initial={{ opacity: 0, x: -30 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.6, delay: index * 0.15 }}
                      >
                        {/* Premium timeline dot */}
                        <div className="absolute -left-14 top-3 w-3 h-3 bg-gradient-to-br from-primary-400 to-primary-600 rounded-full border-3 border-white dark:border-bg-primary shadow-lg group-hover:scale-125 transition-transform duration-300" />

                        {/* Premium experience card */}
                        <motion.div
                          className="bg-white bg-opacity-70 dark:bg-white dark:bg-opacity-8 backdrop-blur-xl border border-white border-opacity-60 dark:border-white dark:border-opacity-15 rounded-2xl p-6 shadow-[0_8px_32px_rgba(99,102,241,0.1)] dark:shadow-none hover:shadow-[0_16px_48px_rgba(99,102,241,0.2)] transition-all duration-500"
                          whileHover={{ y: -3, scale: 1.01 }}
                        >
                          <div className="flex items-start justify-between mb-3">
                            <h4 className="text-lg font-bold text-slate-800 dark:text-white">{exp.title}</h4>
                            <span className="inline-flex items-center px-3 py-1 bg-gradient-to-r from-green-500 to-emerald-500 text-white text-xs font-semibold rounded-full shadow-sm">
                              <div className="w-1.5 h-1.5 bg-white rounded-full mr-2 animate-pulse" />
                              {exp.period}
                            </span>
                          </div>

                          <p className="text-sm text-slate-600 dark:text-gray-300 leading-relaxed">{exp.description}</p>

                          {/* Subtle accent line */}
                          <div className="mt-4 h-0.5 w-12 bg-gradient-to-r from-primary-500 to-accent-500 rounded-full opacity-60" />
                        </motion.div>
                      </motion.div>
                    ))}
                  </div>
                </div>
              )}

              {activeTab === 'education' && (
                <div className="space-y-5">
                  {education.map((edu, index) => (
                    <motion.div
                      key={edu.title}
                      className="group relative bg-white bg-opacity-70 dark:bg-white dark:bg-opacity-8 backdrop-blur-xl border border-white border-opacity-60 dark:border-white dark:border-opacity-15 rounded-2xl p-6 shadow-[0_8px_32px_rgba(99,102,241,0.1)] dark:shadow-none hover:shadow-[0_16px_48px_rgba(99,102,241,0.2)] transition-all duration-500"
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.6, delay: index * 0.1 }}
                      whileHover={{ y: -4, scale: 1.01 }}
                    >
                      {/* Premium gradient overlay */}
                      <div className="absolute inset-0 bg-gradient-to-br from-purple-500/5 via-transparent to-pink-500/5 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

                      <div className="relative z-10 flex items-start gap-5">
                        {/* Premium education icon */}
                        <div className="flex-shrink-0 w-14 h-14 bg-gradient-to-br from-purple-500 via-purple-600 to-pink-500 rounded-xl flex items-center justify-center text-white shadow-lg group-hover:scale-110 group-hover:rotate-3 transition-all duration-300">
                          <PremiumIcon icon={edu.icon} size="xl" gradient="purple" animation="none" />
                        </div>

                        <div className="flex-1 min-w-0">
                          <div className="flex items-start justify-between mb-3">
                            <h4 className="text-lg font-bold text-slate-800 dark:text-white leading-tight">{edu.title}</h4>
                            <span className="inline-flex items-center px-3 py-1 bg-gradient-to-r from-purple-500 to-pink-500 text-white text-xs font-semibold rounded-full shadow-sm ml-3">
                              <div className="w-1.5 h-1.5 bg-white rounded-full mr-2" />
                              {edu.period}
                            </span>
                          </div>

                          <p className="text-sm font-medium text-slate-600 dark:text-gray-300 mb-2">{edu.institution}</p>

                          {/* Achievement indicator */}
                          <div className="flex items-center gap-2">
                            <div className="h-0.5 w-8 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full" />
                            <span className="text-xs text-slate-500 dark:text-gray-400 font-medium">Academic Excellence</span>
                          </div>
                        </div>
                      </div>
                    </motion.div>
                  ))}
                </div>
              )}
            </motion.div>
        </motion.div>
      </div>
    </section>
  )
}

export default About
