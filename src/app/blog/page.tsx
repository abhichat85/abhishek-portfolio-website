"use client"
import { Card } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { useTheme } from '@/context/ThemeContext'
import { motion } from 'framer-motion'
import Image from "next/image"

const MotionDiv = motion.div

export default function Blog() {
  const { isDarkMode } = useTheme()

  const bgStyle = isDarkMode
    ? 'bg-gradient-to-br from-gray-900 to-black text-white'
    : 'bg-gradient-to-br from-gray-50 to-white text-gray-800'

  const cardStyle = isDarkMode
    ? 'bg-gray-800 border-gray-700'
    : 'bg-white border-gray-200'

  const gradientText = "bg-clip-text text-transparent bg-gradient-to-r from-blue-500 to-purple-500"

  const blogPosts = [
    { title: "The Future of Web Development", category: "Technology", image: "/blog-1.jpg" },
    { title: "Designing for Accessibility", category: "Design", image: "/blog-2.jpg" },
    { title: "Mastering React Hooks", category: "Programming", image: "/blog-3.jpg" },
    { title: "The Rise of AI in UX Design", category: "AI", image: "/blog-4.jpg" },
  ]

  return (
    <div className={`min-h-screen font-['Bricolage_Grotesque',sans-serif] ${bgStyle} pt-24 p-8 transition-colors duration-500`}>
      <div className="max-w-7xl mx-auto">
        <h1 className={`text-4xl font-bold mb-8 ${gradientText}`}>Blog Posts</h1>
        <div className="grid md:grid-cols-2 gap-8">
          {blogPosts.map((post, index) => (
            <Card key={post.title} isDarkMode={isDarkMode} className={`overflow-hidden rounded-3xl ${cardStyle} transition-all duration-500`}>
              <MotionDiv
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <Image src={post.image} alt={post.title} width={600} height={300} className="w-full h-48 object-cover" />
                <div className="p-6">
                  <Badge className={`mb-2 ${isDarkMode ? 'bg-blue-500 text-white' : 'bg-purple-500 text-white'}`}>{post.category}</Badge>
                  <h2 className="text-2xl font-bold mb-2">{post.title}</h2>
                  <p className={`${isDarkMode ? 'text-gray-300' : 'text-gray-600'}`}>
                    Short excerpt of the blog post goes here...
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