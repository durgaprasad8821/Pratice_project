'use client';

import Link from 'next/link';
import { FiHome, FiBriefcase, FiTrendingUp, FiGlobe, FiMonitor, FiActivity, FiFilm, FiShoppingBag, FiUsers } from 'react-icons/fi';
import { PiHandshakeFill } from 'react-icons/pi';
import { FaMoneyBillWave } from 'react-icons/fa';

export default function Asidebar({ isOpen }) {
  const menuItems = [
    { icon: FiHome, label: 'Home', href: '/' },
    { icon: FiBriefcase, label: 'Jobs', href: '/Job' },
    { icon: PiHandshakeFill, label: 'Shelter', href: 'Shelter' },
    { icon: FaMoneyBillWave, label: 'Bizz', href: '/bizz' },
  ];

  const trendingNews = [
    { icon: FiTrendingUp, title: 'Sports', href: '/News/sports' },
    { icon: FiGlobe, title: 'World', href: '/News/world' },
    { icon: FiBriefcase, title: 'Business', href: '/News/business' },
    { icon: FiMonitor, title: 'Technology', href: '/News/technology' },
    { icon: FiActivity, title: 'Health', href: '/News/health' },
    { icon: FiFilm, title: 'Entertainment', href: '/News/entertainment' },
    { icon: FiShoppingBag, title: 'Markets', href: '/News/marketing' },
    { icon: FiUsers, title: 'Politics', href: '/News/political' },
  ];

  return (
    <aside
      className={`fixed border left-0 w-48 h-screen bg-white shadow-md z-50 transition-transform duration-300 overflow-y-auto scrollbar-thin scrollbar-thumb-gray-300 scrollbar-track-gray-100
      ${isOpen ? 'translate-x-0 top-[65px]' : '-translate-x-full top-[74px]'} md:translate-x-0 `}
    >
      {/* Sidebar Content */}
      <nav className="flex flex-col p-4">
        <ul className="space-y-1">
          {menuItems.map((item, index) => (
            <li key={index}>
              <Link href={item.href} className="flex items-center space-x-2 p-2 hover:bg-gray-200 rounded-lg">
                <item.icon className="text-xl" />
                <span>{item.label}</span>
              </Link>
            </li>
          ))}
        </ul>

        <hr className="my-2" />

        <ul className="space-y-1">
          {trendingNews.map((item, index) => (
            <li key={index}>
              <Link href={item.href} className="flex items-center space-x-2 p-2 hover:bg-gray-200 rounded-lg">
                <item.icon className="text-xl" />
                <span>{item.title}</span>
              </Link>
            </li>
          ))}
        </ul>
      </nav>
    </aside>
  );
}
