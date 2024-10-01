"use client"
import { Card } from "@/components/ui/card"
import { useTheme } from '@/context/ThemeContext'
import { motion } from 'framer-motion'
import Image from "next/image"

const MotionDiv = motion.div

export default function About() {
  const { isDarkMode } = useTheme()

  const bgStyle = isDarkMode
    ? 'bg-gradient-to-br from-gray-900 to-black text-white'
    : 'bg-gradient-to-br from-gray-50 to-white text-gray-800'

  const cardStyle = isDarkMode
    ? 'bg-gray-800 border-gray-700'
    : 'bg-white border-gray-200'

  const gradientText = "bg-clip-text text-transparent bg-gradient-to-r from-blue-500 to-purple-500"

  return (
    <div className={`min-h-screen font-['Bricolage_Grotesque',sans-serif] ${bgStyle} pt-24 p-8 transition-colors duration-500`}>
      <div className="max-w-7xl mx-auto">
        <h1 className={`text-4xl font-bold mb-8 ${gradientText}`}>About Me</h1>
        <Card isDarkMode={isDarkMode} className={`p-8 rounded-3xl ${cardStyle} transition-all duration-500`}>
          <MotionDiv
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="flex flex-col md:flex-row items-center"
          >
            <Image src="/profile-picture.jpg" alt="Profile" width={300} height={300} className="rounded-full mb-6 md:mb-0 md:mr-8" />
            <div>
              <h2 className="text-2xl font-bold mb-4">Abhishek Chatterjee</h2>
              <p className={`mb-4 ${isDarkMode ? 'text-gray-300' : 'text-gray-600'}`}>
                I'm a passionate Full Stack Developer and Product Designer with over a decade of experience...
              </p>
              <p className={`${isDarkMode ? 'text-gray-300' : 'text-gray-600'}`}>
                My journey in tech has taken me across 24+ countries, working on diverse projects...
              </p>
            </div>
          </MotionDiv>
        </Card>
      </div>
    </div>
  )
}