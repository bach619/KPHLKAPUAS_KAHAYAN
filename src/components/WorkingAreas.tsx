import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { MapPin, TreePine, Users } from 'lucide-react';

const areas = [
  {
    id: 'unit-4',
    title: 'Unit IV',
    area: '7.805',
    location: 'Kota Palangka Raya',
    description: 'Wilayah kerja yang berada di kawasan Kota Palangka Raya',
    icon: MapPin,
    color: 'from-green-400 to-emerald-600',
  },
  {
    id: 'unit-32',
    title: 'Unit XXXII',
    area: '185.323',
    location: 'Kabupaten Kapuas',
    description: 'Meliputi Kecamatan Mantangai, Kapuas Barat, Basarang, Bataguh, dan Kapuas Kuala',
    icon: TreePine,
    color: 'from-blue-400 to-blue-600',
  },
  {
    id: 'unit-33',
    title: 'Unit XXXIII',
    area: '105.372',
    location: 'Kabupaten Kapuas',
    description: 'Meliputi Kecamatan Timpah dan Kecamatan Mantangai',
    icon: MapPin,
    color: 'from-purple-400 to-purple-600',
  },
  {
    id: 'resorts',
    title: 'Resort',
    area: '250.870',
    location: '3 Resort Pengelolaan',
    description: 'Terbagi menjadi Resort Mantangai (63.755 ha), Resort Mangkutup (163.773 ha), dan Resort Anjir Kalampan (23.342 ha)',
    icon: Users,
    color: 'from-orange-400 to-orange-600',
  },
];

export default function WorkingAreas() {
  const [activeTab, setActiveTab] = useState('unit-4');

  return (
    <section className="py-32 relative overflow-hidden">
      {/* Enhanced Background Pattern */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-gradient-to-br from-green-50 to-emerald-50">
          <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNDAiIGhlaWdodD0iNDAiIHZpZXdCb3g9IjAgMCA0MCA0MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxjaXJjbGUgY3g9IjIwIiBjeT0iMjAiIHI9IjIiIGZpbGw9InJnYmEoMzQsIDE5NywgOTQsIDAuMikiLz48L2c+PC9zdmc+')] opacity-40" />
        </div>
        {/* Animated Background Blobs */}
        <div className="absolute top-0 left-0 w-96 h-96 bg-green-300 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob" />
        <div className="absolute top-0 right-0 w-96 h-96 bg-emerald-300 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob animation-delay-2000" />
        <div className="absolute -bottom-32 left-1/2 w-96 h-96 bg-teal-300 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob animation-delay-4000" />
      </div>

      <div className="container mx-auto px-6 relative">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-24"
        >
          <div className="inline-block">
            <h1 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-green-600 to-emerald-600 bg-clip-text text-transparent mb-12">
              Area KPHL Kapuas Kahayan
            </h1>
          </div>
          <div className="max-w-3xl mx-auto space-y-6">
            <p className="text-gray-600 text-lg">
              UPT KPHL Kapuas Kahayan terletak pada 114°23'31.4"-114°42'44.5"BT dan 1°51'47.4"- 2°25'45.8" LU, mencakup wilayah Kabupaten Kapuas dan Kota Palangka Raya.
            </p>
            <p className="text-gray-600 text-lg">
              Mengelola kawasan hutan lindung seluas 549.370 hektar yang tersebar di Kabupaten Kapuas dan Kota Palangka Raya.
            </p>
          </div>
        </motion.div>

        <div className="flex flex-wrap justify-center gap-6 mb-16">
          {areas.map((area) => (
            <motion.button
              key={area.id}
              onClick={() => setActiveTab(area.id)}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              transition={{ type: "spring", stiffness: 400, damping: 17 }}
              className={`px-8 py-4 rounded-full text-base font-medium transition-all duration-300 ${
                activeTab === area.id
                  ? `bg-gradient-to-r ${area.color} text-white shadow-lg`
                  : 'bg-white/80 backdrop-blur-sm text-gray-600 hover:bg-white shadow-md'
              }`}
            >
              {area.title}
            </motion.button>
          ))}
        </div>

        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="relative h-[500px]">
            <AnimatePresence mode="wait">
              {areas.map((area) => (
                activeTab === area.id && (
                  <motion.div
                    key={area.id}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    exit={{ opacity: 0, x: 20 }}
                    transition={{ duration: 0.3 }}
                    className="absolute inset-0"
                  >
                    <div className="bg-white/80 backdrop-blur-sm rounded-2xl shadow-xl p-10 relative overflow-hidden border border-white/20 h-full">
                      <div className={`absolute top-0 right-0 w-40 h-40 bg-gradient-to-br ${area.color} opacity-10 rounded-bl-full -z-10`} />
                      <motion.div
                        initial={{ scale: 0.8, opacity: 0 }}
                        animate={{ scale: 1, opacity: 1 }}
                        transition={{ duration: 0.5 }}
                        className={`bg-gradient-to-br ${area.color} text-white p-4 rounded-xl inline-flex shadow-lg mb-8`}
                      >
                        <area.icon className="h-10 w-10" />
                      </motion.div>
                      <motion.h3
                        initial={{ opacity: 0, x: -20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: 0.2, duration: 0.5 }}
                        className="text-3xl font-bold mb-3 bg-gradient-to-r from-gray-800 to-gray-600 bg-clip-text text-transparent"
                      >
                        {area.title}
                      </motion.h3>
                      <motion.div
                        initial={{ opacity: 0, x: -20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: 0.3, duration: 0.5 }}
                        className={`text-5xl font-bold bg-gradient-to-r ${area.color} bg-clip-text text-transparent mb-6`}
                      >
                        + {area.area} Ha
                      </motion.div>
                      <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.4, duration: 0.5 }}
                      >
                        <p className="text-gray-600 mb-4 text-lg">
                          <strong className="text-gray-800">Lokasi:</strong> {area.location}
                        </p>
                        <p className="text-gray-600 text-lg">{area.description}</p>
                      </motion.div>
                    </div>
                  </motion.div>
                )
              ))}
            </AnimatePresence>
          </div>
          
          <div className="relative h-[500px] overflow-hidden rounded-2xl">
            <AnimatePresence mode="wait">
              <motion.div
                key={activeTab}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.3 }}
                className="absolute inset-0"
              >
                <img
                  src="https://kphlkapuas-kahayan.info/wp-content/uploads/2025/03/Untitled-design-7.png"
                  alt="Forest Area"
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/30 to-transparent" />
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.3, duration: 0.6 }}
                  className="absolute bottom-10 left-10 right-10 text-white"
                >
                  <h4 className="text-2xl font-semibold mb-3">Kawasan Hutan Lestari</h4>
                  <p className="text-lg text-gray-200">
                    Komitmen kami dalam mengelola dan melestarikan kawasan hutan untuk generasi mendatang
                  </p>
                </motion.div>
              </motion.div>
            </AnimatePresence>
          </div>
        </div>
      </div>
    </section>
  );
}