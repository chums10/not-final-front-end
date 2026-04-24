import Image from 'next/image';
import Link from 'next/link';

const Navbar = () => {
  return (
    <nav className="w-full">
      {/* Top White Bar */}
      <div className="bg-white px-4 py-2 flex justify-between items-center max-w-7xl mx-auto">
        
        {/* Left Side: Logo + Title */}
        <div className="flex items-center gap-2">
          <Image 
            src="/logo.png" 
            alt="AO3 Logo" 
            width={40} 
            height={40} 
            className="w-10 h-10 object-contain"
            style={{ height: 'auto' }}
            priority
          />
          <h1 className="text-3xl font-serif text-[#990000] font-medium tracking-tight">
            Archive of Our Own
          </h1>
        </div>
        
        {/* Right Side: Log In Link */}
        <div className="text-sm text-gray-800">
          <Link href="#" className="hover:underline font-serif">Log In</Link>
        </div>
      </div>

      {/* Red Navigation Bar */}
      <div className="bg-[#990000] border-b border-[#770000] shadow-sm">
  <div className="max-w-7xl mx-auto px-4 flex items-center justify-between h-10 overflow-hidden">
    
    {/* Navigation Links (Left) */}
    {/* space-x-1 on mobile, md:space-x-4 on desktop */}
    <ul className="flex items-center space-x-1 md:space-x-4 text-white font-bold text-[11px] md:text-sm">
      <li className="hover:bg-[#770000] px-2 py-2 cursor-pointer transition-colors whitespace-nowrap">Fandoms</li>
      <li className="hover:bg-[#770000] px-2 py-2 cursor-pointer transition-colors whitespace-nowrap">Browse</li>
      <li className="hover:bg-[#770000] px-2 py-2 cursor-pointer transition-colors whitespace-nowrap">Search</li>
      <li className="hover:bg-[#770000] px-2 py-2 cursor-pointer transition-colors whitespace-nowrap">About</li>
    </ul>

    {/* Search Area (Right) */}
    <div className="flex items-center gap-1 ml-2">
      {/* Search Input: Grows from w-20 to md:w-72 */}
      <input 
        type="text" 
        className="h-6 w-20 sm:w-32 md:w-72 rounded-full border border-gray-400 px-3 text-[10px] md:text-xs outline-none text-black bg-gradient-to-b from-[#eee] to-white shadow-[inset_0px_1px_2px_rgba(0,0,0,0.2)] flex-shrink"
        placeholder="Search"
      />
      
      {/* Search Button */}
      <button className="bg-gradient-to-b from-[#fff] to-[#e1e1e1] hover:from-white hover:to-white text-gray-800 px-2 md:px-3 h-6 rounded border border-gray-400 text-[10px] md:text-xs font-bold shadow-sm active:shadow-inner whitespace-nowrap">
        Search
      </button>
    </div>  

        </div>
      </div>
    </nav>
  );
};

export default Navbar;