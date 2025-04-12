import React, { useState } from 'react';
import { MapPin, Shield, AlertTriangle, Phone, Bell, FileText, Calendar } from 'lucide-react';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';

// Mock data for threat monitoring
const threatData = [
  { month: 'Jan', incidents: 5, resolved: 4 },
  { month: 'Feb', incidents: 7, resolved: 7 },
  { month: 'Mar', incidents: 3, resolved: 2 },
  { month: 'Apr', incidents: 8, resolved: 6 },
  { month: 'May', incidents: 4, resolved: 4 },
  { month: 'Jun', incidents: 2, resolved: 2 },
];

// Mock data for patrol routes
const patrolRoutes = [
  { id: 1, name: 'Rute Utara', frequency: 'Harian', personnel: 4, length: '12km' },
  { id: 2, name: 'Rute Timur', frequency: 'Mingguan', personnel: 6, length: '18km' },
  { id: 3, name: 'Rute Selatan', frequency: 'Harian', personnel: 3, length: '8km' },
  { id: 4, name: 'Rute Barat', frequency: 'Dua kali seminggu', personnel: 5, length: '15km' },
];

// Mock emergency contacts
const emergencyContacts = [
  { id: 1, name: 'Tim Tanggap Darurat Hutan', number: '+62 812-3456-7890', available: '24/7' },
  { id: 2, name: 'Kantor Pengamanan Hutan', number: '+62 821-0987-6543', available: '08.00 - 16.00' },
  { id: 3, name: 'Koordinator Pemadam Kebakaran', number: '+62 856-5432-1098', available: '24/7' },
];

// Mock incident data for live map
const incidentData = [
  { id: 1, type: 'Pembalakan', location: 'Area Utara', status: 'Ditangani', lat: -2.5489, lng: 115.3931 },
  { id: 2, type: 'Kebakaran', location: 'Area Timur', status: 'Proses', lat: -2.5589, lng: 115.4031 },
  { id: 3, type: 'Perburuan', location: 'Area Barat', status: 'Dilaporkan', lat: -2.5389, lng: 115.3831 },
];

