const Footer = () => {
    return (
      <footer className="bg-gray-900 text-white py-2 text-sm">
        <div className="container mx-auto px-6">
          {/*For part 1 footer*/}
          <div className="w-full md:pb-5">
            <p>For concerns and Inquiry about the website please visit<br></br><a
              href="https://ocid.carsu.edu.ph"
              className="text-[#2356f6] underline"
              target="_blank"
            >
              Office of Curriculum and Instruction Development (OCID)
            </a><br></br>or email at ocid@carsu.edu.ph</p>
          </div>
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
  
  