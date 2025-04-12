import React from 'react';
import {
  BrowserRouter as Router,
  Routes,
  Route,
  useLocation,
} from 'react-router-dom';
import { ParallaxProvider } from 'react-scroll-parallax';
import { AnimatePresence } from 'framer-motion';
import Navbar from './components/Navbar';
import Home from './pages/Home';
import Blog from './pages/Blog';
import News from './pages/News';
import History from './pages/History';
import Structure from './pages/Structure';
import Tupoksi from './pages/Tupoksi';
import VisiMisi from './pages/VisiMisi';
import Profil from './pages/Profil';
import LayananPublik from './pages/LayananPublik';
import PerizinanRegulasi from './pages/PerizinanRegulasi';
import PengaduanMasyarakat from './pages/PengaduanMasyarakat';
import LayananInformasiHutan from './pages/LayananInformasiHutan';
import PengelolaanHutanLestari from './pages/PengelolaanHutanLestari';
import RehabilitasiKonservasiPage from './pages/RehabilitasiKonservasi';
import PerlindunganPage from './pages/PerlindunganPage';
import PengembanganUsahaKehutanan from './pages/PengembanganUsahaKehutanan';
import StatistikKehutanan from './pages/StatistikKehutanan';
import PublikasiPage from './pages/PublikasiPage';
import PetaGISPage from './pages/PetaGISPage';
import PeraturanKebijakan from './pages/PeraturanKebijakan';
import Video from './pages/Video';
import FotoPage from './pages/Foto';
import Footer from './components/Footer';
import PageTransition from './components/PageTransition';

// Data contoh foto
const photoData = [
  {
    original: '/public/images/12.jpeg',
    thumbnail: '/public/images/12.jpeg',
    category: 'landscape',
    photographer: 'John Doe',
    story: 'Hutan lindung di pagi hari',
    event: 'Ekspedisi Hutan 2023',
    originalAlt: 'Pemandangan hutan di pagi hari',
    thumbnailAlt: 'Thumbnail pemandangan hutan'
  },
  {
    original: '/images/forest2.jpg',
    thumbnail: '/images/forest2-thumb.jpg',
    category: 'wildlife',
    photographer: 'Jane Smith',
    story: 'Burung langka di habitat asli',
    event: 'Wildlife Photography Week',
    originalAlt: 'Burung langka di hutan',
    thumbnailAlt: 'Thumbnail burung langka'
  }
];

// Data contoh video
const videoContent = {
  featuredVideo: {
    url: 'https://youtu.be/jkntOCyBxG0',
    title: 'Dokumentasi Kehutanan 2023 - Ketua Kelompok tani Desa Mantangai',
    description: 'Video lengkap kegiatan pengelolaan hutan berkelanjutan'
  },
  videoList: [
    {
      id: 1,
      url: 'https://youtu.be/P8ncvcGMNt8',
      title: 'Dokumentasi Kehutanan 2023 - Testimoni tenaga pengajar Kecamatan Mantangai',
      description: 'Teknik modern pengelolaan hutan',
      duration: '1:10'
    },
    {
      id: 2,
      url: 'https://youtu.be/MfM36iqpg50',
      title: 'Dokumentasi Kehutanan 2023 - Tokoh Masyarakat Desa Tarantang',
      description: 'Program perlindungan tanaman endemik',
      duration: '1:21'
    }
  ]
};

const featuredPhotographers = [
  'John Doe',
  'Jane Smith',
  'Robert Johnson',
  'Emily Davis'
];

