"use client"
import { useTheme } from '@/context/ThemeContext'
import Link from 'next/link'
import Image from 'next/image'

const blogPosts = [
  { id: 1, title: 'First Blog Post', excerpt: 'This is the first blog post...', image: '/placeholder.jpg' },
  { id: 2, title: 'Second Blog Post', excerpt: 'This is the second blog post...', image: '/placeholder.jpg' },
  // Add more blog posts as needed
]

export default function Blogs() {
  const { isDarkMode } = useTheme()

  return (
    <div className={`min-h-screen ${isDarkMode ? 'bg-gray-900 text-white' : 'bg-white text-black'} pt-24 p-8`}>
      <h1 className="text-3xl font-bold mb-8">Blog Posts</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {blogPosts.map((post) => (
          <div key={post.id} className={`p-6 rounded-lg ${isDarkMode ? 'bg-gray-800' : 'bg-gray-100'}`}>
            <Image src={post.image} alt={post.title} width={300} height={200} className="w-full h-48 object-cover rounded-lg mb-4" />
            <h2 className="text-xl font-semibold mb-2">{post.title}</h2>
            <p className="mb-4">{post.excerpt}</p>
            <Link href={`/blog/${post.id}`} className="text-blue-500 hover:underline">
              Read more
            </Link>
          </div>
        ))}
      </div>
    </div>
  )
}