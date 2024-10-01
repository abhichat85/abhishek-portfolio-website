"use client"
import { useTheme } from '@/context/ThemeContext'

export default function BlogDetails({ id }: { id: string }) {
  const { isDarkMode } = useTheme()

  // In a real application, you would fetch the blog post data based on the id
  const blogPost = {
    title: `Blog Post ${id}`,
    content: `This is the content of blog post ${id}...`,
  }

  return (
    <div className={`min-h-screen ${isDarkMode ? 'bg-gray-900 text-white' : 'bg-white text-black'} pt-24 p-8`}>
      <h1 className="text-3xl font-bold mb-8">{blogPost.title}</h1>
      <div className={`p-6 rounded-lg ${isDarkMode ? 'bg-gray-800' : 'bg-gray-100'}`}>
        <p>{blogPost.content}</p>
      </div>
    </div>
  )
}