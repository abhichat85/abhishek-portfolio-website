"use client"
import { Card } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { useTheme } from '@/context/ThemeContext'
import { motion } from 'framer-motion'
import { Mail, Phone, MapPin } from 'lucide-react'

const MotionDiv = motion.div

export default function Contact() {
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
        <h1 className={`text-4xl font-bold mb-8 ${gradientText}`}>Contact Me</h1>
        <Card isDarkMode={isDarkMode} className={`p-8 rounded-3xl ${cardStyle} transition-all duration-500`}>
          <MotionDiv
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <div className="grid md:grid-cols-2 gap-8">
              <div>
                <h2 className="text-2xl font-bold mb-4">Get in Touch</h2>
                <p className={`mb-6 ${isDarkMode ? 'text-gray-300' : 'text-gray-600'}`}>
                  I'm always open to new opportunities and exciting projects. Feel free to reach out!
                </p>
                <div className="space-y-4">
                  <div className="flex items-center">
                    <Mail className="w-6 h-6 mr-2 text-blue-500" />
                    <span>abhishek@example.com</span>
                  </div>
                  <div className="flex items-center">
                    <Phone className="w-6 h-6 mr-2 text-blue-500" />
                    <span>+1 (123) 456-7890</span>
                  </div>
                  <div className="flex items-center">
                    <MapPin className="w-6 h-6 mr-2 text-blue-500" />
                    <span>New York, NY</span>
                  </div>
                </div>
              </div>
              <div>
                <h2 className="text-2xl font-bold mb-4">Send a Message</h2>
                <form>
                  <div className="mb-4">
                    <label htmlFor="name" className="block mb-2">Name</label>
                    <input type="text" id="name" className="w-full p-2 rounded-md border" />
                  </div>
                  <div className="mb-4">
                    <label htmlFor="email" className="block mb-2">Email</label>
                    <input type="email" id="email" className="w-full p-2 rounded-md border" />
                  </div>
                  <div className="mb-4">
                    <label htmlFor="message" className="block mb-2">Message</label>
                    <textarea id="message" className="w-full p-2 rounded-md border" rows="4"></textarea>
                  </div>
                  <Button type="submit" className="bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600">Send Message</Button>
                </form>
              </div>
            </div>
          </MotionDiv>
        </Card>
      </div>
    </div>
  )
}