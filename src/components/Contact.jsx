import { useEffect, useRef, useState } from 'react'
import { motion } from 'framer-motion'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { 
  faEnvelope, 
  faPhone, 
  faMapMarkerAlt, 
  faPaperPlane,
  faDownload
} from '@fortawesome/free-solid-svg-icons'
import { 
  faFacebookF, 
  faInstagram, 
  faLinkedinIn, 
  faGithub 
} from '@fortawesome/free-brands-svg-icons'

const Contact = () => {
  const [isVisible, setIsVisible] = useState(false)
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  })
  const [isSubmitting, setIsSubmitting] = useState(false)
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

  const contactInfo = [
    {
      icon: faEnvelope,
      title: 'Email',
      content: 'thasneemmohamed802@gmail.com'
    },
    {
      icon: faPhone,
      title: 'Phone',
      content: '+94 75 075 8497'
    },
    {
      icon: faMapMarkerAlt,
      title: 'Location',
      content: 'Colombo, Sri Lanka'
    }
  ]

  const socialLinks = [
    { icon: faFacebookF, url: 'https://www.facebook.com/', label: 'Facebook' },
    { icon: faInstagram, url: 'https://www.instagram.com/', label: 'Instagram' },
    { icon: faLinkedinIn, url: 'https://www.linkedin.com/', label: 'LinkedIn' },
    { icon: faGithub, url: 'https://github.com/', label: 'GitHub' }
  ]

  const handleInputChange = (e) => {
    const { name, value } = e.target
    setFormData(prev => ({
      ...prev,
      [name]: value
    }))
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    setIsSubmitting(true)

    // Simulate form submission
    setTimeout(() => {
      alert('Thank you for your message! I will get back to you soon.')
      setFormData({ name: '', email: '', subject: '', message: '' })
      setIsSubmitting(false)
    }, 1000)
  }

  return (
    <section id="contact" ref={sectionRef} className="section-padding relative bg-gradient-to-br from-white via-blue-50 to-indigo-50 dark:from-bg-secondary dark:via-bg-primary dark:to-bg-tertiary overflow-hidden">
      {/* Premium Background Elements */}
      <div className="absolute inset-0">
        <div className="absolute top-1/3 left-1/3 w-96 h-96 bg-gradient-to-r from-primary-200 to-accent-200 dark:from-primary-900 dark:to-accent-900 rounded-full opacity-20 blur-3xl"></div>
        <div className="absolute bottom-1/3 right-1/3 w-80 h-80 bg-gradient-to-r from-accent-200 to-primary-200 dark:from-accent-900 dark:to-primary-900 rounded-full opacity-20 blur-3xl"></div>
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
              Contact
            </span>
          </motion.div>
          <h2 className="section-title">Let's Create Together</h2>
          <p className="section-subtitle">Ready to bring your vision to life? Let's start the conversation</p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-20 xl:gap-24 items-start">
          {/* Contact Info */}
          <motion.div
            className="space-y-8"
            initial={{ opacity: 0, x: -50 }}
            animate={isVisible ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            {/* Premium Contact Items */}
            <div className="space-y-6">
              {contactInfo.map((info, index) => (
                <motion.div
                  key={info.title}
                  className="group relative"
                  initial={{ opacity: 0, x: -20 }}
                  animate={isVisible ? { opacity: 1, x: 0 } : {}}
                  transition={{ duration: 0.6, delay: 0.4 + index * 0.1 }}
                  whileHover={{ x: 15, scale: 1.02 }}
                >
                  {/* Premium Card */}
                  <div className="flex gap-6 p-8 bg-white bg-opacity-70 dark:bg-white dark:bg-opacity-10 backdrop-blur-2xl border border-white border-opacity-60 dark:border-white dark:border-opacity-20 rounded-3xl shadow-[0_12px_40px_rgba(99,102,241,0.1)] dark:shadow-2xl hover:shadow-[0_20px_60px_rgba(99,102,241,0.15)] transition-all duration-500 relative overflow-hidden">

                    {/* Floating background gradient */}
                    <div className="absolute -inset-2 bg-gradient-to-r from-primary-400 to-accent-400 rounded-3xl opacity-0 group-hover:opacity-10 blur-xl transition-opacity duration-500"></div>

                    {/* Premium Icon */}
                    <div className="flex-shrink-0 w-16 h-16 bg-gradient-to-br from-primary-500 via-primary-600 to-accent-500 rounded-2xl flex items-center justify-center text-white text-2xl shadow-[0_8px_32px_rgba(99,102,241,0.3)] group-hover:shadow-[0_12px_40px_rgba(99,102,241,0.4)] transition-all duration-500 relative z-10">
                      <FontAwesomeIcon icon={info.icon} />
                    </div>

                    {/* Content */}
                    <div className="relative z-10">
                      <h4 className="text-xl font-bold text-slate-800 dark:text-white mb-3 group-hover:text-primary-600 dark:group-hover:text-primary-400 transition-colors duration-300">
                        {info.title}
                      </h4>
                      <p className="text-slate-600 dark:text-gray-300 leading-relaxed">
                        {info.content}
                      </p>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>

            {/* Social Links */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={isVisible ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.8 }}
            >
              <h4 className="text-lg font-semibold text-white mb-4">Follow Me</h4>
              <div className="flex gap-4 mb-6">
                {socialLinks.map((social, index) => (
                  <motion.a
                    key={social.label}
                    href={social.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center justify-center w-12 h-12 bg-white/10 rounded-full text-gray-300 hover:bg-primary-500 hover:text-white transition-all duration-300"
                    whileHover={{ y: -5, scale: 1.1 }}
                    whileTap={{ scale: 0.95 }}
                    aria-label={social.label}
                  >
                    <FontAwesomeIcon icon={social.icon} />
                  </motion.a>
                ))}
              </div>
            </motion.div>

            {/* Download CV */}
            <motion.a
              href="/images/122516739 Thasneem Mohamed.pdf"
              download
              className="btn-primary w-fit"
              initial={{ opacity: 0, y: 20 }}
              animate={isVisible ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 1 }}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <FontAwesomeIcon icon={faDownload} />
              Download CV
            </motion.a>
          </motion.div>

          {/* Premium Contact Form */}
          <motion.div
            className="relative group"
            initial={{ opacity: 0, x: 50 }}
            animate={isVisible ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            {/* Floating background elements */}
            <div className="absolute -inset-4 bg-gradient-to-r from-primary-400 to-accent-400 rounded-3xl opacity-10 blur-2xl group-hover:opacity-20 transition-opacity duration-500"></div>

            <div className="relative bg-white bg-opacity-80 dark:bg-white dark:bg-opacity-10 backdrop-blur-2xl border border-white border-opacity-60 dark:border-white dark:border-opacity-20 rounded-3xl p-10 lg:p-12 shadow-[0_20px_60px_rgba(99,102,241,0.15)] dark:shadow-2xl">
              <div className="mb-8">
                <h3 className="text-2xl lg:text-3xl font-bold text-slate-800 dark:text-white mb-4 bg-gradient-to-r from-primary-600 to-accent-500 bg-clip-text text-transparent">
                  Send a Message
                </h3>
                <p className="text-slate-600 dark:text-gray-300">
                  Ready to start your project? Fill out the form below and I'll get back to you within 24 hours.
                </p>
              </div>

              <form onSubmit={handleSubmit} className="space-y-8">
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <input
                      type="text"
                      name="name"
                      value={formData.name}
                      onChange={handleInputChange}
                      placeholder="Your Name"
                      required
                      className="form-input"
                    />
                  </div>
                  <div>
                    <input
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleInputChange}
                      placeholder="Your Email"
                      required
                      className="form-input"
                    />
                  </div>
                </div>

                <div>
                  <input
                    type="text"
                    name="subject"
                    value={formData.subject}
                    onChange={handleInputChange}
                    placeholder="Subject"
                    required
                    className="form-input"
                  />
                </div>

                <div>
                  <textarea
                    name="message"
                    value={formData.message}
                    onChange={handleInputChange}
                    placeholder="Your Message"
                    rows="6"
                    required
                    className="form-input resize-vertical"
                  ></textarea>
                </div>

                <motion.button
                  type="submit"
                  disabled={isSubmitting}
                  className={`btn-primary w-full justify-center relative overflow-hidden ${
                    isSubmitting ? 'opacity-80 cursor-not-allowed' : ''
                  }`}
                  whileHover={!isSubmitting ? {
                    scale: 1.02,
                    boxShadow: "0 20px 60px rgba(99,102,241,0.4)"
                  } : {}}
                  whileTap={!isSubmitting ? { scale: 0.98 } : {}}
                  animate={isSubmitting ? {
                    background: "linear-gradient(45deg, #6366f1, #8b5cf6, #a855f7, #6366f1)",
                    backgroundSize: "300% 300%",
                    backgroundPosition: ["0% 50%", "100% 50%", "0% 50%"]
                  } : {}}
                  transition={{
                    duration: isSubmitting ? 2 : 0.3,
                    repeat: isSubmitting ? Infinity : 0
                  }}
                >
                  <motion.div
                    className="flex items-center gap-3"
                    animate={isSubmitting ? { x: [0, 5, 0] } : {}}
                    transition={{ duration: 0.5, repeat: isSubmitting ? Infinity : 0 }}
                  >
                    {isSubmitting ? (
                      <>
                        <motion.div
                          className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full"
                          animate={{ rotate: 360 }}
                          transition={{ duration: 1, repeat: Infinity, ease: "linear" }}
                        />
                        <span className="font-semibold">Sending Message...</span>
                      </>
                    ) : (
                      <>
                        <motion.div
                          whileHover={{ x: 3, rotate: 15 }}
                          transition={{ duration: 0.2 }}
                        >
                          <FontAwesomeIcon icon={faPaperPlane} className="text-lg" />
                        </motion.div>
                        <span className="font-semibold">Send Message</span>
                      </>
                    )}
                  </motion.div>
                </motion.button>
              </form>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}

export default Contact
