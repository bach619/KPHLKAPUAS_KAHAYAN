import React, { useState, useEffect, useRef } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, ChevronDown, ChevronRight } from 'lucide-react';

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);
  const location = useLocation();
  
  // Timeout ref for handling hover delays
  const timeoutRef = useRef<NodeJS.Timeout | null>(null);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    setIsOpen(false);
    setActiveDropdown(null);
  }, [location.pathname]);

  // For mobile clicks
  const handleDropdownClick = (menu: string) => {
    setActiveDropdown(activeDropdown === menu ? null : menu);
  };

  const isHomePage = location.pathname === '/';

  const checkIsActive = (item: {
    path?: string;
    items?: { name: string; path: string }[];
  }) => {
    const currentPath = location.pathname;
    if (item.path && currentPath.startsWith(item.path)) return true;
    if (item.items && item.items.some(sub => currentPath === sub.path)) return true;
    return false;
  };

  const navItems = [
    {
      label: 'Profil',
      path: '/profil',
      items: [
        { name: 'Sejarah', path: '/history' },
        { name: 'Visi & Misi', path: '/visi-misi' },
        { name: 'Struktur Organisasi', path: '/structure' },
        { name: 'Tugas Pokok', path: '/tupoksi' },
      ],
    },
    {
      label: 'Layanan Publik',
      path: '/layanan-publik',
      items: [
        { name: 'Perizinan & Regulasi', path: '/perizinan-regulasi' },
        { name: 'Pengaduan Masyarakat', path: '/pengaduan-masyarakat' },
        { name: 'Layanan Informasi Hutan', path: '/layanan-informasi-hutan' },
        { name: 'Statistik Kehutanan', path: '/statistik-kehutanan' },
      ],
    },
    {
      label: 'Program & Kegiatan',
      items: [
        { name: 'Pengelolaan Hutan Lestari', path: '/pengelolaan-hutan-lestari' },
        { name: 'Rehabilitasi & Konservasi', path: '/rehabilitasi-konservasi' },
        { name: 'Perlindungan Hutan', path: '/perlindungan' },
        { name: 'Pengembangan Usaha Kehutanan', path: '/pengembangan-usaha-kehutanan' },
      ],
    },
    {
      label: 'Publikasi',
      path: '/publikasi',
      items: [
        { name: 'Blog', path: '/blog' },
        { name: 'Berita', path: '/news' },
        { name: 'Peraturan & Kebijakan', path: '/peraturan-kebijakan' },
        { name: 'Peta GIS', path: '/peta-gis' },
      ],
    },
    {
      label: 'Galeri',
      items: [
        { name: 'Galeri Foto', path: '/galeri/foto' },
        { name: 'Galeri Video', path: '/galeri/video' },
      ],
    },
  ];

  // Menentukan kelas untuk header berdasarkan kondisi
  const getHeaderClasses = () => {
    // Untuk desktop, sama seperti sebelumnya
    const baseClasses = "fixed top-0 left-0 right-0 z-50 transition-all duration-300";
    const bgClasses = isScrolled || !isHomePage ? 'bg-white/90 backdrop-blur-md shadow-lg' : 'bg-transparent';
    
    // Tambahkan padding atas untuk mobile
    const mobileClasses = "pt-4 lg:pt-0";
    
    return `${baseClasses} ${bgClasses} ${mobileClasses}`;
  };

  return (
    <header className={getHeaderClasses()}>
      <nav className="container mx-auto px-4 sm:px-6 py-4">
        <div className="flex items-center justify-between">
          {/* Logo dan brand name dengan responsivitas yang lebih baik */}
          <Link to="/" className="flex items-center space-x-2">
            <img
              src="https://kphlkapuas-kahayan.info/wp-content/uploads/2024/05/logo-kphl.png"
              alt="KPHL Kapuas Kahayan Logo"
              className="h-10 sm:h-12 lg:h-16 w-auto" // Ukuran logo lebih kecil di mobile
            />
            <span className="text-base sm:text-lg lg:text-2xl font-bold bg-gradient-to-r from-green-600 to-blue-600 text-transparent bg-clip-text">
              KPHL KAPUAS KAHAYAN
            </span>
          </Link>

          {/* Desktop Menu */}
          <div className="hidden lg:flex space-x-8">
            <Link
              to="/"
              className={`text-lg font-medium ${
                isHomePage ? 'text-green-600' : 'text-gray-800'
              } hover:text-green-600 transition-colors`}
            >
              Beranda
            </Link>

            {navItems.map((item) => {
              const active = checkIsActive(item);
              
              return (
                <div 
                  key={item.label} 
                  className="relative group hover:cursor-pointer"
                  onMouseEnter={() => {
                    if (timeoutRef.current) {
                      clearTimeout(timeoutRef.current);
                      timeoutRef.current = null;
                    }
                    setActiveDropdown(item.label);
                  }}
                  onMouseLeave={() => {
                    if (timeoutRef.current) {
                      clearTimeout(timeoutRef.current);
                    }
                    timeoutRef.current = setTimeout(() => {
                      setActiveDropdown(null);
                    }, 100); // Small delay to avoid menu flickering
                  }}
                >
                  <Link
                    to={item.path || '#'}
                    className={`flex items-center space-x-1 text-lg font-medium ${
                      active
                        ? 'text-green-600'
                        : isHomePage
                        ? 'text-white'
                        : 'text-gray-800'
                    } hover:text-green-600 transition-colors`}
                    onClick={(e) => {
                      if (item.items && !item.path) {
                        e.preventDefault();
                      }
                    }}
                  >
                    <span>{item.label}</span>
                    {item.items && (
                      <ChevronDown
                        className={`h-4 w-4 transition-transform ${
                          activeDropdown === item.label ? 'rotate-180' : ''
                        }`}
                      />
                    )}
                  </Link>
                  
                  {item.items && (
                    <div 
                      className={`absolute left-0 mt-2 w-64 bg-white rounded-xl shadow-xl z-50 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-opacity duration-200 ${
                        activeDropdown === item.label ? '!opacity-100 !visible' : ''
                      }`}
                    >
                      <div className="p-4 space-y-2">
                        {item.items.map((subItem) => (
                          <Link
                            key={subItem.name}
                            to={subItem.path}
                            className={`block px-4 py-2 text-gray-700 hover:text-green-600 hover:bg-green-50 rounded-lg transition-colors ${
                              location.pathname === subItem.path ? 'bg-green-50 text-green-600' : ''
                            }`}
                          >
                            {subItem.name}
                          </Link>
                        ))}
                      </div>
                    </div>
                  )}
                </div>
              );
            })}
          </div>

          {/* Mobile Menu Button */}
          <button
            className={`lg:hidden p-2 rounded-md ${
              isHomePage && !isScrolled ? 'text-white bg-green-600/20' : 'text-gray-800 bg-gray-100'
            } hover:text-green-600 hover:bg-green-50 transition-colors`}
            onClick={() => setIsOpen(!isOpen)}
            aria-label="Toggle menu"
          >
            {isOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </button>
        </div>

        {/* Mobile Menu - dengan penyesuaian tampilan submenu */}
        {isOpen && (
          <div className="lg:hidden mt-4 bg-white rounded-xl shadow-xl overflow-hidden">
            <div className="max-h-[75vh] overflow-y-auto">
              <Link
                to="/"
                className={`flex items-center px-4 py-3 border-b border-gray-100 ${
                  isHomePage ? 'text-green-600 bg-green-50' : 'text-gray-800'
                } hover:text-green-600 hover:bg-green-50 transition-colors`}
                onClick={() => setIsOpen(false)}
              >
                Beranda
              </Link>

              {navItems.map((item, index) => {
                const active = checkIsActive(item);
                const isItemActive = active || activeDropdown === item.label;
                const isLastItem = index === navItems.length - 1;
                
                return (
                  <div key={item.label} className={isLastItem ? "" : "border-b border-gray-100"}>
                    <button
                      className={`flex items-center justify-between w-full px-4 py-3 
                        ${isItemActive ? 'text-green-600 bg-green-50/70' : 'text-gray-800'} 
                        hover:text-green-600 hover:bg-green-50 transition-colors`}
                      onClick={() => handleDropdownClick(item.label)}
                      aria-expanded={activeDropdown === item.label}
                    >
                      <span className="font-medium">{item.label}</span>
                      {item.items && (
                        <ChevronDown
                          className={`h-4 w-4 transition-transform duration-300 ${
                            activeDropdown === item.label ? 'rotate-180' : ''
                          }`}
                        />
                      )}
                    </button>

                    {item.items && (
                      <div 
                        className={`overflow-hidden transition-all duration-300 bg-gray-50
                          ${activeDropdown === item.label 
                            ? 'max-h-96 opacity-100 visible' 
                            : 'max-h-0 opacity-0 invisible'
                          }`}
                      >
                        {item.items.map((subItem, subIndex) => {
                          const isSubActive = location.pathname === subItem.path;
                          const isLastSubItem = subIndex === item.items!.length - 1;
                          
                          return (
                            <Link
                              key={subItem.name}
                              to={subItem.path}
                              className={`flex items-center px-6 py-2.5 ${
                                isLastSubItem ? '' : 'border-b border-gray-100/50'
                              } ${
                                isSubActive 
                                  ? 'text-green-600 bg-green-50' 
                                  : 'text-gray-700'
                              } hover:text-green-600 hover:bg-green-50/80 transition-colors`}
                              onClick={() => setIsOpen(false)}
                            >
                              <ChevronRight className="h-3 w-3 mr-2 text-gray-400" />
                              <span>{subItem.name}</span>
                            </Link>
                          );
                        })}
                      </div>
                    )}
                  </div>
                );
              })}
            </div>
            
            {/* Footer for mobile menu */}
            <div className="bg-gray-50 px-4 py-3 text-center border-t border-gray-100">
              <button 
                className="text-sm text-gray-500 hover:text-green-600 transition-colors"
                onClick={() => setIsOpen(false)}
              >
                Tutup Menu
              </button>
            </div>
          </div>
        )}
      </nav>
    </header>
  );
}

export default Navbar;