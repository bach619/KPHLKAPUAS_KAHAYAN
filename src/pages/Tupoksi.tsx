import React from 'react';
import { motion } from 'framer-motion';
import { 
  TreePine, 
  Shield, 
  Users, 
  FileText, 
  Target, 
  Leaf,
  Scale,
  Building2,
  Map,
  BookOpen,
  ClipboardCheck,
  LineChart
} from 'lucide-react';

function Tupoksi() {
  const mainDuties = [
    {
      icon: TreePine,
      title: "Pengelolaan Hutan",
      description: "Menyelenggarakan pengelolaan hutan sesuai dengan fungsi dan peruntukannya di wilayah kerja KPHL Kapuas Kahayan."
    },
    {
      icon: Shield,
      title: "Perlindungan Hutan",
      description: "Melaksanakan perlindungan dan konservasi sumber daya alam di wilayah KPHL Kapuas Kahayan."
    },
    {
      icon: Users,
      title: "Pemberdayaan Masyarakat",
      description: "Menyelenggarakan program pemberdayaan masyarakat di dalam dan sekitar kawasan hutan."
    }
  ];

  const functions = [
    {
      icon: Map,
      title: "Perencanaan",
      items: [
        "Inventarisasi berkala sumber daya dan potensi hutan",
        "Penyusunan rencana pengelolaan hutan jangka panjang",
        "Penyusunan rencana pengelolaan hutan jangka pendek",
        "Penyusunan rencana anggaran dan kegiatan"
      ]
    },
    {
      icon: Building2,
      title: "Pengelolaan",
      items: [
        "Pengelolaan kawasan hutan sesuai fungsi dan peruntukannya",
        "Pemanfaatan hutan di wilayah kerja",
        "Penggunaan kawasan hutan",
        "Rehabilitasi dan reklamasi hutan"
      ]
    },
    {
      icon: Scale,
      title: "Pengawasan",
      items: [
        "Pemantauan dan evaluasi pelaksanaan kegiatan pengelolaan hutan",
        "Pengawasan terhadap pemegang izin pemanfaatan hutan",
        "Pengendalian kerusakan hutan, kawasan hutan dan hasil hutan",
        "Pengawasan terhadap pelaksanaan rehabilitasi dan reklamasi hutan"
      ]
    }
  ];

  const responsibilities = [
    {
      icon: ClipboardCheck,
      title: "Administratif",
      description: "Penyelenggaraan kegiatan tata usaha dan rumah tangga KPHL"
    },
    {
      icon: BookOpen,
      title: "Teknis",
      description: "Pelaksanaan kegiatan teknis pengelolaan hutan"
    },
    {
      icon: LineChart,
      title: "Pelaporan",
      description: "Penyusunan laporan secara berkala"
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
              Tugas Pokok dan Fungsi
            </h1>
            <p className="text-xl text-gray-200 max-w-3xl mx-auto">
              Landasan operasional KPHL Kapuas Kahayan dalam mengelola dan melestarikan kawasan hutan
            </p>
          </motion.div>
        </div>
      </section>

      {/* Main Duties Section */}
      <section className="py-20">
        <div className="container mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl font-bold mb-4">Tugas Pokok</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Tugas utama KPHL Kapuas Kahayan dalam mengelola kawasan hutan
            </p>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-8">
            {mainDuties.map((duty, index) => (
              <motion.div
                key={duty.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="bg-white rounded-xl shadow-lg p-8 hover:shadow-xl transition-all duration-300"
              >
                <div className="bg-green-100 w-16 h-16 rounded-full flex items-center justify-center mb-6">
                  <duty.icon className="h-8 w-8 text-green-600" />
                </div>
                <h3 className="text-xl font-semibold mb-4">{duty.title}</h3>
                <p className="text-gray-600">{duty.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Functions Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl font-bold mb-4">Fungsi</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Fungsi-fungsi yang dijalankan dalam pelaksanaan tugas
            </p>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-8">
            {functions.map((func, index) => (
              <motion.div
                key={func.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="bg-gray-50 rounded-xl p-8"
              >
                <div className="flex items-center mb-6">
                  <div className="bg-green-100 p-3 rounded-full mr-4">
                    <func.icon className="h-6 w-6 text-green-600" />
                  </div>
                  <h3 className="text-xl font-semibold">{func.title}</h3>
                </div>
                <ul className="space-y-3">
                  {func.items.map((item, idx) => (
                    <li key={idx} className="flex items-start">
                      <span className="w-2 h-2 mt-2 bg-green-600 rounded-full mr-3" />
                      <span className="text-gray-600">{item}</span>
                    </li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Responsibilities Section */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl font-bold mb-4">Tanggung Jawab</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Tanggung jawab dalam pelaksanaan tugas dan fungsi
            </p>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-8">
            {responsibilities.map((resp, index) => (
              <motion.div
                key={resp.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="bg-white rounded-xl shadow-lg p-8 text-center"
              >
                <div className="bg-green-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-6">
                  <resp.icon className="h-8 w-8 text-green-600" />
                </div>
                <h3 className="text-xl font-semibold mb-4">{resp.title}</h3>
                <p className="text-gray-600">{resp.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}

export default Tupoksi;