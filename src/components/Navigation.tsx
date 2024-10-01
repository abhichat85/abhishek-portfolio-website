"use client"
import Link from 'next/link'
import { useTheme } from '@/context/ThemeContext'
import { Button } from './ui/button'
import { Sun, Moon, Home, User, Briefcase, Folder, BookOpen, Mail, MessageSquare } from 'lucide-react'
import { usePathname } from 'next/navigation'
import { motion } from 'framer-motion'

const MotionLink = motion(Link)

export default function Navigation() {
  const { isDarkMode, toggleTheme } = useTheme()
  const pathname = usePathname()

  const bgStyle = isDarkMode
    ? 'bg-gradient-to-r from-gray-900 via-gray-800 to-gray-900 text-white'
    : 'bg-gradient-to-r from-blue-50 via-indigo-50 to-purple-50 text-gray-800'

  const isActive = (path: string) => pathname === path ? 'text-blue-500 font-semibold' : ''

  const linkStyle = "text-gray-500"; // Define the linkStyle variable

  const buttonStyle = "bg-gradient-to-r from-blue-500 to-purple-500 text-white hover:from-blue-600 hover:to-purple-600 rounded-md px-6 py-2 shadow-md transition-all duration-300"

  return (
    <nav className={`fixed w-full z-10 ${bgStyle} transition-colors duration-500`}>
      <div className="container mx-auto px-6 py-4 flex justify-between items-center">
        <Link href="/" className="text-2xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-blue-500 to-purple-500">
          Abhishek Portfolio
        </Link>
        <div className="flex-grow flex justify-center items-center space-x-8">
          {[
            { href: '/', icon: Home, label: 'Home' },
            { href: '/about', icon: User, label: 'About' },
            { href: '/services', icon: Briefcase, label: 'Services' },
            { href: '/works', icon: Folder, label: 'Works' },
            { href: '/blog', icon: BookOpen, label: 'Blog' },
            { href: '/contact', icon: Mail, label: 'Contact' },
          ].map(({ href, icon: Icon, label }) => (
            <MotionLink
              key={href}
              href={href}
              className={`flex items-center hover:text-blue-500 transition-colors duration-300 ${isActive(href)}`}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <Icon className="w-4 h-4 mr-1" />
              {label}
            </MotionLink>
          ))}
        </div>
        <div className="flex items-center space-x-4">
          <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
            <Button 
              onClick={toggleTheme} 
              className="p-2 rounded-full focus:outline-none"
              aria-label="Toggle theme"
            >
              {isDarkMode ? <Sun className="w-5 h-5" /> : <Moon className="w-5 h-5" />}
            </Button>
          </motion.div>
          <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
            <Button className={`${buttonStyle} flex items-center rounded-lg`}>
              <MessageSquare className="w-4 h-4 mr-2" />
              Let's Talk
            </Button>
          </motion.div>
        </div>
      </div>
      {/* <div className="flex space-x-4">
        <Link href="" target="_blank" rel="noopener noreferrer" className={`${linkStyle} hover:text-blue-400 transition-colors duration-300`}>
          Einstein Labs
        </Link>
      </div> */}
    </nav>
  )
}