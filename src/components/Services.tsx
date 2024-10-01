"use client"
import { useState } from 'react'
import { Card } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { ChevronLeft, ChevronRight, Phone, Copy, Facebook, Github, Youtube } from "lucide-react"
import Image from "next/image"

export default function Services() {
  const [currentPage, setCurrentPage] = useState(1)
  const projectsPerPage = 3
  const totalPages = 100 // Assuming we have 100 pages of projects

  const projects = [
    {
      title: "FlowSaaS - SaaS Application Tools",
      category: "SaaS App | UI UX Design",
      image: "/placeholder.svg?height=400&width=600",
      link: "#"
    },
    {
      title: "AIMug - AI Writing Application Tools",
      category: "Product Design | Application",
      image: "/placeholder.svg?height=400&width=600",
      link: "#"
    },
    {
      title: "FlowArch - Architecture Service Website",
      category: "UI UX Design | Development",
      image: "/placeholder.svg?height=400&width=600",
      link: "#"
    }
  ]

  const handlePageChange = (page: number) => {
    setCurrentPage(page)
    // Here you would typically fetch new data for the selected page
  }

  const renderPaginationButton = (page: number | string) => (
    <Button
      key={page}
      variant={currentPage === page ? "secondary" : "outline"}
      size="icon"
      onClick={() => typeof page === 'number' && handlePageChange(page)}
      className="w-10 h-10"
    >
      {page}
    </Button>
  )

  const renderPagination = () => {
    const items = []
    items.push(
      <Button key="prev" variant="outline" size="icon" onClick={() => handlePageChange(Math.max(1, currentPage - 1))} className="w-10 h-10">
        <ChevronLeft className="h-4 w-4" />
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
      <Button key="next" variant="outline" size="icon" onClick={() => handlePageChange(Math.min(totalPages, currentPage + 1))} className="w-10 h-10">
        <ChevronRight className="h-4 w-4" />
      </Button>
    )

    return items
  }

  return (
    <div className="min-h-screen bg-gradient-to-b from-purple-950 via-gray-900 to-black text-white p-8">
      <div className="grid md:grid-cols-3 gap-8">
        <Card className="md:col-span-1 bg-black p-6 rounded-xl shadow-[inset_-12px_-8px_40px_#46464620] border border-gray-800" isDarkMode={true}>
          <div className="relative h-64 md:h-80 mb-4 rounded-xl overflow-hidden">
            <Image 
              src="/placeholder.svg?height=400&width=300" 
              alt="Cris Rayaan" 
              layout="fill" 
              objectFit="cover"
            />
          </div>
          <h2 className="text-2xl font-bold mb-2">Abhishek👋</h2>
          <p className="text-gray-400 mb-4">
            A Passionate Full Stack Developer 💻 & Product Designer having 12 years of Experiences over 24+ Country Worldwide.
          </p>
          <div className="flex space-x-4 mb-4">
            <Button className="flex-1 bg-blue-600 hover:bg-blue-700">
              <Phone className="mr-2 h-4 w-4" /> Book A call
            </Button>
            <Button variant="outline" className="flex-1">
              <Copy className="mr-2 h-4 w-4" /> Copy Email
            </Button>
          </div>
          <div className="flex justify-center space-x-4">
            <Button variant="ghost" size="icon">
              <Facebook className="h-5 w-5" />
            </Button>
            {/* <Button variant="ghost" size="icon">
              <Pinterest className="h-5 w-5" />
            </Button> */}
            <Button variant="ghost" size="icon">
              <Github className="h-5 w-5" />
            </Button>
            <Button variant="ghost" size="icon">
              <Youtube className="h-5 w-5" />
            </Button>
          </div>
        </Card>

        <Card className="md:col-span-2 bg-black p-8 rounded-xl shadow-[inset_-12px_-8px_40px_#46464620] border border-gray-800" isDarkMode={true}>
          <h1 className="text-4xl font-bold mb-4">Check Out My Latest <span className="text-blue-500">Projects</span></h1>
          <p className="text-gray-400 mb-8">
            I'm here to help if you're searching for a product designer to bring your idea to life or a
            design partner to help take your business to the next level.
          </p>

          <div className="space-y-8">
            {projects.map((project, index) => (
              <Card key={index} className="bg-gray-900 overflow-hidden" isDarkMode={true}>
                <div className="relative h-64 md:h-80">
                  <Image 
                    src={project.image} 
                    alt={project.title} 
                    layout="fill" 
                    objectFit="cover"
                  />
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-semibold mb-2">{project.title}</h3>
                  <p className="text-gray-400 mb-4">{project.category}</p>
                  <Button asChild variant="outline">
                    <a href={project.link}>Visit Site →</a>
                  </Button>
                </div>
              </Card>
            ))}
          </div>

          <div className="flex justify-center mt-8 space-x-2">
            {renderPagination()}
          </div>
        </Card>
      </div>

      <div className="mt-12 overflow-hidden">
        <div className="animate-marquee whitespace-nowrap">
          {[...Array(10)].map((_, i) => (
            <span key={i} className="text-4xl font-bold mx-4">
              Work Together <span className="text-blue-500">•</span> Let's 👋 Work Together <span className="text-blue-500">•</span>
            </span>
          ))}
        </div>
      </div>
    </div>
  )
}