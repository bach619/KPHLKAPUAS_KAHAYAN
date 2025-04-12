import React from 'react';
import { motion } from 'framer-motion';
import {
  Users,
  Phone,
  Mail,
  MapPin,
  Building2,
  GraduationCap,
} from 'lucide-react';

const organizationData = {
  name: 'Miko Duwiter, S.Hut, M.Si.',
  role: 'Kepala UPT KPHL Kapuas Kahayan',
  image: 'https://kphlkapuas-kahayan.info/wp-content/uploads/2024/05/12.jpg',
  children: [
    {
      name: 'Annisa, S.Hut.',
      role: 'Kepala Sub Bagian Tata Usaha',
      image: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?ixlib=rb-4.0.3&auto=format&fit=crop&w=256',
    },
    {
      name: 'Fauzi Hastuti, S.Hut.',
      role: 'Kasi Perencanaan dan Pemanfaatan Hutan',
      image: 'https://images.unsplash.com/photo-1580489944761-15a19d654956?ixlib=rb-4.0.3&auto=format&fit=crop&w=256',
    },
    {
      name: 'Ibnu Widyantoro, S.Hut.',
      role: 'Kasi Perlindungan KSDAE dan Pemberdayaan Masyarakat',
      image: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-4.0.3&auto=format&fit=crop&w=256',
    },
    {
      name: 'Siti Norafiah.',
      role: 'KRPH Anjir Kalampan',
      image: 'https://images.unsplash.com/photo-1607746882042-944635dfe10e?ixlib=rb-4.0.3&auto=format&fit=crop&w=256',
    },
    {
      name: 'Osaka, S.Hut.',
      role: 'KRPH Mantangai',
      image: 'https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?ixlib=rb-4.0.3&auto=format&fit=crop&w=256',
    },
    {
      name: 'Ario Marsela.',
      role: 'KRPH Tumbang Mangkutup',
      image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&auto=format&fit=crop&w=256',
    },
    {
      name: 'Pejabat Fungsional.',
      role: 'Kasi Perlindungan KSDAE dan Pemberdayaan Masyarakat',
      image: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?ixlib=rb-4.0.3&auto=format&fit=crop&w=256',
    },
  ],
};

function LanyardNode({ data }: { data: any }) {
  return (
    <div className="relative group">
      <div className="bg-white rounded-lg shadow-lg p-6 transition-all duration-300 hover:shadow-xl border-2 border-green-100 hover:border-green-300">
        <div className="flex flex-col items-center">
          <img 
            src={data.image} 
            alt={data.name}
            className="w-24 h-24 rounded-full object-cover border-4 border-green-200 mb-4 hover:border-green-400 transition-colors"
          />
          <div className="text-center">
            <div className="text-gray-900 font-semibold">{data.name}</div>
            <div className="text-green-600 text-sm mt-1">{data.role}</div>
          </div>
        </div>
      </div>
      {data.children && (
        <>
          <div className="absolute left-1/2 -bottom-8 w-0.5 h-8 bg-green-200 group-hover:bg-green-400 transition-colors duration-300" />
          <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-[calc(100%+4rem)] h-0.5 bg-green-200 group-hover:bg-green-400 transition-colors duration-300" />
        </>
      )}
    </div>
  );
}

function LanyardLevel({ data, level = 0 }: { data: any; level?: number }) {
  return (
    <div
      className={`flex flex-col items-center gap-16 ${
        level === 0 ? 'mt-8' : ''
      }`}
    >
      <LanyardNode data={data} />
      {data.children && (
        <div className="flex gap-8">
          {data.children.map((child: any, index: number) => (
            <div key={index} className="flex-1">
              <LanyardLevel data={child} level={level + 1} />
            </div>
          ))}
        </div>
      )}
    </div>
  );
}

function Structure() {
  return (
    <div className="pt-24 min-h-screen bg-gray-50">
      {/* Hero Section */}
      <section className="relative py-20 overflow-hidden">
        <div className="absolute inset-0">
          <img
            src="https://images.unsplash.com/photo-1497366216548-37526070297c?ixlib=rb-1.2.1"
            alt="Office Background"
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
              Struktur Organisasi
            </h1>
            <p className="text-xl text-gray-200 max-w-3xl mx-auto">
              Struktur organisasi UPT KPHL Kapuas Kahayan dalam mengelola dan
              melestarikan kawasan hutan
            </p>
          </motion.div>
        </div>
      </section>

      {/* Organization Chart */}
      <section className="py-20">
        <div className="container mx-auto px-6">
          <div className="bg-white rounded-2xl shadow-xl p-8 overflow-x-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="min-w-[1200px]"
            >
              <LanyardLevel data={organizationData} />
            </motion.div>
          </div>
        </div>
      </section>

      {/* Resort Management */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl font-bold mb-4">Resort Pengelolaan</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Unit pelaksana teknis di tingkat tapak
            </p>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                name: 'Resort Mantangai',
                head: 'Agus Widodo, S.Hut.',
                area: '63.755 Ha',
                staff: '8 personil',
              },
              {
                name: 'Resort Mangkutup',
                head: 'Rini Sulistyowati, S.Hut.',
                area: '163.773 Ha',
                staff: '10 personil',
              },
              {
                name: 'Resort Anjir Kalampan',
                head: 'Hendra Kusuma, S.Hut.',
                area: '23.342 Ha',
                staff: '6 personil',
              },
            ].map((resort, index) => (
              <motion.div
                key={resort.name}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="bg-white rounded-xl shadow-lg p-6 hover:shadow-xl transition-all duration-300"
              >
                <div className="flex items-center justify-between mb-6">
                  <h3 className="text-xl font-semibold text-gray-800">
                    {resort.name}
                  </h3>
                  <div className="bg-green-100 text-green-600 px-3 py-1 rounded-full text-sm">
                    Resort
                  </div>
                </div>

                <div className="space-y-4">
                  <div className="flex items-center text-gray-600">
                    <Users className="h-5 w-5 mr-3 text-gray-400" />
                    <span>Kepala Resort: {resort.head}</span>
                  </div>
                  <div className="flex items-center text-gray-600">
                    <MapPin className="h-5 w-5 mr-3 text-gray-400" />
                    <span>Luas Wilayah: {resort.area}</span>
                  </div>
                  <div className="flex items-center text-gray-600">
                    <Building2 className="h-5 w-5 mr-3 text-gray-400" />
                    <span>Jumlah Staff: {resort.staff}</span>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}

export default Structure;