"use client"
import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import Image from "next/image"
import { useTheme } from '@/context/ThemeContext'
import Footer from '@/components/Footer'
import { motion, useMotionValue, useTransform } from 'framer-motion'
import { Github, Linkedin, Twitter, Facebook, Briefcase, Code, Palette, Smartphone } from 'lucide-react'

const MotionDiv = motion.div

export default function Portfolio() {
  const { isDarkMode } = useTheme()

  const bgStyle = isDarkMode
    ? 'bg-gradient-to-br from-gray-900 to-black text-white'
    : 'bg-gradient-to-br from-gray-50 to-white text-gray-800'

  const cardStyle = isDarkMode
    ? 'bg-gray-800 border-gray-700'
    : 'bg-white border-gray-200'

  const accentColor = isDarkMode ? 'text-blue-400' : 'text-purple-600'

  const createMotionValues = () => ({
    x: useMotionValue(0),
    y: useMotionValue(0),
    rotateX: useTransform(useMotionValue(0), [-100, 100], [30, -30]),
    rotateY: useTransform(useMotionValue(0), [-100, 100], [-30, 30]),
  })

  const gradientText = "bg-clip-text text-transparent bg-gradient-to-r from-blue-500 to-purple-500"

  return (
    <div className={`min-h-screen font-['Bricolage_Grotesque',sans-serif] ${bgStyle} pt-24 p-8 transition-colors duration-500`}>
      <div className="max-w-8xl mx-auto grid md:grid-cols-3 gap-8 mt-8">
        <motion.div style={{ perspective: 2000 }} className="md:col-span-1">
          <Card 
            isDarkMode={isDarkMode}
            className={`p-8 rounded-3xl ${cardStyle} shadow-lg transition-all duration-300 hover:shadow-xl transform-gpu h-full`}
            style={{ x: createMotionValues().x, y: createMotionValues().y, rotateX: createMotionValues().rotateX, rotateY: createMotionValues().rotateY, z: 100 }}
            drag
            dragElastic={0.16}
            dragConstraints={{ top: 0, left: 0, right: 0, bottom: 0 }}
            whileTap={{ cursor: 'grabbing' }}
          >
            <MotionDiv
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="flex flex-col items-center"
            >
              <div className="mb-6 relative">
                <Image src="/profile-picture.jpg" alt="Profile" width={360} height={360} className="rounded-full shadow-lg" />
                <MotionDiv
                  className="absolute -bottom-2 -right-2 bg-blue-500 text-white p-2 rounded-full shadow-xl"
                  initial={{ rotate: 0 }}
                  animate={{ rotate: 360 }}
                  transition={{ duration: 2, repeat: Infinity, ease: "linear" }}
                >
                  👋
                </MotionDiv>
              </div>
              <h2 className={`text-3xl font-bold mb-3 ${gradientText}`}>Abhishek Chatterjee</h2>
              <p className={`mb-6 text-center ${isDarkMode ? 'text-gray-300' : 'text-gray-600'}`}>
                Full Stack Developer & Product Designer
              </p>
              <div className="flex space-x-4 mb-6">
                <Button className="bg-blue-600 text-white hover:bg-blue-700 rounded-full px-6 py-2 transition-all duration-300">
                  Book A call
                </Button>
                <Button variant="outline" className={`${isDarkMode ? 'border-gray-600 text-white' : 'border-gray-300 text-black'} rounded-full px-6 py-2 transition-all duration-300`}>
                  Copy Email
                </Button>
              </div>
              <div className="flex space-x-4">
                {[Github, Linkedin, Twitter, Facebook].map((Icon, index) => (
                  <Button
                    key={index}
                    variant="ghost"
                    size="icon"
                    className={`${isDarkMode ? 'text-gray-300 hover:bg-gray-700' : 'text-gray-600 hover:bg-gray-200'} rounded-full transition-all duration-300`}
                  >
                    <Icon className="w-5 h-5" />
                  </Button>
                ))}
              </div>
            </MotionDiv>
          </Card>
        </motion.div>

        <div className="md:col-span-2 space-y-8">
          <Card isDarkMode={isDarkMode} className={`p-8 rounded-3xl ${cardStyle} transition-all duration-500`}>
            <h3 className={`text-2xl font-bold mb-6 ${gradientText}`}>Work Experience</h3>
            <div className="space-y-6">
              {[
                { year: "2021-2024", company: "Google Inc.", role: "Senior Product Designer", logo: "G" },
                { year: "2018-2021", company: "Meta Inc.", role: "Product Designer", logo: "M" },
                { year: "2015-2018", company: "Adobe", role: "Senior UI UX Designer", logo: "A" },
              ].map((job, index) => (
                <MotionDiv 
                  key={index} 
                  className="flex items-center"
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                >
                  <div className={`w-20 text-sm ${isDarkMode ? 'text-gray-400' : 'text-gray-500'}`}>{job.year}</div>
                  <div className={`w-12 h-12 ${isDarkMode ? 'bg-gray-700' : 'bg-gray-200'} rounded-full flex items-center justify-center mr-4 text-blue-500 font-bold text-xl shadow-md`}>
                    {job.logo}
                  </div>
                  <div>
                    <div className="font-semibold text-lg">{job.company}</div>
                    <div className={`text-sm ${isDarkMode ? 'text-gray-400' : 'text-gray-500'}`}>{job.role}</div>
                  </div>
                </MotionDiv>
              ))}
            </div>
          </Card>

          <Card isDarkMode={isDarkMode} className={`p-8 rounded-3xl ${cardStyle} transition-all duration-500`}>
            <h3 className={`text-2xl font-bold mb-6 ${gradientText}`}>My Expert Areas</h3>
            <div className="grid grid-cols-3 gap-6">
              {[
                { name: "Figma", icon: "/figma-icon.png" },
                { name: "Notion", icon: "/notion-icon.png" },
                { name: "Miro", icon: "/miro-icon.png" },
                { name: "Framer", icon: "/framer-icon.png" },
                { name: "Webflow", icon: "/webflow-icon.png" },
                { name: "Zeplin", icon: "/zeplin-icon.png" }
              ].map((tool, index) => (
                <MotionDiv
                  key={tool.name}
                  className={`p-4 rounded-xl flex flex-col items-center justify-center ${isDarkMode ? 'bg-gray-700' : 'bg-gray-100'} transition-all duration-300`}
                  whileHover={{ y: -5, boxShadow: "0 10px 20px rgba(0,0,0,0.1)" }}
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.3, delay: index * 0.05 }}
                >
                  <Image src={tool.icon} alt={tool.name} width={40} height={40} className="mb-3" />
                  <span className="text-sm font-medium">{tool.name}</span>
                </MotionDiv>
              ))}
            </div>
          </Card>
        </div>
      </div>

      <div className="mt-12 grid md:grid-cols-3 gap-8">
        <Card isDarkMode={isDarkMode} className={`md:col-span-2 p-8 rounded-3xl ${cardStyle} transition-all duration-500`}>
          <div className="flex justify-between items-center mb-6">
            <h3 className={`text-2xl font-bold ${gradientText}`}>Services I Offer</h3>
            <a href="#" className={`${accentColor} text-sm hover:underline`}>See All Services →</a>
          </div>
          <div className="grid md:grid-cols-2 gap-6">
            {[
              { name: "UI/UX Design", icon: Palette, color: "bg-pink-500" },
              { name: "Web Development", icon: Code, color: "bg-blue-500" },
              { name: "Mobile App Development", icon: Smartphone, color: "bg-green-500" },
              { name: "Product Design", icon: Briefcase, color: "bg-purple-500" }
            ].map((service, index) => (
              <MotionDiv
                key={service.name}
                className={`p-6 rounded-xl flex items-center ${isDarkMode ? 'bg-gray-700' : 'bg-gray-100'} transition-all duration-300`}
                whileHover={{ y: -5, boxShadow: "0 10px 20px rgba(0,0,0,0.1)" }}
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.3, delay: index * 0.05 }}
              >
                <div className={`${service.color} p-3 rounded-full mr-4`}>
                  <service.icon className="w-6 h-6 text-white" />
                </div>
                <span className="text-lg font-medium">{service.name}</span>
              </MotionDiv>
            ))}
          </div>
        </Card>

        <Card isDarkMode={isDarkMode} className={`md:col-span-1 p-8 rounded-3xl ${cardStyle} transition-all duration-500`}>
          <MotionDiv
            className="text-center"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <Badge className={`mb-4 ${isDarkMode ? 'bg-blue-500 text-white' : 'bg-purple-500 text-white'}`}>Available For Hire 🚀</Badge>
            <h2 className={`text-3xl font-bold mb-4 ${gradientText}`}>Let's Work Together</h2>
            <p className={`mb-6 ${isDarkMode ? 'text-gray-300' : 'text-gray-600'}`}>
              I'm always open for new opportunities and exciting projects.
            </p>
            <Button className="bg-gradient-to-r from-blue-500 to-purple-500 text-white hover:from-blue-600 hover:to-purple-600 rounded-full px-8 py-3 text-lg shadow-md">
              Let's Talk
            </Button>
          </MotionDiv>
        </Card>
      </div>

      <div className="mt-12">
        <Card isDarkMode={isDarkMode} className={`p-8 rounded-3xl ${cardStyle} transition-all duration-500`}>
          <div className="flex justify-between items-center mb-6">
            <h3 className={`text-2xl font-bold ${gradientText}`}>Recent Projects</h3>
            <a href="#" className={`${accentColor} text-sm hover:underline`}>View All →</a>
          </div>
          <div className="grid md:grid-cols-2 gap-8">
            {[1, 2].map((project, index) => (
              <MotionDiv 
                key={project}
                className="relative h-64 rounded-xl overflow-hidden shadow-lg"
                whileHover={{ scale: 1.03, boxShadow: "0 10px 20px rgba(0,0,0,0.2)" }}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <Image src={`/project-${project}.jpg`} alt={`Project ${project}`} layout="fill" objectFit="cover" />
                <div className="absolute inset-0 bg-gradient-to-t from-black to-transparent opacity-60"></div>
                <div className="absolute bottom-4 left-4 right-4">
                  <Badge className={`mb-2 ${isDarkMode ? 'bg-blue-500 text-white' : 'bg-purple-500 text-white'}`}>Product Design</Badge>
                  <h4 className="text-white text-lg font-semibold mb-1">Project Name {project}</h4>
                  <p className="text-gray-200 text-sm">Short project description goes here.</p>
                </div>
              </MotionDiv>
            ))}
          </div>
        </Card>
      </div>
    </div>
  )
}