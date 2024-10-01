"use client"
import { useState, useEffect } from 'react'
import { Card } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { useTheme } from '@/context/ThemeContext'
import Image from "next/image"
import { motion, useMotionValue, useTransform } from 'framer-motion'
import { Phone, Copy, Facebook, Github, Youtube, Code, Palette, Smartphone, Briefcase, Zap } from "lucide-react"
import { useSearchParams } from 'next/navigation'

const MotionDiv = motion.div
const MotionCard = motion(Card)

export default function Services() {
  const [currentPage, setCurrentPage] = useState(1)
  const totalPages = 2 // Adjust based on your actual number of service pages
  const searchParams = useSearchParams()
  const fromPortfolio = searchParams.get('from') === 'portfolio'

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

  const services = [
    {
      title: "UI/UX Design",
      icon: Palette,
      description: "Create intuitive and visually appealing user interfaces for web and mobile applications.",
      features: ["User Research", "Wireframing", "Prototyping", "User Testing"],
      color: "from-pink-500 to-rose-500"
    },
    {
      title: "Web Development",
      icon: Code,
      description: "Build responsive and performant web applications using modern technologies and best practices.",
      features: ["Frontend Development", "Backend Development", "API Integration", "Performance Optimization"],
      color: "from-blue-500 to-cyan-500"
    },
    {
      title: "Mobile App Development",
      icon: Smartphone,
      description: "Develop cross-platform mobile applications for iOS and Android devices.",
      features: ["Native App Development", "Cross-platform Development", "App Store Optimization", "Mobile UI/UX Design"],
      color: "from-green-500 to-emerald-500"
    },
    {
      title: "Product Design",
      icon: Briefcase,
      description: "Guide product development from concept to launch, ensuring market fit and user satisfaction.",
      features: ["Market Research", "Product Strategy", "MVP Development", "User Feedback Integration"],
      color: "from-purple-500 to-indigo-500"
    }
  ]

  const handlePageChange = (page: number) => {
    setCurrentPage(page)
    // Here you would typically fetch new data for the selected page
  }

  useEffect(() => {
    if (fromPortfolio) {
      // Scroll to the services section if coming from portfolio
      const servicesSection = document.getElementById('services-section')
      if (servicesSection) {
        servicesSection.scrollIntoView({ behavior: 'smooth' })
      }
    }
  }, [fromPortfolio])

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

    for (let i = 1; i <= totalPages; i++) {
      items.push(renderPaginationButton(i))
    }

    items.push(
      <Button key="next" onClick={() => handlePageChange(Math.min(totalPages, currentPage + 1))} className="w-10 h-10 rounded-xl">
        {'>'}
      </Button>
    )

    return items
  }

  return (
    <div className={`min-h-screen font-['Bricolage_Grotesque',sans-serif] ${bgStyle} pt-24 p-8 transition-colors duration-500 relative overflow-hidden`}>
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
                  <Zap className="w-6 h-6" />
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

        <div id="services-section" className="md:col-span-2 h-full">
          <Card isDarkMode={isDarkMode} className={`${cardStyle} p-8 rounded-2xl shadow-[inset_-12px_-8px_40px_#46464620] transition-all duration-500 h-full flex flex-col`}>
            <h1 className={`text-4xl font-bold mb-4 ${gradientText}`}>My Services</h1>
            <p className={`mb-8 ${isDarkMode ? 'text-gray-300' : 'text-gray-600'}`}>
              I offer a range of services to help bring your digital ideas to life. From design to development, I've got you covered.
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 flex-grow overflow-y-auto">
              {services.map((service, index) => (
                <MotionDiv
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                >
                  <Card isDarkMode={isDarkMode} className={`${cardStyle} overflow-hidden rounded-xl shadow-[inset_-12px_-8px_40px_#46464620] transition-all duration-300 hover:shadow-xl h-full flex flex-col`}>
                    <div className={`bg-gradient-to-r ${service.color} p-4 flex items-center`}>
                      <service.icon className="w-8 h-8 text-white mr-4" />
                      <h3 className="text-xl font-semibold text-white">{service.title}</h3>
                    </div>
                    <div className="p-4 flex flex-col flex-grow">
                      <p className={`${isDarkMode ? 'text-gray-300' : 'text-gray-600'} text-sm mb-4 flex-grow`}>{service.description}</p>
                      <ul className="list-disc list-inside mb-4">
                        {service.features.map((feature, i) => (
                          <li key={i} className={`${isDarkMode ? 'text-gray-300' : 'text-gray-600'} text-sm`}>{feature}</li>
                        ))}
                      </ul>
                      <Button className={`${buttonStyle} text-sm py-1 px-4 self-start`}>
                        Learn More
                      </Button>
                    </div>
                  </Card>
                </MotionDiv>
              ))}
            </div>

            <div className="flex justify-center mt-8 space-x-2">
              {renderPagination()}
            </div>
          </Card>
        </div>
      </div>
    </div>
  )
}