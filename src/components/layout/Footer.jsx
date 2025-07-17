const Footer = () => {
    return (
      <footer className="bg-gray-900 text-white py-2 text-sm">
        <div className="container mx-auto md:px-16">
          {/*For part 1 footer*/}
          <div className="w-full text-center md:py-2 text-[9px] md:text-xs">
            <p>For concerns and Inquiry about the website please visit<br></br><a
              href="https://ocid.carsu.edu.ph"
              className="text-[#2356f6] underline"
              target="_blank"
            >
              Office of Curriculum and Instruction Development (OCID)
            </a><br></br>or email at <a className="text-[#2356f6]">ocid@carsu.edu.ph</a></p>
          </div>
          {/*For part 2 images*/}
            <div className="flex flex-col md:flex-row items-center md:gap-4 md:mx-0 mx-4">
              <div className="flex items-center md:gap-0 md:mx-0">
                  <img src='/images/CSU-Official-Seal_1216-x-2009-1.svg'
                  className="flex flex-row w-16 h-16 md:w-24 md:h-28 "
                  ></img>
                  <img src='/images/Hi-Res-BAGONG-PILIPINAS-LOGO-1474x1536-1-1.svg'
                  className="flex flex-row w-16 h-16 md:w-24 md:h-28 ml-auto md:ml-0"
                  ></img>
              </div>
              <p className="text-center text-[9px] md:text-xs md:text-left  md:mb-0">
              Copyright &copy; Caraga State University {new Date().getFullYear()}
              </p>
              <div className="text-[9px] md:text-xs text-center space-x-4 md:mt-0 md:ml-auto">
              <a href="#" className="text-white hover:underline transition-colors duration-200">
                Privacy Policy
              </a>
              <a href="#" className="text-white hover:underline transition-colors duration-200">
                Terms of Service
              </a>
              <a href="#" className="text-white hover:underline transition-colors duration-200">
                Contact
              </a>
            </div>
            </div>
          {/*For part 3 texts and links*/}
          <div className="w-full flex flex-col md:flex-row md:items-center md:mx-16">
          </div>
        </div>
      </footer>
    )
  }
  
  export default Footer
  
  