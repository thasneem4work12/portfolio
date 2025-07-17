import { motion } from 'framer-motion'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

const PremiumIcon = ({ 
  icon, 
  size = 'md', 
  animation = 'none',
  gradient = 'primary',
  className = '',
  ...props 
}) => {
  const sizeClasses = {
    xs: 'icon-xs',
    sm: 'icon-sm', 
    md: 'icon-md',
    lg: 'icon-lg',
    xl: 'icon-xl',
    '2xl': 'icon-2xl'
  }

  const animationClasses = {
    none: '',
    float: 'icon-float',
    pulse: 'icon-pulse',
    rotate: 'icon-rotate'
  }

  const gradientStyles = {
    primary: {
      light: 'from-primary-500 via-primary-600 to-accent-500',
      dark: 'from-primary-500 via-primary-600 to-accent-500'
    },
    accent: {
      light: 'from-accent-500 via-pink-500 to-purple-500',
      dark: 'from-accent-500 via-pink-500 to-purple-500'
    },
    luxury: {
      light: 'from-indigo-600 via-purple-600 to-pink-600',
      dark: 'from-indigo-500 via-purple-500 to-pink-500'
    },
    premium: {
      light: 'from-blue-600 via-indigo-600 to-purple-600',
      dark: 'from-blue-500 via-indigo-500 to-purple-500'
    }
  }

  return (
    <motion.div
      className={`icon-premium ${sizeClasses[size]} ${animationClasses[animation]} ${className}`}
      whileHover={{ 
        scale: 1.1, 
        y: -2,
        rotate: animation === 'rotate' ? 0 : 5
      }}
      whileTap={{ scale: 0.95 }}
      transition={{ 
        type: "spring", 
        stiffness: 400, 
        damping: 17 
      }}
      {...props}
    >
      {/* Premium background glow */}
      <div className="absolute inset-0 rounded-inherit bg-gradient-to-br from-primary-500/20 via-accent-500/10 to-purple-500/20 opacity-0 group-hover:opacity-100 transition-opacity duration-500 blur-xl"></div>
      
      {/* Icon content */}
      <div className="icon-content">
        <FontAwesomeIcon icon={icon} />
      </div>
      
      {/* Shine effect */}
      <div className="absolute inset-0 rounded-inherit overflow-hidden">
        <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-br from-white/20 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
      </div>
    </motion.div>
  )
}

export default PremiumIcon
