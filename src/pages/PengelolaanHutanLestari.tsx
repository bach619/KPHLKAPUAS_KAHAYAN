import React from 'react';
import { motion } from 'framer-motion';
import { 
  TreePine, 
  Target, 
  Users, 
  Shield,
  ArrowRight,
  LineChart,
  Leaf,
  Map,
  CheckCircle,
  AlertCircle
} from 'lucide-react';

function PengelolaanHutanLestari() {
  const programs = [
    {
      title: "Inventarisasi Hutan",
      description: "Program pendataan dan pemetaan sumber daya hutan secara komprehensif",
      stats: {
        area: "549.370 Ha",
        coverage: "85%",
        species: "1.200+"
      }
    },
    {
      title: "Pemanfaatan Berkelanjutan",
      description: "Pengelolaan hasil hutan dengan prinsip keberlanjutan",
      stats: {
        communities: "24",
        products: "15+",
        revenue: "2.5M+"
      }
    },
    {
      title: "Monitoring & Evaluasi",
      description: "Sistem pemantauan dan evaluasi kondisi hutan secara berkala",
      stats: {
        stations: "12",
        reports: "Monthly",
        accuracy: "98%"
      }
    }
  ];

  const achievements = [
    {
      year: "2023",
      title: "Sertifikasi Pengelolaan Hutan Lestari",
      description: "Memperoleh sertifikasi internasional untuk praktik pengelolaan hutan berkelanjutan"
    },
    {
      year: "2022",
      title: "Peningkatan Tutupan Hutan",
      description: "Berhasil meningkatkan tutupan hutan sebesar 5% melalui program rehabilitasi"
    },
    {
      year: "2021",
      title: "Pemberdayaan Masyarakat",
      description: "Mengembangkan 15 kelompok tani hutan dengan total 500+ anggota"
    }
  ];

  const indicators = [
    {
      icon: TreePine,
      label: "Tutupan Hutan",
      value: "85%",
      trend: "+5%",
      color: "green"
    },
    {
      icon: Users,
      label: "Kelompok Tani",
      value: "24",
      trend: "+8",
      color: "blue"
    },
    {
      icon: Shield,
      label: "Tingkat Keamanan",
      value: "95%",
      trend: "+10%",
      color: "purple"
    },
    {
      icon: LineChart,
      label: "Produktivitas",
      value: "2.5M",
      trend: "+15%",
      color: "orange"
    }
  ];

  return (
    <div className="pt-24 min-h-screen bg-gray-50">
      {/* Hero Section */}
      <section className="relative py-20 overflow-hidden">
        <div className="absolute inset-0">
          <img
            src="https://images.unsplash.com/photo-1542401886-65d6c61db217?ixlib=rb-4.0.3"
            alt="Sustainable Forest Management"
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
              Pengelolaan Hutan Lestari
            </h1>
            <p className="text-xl text-gray-200 max-w-3xl mx-auto">
              Komitmen kami dalam mengelola hutan secara berkelanjutan untuk generasi mendatang
            </p>
          </motion.div>
        </div>
      </section>

      {/* Key Performance Indicators */}
      <section className="py-12 -mt-20">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
            {indicators.map((indicator, index) => (
              <motion.div
                key={indicator.label}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="bg-white rounded-xl shadow-lg p-6"
              >
                <div className="flex items-center justify-between mb-4">
                  <div className={`bg-${indicator.color}-100 p-3 rounded-full`}>
                    <indicator.icon className={`h-6 w-6 text-${indicator.color}-600`} />
                  </div>
                  <span className={`text-${indicator.color}-600 text-sm font-medium`}>
                    {indicator.trend}
                  </span>
                </div>
                <div className="text-2xl font-bold mb-1">{indicator.value}</div>
                <div className="text-gray-600">{indicator.label}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Programs Section */}
      <section className="py-20">
        <div className="container mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl font-bold mb-4">Program Unggulan</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Inisiatif strategis dalam pengelolaan hutan berkelanjutan
            </p>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-8">
            {programs.map((program, index) => (
              <motion.div
                key={program.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="bg-white rounded-xl shadow-lg p-8"
              >
                <h3 className="text-xl font-semibold mb-4">{program.title}</h3>
                <p className="text-gray-600 mb-6">{program.description}</p>
                <div className="space-y-3">
                  {Object.entries(program.stats).map(([key, value]) => (
                    <div key={key} className="flex items-center justify-between">
                      <span className="text-gray-600 capitalize">{key}</span>
                      <span className="font-semibold">{value}</span>
                    </div>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Achievements Timeline */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl font-bold mb-4">Pencapaian</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Perjalanan kami dalam mewujudkan pengelolaan hutan lestari
            </p>
          </motion.div>

          <div className="max-w-4xl mx-auto">
            {achievements.map((achievement, index) => (
              <motion.div
                key={achievement.year}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="flex items-start mb-12 last:mb-0"
              >
                <div className="bg-green-100 px-4 py-2 rounded-full text-green-600 font-semibold mr-6">
                  {achievement.year}
                </div>
                <div>
                  <h3 className="text-xl font-semibold mb-2">{achievement.title}</h3>
                  <p className="text-gray-600">{achievement.description}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Interactive Map Section */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-6">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <h2 className="text-3xl font-bold mb-6">Wilayah Pengelolaan</h2>
              <p className="text-gray-600 mb-8">
                KPHL Kapuas Kahayan mengelola kawasan hutan seluas 549.370 hektar yang tersebar
                di Kabupaten Kapuas dan Kota Palangka Raya.
              </p>
              <div className="space-y-4">
                {[
                  "3 Resort Pengelolaan",
                  "24 Kelompok Tani Hutan",
                  "15+ Desa Binaan",
                  "5 Zona Pengelolaan"
                ].map((item, index) => (
                  <div key={index} className="flex items-center">
                    <CheckCircle className="h-5 w-5 text-green-600 mr-3" />
                    <span>{item}</span>
                  </div>
                ))}
              </div>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="relative h-[400px] bg-white rounded-xl shadow-lg overflow-hidden"
            >
              <img
                src="https://kphlkapuas-kahayan.info/wp-content/uploads/2025/03/Untitled-design-7.png"
                alt="Management Area Map"
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/30 to-transparent" />
              <div className="absolute bottom-6 left-6 right-6 text-white">
                <h3 className="text-xl font-semibold mb-2">Peta Kawasan</h3>
                <p>Visualisasi area pengelolaan KPHL Kapuas Kahayan</p>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-20 bg-green-600">
        <div className="container mx-auto px-6">
          <div className="text-center text-white">
            <h2 className="text-3xl font-bold mb-4">Mari Berpartisipasi</h2>
            <p className="text-xl mb-8">
              Bergabung dalam upaya pelestarian hutan untuk masa depan yang lebih baik
            </p>
            <div className="flex justify-center space-x-4">
              <button className="bg-white text-green-600 px-8 py-3 rounded-full hover:bg-green-50 transition-colors">
                Program Kemitraan
              </button>
              <button className="border-2 border-white text-white px-8 py-3 rounded-full hover:bg-white/10 transition-colors">
                Pelajari Lebih Lanjut
              </button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default PengelolaanHutanLestari;