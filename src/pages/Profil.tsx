import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { 
  History as HistoryIcon,
  Target,
  Users,
  FileText,
  ArrowRight,
  TreePine,
  Shield,
  Building2,
  Award
} from 'lucide-react';

function Profil() {
  const sections = [
    {
      id: 'sejarah',
      title: 'Sejarah',
      icon: HistoryIcon,
      description: 'Perjalanan KPHL Kapuas Kahayan dalam melestarikan hutan Kalimantan',
      link: '/profil/sejarah',
      highlights: [
        '2010 - Pembentukan KPHL Kapuas Kahayan',
        '2015 - Perluasan Wilayah Kerja',
        '2018 - Program Perhutanan Sosial',
        '2020 - Penghargaan Nasional'
      ]
    },
    {
      id: 'visi-misi',
      title: 'Visi & Misi',
      icon: Target,
      description: 'Arah dan tujuan dalam pengelolaan hutan lestari',
      link: '/profil/visi-misi',
      highlights: [
        'Pengelolaan Hutan Berkelanjutan',
        'Pemberdayaan Masyarakat',
        'Perlindungan Ekosistem',
        'Pengembangan Kapasitas'
      ]
    },
    {
      id: 'struktur',
      title: 'Struktur Organisasi',
      icon: Users,
      description: 'Susunan organisasi dan tata kerja KPHL Kapuas Kahayan',
      link: '/profil/struktur',
      highlights: [
        'Kepala UPT KPHL',
        'Sub Bagian Tata Usaha',
        'Seksi Perencanaan dan Pemanfaatan',
        'Seksi Perlindungan dan Pemberdayaan'
      ]
    },
    {
      id: 'tupoksi',
      title: 'Tugas & Fungsi',
      icon: FileText,
      description: 'Tugas pokok dan fungsi dalam pengelolaan hutan',
      link: '/profil/tupoksi',
      highlights: [
        'Pengelolaan Kawasan Hutan',
        'Perlindungan dan Konservasi',
        'Pemberdayaan Masyarakat',
        'Pengawasan dan Evaluasi'
      ]
    }
  ];

  const achievements = [
    {
      icon: TreePine,
      title: "549.370 Ha",
      description: "Luas Kawasan Hutan yang Dikelola"
    },
    {
      icon: Shield,
      title: "3 Resort",
      description: "Unit Pengelolaan Tingkat Tapak"
    },
    {
      icon: Building2,
      title: "2 Kabupaten",
      description: "Wilayah Kerja"
    },
    {
      icon: Award,
      title: "15+ Penghargaan",
      description: "Prestasi Nasional"
    }
  ];

  return (
    <div className="pt-24 min-h-screen bg-gray-50">
      {/* Hero Section */}
      <section className="relative py-20 overflow-hidden">
        <div className="absolute inset-0">
          <img
            src="https://images.unsplash.com/photo-1542401886-65d6c61db217?ixlib=rb-4.0.3"
            alt="Forest Management"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-green-900/80 backdrop-blur-sm" />
        </div>
        
        <div className="relative container mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center text-white"
          >
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              Profil KPHL Kapuas Kahayan
            </h1>
            <p className="text-xl text-gray-200 max-w-3xl mx-auto">
              Mengenal lebih dekat lembaga pengelola hutan di Kalimantan Tengah
            </p>
          </motion.div>
        </div>
      </section>

      {/* Quick Stats */}
      <section className="py-12 -mt-20 relative z-10">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
            {achievements.map((achievement, index) => (
              <motion.div
                key={achievement.title}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="bg-white rounded-xl shadow-lg p-6 transform hover:scale-105 transition-all duration-300"
              >
                <div className="flex items-center space-x-4">
                  <div className="bg-green-100 p-3 rounded-full">
                    <achievement.icon className="h-6 w-6 text-green-600" />
                  </div>
                  <div>
                    <div className="text-2xl font-bold text-gray-800">{achievement.title}</div>
                    <div className="text-sm text-gray-600">{achievement.description}</div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Main Sections */}
      <section className="py-20">
        <div className="container mx-auto px-6">
          <div className="grid md:grid-cols-2 gap-8">
            {sections.map((section, index) => (
              <motion.div
                key={section.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="bg-white rounded-xl shadow-lg overflow-hidden group hover:shadow-xl transition-all duration-300"
              >
                <div className="p-8">
                  <div className="flex items-center mb-6">
                    <div className="bg-green-100 p-3 rounded-full mr-4">
                      <section.icon className="h-6 w-6 text-green-600" />
                    </div>
                    <h2 className="text-2xl font-bold">{section.title}</h2>
                  </div>
                  
                  <p className="text-gray-600 mb-6">{section.description}</p>
                  
                  <div className="space-y-3 mb-8">
                    {section.highlights.map((highlight, idx) => (
                      <div key={idx} className="flex items-center text-gray-700">
                        <span className="w-2 h-2 bg-green-600 rounded-full mr-3" />
                        <span>{highlight}</span>
                      </div>
                    ))}
                  </div>

                  <Link 
                    to={section.link}
                    className="inline-flex items-center text-green-600 hover:text-green-700 font-medium group-hover:translate-x-2 transition-transform duration-300"
                  >
                    <span>Selengkapnya</span>
                    <ArrowRight className="h-5 w-5 ml-2" />
                  </Link>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}

export default Profil;