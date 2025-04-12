import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, ChevronDown } from 'lucide-react';

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);
  const location = useLocation();

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

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled || !isHomePage ? 'bg-white/90 backdrop-blur-md shadow-lg' : 'bg-transparent'
      }`}
    >
      <nav className="container mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          <Link to="/" className="flex items-center space-x-2">
            <img
              src="https://kphlkapuas-kahayan.info/wp-content/uploads/2024/05/logo-kphl.png"
              alt="KPHL Kapuas Kahayan Logo"
              className="h-16 w-auto"
            />
            <span className="text-2xl font-bold bg-gradient-to-r from-green-600 to-blue-600 text-transparent bg-clip-text">
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
                <div key={item.label} className="relative">
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
                      if (item.items) {
                        e.preventDefault();
                        handleDropdownClick(item.label);
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
                  
                  {item.items && activeDropdown === item.label && (
                    <div className="absolute left-0 mt-2 w-64 bg-white rounded-xl shadow-xl z-50">
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
            className={`lg:hidden ${
              isHomePage ? 'text-white' : 'text-gray-800'
            } hover:text-green-600 transition-colors`}
            onClick={() => setIsOpen(!isOpen)}
          >
            {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>

        {/* Mobile Menu */}
        {isOpen && (
          <div className="lg:hidden mt-4 bg-white/95 backdrop-blur-sm rounded-xl shadow-xl p-4 max-h-[calc(100vh-120px)] overflow-y-auto">
            <div className="space-y-4">
              <Link
                to="/"
                className={`block px-4 py-2 text-gray-700 hover:text-green-600 hover:bg-green-50 rounded-lg transition-colors ${
                  isHomePage ? 'bg-green-50 text-green-600' : ''
                }`}
                onClick={() => setIsOpen(false)}
              >
                Beranda
              </Link>

              {navItems.map((item) => {
                const active = checkIsActive(item);
                return (
                  <div key={item.label} className="space-y-2">
                    <Link
                      to={item.path || '#'}
                      className={`flex items-center justify-between w-full px-4 py-2 text-gray-700 hover:text-green-600 hover:bg-green-50 rounded-lg transition-colors ${
                        active ? 'text-green-600' : ''
                      }`}
                      onClick={(e) => {
                        if (item.items) {
                          e.preventDefault();
                          handleDropdownClick(item.label);
                        } else {
                          setIsOpen(false);
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

                    {item.items && activeDropdown === item.label && (
                      <div className="pl-8 space-y-2">
                        {item.items.map((subItem) => (
                          <Link
                            key={subItem.name}
                            to={subItem.path}
                            className={`block px-4 py-2 text-gray-600 hover:text-green-600 hover:bg-green-50 rounded-lg transition-colors ${
                              location.pathname === subItem.path ? 'bg-green-50 text-green-600' : ''
                            }`}
                            onClick={() => setIsOpen(false)}
                          >
                            {subItem.name}
                          </Link>
                        ))}
                      </div>
                    )}
                  </div>
                );
              })}
            </div>
          </div>
        )}
      </nav>
    </header>
  );
}

export default Navbar;