"use client"
import { Card } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { useTheme } from '@/context/ThemeContext'
import { motion } from 'framer-motion'
import { Briefcase, Code, Palette, Smartphone } from 'lucide-react'

const MotionDiv = motion.div

export default function Services() {
  const { isDarkMode } = useTheme()

  const bgStyle = isDarkMode
    ? 'bg-gradient-to-br from-gray-900 to-black text-white'
    : 'bg-gradient-to-br from-gray-50 to-white text-gray-800'

  const cardStyle = isDarkMode
    ? 'bg-gray-800 border-gray-700'
    : 'bg-white border-gray-200'

  const gradientText = "bg-clip-text text-transparent bg-gradient-to-r from-blue-500 to-purple-500"

  const services = [
    { name: "UI/UX Design", icon: Palette, color: "bg-pink-500" },
    { name: "Web Development", icon: Code, color: "bg-blue-500" },
    { name: "Mobile App Development", icon: Smartphone, color: "bg-green-500" },
    { name: "Product Design", icon: Briefcase, color: "bg-purple-500" }
  ]

  return (
    <div className={`min-h-screen font-['Bricolage_Grotesque',sans-serif] ${bgStyle} pt-24 p-8 transition-colors duration-500`}>
      <div className="max-w-7xl mx-auto">
        <h1 className={`text-4xl font-bold mb-8 ${gradientText}`}>Our Services</h1>
        <div className="grid md:grid-cols-2 gap-8">
          {services.map((service, index) => (
            <Card key={service.name} isDarkMode={isDarkMode} className={`p-8 rounded-3xl ${cardStyle} transition-all duration-500`}>
              <MotionDiv
                className="flex items-center mb-4"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <div className={`${service.color} p-3 rounded-full mr-4`}>
                  <service.icon className="w-6 h-6 text-white" />
                </div>
                <h2 className="text-2xl font-bold">{service.name}</h2>
              </MotionDiv>
              <p className={`${isDarkMode ? 'text-gray-300' : 'text-gray-600'}`}>
                Detailed description of {service.name} service goes here...
              </p>
            </Card>
          ))}
        </div>
      </div>
    </div>
  )
}