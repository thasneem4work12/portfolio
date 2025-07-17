import { useEffect, useRef, useState } from 'react'
import { motion } from 'framer-motion'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {
  faGlobe,
  faPaintBrush,
  faMobileAlt,
  faCheck,
  faCode,
  faRocket,
  faShieldAlt,
  faCog,
  faLaptopCode,
  faServer,
  faDatabase,
  faCloud,
  faBrain,
  faChartLine
} from '@fortawesome/free-solid-svg-icons'
import PremiumIcon from './PremiumIcon'

const Services = () => {
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

  const services = [
    {
      id: 1,
      icon: faLaptopCode,
      title: 'Premium Web Development',
      description: 'Crafting luxury-grade websites and web applications with cutting-edge technologies and premium user experiences.',
      features: [
        'Luxury Responsive Design',
        'Premium UI Components',
        'Full-Stack Architecture',
        'Enterprise Solutions'
      ],
      featured: false,
      animation: 'float',
      gradient: 'primary'
    },
    {
      id: 2,
      icon: faPaintBrush,
      title: 'Luxury UI/UX Design',
      description: 'Creating sophisticated, premium user interfaces that deliver exceptional brand experiences and user satisfaction.',
      features: [
        'Premium User Research',
        'Luxury Prototyping',
        'Brand-Focused Design',
        'Advanced Usability'
      ],
      featured: true,
      animation: 'pulse',
      gradient: 'luxury'
    },
    {
      id: 3,
      icon: faMobileAlt,
      title: 'Premium App Development',
      description: 'Building high-end mobile applications with premium features and sophisticated user experiences.',
      features: [
        'Premium Native Apps',
        'Luxury Cross-Platform',
        'App Store Excellence',
        'Premium Support'
      ],
      featured: false,
      animation: 'float',
      gradient: 'accent'
    },
    {
      id: 4,
      icon: faCloud,
      title: 'Cloud Architecture',
      description: 'Designing and implementing scalable cloud solutions with enterprise-grade security and performance.',
      features: [
        'AWS/Azure Solutions',
        'Microservices Design',
        'DevOps Integration',
        'Scalable Infrastructure'
      ],
      featured: false,
      animation: 'rotate',
      gradient: 'premium'
    },
    {
      id: 5,
      icon: faShieldAlt,
      title: 'Security Solutions',
      description: 'Implementing robust security measures and best practices to protect your digital assets and user data.',
      features: [
        'Security Audits',
        'Penetration Testing',
        'Compliance Solutions',
        'Risk Assessment'
      ],
      featured: false,
      animation: 'pulse',
      gradient: 'primary'
    },
    {
      id: 6,
      icon: faChartLine,
      title: 'Performance Optimization',
      description: 'Enhancing application performance and user experience through advanced optimization techniques.',
      features: [
        'Speed Optimization',
        'SEO Enhancement',
        'Analytics Integration',
        'Conversion Optimization'
      ],
      featured: false,
      animation: 'float',
      gradient: 'luxury'
    }
  ]

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
    hidden: { opacity: 0, y: 50 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: {
        duration: 0.6,
        ease: "easeOut"
      }
    }
  }

  return (
    <section id="services" ref={sectionRef} className="section-padding relative overflow-hidden bg-gradient-to-br from-white via-slate-50 to-blue-50 dark:from-bg-secondary dark:via-bg-primary dark:to-bg-tertiary">
      {/* Premium Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-0 left-1/3 w-96 h-96 bg-gradient-to-r from-primary-200 to-accent-200 dark:from-primary-900 dark:to-accent-900 rounded-full opacity-20 blur-3xl"></div>
        <div className="absolute bottom-0 right-1/3 w-80 h-80 bg-gradient-to-r from-accent-200 to-primary-200 dark:from-accent-900 dark:to-primary-900 rounded-full opacity-20 blur-3xl"></div>
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-primary-500/5 to-transparent dark:via-primary-500/10" />
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
              Services
            </span>
          </motion.div>
          <h2 className="section-title">Premium Solutions</h2>
          <p className="section-subtitle">Transforming ideas into exceptional digital experiences</p>
        </motion.div>

        {/* Ultra-Premium Services Grid */}
        <motion.div
          className="grid md:grid-cols-2 lg:grid-cols-3 gap-12 lg:gap-16 xl:gap-20"
          variants={containerVariants}
          initial="hidden"
          animate={isVisible ? "visible" : "hidden"}
        >
          {services.map((service, index) => (
            <motion.div
              key={service.id}
              variants={cardVariants}
              className="relative group"
              whileHover={{ y: -20, scale: 1.03 }}
              transition={{ duration: 0.5, type: "spring", bounce: 0.1 }}
            >
              {/* Premium Card Container */}
              <div className={`relative h-full flex flex-col text-center overflow-hidden bg-white bg-opacity-70 dark:bg-white dark:bg-opacity-10 backdrop-blur-2xl border border-white border-opacity-60 dark:border-white dark:border-opacity-20 rounded-3xl p-8 lg:p-10 shadow-[0_20px_60px_rgba(99,102,241,0.15)] dark:shadow-2xl hover:shadow-[0_30px_80px_rgba(99,102,241,0.25)] transition-all duration-700 ${
                service.featured ? 'ring-2 ring-primary-400 ring-opacity-50' : ''
              }`}>

                {/* Floating background gradient */}
                <div className="absolute -inset-2 bg-gradient-to-r from-primary-400 to-accent-400 rounded-3xl opacity-0 group-hover:opacity-20 blur-xl transition-opacity duration-700"></div>
                {/* Premium Featured Badge */}
                {service.featured && (
                  <motion.div
                    className="absolute -top-3 -right-3 px-4 py-2 bg-gradient-to-r from-accent-500 via-accent-600 to-primary-600 text-white text-xs font-bold uppercase rounded-full z-20 shadow-[0_8px_32px_rgba(236,72,153,0.4)] border border-white border-opacity-30"
                    animate={{
                      scale: [1, 1.1, 1],
                      rotate: [0, 5, -5, 0]
                    }}
                    transition={{ duration: 3, repeat: Infinity }}
                  >
                    ⭐ Most Popular
                  </motion.div>
                )}

                {/* Ultra-Premium Service Icon */}
                <div className="relative z-10 mb-10 group">
                  <PremiumIcon
                    icon={service.icon}
                    size="2xl"
                    animation={service.animation}
                    gradient={service.gradient}
                    className="mx-auto"
                  />

                  {/* Decorative rings */}
                  <motion.div
                    className="absolute inset-0 border-2 border-primary-500/30 rounded-2xl"
                    animate={{ scale: [1, 1.1, 1], opacity: [0.3, 0.6, 0.3] }}
                    transition={{ duration: 3, repeat: Infinity }}
                  />
                  <motion.div
                    className="absolute inset-0 border border-accent-500/20 rounded-2xl"
                    animate={{ scale: [1.1, 1.2, 1.1], opacity: [0.2, 0.4, 0.2] }}
                    transition={{ duration: 3, repeat: Infinity, delay: 1.5 }}
                  />
                </div>

                {/* Service Content */}
                <div className="relative z-10 flex-1 flex flex-col">
                  <h3 className="font-heading text-2xl font-semibold light:text-[color:var(--text-primary)] dark:text-white mb-4">
                    {service.title}
                  </h3>
                  
                  <p className="light:text-[color:var(--text-tertiary)] dark:text-gray-300 leading-relaxed mb-6 flex-1">
                    {service.description}
                  </p>

                  {/* Features List */}
                  <ul className="space-y-3 mb-8">
                    {service.features.map((feature, featureIndex) => (
                      <motion.li
                        key={featureIndex}
                        className="flex items-center gap-3 text-gray-300 text-sm"
                        initial={{ opacity: 0, x: -20 }}
                        animate={isVisible ? { opacity: 1, x: 0 } : {}}
                        transition={{ 
                          duration: 0.5, 
                          delay: 0.8 + index * 0.2 + featureIndex * 0.1 
                        }}
                      >
                        <FontAwesomeIcon 
                          icon={faCheck} 
                          className="text-green-400 text-sm flex-shrink-0" 
                        />
                        {feature}
                      </motion.li>
                    ))}
                  </ul>

                  {/* CTA Button */}
                  <motion.a
                    href="#contact"
                    className="btn-secondary w-full justify-center"
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                  >
                    Get Started
                  </motion.a>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Bottom CTA */}
        <motion.div
          className="text-center mt-16"
          initial={{ opacity: 0, y: 30 }}
          animate={isVisible ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 1 }}
        >
          <div className="max-w-2xl mx-auto">
            <h3 className="text-2xl font-semibold text-white mb-4">
              Need a Custom Solution?
            </h3>
            <p className="text-gray-300 mb-6">
              Every project is unique. Let's discuss your specific requirements and create a tailored solution that fits your needs perfectly.
            </p>
            <a href="#contact" className="btn-primary">
              Discuss Your Project
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  )
}

export default Services
