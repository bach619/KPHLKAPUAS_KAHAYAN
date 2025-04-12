import React from 'react';
import { Link } from 'react-router-dom';
import { MapPin, Phone, Mail, Facebook, Twitter, Instagram } from 'lucide-react';

function Footer() {
  return (
    <footer className="bg-gray-900 text-white py-16 relative overflow-hidden">
      <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1536147116438-62679a5e01f2?ixlib=rb-4.0.3')] opacity-5" />
      <div className="container mx-auto px-6 relative">
        <div className="grid md:grid-cols-4 gap-12">
          <div>
            <div className="flex items-center space-x-2 mb-6">
              <img 
                src="https://kphlkapuas-kahayan.info/wp-content/uploads/2024/05/logo-kphl.png"
                alt="KPHL Kapuas Kahayan Logo"
                className="h-16 w-auto"
              />
              <span className="text-xl font-bold">KPHL Kapuas Kahayan</span>
            </div>
            <p className="text-gray-400 leading-relaxed">
              Berkomitmen untuk melestarikan dan melindungi warisan alam hutan Kalimantan
              untuk generasi mendatang.
            </p>
          </div>
          <div>
            <h3 className="text-lg font-semibold mb-6">Menu Utama</h3>
            <ul className="space-y-4">
              <li><Link to="/" className="text-gray-400 hover:text-green-500 transition-colors">Beranda</Link></li>
              <li><Link to="/blog" className="text-gray-400 hover:text-green-500 transition-colors">Blog</Link></li>
              <li><Link to="/berita" className="text-gray-400 hover:text-green-500 transition-colors">Berita</Link></li>
              <li><a href="#tentang" className="text-gray-400 hover:text-green-500 transition-colors">Tentang Kami</a></li>
              <li><a href="#kontak" className="text-gray-400 hover:text-green-500 transition-colors">Kontak</a></li>
            </ul>
          </div>
          <div>
            <h3 className="text-lg font-semibold mb-6">Kontak & Jam Operasional</h3>
            <ul className="space-y-4">
              <li className="flex items-center space-x-3">
                <MapPin className="h-5 w-5 text-green-500" />
                <span className="text-gray-400">Jl. Transito Sei RT.11 RW.04, Sei Angga Kel. Selat Utara Kec. Selat Kab. Kapuas Kalimantan Tengah</span>
              </li>
              <li className="flex items-center space-x-3">
                <Phone className="h-5 w-5 text-green-500" />
                <span className="text-gray-400">+62 0813 5369 001</span>
              </li>
              <li className="flex items-center space-x-3">
                <Mail className="h-5 w-5 text-green-500" />
                <span className="text-gray-400">info@kphlkapuas-kahayan.info</span>
              </li>
              <li className="pt-4 border-t border-gray-800">
                <h4 className="font-semibold mb-2">Jam Operasional</h4>
                <div className="space-y-2 text-gray-400">
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
          <div>
            <h3 className="text-lg font-semibold mb-6">Ikuti Kami</h3>
            <div className="flex space-x-4 mb-6">
              <a href="#" className="bg-green-600/10 p-3 rounded-full hover:bg-green-600/20 transition-colors">
                <Facebook className="h-5 w-5 text-green-500" />
              </a>
              <a href="#" className="bg-green-600/10 p-3 rounded-full hover:bg-green-600/20 transition-colors">
                <Twitter className="h-5 w-5 text-green-500" />
              </a>
              <a href="#" className="bg-green-600/10 p-3 rounded-full hover:bg-green-600/20 transition-colors">
                <Instagram className="h-5 w-5 text-green-500" />
              </a>
            </div>
            <h3 className="text-lg font-semibold mb-4">Newsletter</h3>
            <p className="text-gray-400 mb-4">Dapatkan informasi terbaru dari kami.</p>
            <form className="flex">
              <input
                type="email"
                placeholder="Email Anda"
                className="flex-1 px-4 py-2 rounded-l-lg focus:outline-none focus:ring-2 focus:ring-green-600"
              />
              <button className="bg-green-600 text-white px-6 py-2 rounded-r-lg hover:bg-green-700 transition-colors">
                Langganan
              </button>
            </form>
          </div>
        </div>
        <div className="border-t border-gray-800 mt-12 pt-8 text-center">
          <p className="text-gray-400">© 2024 KPHL Kapuas Kahayan. Hak Cipta Dilindungi. By Boby Mihing</p>
        </div>
      </div>
    </footer>
  );
}

export default Footer;