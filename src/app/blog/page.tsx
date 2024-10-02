"use client"
import { useState } from 'react'
import { Card } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { useTheme } from '@/context/ThemeContext'
import Image from "next/image"
import { motion, useMotionValue, useTransform } from 'framer-motion'
import { Phone, Copy, Facebook, Github, Youtube } from "lucide-react"
import StarsCanvas from "@/components/Stars"

const MotionDiv = motion.div
const MotionCard = motion(Card)

const Card3D = ({ children, className }: { children: React.ReactNode; className?: string }) => {
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

export default function Blog() {
  const [currentPage, setCurrentPage] = useState(1)
  const totalPages = 100 // Assuming we have 100 pages of blogs

  const { isDarkMode } = useTheme()

  const bgStyle = isDarkMode
    ? 'bg-gradient-to-br from-gray-900 to-black text-white'
    : 'bg-gradient-to-br from-gray-50 to-white text-gray-800'

  const cardStyle = isDarkMode
    ? 'bg-gray-800/30 border-gray-700/50 backdrop-blur-md'
    : 'bg-white/30 border-gray-200/50 backdrop-blur-md'

  const gradientText = "bg-clip-text text-transparent bg-gradient-to-r from-blue-500 to-purple-500"
  const buttonStyle = "bg-gradient-to-r from-blue-500 to-purple-500 text-white hover:from-blue-600 hover:to-purple-600 rounded-md px-6 py-2 shadow-md transition-all duration-300"

  const createMotionValues = () => ({
    x: useMotionValue(0),
    y: useMotionValue(0),
    rotateX: useTransform(useMotionValue(0), [-100, 100], [30, -30]),
    rotateY: useTransform(useMotionValue(0), [-100, 100], [-30, 30]),
  })

  const blogs = [
    {
      title: "Want To Upgrade Your Brain? Stop Doing These 7 Things",
      category: "Development",
      image: "/placeholder.svg?height=400&width=600",
      readTime: "15 min read",
      date: "Nov 8, 2023"
    },
    {
      title: "Want To Upgrade Your Brain? Stop Doing These 7 Things",
      category: "Development",
      image: "/placeholder.svg?height=400&width=600",
      readTime: "15 min read",
      date: "Nov 8, 2023"
    },
    {
      title: "Want To Upgrade Your Brain? Stop Doing These 7 Things",
      category: "Development",
      image: "/placeholder.svg?height=400&width=600",
      readTime: "15 min read",
      date: "Nov 8, 2023"
    },
    {
      title: "Want To Upgrade Your Brain? Stop Doing These 7 Things",
      category: "Development",
      image: "/placeholder.svg?height=400&width=600",
      readTime: "15 min read",
      date: "Nov 8, 2023"
    }
  ]

  const handlePageChange = (page: number) => {
    setCurrentPage(page)
    // Here you would typically fetch new data for the selected page
  }

  const renderPaginationButton = (page: number | string) => (
    <Button
      key={page}
      onClick={() => typeof page === 'number' && handlePageChange(page)}
      className={`w-10 h-10 rounded-xl ${currentPage === page ? 'bg-blue-500 text-white' : 'bg-gray-200 text-gray-800'}`}
    >
      {page}
    </Button>
  )

  const renderPagination = () => {
    const items = []
    items.push(
      <Button key="prev" onClick={() => handlePageChange(Math.max(1, currentPage - 1))} className="w-10 h-10 rounded-xl">
        {'<'}
      </Button>
    )

    items.push(renderPaginationButton(1))

    if (currentPage > 3) {
      items.push(<span key="ellipsis1" className="px-2">...</span>)
    }

    for (let i = Math.max(2, currentPage - 1); i <= Math.min(currentPage + 1, totalPages - 1); i++) {
      items.push(renderPaginationButton(i))
    }

    if (currentPage < totalPages - 2) {
      items.push(<span key="ellipsis2" className="px-2">...</span>)
    }

    items.push(renderPaginationButton(totalPages))

    items.push(
      <Button key="next" onClick={() => handlePageChange(Math.min(totalPages, currentPage + 1))} className="w-10 h-10 rounded-xl">
        {'>'}
      </Button>
    )

    return items
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

        <div className="max-w-8xl grid md:grid-cols-3 gap-8 mt-12 mb-12">
          <Card3D className="md:col-span-1">
            <MotionCard 
              isDarkMode={isDarkMode}
              className={`p-8 rounded-2xl ${cardStyle} shadow-lg transition-all duration-300 hover:shadow-xl transform-gpu h-full`}
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
          </Card3D>

          <Card3D className="md:col-span-2">
            <Card isDarkMode={isDarkMode} className={`${cardStyle} p-8 rounded-2xl shadow-[inset_-12px_-8px_40px_#46464620] transition-all duration-500 h-full flex flex-col`}>
              <h1 className={`text-4xl font-bold mb-4 ${gradientText}`}>My Recent Article and Publications</h1>
              <p className={`mb-8 ${isDarkMode ? 'text-gray-300' : 'text-gray-600'}`}>
                I'm here to help if you're searching for a product designer to bring your idea to life or a
                design partner to help take your business to the next level.
              </p>

              <div className="flex-grow overflow-y-auto space-y-6">
                {blogs.map((blog, index) => (
                  <MotionDiv
                    key={index}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                  >
                    <Card isDarkMode={isDarkMode} className={`${cardStyle} overflow-hidden rounded-xl shadow-[inset_-12px_-8px_40px_#46464620] transition-all duration-300 hover:shadow-xl`}>
                      <div className="flex flex-col md:flex-row">
                        <div className="relative h-24 md:h-full md:w-1/3">
                          <Image 
                            src={blog.image} 
                            alt={blog.title} 
                            layout="fill" 
                            objectFit="cover"
                          />
                          <Badge className={`absolute top-2 left-2 ${isDarkMode ? 'bg-blue-500 text-white' : 'bg-purple-500 text-white'}`}>{blog.category}</Badge>
                        </div>
                        <div className="p-4 md:w-2/3">
                          <h3 className="text-lg font-semibold mb-2">{blog.title}</h3>
                          <p className={`${isDarkMode ? 'text-gray-300' : 'text-gray-600'} text-sm mb-2`}>
                            {blog.readTime} • {blog.date}
                          </p>
                          <Button className={`${buttonStyle} text-sm py-1 px-4`}>Read More</Button>
                        </div>
                      </div>
                    </Card>
                  </MotionDiv>
                ))}
              </div>

              <div className="flex justify-center mt-8 space-x-2">
                {renderPagination()}
              </div>
            </Card>
          </Card3D>
        </div>
      </div>
    </div>
  )
}