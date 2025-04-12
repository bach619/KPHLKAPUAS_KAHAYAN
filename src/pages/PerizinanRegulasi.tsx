import React from 'react';
import { motion } from 'framer-motion';
import { 
  FileText, 
  Download, 
  Clock, 
  CheckCircle,
  AlertCircle,
  FileSearch,
  BookOpen,
  Scale
} from 'lucide-react';

function PerizinanRegulasi() {
  const licenses = [
    {
      title: "Izin Pemanfaatan Hutan",
      description: "Perizinan untuk kegiatan pemanfaatan kawasan, jasa lingkungan, hasil hutan kayu dan bukan kayu",
      requirements: [
        "Proposal Teknis",
        "AMDAL/UKL-UPL",
        "Peta Lokasi",
        "Akta Perusahaan"
      ],
      duration: "30 Hari Kerja",
      fee: "Sesuai Peraturan"
    },
    {
      title: "Izin Penelitian",
      description: "Perizinan untuk kegiatan penelitian dan pengembangan di kawasan hutan",
      requirements: [
        "Proposal Penelitian",
        "Surat Rekomendasi",
        "Identitas Peneliti",
        "Jadwal Kegiatan"
      ],
      duration: "14 Hari Kerja",
      fee: "Gratis"
    },
    {
      title: "Sertifikasi Produk Hutan",
      description: "Sertifikasi untuk produk hasil hutan yang akan dipasarkan",
      requirements: [
        "Dokumen Legalitas",
        "Sampel Produk",
        "Laporan Produksi",
        "Bukti Asal Usul"
      ],
      duration: "21 Hari Kerja",
      fee: "Sesuai Kategori"
    }
  ];

  const regulations = [
    {
      title: "UU No. 41 Tahun 1999",
      description: "Tentang Kehutanan",
      type: "Undang-Undang",
      year: "1999"
    },
    {
      title: "PP No. 23 Tahun 2021",
      description: "Tentang Penyelenggaraan Kehutanan",
      type: "Peraturan Pemerintah",
      year: "2021"
    },
    {
      title: "Permen LHK No. P.8/2021",
      description: "Tentang Tata Hutan dan Penyusunan Rencana Pengelolaan Hutan",
      type: "Peraturan Menteri",
      year: "2021"
    }
  ];

  return (
    <div className="pt-24 min-h-screen bg-gray-50">
      {/* Hero Section */}
      <section className="relative py-20 overflow-hidden">
        <div className="absolute inset-0">
          <img
            src="https://images.unsplash.com/photo-1450101499163-c8848c66ca85?ixlib=rb-4.0.3"
            alt="Licensing"
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
              Perizinan & Regulasi
            </h1>
            <p className="text-xl text-gray-200 max-w-3xl mx-auto">
              Informasi lengkap tentang perizinan dan regulasi kehutanan
            </p>
          </motion.div>
        </div>
      </section>

      {/* License Types Section */}
      <section className="py-20 -mt-20">
        <div className="container mx-auto px-6">
          <div className="grid md:grid-cols-3 gap-8">
            {licenses.map((license, index) => (
              <motion.div
                key={license.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="bg-white rounded-2xl shadow-lg p-8"
              >
                <div className="flex items-center mb-6">
                  <div className="bg-green-100 p-3 rounded-xl">
                    <FileText className="h-6 w-6 text-green-600" />
                  </div>
                  <h3 className="text-xl font-semibold ml-4">{license.title}</h3>
                </div>
                
                <p className="text-gray-600 mb-6">{license.description}</p>
                
                <div className="space-y-4 mb-6">
                  <h4 className="font-semibold">Persyaratan:</h4>
                  {license.requirements.map((req, idx) => (
                    <div key={idx} className="flex items-center text-gray-700">
                      <CheckCircle className="h-5 w-5 text-green-500 mr-3" />
                      <span>{req}</span>
                    </div>
                  ))}
                </div>

                <div className="flex items-center justify-between text-sm border-t pt-4">
                  <div className="flex items-center text-gray-600">
                    <Clock className="h-4 w-4 mr-2" />
                    <span>{license.duration}</span>
                  </div>
                  <div className="text-gray-600">{license.fee}</div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Regulations Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl font-bold mb-4">Regulasi Terkait</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Dasar hukum dan regulasi yang mengatur pengelolaan hutan
            </p>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-8">
            {regulations.map((reg, index) => (
              <motion.div
                key={reg.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="bg-gray-50 rounded-xl p-6"
              >
                <div className="flex items-center mb-4">
                  <Scale className="h-6 w-6 text-green-600 mr-3" />
                  <div className="bg-green-100 text-green-600 px-3 py-1 rounded-full text-sm">
                    {reg.type}
                  </div>
                </div>
                <h3 className="text-xl font-semibold mb-2">{reg.title}</h3>
                <p className="text-gray-600 mb-4">{reg.description}</p>
                <div className="flex items-center justify-between">
                  <span className="text-gray-500">Tahun {reg.year}</span>
                  <button className="text-green-600 hover:text-green-700 flex items-center">
                    <Download className="h-5 w-5 mr-2" />
                    Unduh PDF
                  </button>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl font-bold mb-4">Proses Perizinan</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Langkah-langkah pengajuan perizinan
            </p>
          </motion.div>

          <div className="grid md:grid-cols-4 gap-8">
            {[
              {
                icon: FileText,
                title: "Pengajuan Berkas",
                description: "Siapkan dan ajukan berkas persyaratan"
              },
              {
                icon: FileSearch,
                title: "Verifikasi",
                description: "Pemeriksaan kelengkapan dokumen"
              },
              {
                icon: BookOpen,
                title: "Evaluasi",
                description: "Penilaian teknis dan administratif"
              },
              {
                icon: CheckCircle,
                title: "Penerbitan",
                description: "Penerbitan izin yang diajukan"
              }
            ].map((step, index) => (
              <motion.div
                key={step.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="bg-white rounded-xl p-6 text-center relative"
              >
                {index < 3 && (
                  <div className="absolute top-1/2 right-0 w-full h-0.5 bg-green-200 transform translate-x-1/2" />
                )}
                <div className="bg-green-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4 relative z-10">
                  <step.icon className="h-8 w-8 text-green-600" />
                </div>
                <h3 className="text-lg font-semibold mb-2">{step.title}</h3>
                <p className="text-gray-600">{step.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-20 bg-green-600">
        <div className="container mx-auto px-6">
          <div className="text-center text-white">
            <h2 className="text-3xl font-bold mb-4">Butuh Bantuan?</h2>
            <p className="text-xl mb-8">Tim kami siap membantu proses perizinan Anda</p>
            <div className="flex justify-center space-x-4">
              <button className="bg-white text-green-600 px-8 py-3 rounded-full hover:bg-green-50 transition-colors">
                Konsultasi Online
              </button>
              <button className="border-2 border-white text-white px-8 py-3 rounded-full hover:bg-white/10 transition-colors">
                Panduan Lengkap
              </button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default PerizinanRegulasi;