import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { 
  MessageSquare, 
  Phone, 
  Mail, 
  MapPin,
  AlertCircle,
  CheckCircle,
  Clock,
  Search,
  FileText,
  Users,
  Shield,
  ChevronDown
} from 'lucide-react';

function PengaduanMasyarakat() {
  const [complaintType, setComplaintType] = useState('');
  const [description, setDescription] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission
    console.log({ complaintType, description });
  };

  const complaintTypes = [
    "Pelanggaran Kawasan Hutan",
    "Kebakaran Hutan",
    "Pembalakan Liar",
    "Perambahan Hutan",
    "Konflik Tenurial",
    "Pencemaran Lingkungan"
  ];

  const features = [
    {
      icon: AlertCircle,
      title: "Pelaporan 24/7",
      description: "Laporkan masalah kapan saja"
    },
    {
      icon: Shield,
      title: "Kerahasiaan",
      description: "Identitas pelapor dilindungi"
    },
    {
      icon: Clock,
      title: "Respon Cepat",
      description: "Penanganan maksimal 2x24 jam"
    },
    {
      icon: Search,
      title: "Tracking Status",
      description: "Pantau progress laporan"
    }
  ];

  return (
    <div className="pt-24 min-h-screen bg-gray-50">
      {/* Hero Section */}
      <section className="relative py-20 overflow-hidden">
        <div className="absolute inset-0">
          <img
            src="https://images.unsplash.com/photo-1521791055366-0d553872125f?ixlib=rb-4.0.3"
            alt="Customer Service"
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
              Pengaduan Masyarakat
            </h1>
            <p className="text-xl text-gray-200 max-w-3xl mx-auto">
              Sampaikan laporan atau pengaduan Anda terkait masalah kehutanan
            </p>
          </motion.div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 -mt-20">
        <div className="container mx-auto px-6">
          <div className="grid md:grid-cols-4 gap-8">
            {features.map((feature, index) => (
              <motion.div
                key={feature.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="bg-white rounded-xl shadow-lg p-6 text-center"
              >
                <div className="bg-green-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                  <feature.icon className="h-8 w-8 text-green-600" />
                </div>
                <h3 className="text-lg font-semibold mb-2">{feature.title}</h3>
                <p className="text-gray-600">{feature.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Complaint Form Section */}
      <section className="py-20">
        <div className="container mx-auto px-6">
          <div className="grid md:grid-cols-2 gap-12">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <h2 className="text-3xl font-bold mb-6">Sampaikan Pengaduan</h2>
              <p className="text-gray-600 mb-8">
                Isi formulir pengaduan dengan lengkap dan jelas. Tim kami akan segera menindaklanjuti laporan Anda.
              </p>

              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <label className="block text-gray-700 font-medium mb-2">
                    Jenis Pengaduan
                  </label>
                  <select
                    value={complaintType}
                    onChange={(e) => setComplaintType(e.target.value)}
                    className="w-full px-4 py-2 rounded-lg border border-gray-300 focus:ring-2 focus:ring-green-600 focus:border-transparent"
                  >
                    <option value="">Pilih Jenis Pengaduan</option>
                    {complaintTypes.map((type) => (
                      <option key={type} value={type}>{type}</option>
                    ))}
                  </select>
                </div>

                <div>
                  <label className="block text-gray-700 font-medium mb-2">
                    Uraian Pengaduan
                  </label>
                  <textarea
                    value={description}
                    onChange={(e) => setDescription(e.target.value)}
                    rows={6}
                    className="w-full px-4 py-2 rounded-lg border border-gray-300 focus:ring-2 focus:ring-green-600 focus:border-transparent"
                    placeholder="Jelaskan detail pengaduan Anda..."
                  />
                </div>

                <div>
                  <label className="block text-gray-700 font-medium mb-2">
                    Lampiran (opsional)
                  </label>
                  <div className="border-2 border-dashed border-gray-300 rounded-lg p-8 text-center">
                    <FileText className="h-8 w-8 text-gray-400 mx-auto mb-4" />
                    <p className="text-gray-600">
                      Seret file ke sini atau{" "}
                      <button className="text-green-600 hover:text-green-700">
                        pilih file
                      </button>
                    </p>
                    <p className="text-sm text-gray-500 mt-2">
                      Format: JPG, PNG, PDF (max. 5MB)
                    </p>
                  </div>
                </div>

                <button
                  type="submit"
                  className="w-full bg-green-600 text-white py-3 rounded-lg hover:bg-green-700 transition-colors"
                >
                  Kirim Pengaduan
                </button>
              </form>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="space-y-8"
            >
              <div className="bg-white rounded-xl shadow-lg p-8">
                <h3 className="text-xl font-semibold mb-6">Tracking Pengaduan</h3>
                <div className="relative">
                  <input
                    type="text"
                    placeholder="Masukkan Nomor Pengaduan"
                    className="w-full px-4 py-2 pr-12 rounded-lg border border-gray-300 focus:ring-2 focus:ring-green-600 focus:border-transparent"
                  />
                  <Search className="absolute right-4 top-1/2 transform -translate-y-1/2 h-5 w-5 text-gray-400" />
                </div>
              </div>

              <div className="bg-white rounded-xl shadow-lg p-8">
                <h3 className="text-xl font-semibold mb-6">Kontak Darurat</h3>
                <div className="space-y-4">
                  <div className="flex items-center">
                    <Phone className="h-5 w-5 text-green-600 mr-3" />
                    <span>+62 0813 5369 001</span>
                  </div>
                  <div className="flex items-center">
                    <Mail className="h-5 w-5 text-green-600 mr-3" />
                    <span>pengaduan@kphlkapuas-kahayan.info</span>
                  </div>
                  <div className="flex items-center">
                    <MapPin className="h-5 w-5 text-green-600 mr-3" />
                    <span>Jl. Transito Sei RT.11 RW.04, Sei Angga</span>
                  </div>
                </div>
              </div>

              <div className="bg-white rounded-xl shadow-lg p-8">
                <h3 className="text-xl font-semibold mb-6">FAQ</h3>
                <div className="space-y-4">
                  <details className="group">
                    <summary className="flex items-center justify-between cursor-pointer">
                      <span className="font-medium">Berapa lama proses penanganan?</span>
                      <span className="transition group-open:rotate-180">
                        <ChevronDown className="h-5 w-5" />
                      </span>
                    </summary>
                    <p className="mt-3 text-gray-600">
                      Kami akan merespon pengaduan maksimal 2x24 jam kerja.
                    </p>
                  </details>
                  {/* Add more FAQ items as needed */}
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl font-bold mb-4">Alur Pengaduan</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Proses penanganan pengaduan masyarakat
            </p>
          </motion.div>

          <div className="grid md:grid-cols-5 gap-8">
            {[
              {
                icon: FileText,
                title: "Pengaduan",
                description: "Isi formulir pengaduan"
              },
              {
                icon: CheckCircle,
                title: "Verifikasi",
                description: "Pemeriksaan kelengkapan"
              },
              {
                icon: Users,
                title: "Investigasi",
                description: "Pengecekan lapangan"
              },
              {
                icon: Shield,
                title: "Tindak Lanjut",
                description: "Penanganan masalah"
              },
              {
                icon: MessageSquare,
                title: "Feedback",
                description: "Laporan penyelesaian"
              }
            ].map((step, index) => (
              <motion.div
                key={step.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="text-center relative"
              >
                {index < 4 && (
                  <div className="absolute top-8 right-0 w-full h-0.5 bg-green-200 transform translate-x-1/2" />
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
    </div>
  );
}

export default PengaduanMasyarakat;