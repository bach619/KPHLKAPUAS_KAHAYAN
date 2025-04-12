import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { FileText, MessageSquare, BookOpen, AlignCenterVertical as Certificate, ArrowRight, Users, Clock, CheckCircle, AlertCircle, Shield, TreePine, Map, Building2 } from 'lucide-react';

function LayananPublik() {
  const services = [
    {
      icon: FileText,
      title: "Perizinan & Regulasi",
      description: "Layanan pengurusan perizinan dan informasi regulasi kehutanan",
      path: "/layanan/perizinan",
      features: [
        "Izin Pemanfaatan Hutan",
        "Sertifikasi Produk Hutan",
        "Izin Penelitian",
        "Dokumen AMDAL"
      ]
    },
    {
      icon: MessageSquare,
      title: "Pengaduan Masyarakat",
      description: "Sistem pengaduan dan pelaporan masalah kehutanan",
      path: "/layanan/pengaduan",
      features: [
        "Pelaporan Online",
        "Tracking Status",
        "Konsultasi Virtual",
        "Respon 24 Jam"
      ]
    },
    {
      icon: BookOpen,
      title: "Layanan Informasi Hutan",
      description: "Akses informasi dan data kehutanan terpadu",
      path: "/layanan/informasi",
      features: [
        "Data Statistik",
        "Peta Digital",
        "Dokumen Publik",
        "Perpustakaan Digital"
      ]
    },
    {
      icon: Certificate,
      title: "E-Sertifikasi",
      description: "Sertifikasi elektronik untuk produk hasil hutan",
      path: "/layanan/sertifikasi",
      features: [
        "Verifikasi Online",
        "Tracking Produk",
        "Sertifikat Digital",
        "Validasi Dokumen"
      ]
    }
  ];

  const stats = [
    {
      icon: Users,
      value: "10,000+",
      label: "Pengguna Terdaftar"
    },
    {
      icon: Clock,
      value: "24/7",
      label: "Layanan Aktif"
    },
    {
      icon: CheckCircle,
      value: "95%",
      label: "Tingkat Kepuasan"
    },
    {
      icon: AlertCircle,
      value: "<2 Jam",
      label: "Waktu Respon"
    }
  ];

  return (
    <div className="pt-24 min-h-screen bg-gray-50">
      {/* Hero Section */}
      <section className="relative py-20 overflow-hidden">
        <div className="absolute inset-0">
          <img
            src="https://images.unsplash.com/photo-1450101499163-c8848c66ca85?ixlib=rb-4.0.3"
            alt="Public Service"
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
              Layanan Publik
            </h1>
            <p className="text-xl text-gray-200 max-w-3xl mx-auto">
              Akses berbagai layanan publik KPHL Kapuas Kahayan secara mudah dan efisien
            </p>
          </motion.div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-20 -mt-20 relative">
        <div className="container mx-auto px-6">
          <div className="grid md:grid-cols-2 gap-8">
            {services.map((service, index) => (
              <motion.div
                key={service.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
              >
                <Link
                  to={service.path}
                  className="block bg-white rounded-2xl shadow-lg p-8 hover:shadow-xl transition-all duration-300 group"
                >
                  <div className="flex items-center mb-6">
                    <div className="bg-green-100 p-4 rounded-xl mr-4">
                      <service.icon className="h-8 w-8 text-green-600" />
                    </div>
                    <h3 className="text-2xl font-semibold">{service.title}</h3>
                  </div>
                  
                  <p className="text-gray-600 mb-6">{service.description}</p>
                  
                  <div className="space-y-3 mb-6">
                    {service.features.map((feature, idx) => (
                      <div key={idx} className="flex items-center text-gray-700">
                        <CheckCircle className="h-5 w-5 text-green-500 mr-3" />
                        <span>{feature}</span>
                      </div>
                    ))}
                  </div>

                  <div className="flex items-center text-green-600 group-hover:text-green-700 transition-colors">
                    <span className="font-medium">Selengkapnya</span>
                    <ArrowRight className="h-5 w-5 ml-2 transform group-hover:translate-x-1 transition-transform" />
                  </div>
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Statistics Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl font-bold mb-4">Statistik Layanan</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Pencapaian kami dalam memberikan layanan publik yang berkualitas
            </p>
          </motion.div>

          <div className="grid md:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="bg-gray-50 rounded-xl p-6 text-center"
              >
                <div className="bg-green-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                  <stat.icon className="h-8 w-8 text-green-600" />
                </div>
                <div className="text-3xl font-bold text-gray-800 mb-2">{stat.value}</div>
                <div className="text-gray-600">{stat.label}</div>
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
                icon: Shield,
                title: "Keamanan Data",
                description: "Sistem keamanan berlapis untuk melindungi data pengguna"
              },
              {
                icon: TreePine,
                title: "Ramah Lingkungan",
                description: "Mendukung paperless office dan efisiensi energi"
              },
              {
                icon: Building2,
                title: "Terintegrasi",
                description: "Terhubung dengan sistem pemerintahan terkait"
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
            <h2 className="text-3xl font-bold mb-4">Butuh Bantuan?</h2>
            <p className="text-xl mb-8">Tim kami siap membantu Anda 24/7</p>
            <div className="flex justify-center space-x-4">
              <button className="bg-white text-green-600 px-8 py-3 rounded-full hover:bg-green-50 transition-colors">
                Hubungi Kami
              </button>
              <button className="border-2 border-white text-white px-8 py-3 rounded-full hover:bg-white/10 transition-colors">
                FAQ
              </button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default LayananPublik;