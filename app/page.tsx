import Image from 'next/image';
import Navbar from '../components/Navbar';

export default function Home() {
  return (
    <main>
      <Navbar />

      <div className="w-full max-w-7xl mx-auto px-4 py-12 flex flex-col md:flex-row items-center md:items-start justify-center gap-12 lg:gap-40">
        
        {/* Left Side: Large Logo */}
        <div className="w-full max-w-[300px] md:max-w-[300px] flex-shrink-1 hidden md:block">
          <Image 
            src="/logo.png" 
            alt="AO3 Logo" 
            width={250} 
            height={250} 
            className="w-full h-auto"
            style={{ height: 'auto' }}
            priority
          />
        </div>

        {/* Right Side: Login Form Area */}
        <div className="w-full max-w-lg">
          <h2 className="text-2xl text-gray-800 mb-4 font-serif">Log in</h2>

          {/* The Gray Login Box */}
          <div className="bg-[#dcdcdc] border border-gray-400 p-1 shadow-md">
            <form className=" border border-gray-300 p-6 space-y-0">
              
              <div className="flex border-b border-gray-100 py-3">
                <label className="w-1/3 text-sm font-medium text-gray-700 pr-4 self-center">
                  Username or email:
                </label>
                <input 
                  type="text" 
                  className="w-2/3 border  bg-white border-gray-400 p-1 bg-white shadow-[inset_0px_1px_3px_rgba(0,0,0,0.1)] outline-none" 
                />
              </div>

              <div className="flex border-b border-gray-100 py-3">
                <label className="w-1/3 text-sm font-medium text-gray-700 pr-4 self-center">
                  Password:
                </label>
                <input 
                  type="password" 
                  className="w-2/3 border  bg-white border-gray-400 p-1 bg-white shadow-[inset_0px_1px_3px_rgba(0,0,0,0.1)] outline-none" 
                />
              </div>

              <div className="flex py-3">
                <label className="w-1/3 text-sm text-gray-700 pr-4">Remember me</label>
                <div className="w-2/3">
                  <input type="checkbox" className="mt-1" />
                </div>
              </div>

              <div className="flex justify-end pt-4">
                <button 
                  type="submit" 
                  className="bg-[#e1e1e1] hover:bg-gray-200 border border-gray-400 px-6 py-1 text-sm shadow-sm font-medium text-gray-800"
                >
                  Log in
                </button>
              </div>
            </form>
          </div>

          <div className="mt-4 text-md font-serif">
            <p className="text-gray-800">
              Forgot your password or username? <span className="text-[#241c1a] underline cursor-pointer hover:text-gray-500">Reset your password.</span>
            </p>
            <p className="text-gray-800 mt-1">
              Don't have an account? <span className="text-[#241c1a] underline cursor-pointer hover:text-gray-500">Request an invitation.</span>
            </p>
          </div>
        </div>
      </div>
    </main>
  );
}