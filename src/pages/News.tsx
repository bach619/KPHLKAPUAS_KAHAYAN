import React from 'react';
import { format } from 'date-fns';
import { id } from 'date-fns/locale';
import { Calendar, Clock, ArrowRight } from 'lucide-react';

const news = [
  {
    id: 1,
    title: 'KPHL Kapuas Kahayan Resmikan Pusat Edukasi Konservasi',
    excerpt: 'Fasilitas baru ini akan menjadi pusat pembelajaran tentang konservasi hutan dan pemberdayaan masyarakat.',
    image: 'https://images.unsplash.com/photo-1542401886-65d6c61db217?ixlib=rb-4.0.3',
    date: new Date('2024-03-12'),
    time: '10:30 WIB',
    category: 'Pengumuman',
  },
  {
    id: 2,
    title: 'Kerjasama Internasional untuk Pelestarian Orangutan',
    excerpt: 'KPHL menjalin kerjasama dengan organisasi internasional untuk program pelestarian orangutan di kawasan hutan.',
    image: 'https://images.unsplash.com/photo-1565118531796-763e5082d113?ixlib=rb-4.0.3',
    date: new Date('2024-03-11'),
    time: '14:15 WIB',
    category: 'Kerjasama',
  },
  {
    id: 3,
    title: 'Program Penanaman 10.000 Pohon Dimulai',
    excerpt: 'Inisiatif penanaman pohon massal melibatkan masyarakat dan sekolah-sekolah di sekitar kawasan hutan.',
    image: 'https://images.unsplash.com/photo-1511497584788-876760111969?ixlib=rb-4.0.3',
    date: new Date('2024-03-09'),
    time: '09:00 WIB',
    category: 'Program',
  },
];

function News() {
  return (
    <div className="pt-24 min-h-screen bg-gray-50">
      <div className="container mx-auto px-6 py-12">
        <h1 className="text-4xl md:text-5xl font-bold text-center mb-4 bg-gradient-to-r from-green-600 to-blue-600 text-transparent bg-clip-text">
          Berita Terkini
        </h1>
        <p className="text-gray-600 text-center mb-12 max-w-3xl mx-auto">
          Ikuti perkembangan terbaru tentang kegiatan dan program KPHL Kapuas Kahayan dalam melestarikan hutan Kalimantan.
        </p>

        {/* Featured News */}
        <div className="mb-12">
          <div className="bg-white rounded-2xl shadow-xl overflow-hidden">
            <div className="grid md:grid-cols-2">
              <div className="relative h-64 md:h-full">
                <img
                  src="https://images.unsplash.com/photo-1587502537104-aac10f5fb6f7?ixlib=rb-4.0.3"
                  alt="Featured news"
                  className="w-full h-full object-cover"
                />
                <div className="absolute top-4 left-4">
                  <span className="bg-green-600 text-white px-4 py-2 rounded-full text-sm font-semibold">
                    Berita Utama
                  </span>
                </div>
              </div>
              <div className="p-8">
                <div className="flex items-center space-x-4 text-sm text-gray-500 mb-4">
                  <div className="flex items-center">
                    <Calendar className="h-4 w-4 mr-2" />
                    <span>{format(new Date(), 'd MMMM yyyy', { locale: id })}</span>
                  </div>
                  <div className="flex items-center">
                    <Clock className="h-4 w-4 mr-2" />
                    <span>15:00 WIB</span>
                  </div>
                </div>
                <h2 className="text-2xl font-bold mb-4 text-gray-800">
                  KPHL Kapuas Kahayan Raih Penghargaan Internasional dalam Konservasi Hutan
                </h2>
                <p className="text-gray-600 mb-6">
                  Penghargaan ini diberikan atas upaya luar biasa dalam pelestarian ekosistem hutan dan pemberdayaan masyarakat adat di kawasan Kalimantan Tengah.
                </p>
                <button className="flex items-center space-x-2 text-green-600 hover:text-green-700 transition-colors">
                  <span>Baca Selengkapnya</span>
                  <ArrowRight className="h-4 w-4" />
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* News Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {news.map((item) => (
            <article key={item.id} className="bg-white rounded-2xl shadow-lg overflow-hidden transform hover:scale-105 transition-transform duration-300">
              <div className="relative h-48">
                <img
                  src={item.image}
                  alt={item.title}
                  className="w-full h-full object-cover"
                />
                <div className="absolute top-4 right-4">
                  <span className="bg-green-600 text-white px-3 py-1 rounded-full text-sm">
                    {item.category}
                  </span>
                </div>
              </div>
              <div className="p-6">
                <div className="flex items-center space-x-4 text-sm text-gray-500 mb-4">
                  <div className="flex items-center">
                    <Calendar className="h-4 w-4 mr-2" />
                    <span>{format(item.date, 'd MMMM yyyy', { locale: id })}</span>
                  </div>
                  <div className="flex items-center">
                    <Clock className="h-4 w-4 mr-2" />
                    <span>{item.time}</span>
                  </div>
                </div>
                <h3 className="text-xl font-bold mb-3 text-gray-800 line-clamp-2">
                  {item.title}
                </h3>
                <p className="text-gray-600 mb-4 line-clamp-3">
                  {item.excerpt}
                </p>
                <button className="flex items-center space-x-2 text-green-600 hover:text-green-700 transition-colors">
                  <span>Baca Selengkapnya</span>
                  <ArrowRight className="h-4 w-4" />
                </button>
              </div>
            </article>
          ))}
        </div>

        <div className="mt-12 text-center">
          <button className="bg-green-600 text-white px-8 py-3 rounded-full hover:bg-green-700 transition-all transform hover:scale-105 shadow-lg">
            Lihat Semua Berita
          </button>
        </div>
      </div>
    </div>
  );
}

export default News;