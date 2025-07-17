import { motion } from 'framer-motion'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {
  faBriefcase,
  faCalendarAlt,
  faMapMarkerAlt,
  faCode,
  faUsers,
  faRocket
} from '@fortawesome/free-solid-svg-icons'

const Experience = () => {
  const experiences = [
    {
      title: "Frontend Developer",
      company: "Tech Solutions Inc.",
      location: "Remote",
      period: "2023 - Present",
      type: "Full-time",
      description: "Developing responsive web applications using React and modern JavaScript frameworks. Collaborating with design teams to implement pixel-perfect UI components.",
      achievements: [
        "Built 5+ responsive web applications",
        "Improved page load speed by 40%",
        "Collaborated with 3-person development team"
      ],
      technologies: ["React", "JavaScript", "Tailwind CSS", "Git"],
      icon: faCode,
      color: "from-blue-500 to-purple-600"
    },
    {
      title: "Web Development Intern",
      company: "Digital Agency Pro",
      location: "Colombo, Sri Lanka",
      period: "2022 - 2023",
      type: "Internship",
      description: "Assisted in developing client websites and learned modern web development practices. Gained hands-on experience with various web technologies.",
      achievements: [
        "Completed 10+ client projects",
        "Learned React and Node.js",
        "Received excellent performance review"
      ],
      technologies: ["HTML", "CSS", "JavaScript", "WordPress"],
      icon: faUsers,
      color: "from-green-500 to-teal-600"
    },
    {
      title: "Freelance Developer",
      company: "Self-Employed",
      location: "Sri Lanka",
      period: "2021 - 2022",
      type: "Freelance",
      description: "Provided web development services to local businesses. Created custom websites and helped clients establish their online presence.",
      achievements: [
        "Served 15+ satisfied clients",
        "Built e-commerce solutions",
        "Developed strong client relationships"
      ],
      technologies: ["HTML", "CSS", "JavaScript", "PHP"],
      icon: faRocket,
      color: "from-purple-500 to-pink-600"
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
    hidden: { opacity: 0, x: -50 },
    visible: {
      opacity: 1,
      x: 0,
      transition: {
        duration: 0.6
      }
    }
  }

  return (
    <section id="experience" className="section-padding bg-slate-50 dark:bg-bg-primary transition-colors duration-500">
      <div className="container-wide">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="section-title text-slate-900 dark:text-white mb-6">
            Work Experience
          </h2>
          <p className="section-subtitle text-slate-600 dark:text-neutral-300 max-w-2xl mx-auto">
            My professional journey and key accomplishments in software development
          </p>
        </motion.div>

        <motion.div
          className="relative"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          {/* Timeline line */}
          <div className="absolute left-8 top-0 bottom-0 w-0.5 bg-gradient-to-b from-primary-500 to-accent-500 hidden md:block"></div>

          <div className="space-y-12">
            {experiences.map((exp, index) => (
              <motion.div
                key={index}
                className="relative"
                variants={itemVariants}
              >
                {/* Timeline dot */}
                <div className="absolute left-6 w-4 h-4 bg-gradient-to-r from-primary-500 to-accent-500 rounded-full border-4 border-white dark:border-bg-primary shadow-lg hidden md:block"></div>

                <div className="md:ml-20">
                  <motion.div
                    className="bg-white dark:bg-bg-secondary rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300"
                    whileHover={{ y: -5 }}
                  >
                    <div className="flex flex-col lg:flex-row lg:items-start lg:justify-between mb-6">
                      <div className="flex items-start space-x-4 mb-4 lg:mb-0">
                        <div className={`w-12 h-12 rounded-xl bg-gradient-to-r ${exp.color} flex items-center justify-center text-white shadow-lg`}>
                          <FontAwesomeIcon icon={exp.icon} className="text-lg" />
                        </div>
                        <div>
                          <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-1">
                            {exp.title}
                          </h3>
                          <p className="text-lg font-semibold text-primary-600 dark:text-primary-400 mb-2">
                            {exp.company}
                          </p>
                          <div className="flex flex-wrap items-center gap-4 text-sm text-slate-500 dark:text-neutral-400">
                            <div className="flex items-center space-x-1">
                              <FontAwesomeIcon icon={faCalendarAlt} />
                              <span>{exp.period}</span>
                            </div>
                            <div className="flex items-center space-x-1">
                              <FontAwesomeIcon icon={faMapMarkerAlt} />
                              <span>{exp.location}</span>
                            </div>
                            <span className="px-3 py-1 bg-primary-100 dark:bg-primary-900 text-primary-700 dark:text-primary-300 rounded-full text-xs font-medium">
                              {exp.type}
                            </span>
                          </div>
                        </div>
                      </div>
                    </div>

                    <p className="text-slate-600 dark:text-neutral-300 mb-6 leading-relaxed">
                      {exp.description}
                    </p>

                    <div className="mb-6">
                      <h4 className="font-semibold text-slate-900 dark:text-white mb-3">Key Achievements:</h4>
                      <ul className="space-y-2">
                        {exp.achievements.map((achievement, achIndex) => (
                          <li key={achIndex} className="flex items-start space-x-2 text-slate-600 dark:text-neutral-300">
                            <span className="w-2 h-2 bg-accent-500 rounded-full mt-2 flex-shrink-0"></span>
                            <span>{achievement}</span>
                          </li>
                        ))}
                      </ul>
                    </div>

                    <div>
                      <h4 className="font-semibold text-slate-900 dark:text-white mb-3">Technologies Used:</h4>
                      <div className="flex flex-wrap gap-2">
                        {exp.technologies.map((tech, techIndex) => (
                          <span
                            key={techIndex}
                            className="px-3 py-1 bg-slate-100 dark:bg-bg-tertiary text-slate-700 dark:text-neutral-300 rounded-lg text-sm font-medium"
                          >
                            {tech}
                          </span>
                        ))}
                      </div>
                    </div>
                  </motion.div>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  )
}

export default Experience
