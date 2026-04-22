import Link from 'next/link';

const Footer = () => {
  return (
    <footer className="bg-[#990000] text-white py-8 mt-12 border-t-4 border-[#770000]">
      <div className="max-w-7xl mx-auto px-4 grid grid-cols-1 md:grid-cols-3 gap-8">
        
        {/* About Column */}
        <div>
          <h3 className="font-bold text-lg mb-3">About the Archive</h3>
          <ul className="space-y-1 text-sm">
            <li><Link href="#" className="underline hover:text-gray-200">Site Map</Link></li>
            <li><Link href="#" className="underline hover:text-gray-200">Diversity Statement</Link></li>
            <li><Link href="#" className="underline hover:text-gray-200">Terms of Service</Link></li>
            <li><Link href="#" className="underline hover:text-gray-200">Content Policy</Link></li>
            <li><Link href="#" className="underline hover:text-gray-200">Privacy Policy</Link></li>
            <li><Link href="#" className="underline hover:text-gray-200">DMCA Policy</Link></li>
            <li><Link href="#" className="underline hover:text-gray-200">Site Status</Link></li>
          </ul>
        </div>

        {/* Contact Column */}
        <div>
          <h3 className="font-bold text-lg mb-3">Contact Us</h3>
          <ul className="space-y-1 text-sm">
            <li><Link href="#" className="underline hover:text-gray-200">Policy Questions & Abuse Reports</Link></li>
            <li><Link href="#" className="underline hover:text-gray-200">Technical Support & Feedback</Link></li>
          </ul>
        </div>

        {/* Development Column */}
        <div>
          <h3 className="font-bold text-lg mb-3">Development</h3>
          <ul className="space-y-1 text-sm">
            <li>otwarchive v0.9.472.2</li>
            <li><Link href="#" className="underline hover:text-gray-200">Known Issues</Link></li>
            <li>GPL-2.0-or-later by the OTW</li>
          </ul>
        </div>

      </div>
    </footer>
  );
};

export default Footer;