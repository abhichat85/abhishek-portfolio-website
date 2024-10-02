"use client"
import React, { useState } from 'react'
import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import Image from "next/image"
import { useTheme } from '@/context/ThemeContext'
import Footer from '@/components/Footer'
import { motion, useMotionValue, useTransform } from 'framer-motion'
import { Github, Linkedin, Twitter, Facebook, Briefcase, Code, Palette, Smartphone, Brain, Sparkles, Zap } from 'lucide-react'
import StarsCanvas from "@/components/Stars"

const MotionDiv = motion.div
const MotionCard = motion(Card)

export default function Portfolio() {
  const { isDarkMode } = useTheme()

  const bgStyle = isDarkMode
    ? 'bg-gradient-to-br from-gray-900 to-black text-white'
    : 'bg-gradient-to-br from-gray-50 to-white text-gray-800'

  const cardStyle = isDarkMode
    ? 'bg-gray-800/30 border-gray-700/50 backdrop-blur-md'
    : 'bg-white/30 border-gray-200/50 backdrop-blur-md'

  const accentColor = isDarkMode ? 'text-blue-400' : 'text-purple-600'

  const gradientText = "bg-clip-text text-transparent bg-gradient-to-r from-blue-500 to-purple-500"
  const buttonStyle = "bg-gradient-to-r from-blue-500 to-purple-500 text-white hover:from-blue-600 hover:to-purple-600 rounded-xl px-6 py-2 shadow-md transition-all duration-300"
  const ELbuttonStyle = "bg-gradient-to-r from-blue-500 to-purple-500 text-white hover:from-blue-600 hover:to-purple-600 rounded-lg px-6 py-2 shadow-md transition-all duration-300"

  const Card3D = ({ children, className }) => {
    const x = useMotionValue(0)
    const y = useMotionValue(0)
    const rotateX = useTransform(y, [-300, 300], [30, -30])
    const rotateY = useTransform(x, [-300, 300], [-30, 30])

    return (
      <motion.div
        style={{ x, y, rotateX, rotateY, z: 100 }}
        drag
        dragElastic={0.1}
        dragConstraints={{ top: 0, left: 0, right: 0, bottom: 0 }}
        whileTap={{ cursor: 'grabbing' }}
        className={`${className} cursor-grab`}
      >
        {children}
      </motion.div>
    )
  }

  return (
    <div className={`min-h-screen font-['Bricolage_Grotesque',sans-serif] ${bgStyle} pt-24 p-8 transition-colors duration-500 relative overflow-hidden`}>
      <div className="absolute inset-0 z-0">
        <StarsCanvas />
      </div>
      
      <div className="relative z-10">
        <div className="absolute inset-0 opacity-30 pointer-events-none">
          <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-blue-500 rounded-full filter blur-3xl animate-pulse"></div>
          <div className="absolute top-3/4 right-1/4 w-64 h-64 bg-purple-500 rounded-full filter blur-3xl animate-pulse"></div>
          <div className="absolute bottom-1/4 left-1/2 w-80 h-80 bg-pink-500 rounded-full filter blur-3xl animate-pulse"></div>
        </div>

        <div className="max-w-8xl mx-auto grid md:grid-cols-3 gap-8 mt-8">
          <Card3D className="md:col-span-1">
            <MotionCard 
              isDarkMode={isDarkMode}
              className={`p-8 rounded-3xl ${cardStyle} shadow-lg transition-all duration-300 hover:shadow-xl transform-gpu h-full`}
            >
              <MotionDiv
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
                className="flex flex-col items-center"
              >
                <div className="mb-6 relative">
                  <Image 
                    src="/profile-picture.jpg" 
                    alt="Profile" 
                    width={360} 
                    height={360} 
                    className="rounded-full shadow-lg" 
                    onError={(e) => {
                      console.error("Error loading image:", e);
                      // Optionally, set a fallback image
                      e.currentTarget.src = "/fallback-image.jpg";
                    }}
                  />
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
                <div className="flex space-x-6 mb-6">
                  <Button className={buttonStyle}>
                    Book A call
                  </Button>
                  <Button className={`${buttonStyle} bg-none bg-transparent border-2 border-blue-500 text-blue-500 hover:bg-blue-500 hover:text-white`}>
                    Copy Email
                  </Button>
                </div>
                <div className="flex space-x-4">
                  {[Github, Linkedin, Twitter, Facebook].map((Icon, index) => (
                    <Button
                      key={index}
                      className={`${isDarkMode ? 'bg-gray-700 text-gray-300 hover:bg-gray-600' : 'bg-gray-200 text-gray-600 hover:bg-gray-300'} p-2 rounded-md transition-all duration-300`}
                    >
                      <Icon className="w-5 h-5" />
                    </Button>
                  ))}
                </div>
                <div className="flex space-x-4 mt-12">
                  <Button className={ELbuttonStyle} onClick={() => window.open('https://google.com', '_blank')}>
                    Visit Einstein Labs for AI Solutions
                  </Button>
                </div>
              </MotionDiv>
            </MotionCard>
          </Card3D>

          <div className="md:col-span-1 space-y-8 h-full">
            <Card3D>
              <Card isDarkMode={isDarkMode} className={`p-14 rounded-3xl ${cardStyle} transition-all duration-500`}>
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
            </Card3D>

            <Card3D>
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
            </Card3D>
          </div>

          <Card3D className="md:col-span-1">
            <Card isDarkMode={isDarkMode} className={`p-8 rounded-3xl ${cardStyle} transition-all duration-500`}>
              <div className="flex justify-between items-center mb-6">
                <h3 className={`text-2xl font-bold ${gradientText}`}>Recent Projects</h3>
                <a href="#" className={`${accentColor} text-sm hover:underline`}>View All →</a>
              </div>
              <div className="space-y-6">
                {[1, 2, 3].map((project, index) => (
                  <MotionDiv 
                    key={project}
                    className="relative h-48 rounded-xl overflow-hidden shadow-lg"
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
          </Card3D>
        </div>

        <div className="mt-12 grid md:grid-cols-2 gap-8">
          <Card3D className="md:col-span-1">
            <Card isDarkMode={isDarkMode} className={`p-8 rounded-3xl ${cardStyle} transition-all duration-500`}>
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
          </Card3D>

          <Card3D className="md:col-span-1">
            <Card isDarkMode={isDarkMode} className={`p-8 rounded-3xl ${cardStyle} transition-all duration-500 h-full`}>
              <MotionDiv
                className="flex flex-col justify-between h-full"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
              >
                <div>
                  <Badge className={`mb-4 ${isDarkMode ? 'bg-blue-500 text-white' : 'bg-purple-500 text-white'}`}>Available For Hire 🚀</Badge>
                  <h2 className={`text-3xl font-bold mb-4 ${gradientText}`}>Let's Work Together</h2>
                  <p className={`mb-6 ${isDarkMode ? 'text-gray-300' : 'text-gray-600'}`}>
                    I'm always open for new opportunities and exciting projects. Let's collaborate and bring your ideas to life with cutting-edge technology and design.
                  </p>
                </div>
                <div className="space-y-4">
                  <p className={`${isDarkMode ? 'text-gray-300' : 'text-gray-600'}`}>
                    Ready to start your next project? I'm here to help you every step of the way.
                  </p>
                  <Button className={`${buttonStyle} w-full`}>
                    Let's Talk
                  </Button>
                </div>
              </MotionDiv>
            </Card>
          </Card3D>
        </div>

        <div className="mt-12">
          <Card3D>
            <Card isDarkMode={isDarkMode} className={`p-8 rounded-3xl ${cardStyle} transition-all duration-500 relative overflow-hidden`}>
              <div className="absolute inset-0 opacity-10 bg-gradient-to-br from-blue-400 to-purple-600"></div>
              <MotionDiv
                className="relative z-10"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
              >
                <div className="flex items-center mb-6">
                  <Brain className={`w-10 h-10 ${accentColor} mr-4`} />
                  <h3 className={`text-3xl font-bold ${gradientText}`}>Transform your business with Einstein Labs - My AI Agency</h3>
                </div>
                <p className={`mb-6 ${isDarkMode ? 'text-gray-300' : 'text-gray-600'}`}>
                  Revolutionizing industries with cutting-edge AI solutions. At Einstein Labs, we're pushing the boundaries of artificial intelligence to solve complex problems and create innovative products.
                </p>
                <div className="grid md:grid-cols-3 gap-6 mb-8">
                  {[
                    { icon: Sparkles, title: "AI Innovation", description: "Pioneering new AI technologies" },
                    { icon: Zap, title: "Rapid Deployment", description: "Fast integration of AI solutions" },
                    { icon: Brain, title: "Custom AI Models", description: "Tailored AI for your specific needs" },
                  ].map((feature, index) => (
                    <MotionDiv
                      key={index}
                      className={`p-4 rounded-xl ${isDarkMode ? 'bg-gray-700' : 'bg-gray-100'} flex flex-col items-center text-center`}
                      whileHover={{ y: -5, boxShadow: "0 10px 20px rgba(0,0,0,0.1)" }}
                      initial={{ opacity: 0, scale: 0.9 }}
                      animate={{ opacity: 1, scale: 1 }}
                      transition={{ duration: 0.3, delay: index * 0.1 }}
                    >
                      <feature.icon className={`w-8 h-8 ${accentColor} mb-2`} />
                      <h4 className="font-semibold mb-1">{feature.title}</h4>
                      <p className={`text-sm ${isDarkMode ? 'text-gray-400' : 'text-gray-600'}`}>{feature.description}</p>
                    </MotionDiv>
                  ))}
                </div>
                <div className="mt-6 items-center text-center">
                  <Button 
                    className={ELbuttonStyle}
                    onClick={() => window.open('https://einstein-labs.ai', '_blank')}
                  >
                    Visit Einstein Labs for AI Solutions
                  </Button>
                </div>
              </MotionDiv>
            </Card>
          </Card3D>
        </div>
      </div>
    </div>
  )
}