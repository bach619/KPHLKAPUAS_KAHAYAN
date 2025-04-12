import React from 'react';
import { motion } from 'framer-motion';
import { Milestone, TreePine, Users, Shield, Award, Building } from 'lucide-react';

const milestones = [
  {
    year: '2010',
    title: 'Pembentukan KPHL Kapuas Kahayan',
    description: 'Pendirian resmi KPHL Kapuas Kahayan sebagai unit pengelola hutan di wilayah Kalimantan Tengah.',
    icon: Building,
  },
  {
    year: '2015',
    title: 'Perluasan Wilayah Kerja',
    description: 'Penambahan area kerja mencakup kawasan hutan di Kabupaten Kapuas dan Kota Palangka Raya.',
    icon: TreePine,
  },
  {
    year: '2018',
    title: 'Program Perhutanan Sosial',
    description: 'Implementasi program pemberdayaan masyarakat melalui skema perhutanan sosial.',
    icon: Users,
  },
  {
    year: '2020',
    title: 'Penghargaan Nasional',
    description: 'Menerima penghargaan nasional untuk pengelolaan hutan lestari dan pemberdayaan masyarakat.',
    icon: Award,
  },
  {
    year: '2023',
    title: 'Digitalisasi Layanan',
    description: 'Pengembangan sistem informasi terpadu untuk pelayanan publik dan pengelolaan hutan.',
    icon: Shield,
  },
];

function History() {
  return (
    <div className="pt-24 min-h-screen bg-gray-50">
      {/* Hero Section */}
      <section className="relative py-20 overflow-hidden">
        <div className="absolute inset-0">
          <img
            src="https://images.unsplash.com/photo-1542401886-65d6c61db217?ixlib=rb-4.0.3"
            alt="Forest Background"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-black/60" />
        </div>
        
        <div className="relative container mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center text-white"
          >
            <h1 className="text-4xl md:text-5xl font-bold mb-6">Sejarah KPHL Kapuas Kahayan</h1>
            <p className="text-xl text-gray-200 max-w-3xl mx-auto">
              Perjalanan kami dalam melestarikan dan mengelola kawasan hutan di Kalimantan Tengah
            </p>
          </motion.div>
        </div>
      </section>

      {/* Timeline Section */}
      <section className="py-20">
        <div className="container mx-auto px-6">
          <div className="relative">
            {/* Vertical Line */}
            <div className="absolute left-1/2 transform -translate-x-1/2 h-full w-0.5 bg-green-200" />

            {/* Timeline Items */}
            {milestones.map((milestone, index) => (
              <motion.div
                key={milestone.year}
                initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.2 }}
                className={`relative grid grid-cols-1 md:grid-cols-2 gap-8 mb-16 ${
                  index % 2 === 0 ? 'md:text-right' : 'md:text-left'
                }`}
              >
                <div className={`${index % 2 === 0 ? 'md:order-1' : 'md:order-2'}`}>
                  <div className={`bg-white rounded-2xl shadow-lg p-8 ${
                    index % 2 === 0 ? 'ml-auto mr-8' : 'mr-auto ml-8'
                  }`}>
                    <div className="flex items-center space-x-4 mb-4">
                      <div className="bg-green-100 p-3 rounded-full">
                        <milestone.icon className="h-6 w-6 text-green-600" />
                      </div>
                      <span className="text-2xl font-bold text-green-600">{milestone.year}</span>
                    </div>
                    <h3 className="text-xl font-bold mb-3">{milestone.title}</h3>
                    <p className="text-gray-600">{milestone.description}</p>
                  </div>
                </div>
                <div className={`hidden md:block ${index % 2 === 0 ? 'md:order-2' : 'md:order-1'}`} />
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Vision Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="max-w-4xl mx-auto text-center"
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-8">Visi Ke Depan</h2>
            <p className="text-xl text-gray-600 mb-12">
              KPHL Kapuas Kahayan berkomitmen untuk terus mengembangkan pengelolaan hutan yang 
              berkelanjutan dan memberdayakan masyarakat sekitar hutan untuk kesejahteraan bersama.
            </p>
            <div className="grid md:grid-cols-3 gap-8">
              <div className="bg-gray-50 rounded-xl p-6">
                <TreePine className="h-10 w-10 text-green-600 mx-auto mb-4" />
                <h3 className="text-lg font-semibold mb-2">Pelestarian Hutan</h3>
                <p className="text-gray-600">Menjaga dan meningkatkan kualitas ekosistem hutan</p>
              </div>
              <div className="bg-gray-50 rounded-xl p-6">
                <Users className="h-10 w-10 text-blue-600 mx-auto mb-4" />
                <h3 className="text-lg font-semibold mb-2">Pemberdayaan</h3>
                <p className="text-gray-600">Mengembangkan potensi masyarakat sekitar hutan</p>
              </div>
              <div className="bg-gray-50 rounded-xl p-6">
                <Shield className="h-10 w-10 text-purple-600 mx-auto mb-4" />
                <h3 className="text-lg font-semibold mb-2">Perlindungan</h3>
                <p className="text-gray-600">Menjamin keamanan dan keberlanjutan kawasan hutan</p>
              </div>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}

export default History;