const Footer = () => {
    return (
      <footer className="bg-gray-900 text-white py-2 text-sm">
        <div className="container mx-auto px-6">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-center md:text-left mb-4 md:mb-0">
              Copyright &copy; Caraga State University {new Date().getFullYear()}
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-gray-300 hover:text-white transition-colors duration-200">
                Privacy Policy
              </a>
              <a href="#" className="text-gray-300 hover:text-white transition-colors duration-200">
                Terms of Service
              </a>
              <a href="#" className="text-gray-300 hover:text-white transition-colors duration-200">
                Contact
              </a>
            </div>
          </div>
        </div>
      </footer>
    )
  }
  
  export default Footer
  
  