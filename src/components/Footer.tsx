import { useTheme } from '@/context/ThemeContext'

export default function Footer() {
  const { isDarkMode } = useTheme()

  return (
    <footer className={`${isDarkMode ? 'bg-gray-900 text-white' : 'bg-gray-100 text-black'} py-8`}>
      <div className="container mx-auto px-6">
        <div className="flex flex-wrap justify-between">
          <div className="w-full md:w-1/4 mb-6 md:mb-0">
            <h3 className="text-lg font-semibold mb-2">About Us</h3>
            <p className="text-sm">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
          </div>
          <div className="w-full md:w-1/4 mb-6 md:mb-0">
            <h3 className="text-lg font-semibold mb-2">Quick Links</h3>
            <ul className="text-sm">
              <li className="mb-1"><a href="#" className="hover:underline">Home</a></li>
              <li className="mb-1"><a href="#" className="hover:underline">Services</a></li>
              <li className="mb-1"><a href="#" className="hover:underline">Contact</a></li>
              <li className="mb-1"><a href="#" className="hover:underline">Blog</a></li>
            </ul>
          </div>
          <div className="w-full md:w-1/4 mb-6 md:mb-0">
            <h3 className="text-lg font-semibold mb-2">Contact Us</h3>
            <p className="text-sm">123 Street Name, City, Country</p>
            <p className="text-sm">Email: info@example.com</p>
            <p className="text-sm">Phone: +1 234 567 890</p>
          </div>
          <div className="w-full md:w-1/4">
            <h3 className="text-lg font-semibold mb-2">Follow Us</h3>
            <div className="flex space-x-4">
              {/* Add social media icons here */}
            </div>
          </div>
        </div>
        <div className="mt-8 text-center text-sm">
          © 2023 Your Company Name. All rights reserved.
        </div>
      </div>
    </footer>
  )
}