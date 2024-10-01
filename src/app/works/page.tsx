"use client"
import { Card } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { useTheme } from '@/context/ThemeContext'
import { motion } from 'framer-motion'
import Image from "next/image"

const MotionDiv = motion.div

export default function Works() {
  const { isDarkMode } = useTheme()

  const bgStyle = isDarkMode
    ? 'bg-gradient-to-br from-gray-900 to-black text-white'
    : 'bg-gradient-to-br from-gray-50 to-white text-gray-800'

  const cardStyle = isDarkMode
    ? 'bg-gray-800 border-gray-700'
    : 'bg-white border-gray-200'

  const gradientText = "bg-clip-text text-transparent bg-gradient-to-r from-blue-500 to-purple-500"

  const projects = [
    { name: "E-commerce Platform", category: "Web Development", image: "/project-1.jpg" },
    { name: "Mobile Banking App", category: "Mobile App", image: "/project-2.jpg" },
    { name: "AI-powered Analytics Dashboard", category: "Data Visualization", image: "/project-3.jpg" },
    { name: "Social Media Management Tool", category: "SaaS", image: "/project-4.jpg" },
  ]

  return (
    <div className={`min-h-screen font-['Bricolage_Grotesque',sans-serif] ${bgStyle} pt-24 p-8 transition-colors duration-500`}>
      <div className="max-w-7xl mx-auto">
        <h1 className={`text-4xl font-bold mb-8 ${gradientText}`}>My Works</h1>
        <div className="grid md:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <Card key={project.name} isDarkMode={isDarkMode} className={`overflow-hidden rounded-3xl ${cardStyle} transition-all duration-500`}>
              <MotionDiv
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <Image src={project.image} alt={project.name} width={600} height={300} className="w-full h-48 object-cover" />
                <div className="p-6">
                  <Badge className={`mb-2 ${isDarkMode ? 'bg-blue-500 text-white' : 'bg-purple-500 text-white'}`}>{project.category}</Badge>
                  <h2 className="text-2xl font-bold mb-2">{project.name}</h2>
                  <p className={`${isDarkMode ? 'text-gray-300' : 'text-gray-600'}`}>
                    Brief description of the project and its key features...
                  </p>
                </div>
              </MotionDiv>
            </Card>
          ))}
        </div>
      </div>
    </div>
  )
}