import React from 'react';
import { motion } from 'framer-motion';
import { BarChart3, FileText, Flame, TreePine } from 'lucide-react';

const Statistics = () => {
  const stats = [
    {
      value: '549.370',
      label: 'luas Hutan (Hektar)',
      color: 'from-emerald-500 via-green-500 to-teal-500',
      icon: TreePine,
    },
    {
      value: '1.250',
      label: 'Titik Api Terdeteksi',
      color: 'from-orange-500 via-red-500 to-rose-500',
      icon: Flame,
    },
    {
      value: '85%',
      label: 'Tingkat Kepuasan',
      color: 'from-purple-500 via-fuchsia-500 to-pink-500',
      icon: BarChart3,
    },
    {
      value: '24/7',
      label: 'Layanan Darurat',
      color: 'from-blue-500 via-indigo-500 to-violet-500',
      icon: FileText,
    },
  ];

  return (
    <section className="py-20 relative overflow-hidden">
      {/* Animated Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-emerald-900/10 via-green-900/5 to-teal-900/10">
        <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNDAiIGhlaWdodD0iNDAiIHZpZXdCb3g9IjAgMCA0MCA0MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxjaXJjbGUgY3g9IjIwIiBjeT0iMjAiIHI9IjIiIGZpbGw9InJnYmEoMzQsIDE5NywgOTQsIDAuMikiLz48L2c+PC9zdmc+')] opacity-40" />
        <div className="absolute inset-0 bg-gradient-to-t from-white/90 via-white/30 to-white/90 backdrop-blur-[2px]" />
        {/* Animated circles */}
        <div className="absolute top-0 left-0 w-96 h-96 bg-emerald-400 rounded-full mix-blend-multiply filter blur-3xl opacity-30 animate-blob" />
        <div className="absolute top-0 right-0 w-96 h-96 bg-blue-400 rounded-full mix-blend-multiply filter blur-3xl opacity-30 animate-blob animation-delay-2000" />
        <div className="absolute -bottom-32 left-1/2 w-96 h-96 bg-violet-400 rounded-full mix-blend-multiply filter blur-3xl opacity-30 animate-blob animation-delay-4000" />
      </div>

      <div className="container mx-auto px-6 relative">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-emerald-600 via-green-600 to-teal-600 bg-clip-text text-transparent mb-6">
            Statistik & Transparansi
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto text-lg">
            Komitmen kami dalam transparansi dan akuntabilitas publik
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
            >
              <div className="relative group">
                <div className="absolute inset-0 bg-gradient-to-r from-white/90 to-white/50 rounded-2xl transform -rotate-6 group-hover:rotate-0 transition-transform duration-300" />
                <div className="relative bg-gradient-to-br from-white/95 to-white/75 backdrop-blur-sm rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 border border-white/20">
                  <div className={`bg-gradient-to-r ${stat.color} p-3 rounded-xl inline-flex shadow-lg mb-6`}>
                    <stat.icon className="h-6 w-6 text-white" />
                  </div>
                  <div className={`text-4xl font-bold bg-gradient-to-r ${stat.color} bg-clip-text text-transparent mb-2`}>
                    {stat.value}
                  </div>
                  <div className="text-gray-600">{stat.label}</div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        <div className="mt-16 grid md:grid-cols-2 gap-8">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="bg-gradient-to-br from-white/95 to-white/75 backdrop-blur-sm rounded-2xl shadow-lg p-8 border border-white/20"
          >
            <h3 className="text-xl font-bold mb-6 flex items-center bg-gradient-to-r from-emerald-600 to-green-600 bg-clip-text text-transparent">
              <BarChart3 className="h-6 w-6 text-emerald-600 mr-2" />
              Laporan Kinerja
            </h3>
            <div className="space-y-6">
              {[
                { label: 'Realisasi Program', value: 94.5 },
                { label: 'Anggaran Terserap', value: 96 },
                { label: 'Kepuasan Masyarakat', value: 93 },
              ].map((item, index) => (
                <motion.div
                  key={item.label}
                  initial={{ width: 0 }}
                  whileInView={{ width: '100%' }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.8, delay: index * 0.2 }}
                >
                  <div className="flex justify-between items-center mb-2">
                    <span className="text-gray-600">{item.label}</span>
                    <span className="font-semibold bg-gradient-to-r from-emerald-600 to-green-600 bg-clip-text text-transparent">{item.value}%</span>
                  </div>
                  <div className="h-3 bg-gray-100/50 backdrop-blur-sm rounded-full overflow-hidden">
                    <motion.div
                      initial={{ width: 0 }}
                      whileInView={{ width: `${item.value}%` }}
                      viewport={{ once: true }}
                      transition={{ duration: 1, delay: index * 0.2 }}
                      className="h-full bg-gradient-to-r from-emerald-500 via-green-500 to-teal-500 rounded-full shadow-lg"
                    />
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="bg-gradient-to-br from-white/95 to-white/75 backdrop-blur-sm rounded-2xl shadow-lg p-8 border border-white/20"
          >
            <h3 className="text-xl font-bold mb-6 flex items-center bg-gradient-to-r from-emerald-600 to-green-600 bg-clip-text text-transparent">
              <FileText className="h-6 w-6 text-emerald-600 mr-2" />
              Peraturan & Regulasi
            </h3>
            <div className="space-y-4">
              {[
                {
                  title: 'Perhutanan Sosial',
                  description: 'Peraturan Menteri tentang pedoman pemberian hak pengelolaan, perizinan, kemitraan dan Hutan Adat di bidang Perhutanan Sosial',
                  link: 'https://kphlkapuas-kahayan.info/wp-content/uploads/2024/08/PERMENLHK-No-83-Tentang-Perhutanan-Sosial.pdf'
                },
                {
                  title: 'Permen LHK No. 9 Tahun 2021',
                  description: 'Peraturan menteri lingkungan hidup dan kehutanan tentang pengelolaan perhutanan sosial',
                  link: 'https://kphlkapuas-kahayan.info/wp-content/uploads/2024/08/20230904020825-permenlhk-no-9-tahun-2021.pdf'
                },
                {
                  title: 'Permen LHK No. 8 Tahun 2021',
                  description: 'Tentang Tata Hutan Dan Penyusunan Rencana Pengelolaan Hutan, Serta Pemanfaatan Hutan Di Hutan Lindung Dan Hutan Produksi',
                  link: 'https://kphlkapuas-kahayan.info/wp-content/uploads/2024/08/2021pmlhk008_menlhk_06102021121117.pdf'
                },
              ].map((doc, index) => (
                <motion.a
                  key={doc.title}
                  href={doc.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  initial={{ opacity: 0, x: 20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  className="flex items-center justify-between p-4 bg-gradient-to-r from-white/60 to-white/40 backdrop-blur-sm rounded-xl hover:from-emerald-50 hover:to-green-50 transition-all duration-300 group"
                >
                  <div className="flex-1 pr-4">
                    <h4 className="font-semibold text-gray-800 group-hover:text-emerald-600 transition-colors">
                      {doc.title}
                    </h4>
                    <p className="text-sm text-gray-600 mt-1 line-clamp-2">
                      {doc.description}
                    </p>
                  </div>
                  <motion.div
                    whileHover={{ scale: 1.2 }}
                    transition={{ type: "spring", stiffness: 400, damping: 10 }}
                  >
                    <FileText className="h-5 w-5 text-gray-400 group-hover:text-emerald-600 transition-colors" />
                  </motion.div>
                </motion.a>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Statistics;