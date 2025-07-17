import { motion } from 'framer-motion'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {
  faReact,
  faJs,
  faHtml5,
  faCss3Alt,
  faNodeJs,
  faPython,
  faGitAlt,
  faFigma
} from '@fortawesome/free-brands-svg-icons'
import {
  faDatabase,
  faServer,
  faCode,
  faMobile,
  faDesktop,
  faPalette
} from '@fortawesome/free-solid-svg-icons'

const Skills = () => {
  const skillCategories = [
    {
      title: "Frontend Development",
      skills: [
        { name: "React", icon: faReact, level: 90, color: "text-blue-500" },
        { name: "JavaScript", icon: faJs, level: 85, color: "text-yellow-500" },
        { name: "HTML5", icon: faHtml5, level: 95, color: "text-orange-500" },
        { name: "CSS3", icon: faCss3Alt, level: 90, color: "text-blue-600" },
        { name: "Tailwind CSS", icon: faPalette, level: 88, color: "text-teal-500" }
      ]
    },
    {
      title: "Backend Development",
      skills: [
        { name: "Node.js", icon: faNodeJs, level: 80, color: "text-green-500" },
        { name: "Python", icon: faPython, level: 75, color: "text-blue-400" },
        { name: "Database", icon: faDatabase, level: 70, color: "text-purple-500" },
        { name: "Server Management", icon: faServer, level: 65, color: "text-gray-500" }
      ]
    },
    {
      title: "Tools & Others",
      skills: [
        { name: "Git", icon: faGitAlt, level: 85, color: "text-red-500" },
        { name: "Figma", icon: faFigma, level: 80, color: "text-purple-600" },
        { name: "Mobile Dev", icon: faMobile, level: 70, color: "text-green-600" },
        { name: "Desktop Apps", icon: faDesktop, level: 65, color: "text-blue-700" }
      ]
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

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6
      }
    }
  }

  return (
    <section id="skills" className="section-padding bg-white dark:bg-bg-secondary transition-colors duration-500">
      <div className="container-wide">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="section-title text-slate-900 dark:text-white mb-6">
            Technical Skills
          </h2>
          <p className="section-subtitle text-slate-600 dark:text-neutral-300 max-w-2xl mx-auto">
            A comprehensive overview of my technical expertise and proficiency levels
          </p>
        </motion.div>

        <motion.div
          className="grid md:grid-cols-2 lg:grid-cols-3 gap-8"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          {skillCategories.map((category, categoryIndex) => (
            <motion.div
              key={category.title}
              className="bg-slate-50 dark:bg-bg-primary rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300"
              variants={itemVariants}
              whileHover={{ y: -5 }}
            >
              <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-6 text-center">
                {category.title}
              </h3>
              
              <div className="space-y-6">
                {category.skills.map((skill, skillIndex) => (
                  <motion.div
                    key={skill.name}
                    className="space-y-2"
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: skillIndex * 0.1 }}
                  >
                    <div className="flex items-center justify-between">
                      <div className="flex items-center space-x-3">
                        <FontAwesomeIcon 
                          icon={skill.icon} 
                          className={`text-lg ${skill.color}`}
                        />
                        <span className="font-medium text-slate-700 dark:text-neutral-200">
                          {skill.name}
                        </span>
                      </div>
                      <span className="text-sm font-semibold text-slate-500 dark:text-neutral-400">
                        {skill.level}%
                      </span>
                    </div>
                    
                    <div className="w-full bg-slate-200 dark:bg-bg-tertiary rounded-full h-2">
                      <motion.div
                        className="bg-gradient-to-r from-primary-500 to-accent-500 h-2 rounded-full"
                        initial={{ width: 0 }}
                        whileInView={{ width: `${skill.level}%` }}
                        viewport={{ once: true }}
                        transition={{ duration: 1, delay: skillIndex * 0.1 }}
                      />
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}

export default Skills