const PerlindunganPage = () => {
  const [activeTab, setActiveTab] = useState('overview');
  const [showReportForm, setShowReportForm] = useState(false);
  const [incidentType, setIncidentType] = useState('');
  const [incidentLocation, setIncidentLocation] = useState('');
  const [incidentDescription, setIncidentDescription] = useState('');
  const [reporterContact, setReporterContact] = useState('');
  const [showAlert, setShowAlert] = useState(false);
  const [alertMessage, setAlertMessage] = useState('');

  const handleSubmitReport = (e: React.FormEvent) => {
    e.preventDefault();
    // Di aplikasi nyata, di sini data akan dikirimkan ke backend
    setAlertMessage('Laporan insiden berhasil dikirim. Tim kami akan segera menindaklanjuti.');
    setShowAlert(true);
    setShowReportForm(false);
    // Reset form
    setIncidentType('');
    setIncidentLocation('');
    setIncidentDescription('');
    setReporterContact('');
  };

  const handleEmergencyAlert = () => {
    setAlertMessage('Peringatan darurat telah diaktifkan! Tim tanggap darurat sedang dikerahkan.');
    setShowAlert(true);
  };

  return (
    <div className="bg-green-50 min-h-screen">
      {/* Alert Notification */}
      {showAlert && (
        <div className="fixed top-4 right-4 bg-green-600 text-white px-6 py-3 rounded-md shadow-lg z-50 flex items-center">
          <span>{alertMessage}</span>
          <button 
            onClick={() => setShowAlert(false)} 
            className="ml-4 text-white hover:text-green-100"
          >
            ✕
          </button>
        </div>
      )}

      {/* Hero Section */}
      <div className="relative h-64 bg-green-900">
        <div 
          className="absolute inset-0 bg-cover bg-center opacity-60"
          style={{ backgroundImage: "url('/images/forest-protection-hero.jpg')" }}
        />
        <div className="relative container mx-auto px-4 h-full flex flex-col justify-center">
          <h1 className="text-4xl font-bold text-white mb-2 mt-20">Perlindungan & Pengamanan Hutan</h1>
          <p className="text-xl text-green-100">Menjaga kelestarian hutan melalui strategi pengamanan dan perlindungan yang efektif</p>
        </div>
      </div>

      {/* Navigation Tabs */}
      <div className="bg-green-800 text-white">
        <div className="container mx-auto px-4">
          <div className="flex overflow-x-auto">
            <button 
              className={`px-6 py-4 font-medium ${activeTab === 'overview' ? 'bg-green-700' : ''}`}
              onClick={() => setActiveTab('overview')}
            >
              Strategi Perlindungan
            </button>
            <button 
              className={`px-6 py-4 font-medium ${activeTab === 'patrol' ? 'bg-green-700' : ''}`}
              onClick={() => setActiveTab('patrol')}
            >
              Patroli Keamanan
            </button>
            <button 
              className={`px-6 py-4 font-medium ${activeTab === 'prevention' ? 'bg-green-700' : ''}`}
              onClick={() => setActiveTab('prevention')}
            >
              Pencegahan Ancaman
            </button>
            <button 
              className={`px-6 py-4 font-medium ${activeTab === 'emergency' ? 'bg-green-700' : ''}`}
              onClick={() => setActiveTab('emergency')}
            >
              Tanggap Darurat
            </button>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="container mx-auto px-4 py-8">
        {/* Overview Tab */}
        {activeTab === 'overview' && (
          <div className="grid md:grid-cols-2 gap-8">
            <div>
              <h2 className="text-2xl font-bold text-green-800 mb-4">Strategi Perlindungan Hutan</h2>
              <p className="mb-4">
                Program perlindungan hutan kami menerapkan pendekatan terpadu yang menggabungkan teknologi pengawasan modern, 
                patroli rutin oleh tim terlatih, dan keterlibatan masyarakat sekitar hutan untuk mencegah kegiatan ilegal dan 
                melindungi keanekaragaman hayati.
              </p>
              <p className="mb-6">
                Melalui kolaborasi dengan masyarakat lokal dan lembaga pemerintah, kami berupaya menjaga hutan dari ancaman seperti:
              </p>
              <ul className="space-y-2 mb-6">
                <li className="flex items-start">
                  <Shield className="text-green-700 mr-2 mt-1" size={20} />
                  <span>Pembalakan liar dan perambahan hutan</span>
                </li>
                <li className="flex items-start">
                  <Shield className="text-green-700 mr-2 mt-1" size={20} />
                  <span>Kebakaran hutan dan lahan</span>
                </li>
                <li className="flex items-start">
                  <Shield className="text-green-700 mr-2 mt-1" size={20} />
                  <span>Perburuan liar dan perdagangan satwa ilegal</span>
                </li>
                <li className="flex items-start">
                  <Shield className="text-green-700 mr-2 mt-1" size={20} />
                  <span>Konversi hutan untuk penggunaan lain</span>
                </li>
              </ul>
              <div className="mt-6">
                <button 
                  className="bg-green-700 hover:bg-green-800 text-white px-6 py-2 rounded-md flex items-center"
                  onClick={() => setShowReportForm(true)}
                >
                  <AlertTriangle size={18} className="mr-2" />
                  Laporkan Insiden
                </button>
              </div>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-semibold text-green-800 mb-4">Dashboard Monitoring Ancaman</h3>
              <div className="h-64">
                <ResponsiveContainer width="100%" height="100%">
                  <LineChart data={threatData}>
                    <CartesianGrid strokeDasharray="3 3" />
                    <XAxis dataKey="month" />
                    <YAxis />
                    <Tooltip />
                    <Legend />
                    <Line type="monotone" dataKey="incidents" stroke="#ef4444" name="Insiden" />
                    <Line type="monotone" dataKey="resolved" stroke="#22c55e" name="Teratasi" />
                  </LineChart>
                </ResponsiveContainer>
              </div>
              <div className="mt-6 grid grid-cols-2 gap-4">
                <div className="bg-red-50 p-4 rounded-md border border-red-200">
                  <h4 className="text-red-800 font-medium mb-1">Area Berisiko Tinggi</h4>
                  <p className="text-red-700">Perbatasan Utara (3 insiden)</p>
                </div>
                <div className="bg-blue-50 p-4 rounded-md border border-blue-200">
                  <h4 className="text-blue-800 font-medium mb-1">Status Keamanan</h4>
                  <p className="text-blue-700">Waspada (Level 2)</p>
                </div>
              </div>
              
              {/* Live Incident Map */}
              <div className="mt-6">
                <h4 className="text-lg font-semibold text-green-800 mb-2">Peta Insiden Langsung</h4>
                <div className="relative h-48 bg-gray-100 rounded-md">
                  <div className="absolute inset-0 bg-cover bg-center opacity-75"
                    style={{ backgroundImage: "url('/images/forest-map.jpg')" }}>
                    {incidentData.map(incident => (
                      <div 
                        key={incident.id}
                        className={`absolute w-4 h-4 rounded-full ${incident.status === 'Ditangani' ? 'bg-green-500' : incident.status === 'Proses' ? 'bg-yellow-500' : 'bg-red-500'}`}
                        style={{
                          left: `${50 + (incident.lng - 115.3931) * 500}%`,
                          top: `${50 + (incident.lat + 2.5489) * 500}%`
                        }}
                        title={`${incident.type} - ${incident.location}`}
                      />
                    ))}
                  </div>
                  <div className="absolute bottom-2 right-2 bg-white p-2 rounded shadow text-xs">
                    <div className="flex items-center mb-1">
                      <span className="w-3 h-3 rounded-full bg-red-500 mr-1"></span>
                      <span>Baru Dilaporkan</span>
                    </div>
                    <div className="flex items-center mb-1">
                      <span className="w-3 h-3 rounded-full bg-yellow-500 mr-1"></span>
                      <span>Dalam Proses</span>
                    </div>
                    <div className="flex items-center">
                      <span className="w-3 h-3 rounded-full bg-green-500 mr-1"></span>
                      <span>Ditangani</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}

        {/* Patrol Tab */}
        {activeTab === 'patrol' && (
          <div>
            <div className="flex justify-between items-center mb-6">
              <h2 className="text-2xl font-bold text-green-800">Patroli Keamanan Hutan</h2>
              <div className="flex items-center space-x-2">
                <span className="text-sm text-gray-600">Status Patroli:</span>
                <span className="bg-green-100 text-green-800 px-3 py-1 rounded-full text-sm font-medium">
                  Aktif
                </span>
              </div>
            </div>
            
            <div className="grid md:grid-cols-3 gap-6 mb-8">
              <div className="bg-white rounded-lg shadow-md p-6">
                <div className="flex items-center mb-4">
                  <Calendar className="text-green-700 mr-3" size={24} />
                  <h3 className="text-lg font-semibold">4 Patroli Rutin</h3>
                </div>
                <p className="text-gray-600">Patroli dilakukan secara rutin sesuai jadwal terencana di seluruh area hutan lindung</p>
              </div>
              <div className="bg-white rounded-lg shadow-md p-6">
                <div className="flex items-center mb-4">
                  <MapPin className="text-green-700 mr-3" size={24} />
                  <h3 className="text-lg font-semibold">53 Km Rute</h3>
                </div>
                <p className="text-gray-600">Total panjang rute patroli yang mencakup seluruh area penting dalam kawasan hutan</p>
              </div>
              <div className="bg-white rounded-lg shadow-md p-6">
                <div className="flex items-center mb-4">
                  <Shield className="text-green-700 mr-3" size={24} />
                  <h3 className="text-lg font-semibold">18 Personel</h3>
                </div>
                <p className="text-gray-600">Tim terlatih yang melaksanakan patroli dan pengamanan kawasan hutan lindung</p>
              </div>
            </div>
            
            <div className="bg-white rounded-lg shadow-md p-6 mb-8">
              <h3 className="text-xl font-semibold text-green-800 mb-4">Peta Rute Patroli</h3>
              <div className="relative h-96 bg-green-100 rounded-md mb-4">
                <div className="absolute inset-0 bg-cover bg-center"
                  style={{ backgroundImage: "url('/images/patrol-routes-map.jpg')" }}>
                  <svg className="absolute inset-0 w-full h-full">
                    <path 
                      d="M100,100 L200,150 L300,80 L400,120" 
                      stroke="#3b82f6" 
                      strokeWidth="3" 
                      fill="none" 
                      strokeDasharray="5,5"
                    />
                    <path 
                      d="M150,200 L250,180 L350,220" 
                      stroke="#10b981" 
                      strokeWidth="3" 
                      fill="none"
                    />
                    <path 
                      d="M50,250 L150,300 L250,280 L350,250" 
                      stroke="#f59e0b" 
                      strokeWidth="3" 
                      fill="none"
                    />
                    <path 
                      d="M200,50 L300,30 L400,80" 
                      stroke="#ef4444" 
                      strokeWidth="3" 
                      fill="none" 
                      strokeDasharray="5,5"
                    />
                  </svg>
                  <div className="absolute bottom-4 right-4 bg-white p-2 rounded shadow">
                    <div className="flex items-center space-x-2 text-sm">
                      <span className="flex items-center">
                        <span className="block w-3 h-3 bg-green-500 rounded-full mr-1"></span>
                        Aktif
                      </span>
                      <span className="flex items-center">
                        <span className="block w-3 h-3 bg-gray-400 rounded-full mr-1"></span>
                        Tidak Aktif
                      </span>
                    </div>
                  </div>
                </div>
              </div>
              <div className="overflow-x-auto">
                <table className="min-w-full">
                  <thead className="bg-green-50">
                    <tr>
                      <th className="px-4 py-2 text-left text-green-800 font-semibold">Nama Rute</th>
                      <th className="px-4 py-2 text-left text-green-800 font-semibold">Frekuensi</th>
                      <th className="px-4 py-2 text-left text-green-800 font-semibold">Personel</th>
                      <th className="px-4 py-2 text-left text-green-800 font-semibold">Panjang</th>
                      <th className="px-4 py-2 text-left text-green-800 font-semibold">Status</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-gray-200">
                    {patrolRoutes.map(route => (
                      <tr key={route.id}>
                        <td className="px-4 py-3">{route.name}</td>
                        <td className="px-4 py-3">{route.frequency}</td>
                        <td className="px-4 py-3">{route.personnel} orang</td>
                        <td className="px-4 py-3">{route.length}</td>
                        <td className="px-4 py-3">
                          <span className={`px-2 py-1 rounded-full text-xs ${route.id % 2 === 0 ? 'bg-green-100 text-green-800' : 'bg-gray-100 text-gray-800'}`}>
                            {route.id % 2 === 0 ? 'Aktif' : 'Tidak Aktif'}
                          </span>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        )}

        {/* Prevention Tab */}
        {activeTab === 'prevention' && (
          <div>
            <h2 className="text-2xl font-bold text-green-800 mb-6">Pencegahan Ancaman</h2>
            
            <div className="grid md:grid-cols-2 gap-8 mb-8">
              <div className="bg-white p-6 rounded-lg shadow-md">
                <h3 className="text-xl font-semibold text-green-800 mb-4">Sistem Pemantauan</h3>
                <p className="mb-4">
                  Kami menggunakan teknologi modern dan kearifan lokal untuk memantau dan mencegah ancaman terhadap kawasan hutan:
                </p>
                <ul className="space-y-4">
                  <li className="flex">
                    <div className="bg-green-100 p-2 rounded mr-4">
                      <Bell className="text-green-700" size={24} />
                    </div>
                    <div>
                      <h4 className="font-medium">Sistem Peringatan Dini</h4>
                      <p className="text-gray-600">Deteksi awal kebakaran hutan dan aktivitas ilegal melalui jaringan sensor dan pengawasan</p>
                    </div>
                  </li>
                  <li className="flex">
                    <div className="bg-green-100 p-2 rounded mr-4">
                      <MapPin className="text-green-700" size={24} />
                    </div>
                    <div>
                      <h4 className="font-medium">Pemantauan Berbasis GIS</h4>
                      <p className="text-gray-600">Pemetaan dan analisis spasial untuk mengidentifikasi area rentan dan perubahan tutupan lahan</p>
                    </div>
                  </li>
                  <li className="flex">
                    <div className="bg-green-100 p-2 rounded mr-4">
                      <Shield className="text-green-700" size={24} />
                    </div>
                    <div>
                      <h4 className="font-medium">Patroli Partisipatif</h4>
                      <p className="text-gray-600">Melibatkan masyarakat lokal dalam pengawasan dan pelaporan aktivitas mencurigakan</p>
                    </div>
                  </li>
                </ul>
              </div>
              
              <div className="bg-white p-6 rounded-lg shadow-md">
                <h3 className="text-xl font-semibold text-green-800 mb-4">Pencegahan Kebakaran</h3>
                <div className="bg-orange-50 border border-orange-200 rounded-md p-4 mb-4">
                  <div className="flex items-center mb-2">
                    <AlertTriangle className="text-orange-500 mr-2" size={20} />
                    <h4 className="font-medium">Status Kebakaran: SIAGA</h4>
                  </div>
                  <p className="text-sm text-gray-700">Tingkat resiko sedang, pemantauan intensif sedang berlangsung</p>
                </div>
                
                <div className="mb-4">
                  <h4 className="font-medium mb-2">Langkah Pencegahan:</h4>
                  <ul className="space-y-2">
                    <li className="flex items-start">
                      <span className="inline-block bg-green-100 text-green-800 text-sm font-medium rounded-full w-5 h-5 flex items-center justify-center mr-2 mt-0.5">1</span>
                      <span>Pembuatan dan pemeliharaan sekat bakar</span>
                    </li>
                    <li className="flex items-start">
                      <span className="inline-block bg-green-100 text-green-800 text-sm font-medium rounded-full w-5 h-5 flex items-center justify-center mr-2 mt-0.5">2</span>
                      <span>Patroli reguler di musim kemarau</span>
                    </li>
                    <li className="flex items-start">
                      <span className="inline-block bg-green-100 text-green-800 text-sm font-medium rounded-full w-5 h-5 flex items-center justify-center mr-2 mt-0.5">3</span>
                      <span>Pelatihan masyarakat untuk pencegahan kebakaran</span>
                    </li>
                    <li className="flex items-start">
                      <span className="inline-block bg-green-100 text-green-800 text-sm font-medium rounded-full w-5 h-5 flex items-center justify-center mr-2 mt-0.5">4</span>
                      <span>Operasi gabungan dengan pemerintah daerah</span>
                    </li>
                  </ul>
                </div>
                
                <button className="bg-green-700 hover:bg-green-800 text-white px-4 py-2 rounded-md w-full">
                  Akses Peta Titik Rawan Kebakaran
                </button>
              </div>
            </div>
            
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-semibold text-green-800 mb-4">Statistik Pencegahan</h3>
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                <div className="bg-green-50 p-4 rounded-md">
                  <p className="text-sm text-gray-600">Total Patroli</p>
                  <p className="text-2xl font-bold text-green-800">237</p>
                  <p className="text-xs text-green-600">Tahun Berjalan</p>
                </div>
                <div className="bg-green-50 p-4 rounded-md">
                  <p className="text-sm text-gray-600">Pelanggaran Tercegah</p>
                  <p className="text-2xl font-bold text-green-800">42</p>
                  <p className="text-xs text-green-600">Tahun Berjalan</p>
                </div>
                <div className="bg-green-50 p-4 rounded-md">
                  <p className="text-sm text-gray-600">Kebakaran Tercegah</p>
                  <p className="text-2xl font-bold text-green-800">16</p>
                  <p className="text-xs text-green-600">Tahun Berjalan</p>
                </div>
                <div className="bg-green-50 p-4 rounded-md">
                  <p className="text-sm text-gray-600">Kasus Diproses</p>
                  <p className="text-2xl font-bold text-green-800">8</p>
                  <p className="text-xs text-green-600">Tahun Berjalan</p>
                </div>
              </div>
            </div>
          </div>
        )}

        {/* Emergency Tab */}
        {activeTab === 'emergency' && (
          <div>
            <h2 className="text-2xl font-bold text-green-800 mb-6">Protokol Tanggap Darurat</h2>
            
            <div className="grid md:grid-cols-2 gap-8 mb-8">
              <div>
                <div className="bg-red-50 border border-red-200 rounded-lg p-6 mb-6">
                  <div className="flex items-center mb-4">
                    <Phone className="text-red-600 mr-3" size={24} />
                    <h3 className="text-xl font-semibold text-red-800">Kontak Darurat</h3>
                  </div>
                  <ul className="space-y-4">
                    {emergencyContacts.map(contact => (
                      <li key={contact.id} className="flex items-start border-b border-red-100 pb-3 last:border-0">
                        <div className="bg-white p-2 rounded-full mr-3">
                          <Phone className="text-red-600" size={16} />
                        </div>
                        <div>
                          <h4 className="font-medium text-gray-900">{contact.name}</h4>
                          <p className="text-red-600 font-medium">{contact.number}</p>
                          <p className="text-sm text-gray-600">Tersedia: {contact.available}</p>
                        </div>
                      </li>
                    ))}
                  </ul>
                </div>
                
                <div className="bg-white rounded-lg shadow-md p-6">
                  <h3 className="text-xl font-semibold text-green-800 mb-4">Protokol Standar</h3>
                  <div className="space-y-4">
                    <div className="border-l-4 border-green-600 pl-4">
                      <h4 className="font-medium">1. Identifikasi & Pelaporan</h4>
                      <p className="text-gray-600 text-sm">Segera laporkan insiden ke pusat kendali darurat sesuai prosedur</p>
                    </div>
                    <div className="border-l-4 border-green-600 pl-4">
                      <h4 className="font-medium">2. Evakuasi & Pengamanan</h4>
                      <p className="text-gray-600 text-sm">Pastikan keselamatan personel dan pengunjung terlebih dahulu</p>
                    </div>
                    <div className="border-l-4 border-green-600 pl-4">
                      <h4 className="font-medium">3. Mobilisasi Tim</h4>
                      <p className="text-gray-600 text-sm">Tim tanggap darurat dikerahkan sesuai jenis insiden yang terjadi</p>
                    </div>
                    <div className="border-l-4 border-green-600 pl-4">
                      <h4 className="font-medium">4. Penanganan & Mitigasi</h4>
                      <p className="text-gray-600 text-sm">Tindakan pengendalian sesuai SOP untuk meminimalkan dampak</p>
                    </div>
                    <div className="border-l-4 border-green-600 pl-4">
                      <h4 className="font-medium">5. Pemulihan & Pelaporan</h4>
                      <p className="text-gray-600 text-sm">Evaluasi dampak, tindakan perbaikan, dan dokumentasi kejadian</p>
                    </div>
                  </div>
                </div>
              </div>
              
              <div>
                <div className="bg-white rounded-lg shadow-md p-6 mb-6">
                  <h3 className="text-xl font-semibold text-green-800 mb-4">Sistem Peringatan</h3>
                  <div className="bg-yellow-50 border border-yellow-200 p-4 rounded-md mb-4">
                    <div className="flex items-center mb-2">
                      <Bell className="text-yellow-600 mr-2" size={20} />
                      <h4 className="font-medium">Level Kesiagaan Saat Ini</h4>
                    </div>
                    <div className="flex items-center space-x-2 mb-2">
                      <div className="w-full bg-gray-200 rounded-full h-4">
                        <div className="bg-yellow-500 h-4 rounded-full" style={{ width: '40%' }}></div>
                      </div>
                      <span className="font-medium text-yellow-600">Level 2</span>
                    </div>
                    <p className="text-sm text-gray-600">Status Waspada - Pemantauan ditingkatkan</p>
                  </div>
                  <div>
                    <h4 className="font-medium mb-3">Level Kesiagaan</h4>
                    <ul className="space-y-3">
                      <li className="flex items-center">
                        <span className="inline-block w-3 h-3 rounded-full bg-green-500 mr-2"></span>
                        <span><strong>Level 1 (Normal)</strong> - Operasi rutin, monitoring standar</span>
                      </li>
                      <li className="flex items-center">
                        <span className="inline-block w-3 h-3 rounded-full bg-yellow-500 mr-2"></span>
                        <span><strong>Level 2 (Waspada)</strong> - Pengawasan ditingkatkan</span>
                      </li>
                      <li className="flex items-center">
                        <span className="inline-block w-3 h-3 rounded-full bg-orange-500 mr-2"></span>
                        <span><strong>Level 3 (Siaga)</strong> - Mobilisasi tim cadangan</span>
                      </li>
                      <li className="flex items-center">
                        <span className="inline-block w-3 h-3 rounded-full bg-red-500 mr-2"></span>
                        <span><strong>Level 4 (Awas)</strong> - Aktivasi penuh tim darurat</span>
                      </li>
                    </ul>
                  </div>
                </div>
                
                <div className="bg-white rounded-lg shadow-md p-6">
                  <h3 className="text-xl font-semibold text-green-800 mb-4">Laporkan Insiden Darurat</h3>
                  <form onSubmit={handleSubmitReport}>
                    <div className="mb-4">
                      <label className="block text-gray-700 mb-2">Jenis Insiden</label>
                      <select 
                        className="w-full border border-gray-300 rounded-md px-3 py-2"
                        value={incidentType}
                        onChange={(e) => setIncidentType(e.target.value)}
                        required
                      >
                        <option value="">Pilih Jenis Insiden</option>
                        <option value="Pembalakan Liar">Pembalakan Liar</option>
                        <option value="Kebakaran Hutan">Kebakaran Hutan</option>
                        <option value="Perburuan Liar">Perburuan Liar</option>
                        <option value="Perusakan Sarana">Perusakan Sarana</option>
                        <option value="Lainnya">Lainnya</option>
                      </select>
                    </div>
                    <div className="mb-4">
                      <label className="block text-gray-700 mb-2">Lokasi</label>
                      <input 
                        type="text" 
                        className="w-full border border-gray-300 rounded-md px-3 py-2" 
                        placeholder="Deskripsikan lokasi kejadian"
                        value={incidentLocation}
                        onChange={(e) => setIncidentLocation(e.target.value)}
                        required
                      />
                    </div>
                    <div className="mb-4">
                      <label className="block text-gray-700 mb-2">Deskripsi</label>
                      <textarea 
                        className="w-full border border-gray-300 rounded-md px-3 py-2 h-24" 
                        placeholder="Jelaskan insiden yang terjadi"
                        value={incidentDescription}
                        onChange={(e) => setIncidentDescription(e.target.value)}
                        required
                      ></textarea>
                    </div>
                    <div className="mb-4">
                      <label className="block text-gray-700 mb-2">Kontak Pelapor</label>
                      <input 
                        type="text" 
                        className="w-full border border-gray-300 rounded-md px-3 py-2" 
                        placeholder="Nomor telepon yang bisa dihubungi"
                        value={reporterContact}
                        onChange={(e) => setReporterContact(e.target.value)}
                        required
                      />
                    </div>
                    <button 
                      type="submit" 
                      className="bg-red-600 hover:bg-red-700 text-white font-medium px-6 py-2 rounded-md w-full"
                    >
                      Kirim Laporan Darurat
                    </button>
                  </form>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>

      {/* Incident Report Modal */}
      {showReportForm && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
          <div className="bg-white p-6 rounded-lg shadow-lg max-w-md w-full">
            <div className="flex justify-between items-center mb-4">
              <h3 className="text-xl font-bold text-green-800">Laporkan Insiden</h3>
              <button onClick={() => setShowReportForm(false)} className="text-gray-500 hover:text-gray-700">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
              </button>
            </div>
            <form onSubmit={handleSubmitReport}>
              <div className="mb-4">
                <label className="block text-gray-700 mb-2">Jenis Insiden</label>
                <select 
                  className="w-full border border-gray-300 rounded-md px-3 py-2"
                  value={incidentType}
                  onChange={(e) => setIncidentType(e.target.value)}
                  required
                >
                  <option value="">Pilih Jenis Insiden</option>
                  <option value="Pembalakan Liar">Pembalakan Liar</option>
                  <option value="Kebakaran Hutan">Kebakaran Hutan</option>
                  <option value="Perburuan Liar">Perburuan Liar</option>
                  <option value="Perusakan Sarana">Perusakan Sarana</option>
                  <option value="Lainnya">Lainnya</option>
                </select>
              </div>
              <div className="mb-4">
                <label className="block text-gray-700 mb-2">Lokasi</label>
                <input 
                  type="text" 
                  className="w-full border border-gray-300 rounded-md px-3 py-2" 
                  placeholder="Deskripsikan lokasi kejadian"
                  value={incidentLocation}
                  onChange={(e) => setIncidentLocation(e.target.value)}
                  required
                />
              </div>
              <div className="mb-4">
                <label className="block text-gray-700 mb-2">Deskripsi</label>
                <textarea 
                  className="w-full border border-gray-300 rounded-md px-3 py-2 h-24" 
                  placeholder="Jelaskan insiden yang terjadi"
                  value={incidentDescription}
                  onChange={(e) => setIncidentDescription(e.target.value)}
                  required
                ></textarea>
              </div>
              <div className="mb-4">
                <label className="block text-gray-700 mb-2">Kontak Pelapor</label>
                <input 
                  type="text" 
                  className="w-full border border-gray-300 rounded-md px-3 py-2" 
                  placeholder="Nomor telepon yang bisa dihubungi"
                  value={reporterContact}
                  onChange={(e) => setReporterContact(e.target.value)}
                  required
                />
              </div>
              <button 
                type="submit" 
                className="bg-red-600 hover:bg-red-700 text-white font-medium px-6 py-2 rounded-md w-full"
              >
                Kirim Laporan Darurat
              </button>
            </form>
          </div>
        </div>
      )}
    </div>
  );
};

export default PerlindunganPage;