function AnimatedRoutes() {
  const location = useLocation();

  return (
    <AnimatePresence mode="wait" initial={false}>
      <Routes location={location} key={location.pathname}>
        <Route path="/" element={<PageTransition><Home /></PageTransition>} />
        <Route path="/blog" element={<PageTransition><Blog /></PageTransition>} />
        <Route path="/news" element={<PageTransition><News /></PageTransition>} />
        <Route path="/history" element={<PageTransition><History /></PageTransition>} />
        <Route path="/structure" element={<PageTransition><Structure /></PageTransition>} />
        <Route path="/tupoksi" element={<PageTransition><Tupoksi /></PageTransition>} />
        <Route path="/visi-misi" element={<PageTransition><VisiMisi /></PageTransition>} />
        <Route path="/profil" element={<PageTransition><Profil /></PageTransition>} />
        <Route path="/layanan-publik" element={<PageTransition><LayananPublik /></PageTransition>} />
        <Route path="/perizinan-regulasi" element={<PageTransition><PerizinanRegulasi /></PageTransition>} />
        <Route path="/pengaduan-masyarakat" element={<PageTransition><PengaduanMasyarakat /></PageTransition>} />
        <Route path="/layanan-informasi-hutan" element={<PageTransition><LayananInformasiHutan /></PageTransition>} />
        <Route path="/pengelolaan-hutan-lestari" element={<PageTransition><PengelolaanHutanLestari /></PageTransition>} />
        <Route path="/rehabilitasi-konservasi" element={<PageTransition><RehabilitasiKonservasiPage /></PageTransition>} />
        <Route path="/perlindungan" element={<PageTransition><PerlindunganPage /></PageTransition>} />
        <Route path="/pengembangan-usaha-kehutanan" element={<PageTransition><PengembanganUsahaKehutanan /></PageTransition>} />
        <Route path="/statistik-kehutanan" element={<PageTransition><StatistikKehutanan /></PageTransition>} />
        <Route path="/publikasi" element={<PageTransition><PublikasiPage /></PageTransition>} />
        <Route path="/peta-gis" element={<PageTransition><PetaGISPage /></PageTransition>} />
        <Route path="/peraturan-kebijakan" element={<PageTransition><PeraturanKebijakan /></PageTransition>} />
        
        {/* Galeri Foto */}
        <Route
          path="/galeri/foto"
          element={
            <PageTransition>
              <FotoPage photos={photoData} featuredPhotographers={featuredPhotographers} />
            </PageTransition>
          }
        />
        
        {/* Galeri Video */}
        <Route
          path="/galeri/video"
          element={
            <PageTransition>
              <div className="container mx-auto px-4 py-8 mt-20">
                <h1 className="text-3xl font-bold text-gray-800 mb-6">Galeri Video</h1>
                
                {/* Video Utama */}
                <section className="mb-12">
                  <h2 className="text-2xl font-semibold mb-4">{videoContent.featuredVideo.title}</h2>
                  <Video 
                    url={videoContent.featuredVideo.url}
                    className="rounded-lg shadow-xl"
                    autoplay={false}
                    controls={true}
                  />
                  <p className="mt-4 text-gray-600">{videoContent.featuredVideo.description}</p>
                </section>

                {/* Daftar Video Lainnya */}
                <section>
                  <h2 className="text-2xl font-semibold mb-6">Video Lainnya</h2>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    {videoContent.videoList.map(video => (
                      <div key={video.id} className="bg-white rounded-lg shadow-md overflow-hidden">
                        <Video 
                          url={video.url}
                          className="w-full"
                          controls={true}
                        />
                        <div className="p-4">
                          <h3 className="text-lg font-medium">{video.title}</h3>
                          <p className="text-gray-600 mt-1">{video.description}</p>
                          {video.duration && (
                            <span className="text-sm text-gray-500 mt-2 block">
                              Durasi: {video.duration}
                            </span>
                          )}
                        </div>
                      </div>
                    ))}
                  </div>
                </section>
              </div>
            </PageTransition>
          }
        />
      </Routes>
    </AnimatePresence>
  );
}

function App() {
  return (
    <Router>
      <ParallaxProvider>
        <div className="relative min-h-screen">
          <Navbar />
          <main className="pb-20">
            <AnimatedRoutes />
          </main>
          <Footer />
        </div>
      </ParallaxProvider>
    </Router>
  );
}

export default App;