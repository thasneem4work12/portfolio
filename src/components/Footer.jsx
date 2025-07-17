import { motion } from 'framer-motion'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faHeart } from '@fortawesome/free-solid-svg-icons'

const Footer = () => {
  return (
    <footer className="bg-bg-secondary border-t border-white/10 py-8">
      <div className="container mx-auto px-6">
        <motion.div
          className="text-center"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <p className="text-gray-300 mb-2">
            &copy; 2024 Thasneem Mohamed. All rights reserved.
          </p>
          <p className="text-gray-400">
            Made with{' '}
            <FontAwesomeIcon 
              icon={faHeart} 
              className="text-accent-500 mx-1" 
            />{' '}
            and passion for coding
          </p>
        </motion.div>
      </div>
    </footer>
  )
}

export default Footer
