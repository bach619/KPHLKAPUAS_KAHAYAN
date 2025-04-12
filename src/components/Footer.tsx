import React from 'react';
import { Link } from 'react-router-dom';
import { MapPin, Phone, Mail, Facebook, Twitter, Instagram } from 'lucide-react';

function Footer() {
  return (
    <footer className="bg-gray-900 text-white py-8 md:py-16 relative overflow-hidden">
      <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1536147116438-62679a5e01f2?ixlib=rb-4.0.3')] opacity-5" />
      <div className="container mx-auto px-4 md:px-6 relative">
        {/* Grid container dengan responsif columns */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Logo dan deskripsi */}
          <div>
            <div className="flex items-center space-x-2 mb-4">
              <img 
                src="https://kphlkapuas-kahayan.info/wp-content/uploads/2024/05/kph.png"
                alt="KPHL Kapuas Kahayan Logo"
                className="h-12 w-auto md:h-16"
              />
              <span className="text-lg md:text-xl font-bold">KPHL Kapuas Kahayan</span>
            </div>
            <p className="text-gray-400 text-sm md:text-base leading-relaxed">
              Berkomitmen untuk melestarikan dan melindungi warisan alam hutan Kalimantan
              untuk generasi mendatang.
            </p>
          </div>

          {/* Menu Utama */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Menu Utama</h3>
            <ul className="space-y-2 md:space-y-4">
              <li><Link to="/" className="text-gray-400 hover:text-green-500 transition-colors text-sm md:text-base">Beranda</Link></li>
              <li><Link to="/blog" className="text-gray-400 hover:text-green-500 transition-colors text-sm md:text-base">Blog</Link></li>
              <li><Link to="/berita" className="text-gray-400 hover:text-green-500 transition-colors text-sm md:text-base">Berita</Link></li>
              <li><a href="#tentang" className="text-gray-400 hover:text-green-500 transition-colors text-sm md:text-base">Tentang Kami</a></li>
              <li><a href="#kontak" className="text-gray-400 hover:text-green-500 transition-colors text-sm md:text-base">Kontak</a></li>
            </ul>
          </div>

          {/* Kontak & Jam Operasional */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Kontak & Jam Operasional</h3>
            <ul className="space-y-3 md:space-y-4">
              <li className="flex items-start space-x-2 md:space-x-3">
                <MapPin className="h-5 w-5 text-green-500 mt-1 flex-shrink-0" />
                <span className="text-gray-400 text-sm md:text-base">Jl. Transito Sei RT.11 RW.04, Sei Angga Kel. Selat Utara Kec. Selat Kab. Kapuas Kalimantan Tengah</span>
              </li>
              <li className="flex items-center space-x-2 md:space-x-3">
                <Phone className="h-5 w-5 text-green-500 flex-shrink-0" />
                <span className="text-gray-400 text-sm md:text-base">+62 0813 5369 001</span>
              </li>
              <li className="flex items-center space-x-2 md:space-x-3">
                <Mail className="h-5 w-5 text-green-500 flex-shrink-0" />
                <span className="text-gray-400 text-sm md:text-base break-all">info@kphlkapuas-kahayan.info</span>
              </li>
              <li className="pt-3 border-t border-gray-800 mt-2">
                <h4 className="font-semibold mb-2 text-sm md:text-base">Jam Operasional</h4>
                <div className="space-y-1 md:space-y-2 text-gray-400 text-sm md:text-base">
                  <div className="flex justify-between">
                    <span>Senin - Jumat</span>
                    <span>08:00 - 16:00</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Sabtu & Minggu</span>
                    <span>Tutup</span>
                  </div>
               </div>
              </li>
            </ul>
          </div>

          {/* Ikuti Kami & Newsletter */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Ikuti Kami</h3>
            <div className="flex space-x-3 mb-6">
              <a href="#" className="bg-green-600/10 p-2 md:p-3 rounded-full hover:bg-green-600/20 transition-colors">
                <Facebook className="h-4 w-4 md:h-5 md:w-5 text-green-500" />
              </a>
              <a href="#" className="bg-green-600/10 p-2 md:p-3 rounded-full hover:bg-green-600/20 transition-colors">
                <Twitter className="h-4 w-4 md:h-5 md:w-5 text-green-500" />
              </a>
              <a href="#" className="bg-green-600/10 p-2 md:p-3 rounded-full hover:bg-green-600/20 transition-colors">
                <Instagram className="h-4 w-4 md:h-5 md:w-5 text-green-500" />
              </a>
            </div>
            <h3 className="text-lg font-semibold mb-3">Newsletter</h3>
            <p className="text-gray-400 mb-3 text-sm md:text-base">Dapatkan informasi terbaru dari kami.</p>
            <form className="flex flex-col sm:flex-row">
              <input
                type="email"
                placeholder="Email Anda"
                className="w-full px-4 py-2 rounded-t-lg sm:rounded-l-lg sm:rounded-tr-none mb-2 sm:mb-0 focus:outline-none focus:ring-2 focus:ring-green-600 text-sm md:text-base"
              />
              <button className="bg-green-600 text-white px-4 py-2 rounded-b-lg sm:rounded-r-lg sm:rounded-bl-none hover:bg-green-700 transition-colors text-sm md:text-base whitespace-nowrap">
                Langganan
              </button>
            </form>
          </div>
        </div>

        {/* Footer bottom */}
        <div className="border-t border-gray-800 mt-8 md:mt-12 pt-6 md:pt-8 text-center">
          <p className="text-gray-400 text-xs md:text-sm">© 2024 KPHL Kapuas Kahayan. Hak Cipta Dilindungi. By Boby Mihing</p>
        </div>
      </div>
    </footer>
  );
}

export default Footer;