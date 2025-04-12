import React from 'react';
import { motion } from 'framer-motion';
import { ExternalLink, TreePine, Building2, Map, FileText } from 'lucide-react';

const portals = [
  {
    title: "Dinas Kehutanan Provinsi",
    description: "Portal resmi Dinas Kehutanan Provinsi Kalimantan Tengah",
    url: "https://dishut.kalteng.go.id/",
    icon: TreePine,
    color: "bg-green-100 text-green-600"
  },
  {
    title: "Pemprov Kalteng",
    description: "Portal resmi Pemerintah Provinsi Kalimantan Tengah",
    url: "https://kalteng.go.id/",
    icon: Building2,
    color: "bg-blue-100 text-blue-600"
  },
  {
    title: "GIS Kehutanan",
    description: "Sistem Informasi Geografis Kehutanan Kalimantan Tengah",
    url: "https://www.arcgis.com/apps/View/index.html?appid=85f73b5489eb498a9d91c9419fff7380",
    icon: Map,
    color: "bg-purple-100 text-purple-600"
  },
  {
    title: "Produk Hukum",
    description: "Database produk hukum kehutanan Kalimantan Tengah",
    url: "https://dishut.kalteng.go.id/produkhukum",
    icon: FileText,
    color: "bg-orange-100 text-orange-600"
  }
];

export default function PortalTerintegrasi() {
  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Portal Terintegrasi</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Akses cepat ke layanan pemerintah terkait
          </p>
        </motion.div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
          {portals.map((portal, index) => (
            <motion.a
              key={portal.title}
              href={portal.url}
              target="_blank"
              rel="noopener noreferrer"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="group bg-white rounded-xl shadow-lg p-6 hover:shadow-xl transition-all duration-300 transform hover:scale-105"
            >
              <div className={`${portal.color} p-4 rounded-xl mb-4 transition-colors duration-300 group-hover:bg-opacity-80`}>
                <portal.icon className="h-8 w-8" />
              </div>
              <h3 className="font-semibold text-gray-800 mb-2">{portal.title}</h3>
              <p className="text-sm text-gray-600 mb-4">{portal.description}</p>
              <div className="flex items-center text-gray-500 group-hover:text-green-600 transition-colors">
                <span className="text-sm">Kunjungi</span>
                <ExternalLink className="h-4 w-4 ml-2 transform group-hover:translate-x-1 transition-transform" />
              </div>
            </motion.a>
          ))}
        </div>
      </div>
    </section>
  );
}