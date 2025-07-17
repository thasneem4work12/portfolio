import { useState, useEffect } from 'react'
import { motion } from 'framer-motion'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {
  faBars,
  faTimes,
  faLaptopCode,
  faServer,
  faDatabase,
  faCloud
} from '@fortawesome/free-solid-svg-icons'
import Navigation from './Navigation'
import PremiumIcon from './PremiumIcon'

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [isScrolled, setIsScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 100)
    }

    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen)
  }

  const closeMenu = () => {
    setIsMenuOpen(false)
  }



  return (
    <>
      <Navigation isScrolled={isScrolled} isMenuOpen={isMenuOpen} toggleMenu={toggleMenu} closeMenu={closeMenu} />
      
      <header id="header" className="min-h-screen flex items-center relative overflow-hidden bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-50 dark:from-bg-primary dark:via-bg-secondary dark:to-bg-tertiary transition-colors duration-500">
        {/* Background Image */}
        <div
          className="absolute inset-0 opacity-5 dark:opacity-10 bg-contain bg-right bg-no-repeat z-0 transition-opacity duration-500"
          style={{ backgroundImage: 'url(/images/background.png)' }}
        />

        {/* Enhanced Floating Elements */}
        <div className="absolute inset-0 z-10">
          <motion.div
            className="floating-element top-1/4 left-1/4"
            animate={{ y: [-20, 20, -20] }}
            transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
          />
          <motion.div
            className="floating-element-lg top-3/5 right-1/4"
            animate={{ y: [20, -20, 20] }}
            transition={{ duration: 6, repeat: Infinity, ease: "easeInOut", delay: 2 }}
          />
          <motion.div
            className="floating-element bottom-1/4 left-2/5"
            animate={{ y: [-15, 15, -15] }}
            transition={{ duration: 6, repeat: Infinity, ease: "easeInOut", delay: 4 }}
          />
          {/* Additional floating elements for more dynamic feel */}
          <motion.div
            className="absolute w-3 h-3 bg-gradient-to-r from-accent-500 to-primary-500 rounded-full top-1/3 right-1/3 opacity-70"
            animate={{
              y: [-10, 10, -10],
              x: [-5, 5, -5],
              rotate: [0, 180, 360]
            }}
            transition={{ duration: 8, repeat: Infinity, ease: "easeInOut", delay: 1 }}
          />
          <motion.div
            className="absolute w-2 h-2 bg-gradient-to-r from-primary-400 to-accent-400 rounded-full bottom-1/3 left-1/3 opacity-60"
            animate={{
              y: [15, -15, 15],
              scale: [1, 1.2, 1]
            }}
            transition={{ duration: 7, repeat: Infinity, ease: "easeInOut", delay: 3 }}
          />
        </div>

        <div className="container-wide relative z-40">
          <div className="grid lg:grid-cols-2 gap-20 xl:gap-28 items-center pt-24 pb-12">
            {/* Ultra-Premium Hero Text */}
            <motion.div
              className="max-w-2xl xl:max-w-4xl text-center lg:text-left relative z-30"
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              <motion.p
                className="text-lg lg:text-xl font-bold text-primary-700 dark:text-primary-400 mb-10 uppercase tracking-[0.25em] bg-white bg-opacity-90 dark:bg-white dark:bg-opacity-10 backdrop-blur-3xl px-8 py-4 rounded-full border border-white border-opacity-60 dark:border-white dark:border-opacity-20 shadow-[0_12px_40px_rgba(99,102,241,0.2)] dark:shadow-none inline-block relative overflow-hidden"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.4 }}
                whileHover={{ scale: 1.05, y: -2 }}
              >
                <span className="relative z-10">Software Engineering Undergraduate</span>
                <div className="absolute inset-0 bg-gradient-to-r from-primary-500/10 via-accent-500/5 to-primary-500/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              </motion.p>

              <motion.h1
                className="font-heading text-4xl lg:text-5xl xl:text-6xl font-bold leading-[0.95] mb-10 text-balance relative z-50"
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.6 }}
              >
                <span className="block text-slate-900 dark:text-white font-extrabold tracking-tight relative z-50">
                  Hi, I'm{' '}
                  <span className="name-gradient text-gradient relative z-50 inline-block transform hover:scale-105 transition-transform duration-300">
                    Thasneem
                  </span>
                </span>
                <span className="block text-2xl lg:text-3xl xl:text-4xl text-slate-700 dark:text-gray-200 font-semibold tracking-tight mt-3 relative z-50">
                  Mohamed From Sri Lanka
                </span>

                {/* Premium title decoration */}
                <motion.div
                  className="flex items-center justify-center lg:justify-start gap-4 mt-6"
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.6, delay: 1.2 }}
                >
                  <div className="h-1 w-16 bg-gradient-to-r from-primary-500 to-accent-500 rounded-full"></div>
                  <div className="w-3 h-3 bg-primary-500 rounded-full animate-pulse"></div>
                  <div className="h-1 w-16 bg-gradient-to-r from-accent-500 to-primary-500 rounded-full"></div>
                </motion.div>
              </motion.h1>

              <motion.div
                className="mb-14 max-w-2xl"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.8 }}
              >
                <motion.p
                  className="text-slate-800 dark:text-neutral-200 font-bold text-xl lg:text-2xl xl:text-3xl block mb-4 leading-tight text-pretty"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 1.0 }}
                >
                  Passionate about creating{' '}
                  <span className="bg-gradient-to-r from-primary-600 via-accent-500 to-primary-600 bg-clip-text text-transparent">
                    innovative digital solutions
                  </span>
                </motion.p>

                <motion.p
                  className="text-slate-600 dark:text-neutral-300 text-base lg:text-lg xl:text-xl mb-6 leading-relaxed text-pretty font-medium"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 1.2 }}
                >
                  and bringing ideas to life through premium code craftsmanship.
                </motion.p>

                <motion.p
                  className="text-base lg:text-lg xl:text-xl text-slate-500 dark:text-neutral-400 font-semibold leading-relaxed text-pretty"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 1.4 }}
                >
                  Let's build something{' '}
                  <span className="bg-gradient-to-r from-accent-500 to-primary-500 bg-clip-text text-transparent">
                    extraordinary
                  </span>{' '}
                  together.
                </motion.p>
              </motion.div>

              <motion.div
                className="flex flex-col sm:flex-row gap-6 lg:gap-8 justify-center lg:justify-start"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 1 }}
              >
                <a href="#portfolio" className="btn-primary hover-lift">
                  <span>View My Work</span>
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                  </svg>
                </a>
                <a href="#contact" className="btn-secondary hover-lift">
                  <span>Get In Touch</span>
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
                  </svg>
                </a>
              </motion.div>


            </motion.div>

            {/* Enhanced Hero Visual */}
            <motion.div
              className="relative flex items-center justify-center lg:justify-end"
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
            >
              <div className="relative w-80 h-80 lg:w-96 lg:h-96 xl:w-[28rem] xl:h-[28rem] flex items-center justify-center">
                {/* User Photo - always visible */}
                <div className="absolute z-20 w-40 h-40 lg:w-56 lg:h-56 xl:w-64 xl:h-64 rounded-full overflow-hidden border-4 border-white/90 shadow-2xl bg-white/95 dark:bg-slate-200/80 flex items-center justify-center transition-all duration-300 background-wrapper">
                  {/* Dark overlay for light mode */}
                  <div className="pointer-events-none absolute inset-0 z-10 hidden light:block" style={{background: 'linear-gradient(rgba(0,0,0,0.08), rgba(0,0,0,0.08))'}} />
                  <img
                    src="/images/hero-user.jpg"
                    alt="Thasneem Mohamed smiling in front of a wooden background"
                    className="w-full h-full object-cover background"
                  />
                </div>
                {/* Enhanced animated background circles */}
                <motion.div
                  className="absolute inset-0 rounded-full bg-gradient-to-r from-primary-500/20 via-accent-500/10 to-transparent blur-2xl"
                  animate={{
                    scale: [1, 1.2, 1],
                    rotate: [0, 180, 360]
                  }}
                  transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
                />
                <motion.div
                  className="absolute inset-8 rounded-full bg-gradient-to-br from-accent-500/30 via-primary-500/20 to-accent-500/30 blur-xl"
                  animate={{
                    scale: [1.1, 0.9, 1.1],
                    rotate: [360, 0, 360]
                  }}
                  transition={{ duration: 10, repeat: Infinity, ease: "easeInOut", delay: 1 }}
                />
                <motion.div
                  className="absolute inset-16 rounded-full bg-gradient-to-r from-primary-400/40 to-accent-400/40 blur-lg"
                  animate={{
                    scale: [0.8, 1.3, 0.8],
                    opacity: [0.3, 0.7, 0.3]
                  }}
                  transition={{ duration: 6, repeat: Infinity, ease: "easeInOut", delay: 3 }}
                />

                {/* Center content with enhanced styling */}
                <div className="absolute inset-0 flex items-center justify-center">
                  <motion.div
                    className="relative"
                    animate={{ rotate: [0, 360] }}
                    transition={{ duration: 30, repeat: Infinity, ease: "linear" }}
                  >
                    <div className="w-32 h-32 lg:w-40 lg:h-40 bg-gradient-to-br from-primary-500 via-primary-600 to-accent-500 rounded-full flex items-center justify-center text-4xl lg:text-5xl font-bold text-white shadow-glow-xl border-4 border-white/20 backdrop-blur-sm">
                      <span className="animate-pulse-glow">TM</span>
                    </div>

                    {/* Orbiting elements */}
                    <motion.div
                      className="absolute -top-2 -right-2 w-6 h-6 bg-gradient-to-r from-accent-400 to-accent-500 rounded-full shadow-glow-accent"
                      animate={{ rotate: [0, -360] }}
                      transition={{ duration: 8, repeat: Infinity, ease: "linear" }}
                    />
                    <motion.div
                      className="absolute -bottom-2 -left-2 w-4 h-4 bg-gradient-to-r from-primary-400 to-primary-500 rounded-full shadow-glow"
                      animate={{ rotate: [0, -360] }}
                      transition={{ duration: 12, repeat: Infinity, ease: "linear" }}
                    />
                  </motion.div>
                </div>

                {/* Decorative elements */}
                <motion.div
                  className="absolute top-4 right-4 w-3 h-3 bg-accent-400 rounded-full opacity-60"
                  animate={{
                    scale: [1, 1.5, 1],
                    opacity: [0.6, 1, 0.6]
                  }}
                  transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
                />
                <motion.div
                  className="absolute bottom-8 left-8 w-2 h-2 bg-primary-400 rounded-full opacity-70"
                  animate={{
                    scale: [1, 2, 1],
                    opacity: [0.7, 1, 0.7]
                  }}
                  transition={{ duration: 4, repeat: Infinity, ease: "easeInOut", delay: 1.5 }}
                />
              </div>
            </motion.div>
          </div>
        </div>
      </header>
    </>
  )
}

export default Header
