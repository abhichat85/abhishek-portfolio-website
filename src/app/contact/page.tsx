"use client"
import { useState } from 'react'
import { Card } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { useTheme } from '@/context/ThemeContext'
import Image from "next/image"
import { motion } from 'framer-motion'
import { Send, Phone, Mail, MapPin } from "lucide-react"
import StarsCanvas from "@/components/Stars"
import EarthCanvas from "@/components/Earth"
import { slideIn } from "@/lib/utils"

const MotionDiv = motion.div

export default function Contact() {
  const { isDarkMode } = useTheme()
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  })

  const bgStyle = isDarkMode
    ? 'bg-gradient-to-br from-gray-900 to-black text-white'
    : 'bg-gradient-to-br from-gray-50 to-white text-gray-800'

  const cardStyle = isDarkMode
    ? 'bg-gray-800 border-gray-700'
    : 'bg-white border-gray-200'

  const gradientText = "bg-clip-text text-transparent bg-gradient-to-r from-blue-500 to-purple-500"
  const buttonStyle = "bg-gradient-to-r from-blue-500 to-purple-500 text-white hover:from-blue-600 hover:to-purple-600 rounded-md px-4 py-2 shadow-md transition-all duration-300"

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target
    setFormData(prevState => ({ ...prevState, [name]: value }))
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // Handle form submission logic here
    console.log(formData)
  }

  return (
    <div className={`min-h-screen font-['Bricolage_Grotesque',sans-serif] ${bgStyle} pt-16 p-6 transition-colors duration-500 relative overflow-hidden`}>
      <div className="absolute inset-0 z-0">
        <StarsCanvas />
      </div>
      <div className="relative z-10">
        {/* AI-inspired background elements */}
        <div className="absolute inset-0 opacity-10 pointer-events-none">
          <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-blue-500 rounded-full filter blur-3xl animate-pulse"></div>
          <div className="absolute top-3/4 right-1/4 w-48 h-48 bg-purple-500 rounded-full filter blur-3xl animate-pulse"></div>
        </div>

        <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-6 mt-8 mb-8">
          <MotionDiv
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            className="h-full"
          >
            <Card className={`${cardStyle} p-6 rounded-2xl shadow-lg transition-all duration-300 hover:shadow-xl h-full flex flex-col justify-between`}>
              <div className="flex-grow flex flex-col">
                <h2 className={`text-2xl font-bold mb-4 ${gradientText}`}>Let's Connect</h2>
                <p className={`mb-6 ${isDarkMode ? 'text-gray-300' : 'text-gray-600'}`}>
                  I'm always excited to collaborate on new projects and ideas. Feel free to reach out!
                </p>
                <motion.div
                  variants={slideIn("right", "tween", 0.2, 1)}
                  className='flex-grow relative w-full h-[300px] md:h-[400px] lg:h-[450px]' // Adjusted sizing
                >
                  <EarthCanvas />
                </motion.div>
              </div>
              <div className="space-y-3 mt-6"> {/* Reduced margin-top */}
                <div className="flex items-center">
                  <Phone className="w-5 h-5 mr-3 text-blue-500" />
                  <span className="text-sm">+1 (123) 456-7890</span>
                </div>
                <div className="flex items-center">
                  <Mail className="w-5 h-5 mr-3 text-blue-500" />
                  <span className="text-sm">contact@crisrayaan.com</span>
                </div>
                <div className="flex items-center">
                  <MapPin className="w-5 h-5 mr-3 text-blue-500" />
                  <span className="text-sm">San Francisco, CA</span>
                </div>
              </div>
            </Card>
          </MotionDiv>

          <MotionDiv
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            className="h-full"
          >
            <Card className={`${cardStyle} p-6 rounded-2xl shadow-lg transition-all duration-300 hover:shadow-xl h-full flex flex-col`}>
              <h2 className={`text-2xl font-bold mb-4 ${gradientText}`}>Get in Touch</h2>
              <form onSubmit={handleSubmit} className="space-y-4 flex-grow flex flex-col">
                <div>
                  <label htmlFor="name" className="block mb-1 text-sm font-medium">Your Name</label>
                  <Input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleInputChange}
                    required
                    className={`w-full p-2 rounded-md ${isDarkMode ? 'bg-gray-700 text-white' : 'bg-gray-100 text-gray-900'}`}
                  />
                </div>
                <div>
                  <label htmlFor="email" className="block mb-1 text-sm font-medium">Your Email</label>
                  <Input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleInputChange}
                    required
                    className={`w-full p-2 rounded-md ${isDarkMode ? 'bg-gray-700 text-white' : 'bg-gray-100 text-gray-900'}`}
                  />
                </div>
                <div className="flex-grow">
                  <label htmlFor="message" className="block mb-1 text-sm font-medium">Your Message</label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleInputChange}
                    required
                    className={`w-full p-2 rounded-md ${isDarkMode ? 'bg-gray-700 text-white' : 'bg-gray-100 text-gray-900'} h-full min-h-[150px]`} // Reduced min-height
                  />
                </div>
                <Button type="submit" className={`${buttonStyle} w-full mt-2`}>
                  <Send className="w-4 h-4 mr-2" /> Send Message
                </Button>
              </form>
            </Card>
          </MotionDiv>
        </div>
      </div>
    </div>
  )
}