import { motion, AnimatePresence } from 'framer-motion'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBars, faTimes } from '@fortawesome/free-solid-svg-icons'
import ThemeToggle from './ThemeToggle'

const Navigation = ({ isScrolled, isMenuOpen, toggleMenu, closeMenu }) => {
  const navItems = [
    { href: '#header', label: 'Home' },
    { href: '#about', label: 'About' },
    { href: '#skills', label: 'Skills' },
    { href: '#experience', label: 'Experience' },
    { href: '#education', label: 'Education' },
    { href: '#services', label: 'Services' },
    { href: '#portfolio', label: 'Portfolio' },
    { href: '#contact', label: 'Contact' },
  ]

  const handleNavClick = (href) => {
    closeMenu()
    const element = document.querySelector(href)
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' })
    }
  }

  return (
    <motion.nav
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 backdrop-blur-3xl border-b shadow-[0_12px_40px_rgba(99,102,241,0.15)] ${isScrolled ? 'py-3' : 'py-4'} light:bg-[color:var(--surface-primary)] light:border-[color:var(--border-primary)] dark:bg-[color:var(--bg-primary)] dark:border-white dark:border-opacity-15 dark:shadow-[0_12px_40px_rgba(0,0,0,0.3)]`}
      style={{
        background: undefined,
        transition: 'background-color 0.3s, border-color 0.3s',
      }}
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.6 }}
    >
      <div className="container mx-auto px-6">
        <div className="flex items-center justify-between">
          {/* Premium Logo */}
          <motion.div
            className="flex items-center relative group"
            whileHover={{ scale: 1.08 }}
            transition={{ duration: 0.3, ease: "easeOut" }}
          >
            <div className="absolute inset-0 bg-gradient-to-r from-primary-500/10 via-accent-500/5 to-primary-500/10 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 blur-sm"></div>
            <img
              src="/images/logo.png"
              alt="Thasneem Mohamed Logo"
              className="h-14 w-auto relative z-10 filter drop-shadow-lg group-hover:drop-shadow-xl transition-all duration-300"
            />
            <div className="absolute inset-0 bg-gradient-to-r from-primary-500/5 to-accent-500/5 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
          </motion.div>

          {/* Premium Desktop Navigation */}
          <div className="hidden lg:flex items-center space-x-8">
            {navItems.map((item, index) => (
              <motion.a
                key={item.href}
                href={item.href}
                onClick={(e) => {
                  e.preventDefault()
                  handleNavClick(item.href)
                }}
                className="relative font-bold text-sm uppercase tracking-[0.15em] transition-all duration-500 group py-3 px-4 overflow-hidden light:text-[color:var(--text-primary)] dark:text-white hover:light:text-[color:var(--text-accent)] dark:hover:text-primary-400"
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                whileHover={{ y: -4, scale: 1.08 }}
                whileTap={{ scale: 0.95 }}
              >
                <span className="relative z-10">{item.label}</span>

                {/* Enhanced underline */}
                <span className="absolute -bottom-1 left-0 w-0 h-1.5 bg-gradient-to-r from-primary-500 via-accent-500 to-primary-600 transition-all duration-500 group-hover:w-full rounded-full shadow-[0_4px_12px_rgba(99,102,241,0.4)]" />

                {/* Premium glow effect */}
                <span className="absolute inset-0 rounded-xl bg-gradient-to-r from-primary-500/8 via-accent-500/8 to-primary-500/8 opacity-0 group-hover:opacity-100 transition-all duration-500 -z-10 blur-sm" />

                {/* Shine effect */}
                <span className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 -z-10 rounded-xl" />

                {/* Border glow */}
                <span className="absolute inset-0 border border-transparent group-hover:border-primary-500/20 rounded-xl transition-all duration-500" />
              </motion.a>
            ))}

            {/* Theme Toggle */}
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6, delay: 0.8 }}
            >
              <ThemeToggle />
            </motion.div>
          </div>

          {/* Mobile Menu Button */}
          <motion.button
            className="lg:hidden text-white text-xl p-2"
            onClick={toggleMenu}
            whileTap={{ scale: 0.95 }}
            aria-label={isMenuOpen ? 'Close menu' : 'Open menu'}
          >
            <FontAwesomeIcon icon={isMenuOpen ? faTimes : faBars} />
          </motion.button>
        </div>
      </div>

      {/* Mobile Navigation */}
      <AnimatePresence>
        {isMenuOpen && (
          <>
            {/* Backdrop */}
            <motion.div
              className="fixed inset-0 bg-black/50 backdrop-blur-sm z-40 lg:hidden"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={closeMenu}
            />
            
            {/* Mobile Menu */}
            <motion.div
              className="fixed top-0 right-0 h-full w-80 backdrop-blur-md border-l border-gray-200 bg-white bg-opacity-95 dark:border-white dark:border-opacity-10 dark:bg-opacity-0 z-50 lg:hidden"
              style={{background: 'rgba(26, 26, 46, 0.95)'}}
              initial={{ x: '100%' }}
              animate={{ x: 0 }}
              exit={{ x: '100%' }}
              transition={{ type: 'tween', duration: 0.3 }}
            >
              <div className="flex flex-col h-full">
                {/* Close Button */}
                <div className="flex justify-end p-6">
                  <motion.button
                    onClick={closeMenu}
                    className="text-white text-xl p-2"
                    whileTap={{ scale: 0.95 }}
                    aria-label="Close menu"
                  >
                    <FontAwesomeIcon icon={faTimes} />
                  </motion.button>
                </div>

                {/* Navigation Items */}
                <div className="flex flex-col items-center justify-center flex-1 space-y-8">
                  {navItems.map((item, index) => (
                    <motion.a
                      key={item.href}
                      href={item.href}
                      onClick={(e) => {
                        e.preventDefault()
                        handleNavClick(item.href)
                      }}
                      className="text-lg font-semibold transition-colors duration-300 group light:text-[color:var(--text-secondary)] dark:text-white hover:light:text-[color:var(--text-accent)] dark:hover:text-primary-400"
                      initial={{ opacity: 0, x: 50 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ duration: 0.3, delay: index * 0.1 }}
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                    >
                      {item.label}
                    </motion.a>
                  ))}

                  {/* Mobile Theme Toggle */}
                  <motion.div
                    initial={{ opacity: 0, x: 50 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.3, delay: 0.7 }}
                    className="pt-4"
                  >
                    <ThemeToggle />
                  </motion.div>
                </div>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </motion.nav>
  )
}

export default Navigation
