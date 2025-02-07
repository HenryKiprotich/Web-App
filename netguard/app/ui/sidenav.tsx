import Link from 'next/link';
import { navLinks } from '@/app/ui/nav-links';

export default function SideNav() {
  return (
    <nav className="h-full p-4 bg-gray-700 text-white md:w-64">
      <div className="p-4">
        <img src="/DeepRealLogo.png" alt="Logo" className="h-12" />
      </div>
      <div> 
      {/*<className="bg-gray-800 text-white w-64 h-100 p-4">*/}
      {/* Sidenav Information Section */}      
      <h2 className="text-lg font-bold mb-4">Dashboard Information</h2>
      <p className="text-sm text-gray-300 mb-2">
        Welcome to your dashboard! Here you can:
      </p>
      <ul className="list-disc list-inside text-gray-300 text-sm">
        <li>Analyze comments and track sentiment trends</li>
        <li>View positive and abusive comments per platform</li>
        <li>Get insights for better moderation strategies</li>
      </ul>
      <p className="text-sm text-gray-400 mt-4">
        Remember to check back regularly for updated insights and reports. 
      </p>
      </div>
      {/*<ul className="mt-6 space-y-4">
        {navLinks.map((link) => (
          <li key={link.path}>
            <Link href={link.path} className="block p-2 hover:bg-blue-600 rounded">
              {link.name}
            </Link>
          </li>
        ))}
      </ul>*/}
    </nav>
  );
}

