import React from 'react';
import { motion } from 'framer-motion';
import { 
  BookOpen, 
  Map, 
  FileText, 
  Download,
  Search,
  BarChart,
  TreePine,
  Globe,
  Database,
  FileSearch,
  ChevronRight
} from 'lucide-react';

function LayananInformasiHutan() {
  const resources = [
    {
      icon: Map,
      title: "Peta Digital",
      description: "Akses peta digital kawasan hutan",
      items: [
        "Peta Kawasan Hutan",
        "Peta Tutupan Lahan",
        "Peta Potensi",
        "Peta Perizinan"
      ]
    },
    {
      icon: BarChart,
      title: "Data Statistik",
      description: "Statistik dan data kehutanan",
      items: [
        "Statistik Kawasan",
        "Data Perizinan",
        "Hasil Hutan",
        "Indikator Kinerja"
      ]
    },
    {
      icon: FileText,
      title: "Dokumen Publik",
      description: "Akses dokumen resmi kehutanan",
      items: [
        "Regulasi",
        "Laporan Tahunan",
        "Rencana Kerja",
        "Publikasi"
      ]
    },
    {
      icon: Globe,
      title: "Data Spasial",
      description: "Informasi geospasial kehutanan",
      items: [
        "Data GIS",
        "Citra Satelit",
        "Analisis Spasial",
        "Monitoring Area"
      ]
    }
  ];

  const latestDocuments = [
    {
      title: "Laporan Kinerja KPHL 2024",
      type: "PDF",
      size: "2.5 MB",
      date: "15 Mar 2024"
    },
    {
      title: "Peta Kawasan Hutan Update",
      type: "SHP",
      size: "15 MB",
      date: "14 Mar 2024"
    },
    {
      title: "Data Statistik Q1 2024",
      type: "XLS",
      size: "1.8 MB",
      date: "12 Mar 2024"
    }
  ];

  return (
    <div className="pt-24 min-h-screen bg-gray-50">
      {/* Hero Section */}
      <section className="relative py-20 overflow-hidden">
        <div className="absolute inset-0">
          <img
            src="https://images.unsplash.com/photo-1451187580459-43490279c0fa?ixlib=rb-4.0.3"
            alt="Digital Information"
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
              Layanan Informasi Hutan
            </h1>
            <p className="text-xl text-gray-200 max-w-3xl mx-auto">
              Akses informasi dan data kehutanan secara lengkap dan terintegrasi
            </p>
          </motion.div>
        </div>
      </section>

      {/* Search Section */}
      <section className="py-12 -mt-20">
        <div className="container mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="bg-white rounded-2xl shadow-xl p-8"
          >
            <div className="max-w-3xl mx-auto">
              <div className="relative">
                <input
                  type="text"
                  placeholder="Cari informasi atau dokumen..."
                  className="w-full px-6 py-4 pr-12 rounded-xl border border-gray-300 focus:ring-2 focus:ring-green-600 focus:border-transparent"
                />
                <Search className="absolute right-4 top-1/2 transform -translate-y-1/2 h-6 w-6 text-gray-400" />
              </div>
              <div className="mt-4 flex flex-wrap gap-2">
                <span className="text-sm text-gray-600">Populer:</span>
                {["Peta Kawasan", "Statistik", "Perizinan", "Regulasi"].map((tag) => (
                  <button
                    key={tag}
                    className="text-sm bg-gray-100 text-gray-700 px-3 py-1 rounded-full hover:bg-green-100 hover:text-green-700 transition-colors"
                  >
                    {tag}
                  </button>
                ))}
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Resources Section */}
      <section className="py-20">
        <div className="container mx-auto px-6">
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {resources.map((resource, index) => (
              <motion.div
                key={resource.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="bg-white rounded-xl shadow-lg p-6 hover:shadow-xl transition-all duration-300"
              >
                <div className="flex items-center mb-6">
                  <div className="bg-green-100 p-3 rounded-xl">
                    <resource.icon className="h-6 w-6 text-green-600" />
                  </div>
                  <h3 className="text-xl font-semibold ml-4">{resource.title}</h3>
                </div>
                
                <p className="text-gray-600 mb-6">{resource.description}</p>
                
                <ul className="space-y-3">
                  {resource.items.map((item) => (
                    <li key={item} className="flex items-center text-gray-700">
                      <ChevronRight className="h-4 w-4 text-green-500 mr-2" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Latest Documents Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl font-bold mb-4">Dokumen Terbaru</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Akses dokumen dan data terbaru
            </p>
          </motion.div>

          <div className="max-w-4xl mx-auto">
            {latestDocuments.map((doc, index) => (
              <motion.div
                key={doc.title}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="bg-gray-50 rounded-xl p-6 mb-4 flex items-center justify-between hover:bg-gray-100 transition-colors"
              >
                <div className="flex items-center">
                  <FileText className="h-8 w-8 text-green-600 mr-4" />
                  <div>
                    <h3 className="font-semibold">{doc.title}</h3>
                    <div className="text-sm text-gray-500 mt-1">
                      <span>{doc.type}</span>
                      <span className="mx-2">•</span>
                      <span>{doc.size}</span>
                      <span className="mx-2">•</span>
                      <span>{doc.date}</span>
                    </div>
                  </div>
                </div>
                <button className="bg-green-100 text-green-600 p-2 rounded-lg hover:bg-green-200 transition-colors">
                  <Download className="h-5 w-5" />
                </button>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-6">
          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                icon: Database,
                title: "Data Terintegrasi",
                description: "Akses berbagai data kehutanan dalam satu platform terpadu"
              },
              {
                icon: FileSearch,
                title: "Pencarian Cepat",
                description: "Temukan informasi yang Anda butuhkan dengan mudah"
              },
              {
                icon: Download,
                title: "Unduh Mudah",
                description: "Download data dan dokumen dalam berbagai format"
              }
            ].map((feature, index) => (
              <motion.div
                key={feature.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="bg-white rounded-xl p-6 text-center"
              >
                <div className="bg-green-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                  <feature.icon className="h-8 w-8 text-green-600" />
                </div>
                <h3 className="text-xl font-semibold mb-2">{feature.title}</h3>
                <p className="text-gray-600">{feature.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-green-600">
        <div className="container mx-auto px-6">
          <div className="text-center text-white">
            <h2 className="text-3xl font-bold mb-4">Butuh Data Spesifik?</h2>
            <p className="text-xl mb-8">Tim kami siap membantu Anda mendapatkan informasi yang dibutuhkan</p>
            <div className="flex justify-center space-x-4">
              <button className="bg-white text-green-600 px-8 py-3 rounded-full hover:bg-green-50 transition-colors">
                Ajukan Permintaan Data
              </button>
              <button className="border-2 border-white text-white px-8 py-3 rounded-full hover:bg-white/10 transition-colors">
                Hubungi Kami
              </button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default LayananInformasiHutan;