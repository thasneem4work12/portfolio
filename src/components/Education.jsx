import { motion } from 'framer-motion'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {
  faGraduationCap,
  faCalendarAlt,
  faMapMarkerAlt,
  faCertificate,
  faAward,
  faBook,
  faCode,
  faLaptopCode
} from '@fortawesome/free-solid-svg-icons'

const Education = () => {
  const education = [
    {
      degree: "Bachelor of Software Engineering",
      institution: "University of Colombo",
      location: "Colombo, Sri Lanka",
      period: "2021 - Present",
      status: "Undergraduate",
      gpa: "3.8/4.0",
      description: "Comprehensive program covering software development, algorithms, data structures, and modern programming practices.",
      coursework: [
        "Data Structures & Algorithms",
        "Object-Oriented Programming",
        "Database Management Systems",
        "Web Development",
        "Software Engineering Principles",
        "Computer Networks"
      ],
      icon: faGraduationCap,
      color: "from-blue-600 to-purple-600"
    },
    {
      degree: "Advanced Level (A/L)",
      institution: "Royal College",
      location: "Colombo, Sri Lanka",
      period: "2019 - 2021",
      status: "Completed",
      gpa: "3 A's",
      description: "Specialized in Mathematics, Physics, and Information Technology with excellent academic performance.",
      coursework: [
        "Combined Mathematics",
        "Physics",
        "Information & Communication Technology"
      ],
      icon: faBook,
      color: "from-green-600 to-teal-600"
    }
  ]

  const certifications = [
    {
      title: "React Developer Certification",
      issuer: "Meta",
      date: "2023",
      icon: faCode,
      color: "text-blue-500"
    },
    {
      title: "JavaScript Algorithms and Data Structures",
      issuer: "freeCodeCamp",
      date: "2022",
      icon: faLaptopCode,
      color: "text-yellow-500"
    },
    {
      title: "Responsive Web Design",
      issuer: "freeCodeCamp",
      date: "2022",
      icon: faCertificate,
      color: "text-green-500"
    },
    {
      title: "Git and GitHub Essentials",
      issuer: "Coursera",
      date: "2021",
      icon: faCode,
      color: "text-purple-500"
    }
  ]

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.3
      }
    }
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6
      }
    }
  }

  return (
    <section id="education" className="section-padding bg-white dark:bg-bg-secondary transition-colors duration-500">
      <div className="container-wide">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="section-title text-slate-900 dark:text-white mb-6">
            Education & Certifications
          </h2>
          <p className="section-subtitle text-slate-600 dark:text-neutral-300 max-w-2xl mx-auto">
            My academic background and professional certifications in software development
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-3 gap-8">
          {/* Education Section */}
          <motion.div
            className="lg:col-span-2"
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            <h3 className="text-2xl font-bold text-slate-900 dark:text-white mb-8 flex items-center">
              <FontAwesomeIcon icon={faGraduationCap} className="mr-3 text-primary-500" />
              Academic Education
            </h3>

            <div className="space-y-8">
              {education.map((edu, index) => (
                <motion.div
                  key={index}
                  className="bg-slate-50 dark:bg-bg-primary rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300"
                  variants={itemVariants}
                  whileHover={{ y: -5 }}
                >
                  <div className="flex items-start space-x-4 mb-6">
                    <div className={`w-14 h-14 rounded-xl bg-gradient-to-r ${edu.color} flex items-center justify-center text-white shadow-lg`}>
                      <FontAwesomeIcon icon={edu.icon} className="text-xl" />
                    </div>
                    <div className="flex-1">
                      <h4 className="text-xl font-bold text-slate-900 dark:text-white mb-2">
                        {edu.degree}
                      </h4>
                      <p className="text-lg font-semibold text-primary-600 dark:text-primary-400 mb-2">
                        {edu.institution}
                      </p>
                      <div className="flex flex-wrap items-center gap-4 text-sm text-slate-500 dark:text-neutral-400 mb-2">
                        <div className="flex items-center space-x-1">
                          <FontAwesomeIcon icon={faCalendarAlt} />
                          <span>{edu.period}</span>
                        </div>
                        <div className="flex items-center space-x-1">
                          <FontAwesomeIcon icon={faMapMarkerAlt} />
                          <span>{edu.location}</span>
                        </div>
                        <span className="px-3 py-1 bg-accent-100 dark:bg-accent-900 text-accent-700 dark:text-accent-300 rounded-full text-xs font-medium">
                          {edu.status}
                        </span>
                      </div>
                      <p className="text-sm font-semibold text-green-600 dark:text-green-400">
                        GPA: {edu.gpa}
                      </p>
                    </div>
                  </div>

                  <p className="text-slate-600 dark:text-neutral-300 mb-6 leading-relaxed">
                    {edu.description}
                  </p>

                  <div>
                    <h5 className="font-semibold text-slate-900 dark:text-white mb-3">Key Coursework:</h5>
                    <div className="grid grid-cols-2 gap-2">
                      {edu.coursework.map((course, courseIndex) => (
                        <div key={courseIndex} className="flex items-center space-x-2 text-slate-600 dark:text-neutral-300">
                          <span className="w-2 h-2 bg-primary-500 rounded-full flex-shrink-0"></span>
                          <span className="text-sm">{course}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Certifications Section */}
          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            <h3 className="text-2xl font-bold text-slate-900 dark:text-white mb-8 flex items-center">
              <FontAwesomeIcon icon={faAward} className="mr-3 text-accent-500" />
              Certifications
            </h3>

            <div className="space-y-4">
              {certifications.map((cert, index) => (
                <motion.div
                  key={index}
                  className="bg-slate-50 dark:bg-bg-primary rounded-xl p-6 shadow-md hover:shadow-lg transition-all duration-300"
                  variants={itemVariants}
                  whileHover={{ scale: 1.02 }}
                >
                  <div className="flex items-start space-x-4">
                    <FontAwesomeIcon 
                      icon={cert.icon} 
                      className={`text-2xl ${cert.color} mt-1`}
                    />
                    <div className="flex-1">
                      <h4 className="font-bold text-slate-900 dark:text-white mb-1">
                        {cert.title}
                      </h4>
                      <p className="text-sm text-primary-600 dark:text-primary-400 font-medium mb-1">
                        {cert.issuer}
                      </p>
                      <p className="text-xs text-slate-500 dark:text-neutral-400">
                        {cert.date}
                      </p>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>

            {/* Additional Info */}
            <motion.div
              className="mt-8 bg-gradient-to-r from-primary-50 to-accent-50 dark:from-primary-900/20 dark:to-accent-900/20 rounded-xl p-6"
              variants={itemVariants}
            >
              <h4 className="font-bold text-slate-900 dark:text-white mb-3">
                Continuous Learning
              </h4>
              <p className="text-sm text-slate-600 dark:text-neutral-300">
                Always expanding my knowledge through online courses, workshops, and staying updated with the latest technologies in software development.
              </p>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}

export default Education
