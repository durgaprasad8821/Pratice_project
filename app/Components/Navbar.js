import { FiMenu, FiX, FiSearch } from 'react-icons/fi';
import Image from 'next/image';

export default function Navbar({setIsSidebarOpen , value}) {
  return (
    <>
    <nav className="bg-white border p-4 fixed w-full top-0 z-45">
      <div className="container mx-auto flex flex-col md:flex-row justify-between items-center">
        {/* Top Row (Mobile) - Logo & Get App Button */}
        <div className="w-full flex justify-between items-center md:w-1/2">
        <div className='flex'>
        <button className="md:hidden text-blue-600 text-2xl p-0 mr-3" onClick={() => setIsSidebarOpen((prev) => !prev)}>
             {value ? <FiX/> : <FiMenu />}
          </button>
          <div className="flex items-center space-x-2">
            <Image src="https://podiemapp.com/_next/static/media/podiem.6e3043e9.svg" alt="Logo" width={40} height={40} />
            <div className="text-xl font-bold text-blue-600">Podiem</div>
          </div>
          </div>
          <a href="https://www.podiemapp.com/" target="_blank" rel="noopener noreferrer">
          <button className="md:hidden bg-blue-600 text-white px-4 py-2 rounded-lg">
            Get App
          </button>
          </a>
        </div>
        
        <div className="w-full md:w-1/2 flex items-center mt-2 md:mt-0">
          <div className="relative flex-grow">
            <input 
              type="text" 
              placeholder="Search jobs, rentals, topics..." 
              className="w-full p-2 pl-10 border border-gray-300 rounded-lg focus:outline-none"
            />
            <FiSearch className="absolute left-3 top-3 text-gray-500" />
          </div>
          <a href="https://www.podiemapp.com/" target="_blank" rel="noopener noreferrer">
          <button className="hidden md:block bg-blue-600 text-white px-4 py-2 ml-4 rounded-lg">
            Get App
          </button>
          </a>
        </div>
      </div>
    </nav>
    </>
  );
}
