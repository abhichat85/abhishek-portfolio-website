"use client"
import { useState } from 'react'
import { Card } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { useTheme } from '@/context/ThemeContext'
import Image from "next/image"
import { motion, useMotionValue, useTransform } from 'framer-motion'
import { Phone, Copy, Facebook, Github, Youtube, Award, Briefcase, Users, Globe } from "lucide-react"
import StarsCanvas from "@/components/Stars"

const MotionDiv = motion.div
const MotionCard = motion(Card)

export default function About() {
  const { isDarkMode } = useTheme()

  const bgStyle = isDarkMode
    ? 'bg-gradient-to-br from-gray-900 to-black text-white'
    : 'bg-gradient-to-br from-gray-50 to-white text-gray-800'

  const cardStyle = isDarkMode
    ? 'bg-gray-800 border-gray-700'
    : 'bg-white border-gray-200'

  const gradientText = "bg-clip-text text-transparent bg-gradient-to-r from-blue-500 to-purple-500"
  const buttonStyle = "bg-gradient-to-r from-blue-500 to-purple-500 text-white hover:from-blue-600 hover:to-purple-600 rounded-md px-6 py-2 shadow-md transition-all duration-300"

  const createMotionValues = () => ({
    x: useMotionValue(0),
    y: useMotionValue(0),
    rotateX: useTransform(useMotionValue(0), [-100, 100], [30, -30]),
    rotateY: useTransform(useMotionValue(0), [-100, 100], [-30, 30]),
  })

  const stats = [
    { icon: Briefcase, value: "40+", label: "Years of Experience" },
    { icon: Users, value: "72+", label: "Happy Clients" },
    { icon: Globe, value: "24+", label: "Countries Served" },
    { icon: Award, value: "86+", label: "Projects Completed" },
  ]

  const brands = [
    "/brand1.png", "/brand2.png", "/brand3.png", "/brand4.png",
    "/brand5.png", "/brand6.png", "/brand7.png", "/brand8.png",
  ]

  const awards = [
    { title: "Adobe Design Contest", year: "2022 - 2023", position: "Runner Up" },
    { title: "Dribbble Design Contest", year: "2022 - 2023", position: "Gold Winner" },
    { title: "Awwwards Nominee", year: "2021 - 2022", position: "Runner Up" },
    { title: "Behance Design Contest", year: "2022 - 2023", position: "Gold Winner" },
  ]

  return (
    <div className={`min-h-screen ${bgStyle} pt-24 p-8 transition-colors duration-500 relative overflow-hidden`}>
      <div className="absolute inset-0 z-0">
        <StarsCanvas />
      </div>
      <div className="relative z-10">
        {/* AI-inspired background elements */}
        <div className="absolute inset-0 opacity-10 pointer-events-none">
          <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-blue-500 rounded-full filter blur-3xl animate-pulse"></div>
          <div className="absolute top-3/4 right-1/4 w-48 h-48 bg-purple-500 rounded-full filter blur-3xl animate-pulse"></div>
        </div>

        <div className="max-w-8xl mx-auto grid md:grid-cols-3 gap-8 mt-12 mb-12">
          <motion.div style={{ perspective: 2000 }} className="md:col-span-1 h-full">
            <MotionCard 
              isDarkMode={isDarkMode}
              className={`p-8 rounded-2xl ${cardStyle} shadow-lg transition-all duration-300 hover:shadow-xl transform-gpu h-full flex flex-col justify-between`}
              style={{ x: createMotionValues().x, y: createMotionValues().y, rotateX: createMotionValues().rotateX, rotateY: createMotionValues().rotateY, z: 100 } as any}
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
                <h2 className={`text-3xl font-bold mb-3 ${gradientText}`}>Cris Rayaan</h2>
                <p className={`mb-6 text-center ${isDarkMode ? 'text-gray-300' : 'text-gray-600'}`}>
                  Full Stack Developer & Product Designer
                </p>
                <div className="flex space-x-4 mb-6">
                  <Button className={buttonStyle}>
                    <Phone className="mr-2 h-4 w-4" /> Book A call
                  </Button>
                  <Button className={`${buttonStyle} bg-none bg-transparent border-2 border-blue-500 text-blue-500 hover:bg-blue-500 hover:text-white`}>
                    <Copy className="mr-2 h-4 w-4" /> Copy Email
                  </Button>
                </div>
                <div className="flex space-x-4">
                  {[Facebook, Github, Youtube].map((Icon, index) => (
                    <Button
                      key={index}
                      className={`${isDarkMode ? 'bg-gray-700 text-gray-300 hover:bg-gray-600' : 'bg-gray-200 text-gray-600 hover:bg-gray-300'} p-2 rounded-md transition-all duration-300`}
                    >
                      <Icon className="w-5 h-5" />
                    </Button>
                  ))}
                </div>
              </MotionDiv>
            </MotionCard>
          </motion.div>

          <div className="md:col-span-2 h-full">
            <Card isDarkMode={isDarkMode} className={`${cardStyle} p-8 rounded-2xl shadow-[inset_-12px_-8px_40px_#46464620] transition-all duration-500 h-full flex flex-col`}>
              <h1 className={`text-4xl font-bold mb-4 ${gradientText}`}>About Me</h1>
              <p className={`mb-8 ${isDarkMode ? 'text-gray-300' : 'text-gray-600'}`}>
                A Passionate Full Stack Developer 💻 & Product Designer having 12 years of 
                Experiences over 24+ Country Worldwide.
              </p>

              <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-8">
                {stats.map((stat, index) => (
                  <MotionDiv
                    key={index}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                    className="flex flex-col items-center"
                  >
                    <stat.icon className={`w-8 h-8 ${gradientText} mb-2`} />
                    <span className="text-2xl font-bold">{stat.value}</span>
                    <span className={`text-sm ${isDarkMode ? 'text-gray-400' : 'text-gray-600'}`}>{stat.label}</span>
                  </MotionDiv>
                ))}
              </div>

              <h2 className={`text-2xl font-bold mb-4 ${gradientText}`}>Working With 50+ Brands Worldwide</h2>
              <div className="grid grid-cols-4 md:grid-cols-8 gap-4 mb-8">
                {brands.map((brand, index) => (
                  <MotionDiv
                    key={index}
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.5, delay: index * 0.05 }}
                    className="bg-gray-100 p-2 rounded-lg"
                  >
                    <Image src={brand} alt={`Brand ${index + 1}`} width={60} height={60} className="mx-auto" />
                  </MotionDiv>
                ))}
              </div>

              <h2 className={`text-2xl font-bold mb-4 ${gradientText}`}>Awards and Recognitions</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {awards.map((award, index) => (
                  <MotionDiv
                    key={index}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                  >
                    <Card isDarkMode={isDarkMode} className={`${cardStyle} p-4 rounded-xl`}>
                      <h3 className="text-lg font-semibold mb-1">{award.title}</h3>
                      <p className={`text-sm ${isDarkMode ? 'text-gray-400' : 'text-gray-600'}`}>{award.year}</p>
                      <Badge className={`mt-2 ${isDarkMode ? 'bg-blue-500 text-white' : 'bg-purple-500 text-white'}`}>{award.position}</Badge>
                    </Card>
                  </MotionDiv>
                ))}
              </div>
            </Card>
          </div>
        </div>
      </div>
    </div>
  )
}