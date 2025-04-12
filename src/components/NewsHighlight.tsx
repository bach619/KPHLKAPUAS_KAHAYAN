import React from 'react';
import { ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';

const news = [
  {
    id: 1,
    title: 'Petani di Tumbang Mangkutup Diedukasi Penguatan Perhutanan Sosial dan Ketahanan Pangan',
    excerpt: 'Program edukasi ini bertujuan untuk meningkatkan pemahaman petani tentang perhutanan sosial dan strategi ketahanan pangan di kawasan hutan.',
    image: 'https://kphlkapuas-kahayan.info/wp-content/uploads/2025/03/1000427589_1200x800-1024x683.webp',
    date: '14 Maret 2025',
    url: 'https://kphlkapuas-kahayan.info/2025/03/14/dad-kabupaten-kapuas-bersama-kphl-kapuas-melaksanakan-sosialisasi/'
  },
  {
    id: 2,
    title: 'DAD Kabupaten Kapuas Bersama KPHL Kapuas Melaksanakan Sosialisasi',
    excerpt: 'Dewan Adat Dayak Kabupaten Kapuas berkolaborasi dengan KPHL Kapuas dalam program sosialisasi untuk memperkuat peran masyarakat adat.',
    image: 'https://kphlkapuas-kahayan.info/wp-content/uploads/2025/03/IMG-20240722-WA0015.jpg',
    date: '14 Maret 2025',
    url: 'https://kphlkapuas-kahayan.info/2025/03/14/dad-kabupaten-kapuas-bersama-kphl-kapuas-melaksanakan-sosialisasi/'
  },
  {
    id: 3,
    title: 'Kunjungan KPHL Kapuas Kahayan ke Desa Batanjung',
    excerpt: 'Tim KPHL Kapuas Kahayan melakukan kunjungan kerja ke Desa Batanjung untuk meninjau perkembangan program perhutanan sosial.',
    image: 'https://kphlkapuas-kahayan.info/wp-content/uploads/2024/05/452224991_8687062917975971_2697534381392747663_n-768x576.jpg',
    date: '9 Mei 2024',
    url: 'https://kphlkapuas-kahayan.info/2024/05/09/kunjungan-kphl-kapuas-kahayan-ke-desa-batanjung/'
  }
];

const NewsHighlight = () => {
  return (
    <section className="py-20 bg-gray-50">
      <div className="container mx-auto px-6">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Berita & Pengumuman</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Informasi terkini seputar kegiatan dan program KPHL Kapuas Kahayan
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {news.map((item) => (
            <div key={item.id} className="bg-white rounded-xl shadow-lg overflow-hidden hover:transform hover:scale-105 transition-all">
              <div className="relative h-48">
                <img
                  src={item.image}
                  alt={item.title}
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent" />
              </div>
              <div className="p-6">
                <div className="text-sm text-gray-500 mb-2">{item.date}</div>
                <h3 className="text-xl font-semibold mb-2 line-clamp-2 min-h-[3.5rem]">
                  {item.title}
                </h3>
                <p className="text-gray-600 mb-4 line-clamp-3">
                  {item.excerpt}
                </p>
                <Link 
                  to={item.url} 
                  className="text-green-600 hover:text-green-700 font-medium flex items-center group"
                >
                  <span>Baca Selengkapnya</span>
                  <ArrowRight className="h-4 w-4 ml-2 transform transition-transform group-hover:translate-x-1" />
                </Link>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-12">
          <Link 
            to="/berita" 
            className="inline-flex items-center space-x-2 bg-green-600 text-white px-6 py-3 rounded-full hover:bg-green-700 transition-all group"
          >
            <span>Lihat Semua Berita</span>
            <ArrowRight className="h-5 w-5 transform transition-transform group-hover:translate-x-1" />
          </Link>
        </div>
      </div>
    </section>
  );
};

export default NewsHighlight;