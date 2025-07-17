import { motion } from 'framer-motion'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSun, faMoon } from '@fortawesome/free-solid-svg-icons'
import { useTheme } from '../contexts/ThemeContext'

const ThemeToggle = () => {
  const { isDarkMode, toggleTheme } = useTheme()

  return (
    <motion.button
      onClick={toggleTheme}
      className="relative w-16 h-8 bg-white/10 dark:bg-white/10 backdrop-blur-sm border border-white/20 dark:border-white/20 rounded-full p-1 transition-all duration-300 hover:bg-white/20 dark:hover:bg-white/20 focus:outline-none focus:ring-2 focus:ring-primary-500 focus:ring-offset-2 focus:ring-offset-transparent"
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
      aria-label={`Switch to ${isDarkMode ? 'light' : 'dark'} mode`}
    >
      {/* Toggle Background */}
      <motion.div
        className="absolute inset-1 bg-gradient-to-r from-primary-500 to-accent-500 rounded-full shadow-lg"
        animate={{
          x: isDarkMode ? 0 : 24,
        }}
        transition={{
          type: "spring",
          stiffness: 500,
          damping: 30
        }}
      />
      
      {/* Icons */}
      <div className="relative flex items-center justify-between w-full h-full px-1">
        <motion.div
          className="flex items-center justify-center w-5 h-5 text-white z-10"
          animate={{
            opacity: isDarkMode ? 1 : 0.3,
            scale: isDarkMode ? 1 : 0.8
          }}
          transition={{ duration: 0.2 }}
        >
          <FontAwesomeIcon icon={faMoon} className="text-xs" />
        </motion.div>
        
        <motion.div
          className="flex items-center justify-center w-5 h-5 text-white z-10"
          animate={{
            opacity: isDarkMode ? 0.3 : 1,
            scale: isDarkMode ? 0.8 : 1
          }}
          transition={{ duration: 0.2 }}
        >
          <FontAwesomeIcon icon={faSun} className="text-xs" />
        </motion.div>
      </div>
    </motion.button>
  )
}

export default ThemeToggle
