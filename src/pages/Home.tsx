import React from 'react';
import { Parallax } from 'react-scroll-parallax';
import { Link } from 'react-router-dom';
import { 
  ArrowRight, 
  Leaf, 
  Users, 
  Shield, 
  MapPin, 
  Phone, 
  Mail,
  FileText,
  BarChart3,
  MessageSquare,
  Building2,
  FileCheck,
  AlertCircle,
  Download,
  Facebook,
  Twitter,
  Instagram,
  Youtube,
  TreePine,
  Map
} from 'lucide-react';
import ParticlesBackground from '../components/ParticlesBackground';
import WorkingAreas from '../components/WorkingAreas';
import Statistics from '../components/Statistics';
import NewsHighlight from '../components/NewsHighlight';
import PortalTerintegrasi from '../components/PortalTerintegrasi';

function Home() {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative h-screen">
        <div className="absolute inset-0">
          <img
            src="https://kphlkapuas-kahayan.info/wp-content/uploads/2025/03/836294_1200.jpg"
            alt="Rainforest"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-black/50" />
          <div className="fog" />
          <div className="fog fog-2" />
          <ParticlesBackground />
        </div>
        
        <div className="relative h-full flex items-center justify-center">
          <div className="container mx-auto px-6 text-center">
            <Parallax translateY={[-20, 20]}>
              <h1 className="text-4xl md:text-6xl font-bold text-white mb-6 mx-auto max-w-4xl">
                Melestarikan Hutan Kalimantan untuk Masa Depan yang Lebih Baik
              </h1>
              <p className="text-xl text-gray-200 mb-8 mx-auto max-w-2xl">
                KPHL Kapuas Kahayan berkomitmen untuk melindungi dan mengelola kawasan hutan
                secara berkelanjutan demi generasi mendatang.
              </p>
              <div className="flex justify-center space-x-4">
                <Link 
                  to="/layanan" 
                  className="bg-green-600 text-white px-8 py-3 rounded-full hover:bg-green-700 transition-all transform hover:scale-105 shadow-lg flex items-center space-x-2"
                >
                  <span>Layanan Publik</span>
                  <ArrowRight className="h-5 w-5" />
                </Link>
                <button className="bg-white/20 backdrop-blur-sm text-white px-8 py-3 rounded-full hover:bg-white/30 transition-all transform hover:scale-105 shadow-lg flex items-center space-x-2">
                  <span>Pengaduan</span>
                  <MessageSquare className="h-5 w-5" />
                </button>
              </div>
            </Parallax>
          </div>
        </div>
      </section>

      {/* Quick Links Section */}
      <section className="py-8 bg-white relative -mt-20">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            <a href="#" className="bg-white rounded-xl shadow-lg p-6 flex items-center space-x-4 hover:transform hover:scale-105 transition-all">
              <div className="bg-green-100 p-3 rounded-full">
                <FileText className="h-6 w-6 text-green-600" />
              </div>
              <div>
                <h3 className="font-semibold text-gray-800">Perizinan Online</h3>
                <p className="text-sm text-gray-600">Ajukan perizinan secara online</p>
              </div>
            </a>
            <a href="#" className="bg-white rounded-xl shadow-lg p-6 flex items-center space-x-4 hover:transform hover:scale-105 transition-all">
              <div className="bg-blue-100 p-3 rounded-full">
                <MessageSquare className="h-6 w-6 text-blue-600" />
              </div>
              <div>
                <h3 className="font-semibold text-gray-800">Pengaduan</h3>
                <p className="text-sm text-gray-600">Laporkan masalah kehutanan</p>
              </div>
            </a>
            <a href="#" className="bg-white rounded-xl shadow-lg p-6 flex items-center space-x-4 hover:transform hover:scale-105 transition-all">
              <div className="bg-purple-100 p-3 rounded-full">
                <Download className="h-6 w-6 text-purple-600" />
              </div>
              <div>
                <h3 className="font-semibold text-gray-800">Unduh Dokumen</h3>
                <p className="text-sm text-gray-600">Akses dokumen resmi</p>
              </div>
            </a>
            <a href="#" className="bg-white rounded-xl shadow-lg p-6 flex items-center space-x-4 hover:transform hover:scale-105 transition-all">
              <div className="bg-orange-100 p-3 rounded-full">
                <AlertCircle className="h-6 w-6 text-orange-600" />
              </div>
              <div>
                <h3 className="font-semibold text-gray-800">Informasi Darurat</h3>
                <p className="text-sm text-gray-600">Kontak darurat kehutanan</p>
              </div>
            </a>
          </div>
        </div>
      </section>

      {/* Working Areas Section */}
      <WorkingAreas />

      {/* Statistics Section */}
      <Statistics />

      {/* News Highlight Section */}
      <NewsHighlight />

      {/* Layanan Publik Section */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-6">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Layanan Publik</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Akses berbagai layanan publik yang kami sediakan untuk memudahkan masyarakat
              dalam pengurusan dokumen dan perizinan kehutanan.
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-white rounded-xl shadow-lg p-6 hover:transform hover:scale-105 transition-all">
              <div className="bg-green-100 w-12 h-12 rounded-full flex items-center justify-center mb-6">
                <FileCheck className="h-6 w-6 text-green-600" />
              </div>
              <h3 className="text-xl font-semibold mb-4">Perizinan & Regulasi</h3>
              <ul className="space-y-3 text-gray-600">
                <li>• Izin Pemanfaatan Hutan</li>
                <li>• Sertifikasi Produk Hutan</li>
                <li>• Izin Penelitian</li>
                <li>• Dokumen AMDAL</li>
              </ul>
            </div>
            
            <div className="bg-white rounded-xl shadow-lg p-6 hover:transform hover:scale-105 transition-all">
              <div className="bg-blue-100 w-12 h-12 rounded-full flex items-center justify-center mb-6">
                <Building2 className="h-6 w-6 text-blue-600" />
              </div>
              <h3 className="text-xl font-semibold mb-4">Layanan Informasi</h3>
              <ul className="space-y-3 text-gray-600">
                <li>• Data Kawasan Hutan</li>
                <li>• Peta Digital</li>
                <li>• Statistik Kehutanan</li>
                <li>• Regulasi & Kebijakan</li>
              </ul>
            </div>
            
            <div className="bg-white rounded-xl shadow-lg p-6 hover:transform hover:scale-105 transition-all">
              <div className="bg-purple-100 w-12 h-12 rounded-full flex items-center justify-center mb-6">
                <Users className="h-6 w-6 text-purple-600" />
              </div>
              <h3 className="text-xl font-semibold mb-4">Pemberdayaan</h3>
              <ul className="space-y-3 text-gray-600">
                <li>• Program Masyarakat</li>
                <li>• Pelatihan & Workshop</li>
                <li>• Bantuan Teknis</li>
                <li>• Konsultasi</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Portal Terintegrasi Section */}
      <PortalTerintegrasi />

      {/* Social Media Section */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-6">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Media Sosial</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Ikuti kami di media sosial untuk informasi terkini
            </p>
          </div>

          <div className="flex justify-center space-x-6">
            <a href="#" className="bg-blue-600 text-white p-4 rounded-full hover:bg-blue-700 transition-colors">
              <Facebook className="h-6 w-6" />
            </a>
            <a href="#" className="bg-blue-400 text-white p-4 rounded-full hover:bg-blue-500 transition-colors">
              <Twitter className="h-6 w-6" />
            </a>
            <a href="#" className="bg-pink-600 text-white p-4 rounded-full hover:bg-pink-700 transition-colors">
              <Instagram className="h-6 w-6" />
            </a>
            <a href="#" className="bg-red-600 text-white p-4 rounded-full hover:bg-red-700 transition-colors">
              <Youtube className="h-6 w-6" />
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Home;