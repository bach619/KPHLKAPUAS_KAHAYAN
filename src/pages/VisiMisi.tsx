import React from 'react';
import { motion } from 'framer-motion';
import { 
  Target, 
  Compass, 
  Award,
  Heart, 
  Users, 
  TreePine,
  Shield,
  Scale,
  Leaf
} from 'lucide-react';

function VisiMisi() {
  const values = [
    {
      icon: Heart,
      title: "Integritas",
      description: "Menjalankan tugas dengan kejujuran, tanggung jawab, dan dedikasi tinggi"
    },
    {
      icon: Users,
      title: "Kolaboratif",
      description: "Membangun kerjasama yang kuat dengan semua pemangku kepentingan"
    },
    {
      icon: Shield,
      title: "Profesional",
      description: "Bekerja dengan standar tinggi dan kompetensi yang teruji"
    },
    {
      icon: Scale,
      title: "Keadilan",
      description: "Menjamin pemerataan manfaat bagi seluruh masyarakat"
    }
  ];

  const objectives = [
    {
      title: "Pengelolaan Berkelanjutan",
      description: "Memastikan pemanfaatan sumber daya hutan yang berkelanjutan untuk generasi mendatang"
    },
    {
      title: "Pemberdayaan Masyarakat",
      description: "Meningkatkan kesejahteraan masyarakat sekitar hutan melalui program pemberdayaan"
    },
    {
      title: "Konservasi Ekosistem",
      description: "Menjaga keseimbangan ekosistem dan keanekaragaman hayati"
    },
    {
      title: "Inovasi Pengelolaan",
      description: "Mengembangkan metode pengelolaan hutan yang inovatif dan efektif"
    }
  ];

  return (
    <div className="pt-24 min-h-screen bg-gray-50">
      {/* Hero Section */}
      <section className="relative py-20 overflow-hidden">
        <div className="absolute inset-0">
          <img
            src="https://images.unsplash.com/photo-1448375240586-882707db888b?ixlib=rb-4.0.3"
            alt="Forest Canopy"
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
              Visi & Misi
            </h1>
            <p className="text-xl text-gray-200 max-w-3xl mx-auto">
              Arah dan tujuan KPHL Kapuas Kahayan dalam mewujudkan pengelolaan hutan lestari
            </p>
          </motion.div>
        </div>
      </section>

      {/* Vision Section */}
      <section className="py-20">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="bg-white rounded-2xl shadow-xl p-8 md:p-12 text-center relative overflow-hidden"
            >
              <div className="absolute top-0 right-0 w-40 h-40 bg-green-100 rounded-bl-full opacity-50" />
              <div className="relative">
                <div className="bg-green-100 w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-6">
                  <Target className="h-10 w-10 text-green-600" />
                </div>
                <h2 className="text-3xl font-bold mb-6">Visi</h2>
                <p className="text-xl text-gray-700 leading-relaxed">
                  "Menjadi lembaga pengelola hutan yang profesional, berkelanjutan, dan mensejahterakan masyarakat di Kalimantan Tengah"
                </p>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Mission Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl font-bold mb-4">Misi</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Langkah-langkah strategis dalam mewujudkan visi
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-8">
            {[
              {
                icon: TreePine,
                title: "Pengelolaan Hutan Berkelanjutan",
                description: "Menyelenggarakan pengelolaan hutan yang berkelanjutan dengan memperhatikan aspek ekologi, ekonomi, dan sosial."
              },
              {
                icon: Users,
                title: "Pemberdayaan Masyarakat",
                description: "Meningkatkan peran serta dan kesejahteraan masyarakat sekitar hutan melalui program pemberdayaan yang terencana."
              },
              {
                icon: Shield,
                title: "Perlindungan Ekosistem",
                description: "Melaksanakan perlindungan dan konservasi ekosistem hutan serta keanekaragaman hayati."
              },
              {
                icon: Compass,
                title: "Pengembangan Kapasitas",
                description: "Meningkatkan kapasitas kelembagaan dan SDM dalam pengelolaan hutan yang profesional."
              }
            ].map((mission, index) => (
              <motion.div
                key={mission.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="bg-gray-50 rounded-xl p-8"
              >
                <div className="flex items-center mb-6">
                  <div className="bg-green-100 p-4 rounded-full mr-4">
                    <mission.icon className="h-8 w-8 text-green-600" />
                  </div>
                  <h3 className="text-xl font-semibold">{mission.title}</h3>
                </div>
                <p className="text-gray-600">{mission.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl font-bold mb-4">Nilai-Nilai Kami</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Prinsip-prinsip yang menjadi landasan dalam setiap tindakan
            </p>
          </motion.div>

          <div className="grid md:grid-cols-4 gap-8">
            {values.map((value, index) => (
              <motion.div
                key={value.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="bg-white rounded-xl shadow-lg p-6 text-center"
              >
                <div className="bg-green-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-6">
                  <value.icon className="h-8 w-8 text-green-600" />
                </div>
                <h3 className="text-lg font-semibold mb-2">{value.title}</h3>
                <p className="text-gray-600 text-sm">{value.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Strategic Objectives Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl font-bold mb-4">Sasaran Strategis</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Target pencapaian dalam mewujudkan visi dan misi
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-8">
            {objectives.map((objective, index) => (
              <motion.div
                key={objective.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="bg-gray-50 rounded-xl p-8 flex items-start space-x-4"
              >
                <div className="bg-green-100 p-2 rounded-full">
                  <Leaf className="h-6 w-6 text-green-600" />
                </div>
                <div>
                  <h3 className="text-lg font-semibold mb-2">{objective.title}</h3>
                  <p className="text-gray-600">{objective.description}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}

export default VisiMisi;