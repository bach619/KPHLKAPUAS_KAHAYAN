import React, { useState } from 'react';

// Mock data for business opportunities
const businessOpportunities = [
  {
    id: 1,
    title: "Ekowisata Hutan",
    description: "Pengembangan kawasan ekowisata untuk mendukung konservasi hutan sambil membuka peluang ekonomi bagi masyarakat lokal.",
    investmentRange: "Rp 500 juta - Rp 2 miliar",
    roi: "15-25% per tahun",
    location: "Kalimantan Timur",
    category: "Ekowisata"
  },
  {
    id: 2,
    title: "Budidaya Tanaman Obat",
    description: "Pemanfaatan area hutan untuk budidaya tanaman obat dengan sistem tumpang sari yang mendukung keberlanjutan ekosistem.",
    investmentRange: "Rp 100 juta - Rp 500 juta",
    roi: "20-30% per tahun",
    location: "Jawa Barat",
    category: "Agroforesteri"
  },
  {
    id: 3,
    title: "Produksi Hasil Hutan Non-Kayu",
    description: "Pengolahan hasil hutan non-kayu seperti madu, getah, dan buah-buahan hutan menjadi produk bernilai tinggi.",
    investmentRange: "Rp 200 juta - Rp 1 miliar",
    roi: "18-28% per tahun",
    location: "Sulawesi Selatan",
    category: "Produksi"
  },
  {
    id: 4,
    title: "Hutan Karbon",
    description: "Pengembangan proyek karbon hutan untuk pasar kredit karbon internasional dan domestik.",
    investmentRange: "Rp 2 miliar - Rp 10 miliar",
    roi: "10-20% per tahun",
    location: "Papua",
    category: "Karbon"
  }
];

// Mock data for success stories
const successStories = [
  {
    id: 1,
    title: "Desa Wisata Hutan Pinus Mangunan",
    location: "Yogyakarta",
    description: "Transformasi hutan pinus menjadi destinasi ekowisata yang meningkatkan pendapatan desa hingga 300% dalam 5 tahun.",
    impact: "Menciptakan 150 lapangan kerja baru dan meningkatkan kesejahteraan 5 desa sekitar.",
    imageUrl: "/api/placeholder/600/400",
    year: 2021
  },
  {
    id: 2,
    title: "Koperasi Madu Hutan Sumbawa",
    location: "Nusa Tenggara Barat",
    description: "Pengembangan usaha madu hutan yang dikelola masyarakat adat dengan standar kualitas ekspor.",
    impact: "Meningkatkan pendapatan 120 keluarga pemanen madu dan mempertahankan 5.000 hektar hutan alami.",
    imageUrl: "/api/placeholder/600/400",
    year: 2022
  },
  {
    id: 3,
    title: "Agroforesteri Kopi Gayo",
    location: "Aceh",
    description: "Program kopi naungan yang menggabungkan konservasi hutan dengan produksi kopi premium.",
    impact: "Sertifikasi organik untuk 2.500 petani dan premi harga 40% di atas harga pasar reguler.",
    imageUrl: "/api/placeholder/600/400",
    year: 2023
  }
];

// Mock data for partnership programs
const partnershipPrograms = [
  {
    id: 1,
    title: "Program Kemitraan Konservasi",
    description: "Kolaborasi dengan perusahaan swasta untuk konservasi kawasan hutan bernilai konservasi tinggi.",
    requirements: "Perusahaan dengan komitmen ESG, minimal investasi Rp 500 juta untuk 3 tahun.",
    benefits: "Kredit karbon, pengakuan CSR, akses kawasan konservasi untuk riset."
  },
  {
    id: 2,
    title: "Kemitraan Pemberdayaan Masyarakat Hutan",
    description: "Program pemberdayaan ekonomi masyarakat sekitar hutan melalui pengembangan produk lokal.",
    requirements: "LSM atau perusahaan dengan kompetensi pemberdayaan masyarakat, minimal program 2 tahun.",
    benefits: "Akses pasar produk lokal, branding keberlanjutan, pengetahuan lokal."
  },
  {
    id: 3,
    title: "Konsesi Ekowisata Berkelanjutan",
    description: "Kemitraan pengembangan infrastruktur ekowisata di kawasan hutan dengan prinsip dampak minimal.",
    requirements: "Operator wisata bersertifikat, investasi minimal Rp 2 miliar, rencana bisnis berkelanjutan.",
    benefits: "Hak konsesi 15 tahun, dukungan promosi, kemudahan perizinan."
  }
];

const PengembanganUsahaKehutanan: React.FC = () => {
  const [activeTab, setActiveTab] = useState('opportunities');
  const [selectedOpportunity, setSelectedOpportunity] = useState<number | null>(null);
  const [investmentAmount, setInvestmentAmount] = useState<number>(500);
  const [investmentYears, setInvestmentYears] = useState<number>(5);
  const [roi, setRoi] = useState<number>(20);
  const [partnershipFormData, setPartnershipFormData] = useState({
    organizationName: '',
    contactPerson: '',
    email: '',
    phone: '',
    programInterest: '',
    proposalSummary: '',
    submitted: false
  });
  const [applicationStatus, setApplicationStatus] = useState({
    isTracking: false,
    trackingId: '',
    status: '',
    message: ''
  });

  const handleInvestmentCalculation = () => {
    // Simple ROI calculation
    const yearlyReturn = investmentAmount * (roi / 100);
    const totalReturn = investmentAmount + (yearlyReturn * investmentYears);
    return {
      yearlyReturn: yearlyReturn,
      totalReturn: totalReturn,
      roi: roi
    };
  };

  const handlePartnershipSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Simulate form submission
    setPartnershipFormData(prev => ({
      ...prev,
      submitted: true
    }));
    
    // Generate random tracking ID
    const trackingId = `PKH-${Math.floor(100000 + Math.random() * 900000)}`;
    setApplicationStatus({
      isTracking: false,
      trackingId: trackingId,
      status: 'Submitted',
      message: 'Your application has been received and is under initial review.'
    });
  };

  const handleTrackApplication = (e: React.FormEvent) => {
    e.preventDefault();
    // Simulate tracking lookup
    setApplicationStatus(prev => ({
      ...prev,
      isTracking: true,
      status: 'Under Review',
      message: 'Your application is currently being reviewed by our partnership team. Estimated completion: 14 days.'
    }));
  };

  // Calculate investment results
  const investmentResults = handleInvestmentCalculation();

  return (
    <div className="bg-green-50 min-h-screen">
      {/* Hero Section */}
      <div className="bg-green-800 text-white py-16">
        <div className="container mx-auto px-4">
          <h1 className="text-4xl font-bold mb-4 mt-20">Pengembangan Usaha Kehutanan</h1>
          <p className="text-xl max-w-3xl">
            Menjembatani konservasi hutan dan peluang ekonomi melalui program pengembangan usaha kehutanan berkelanjutan.
          </p>
        </div>
      </div>

      {/* Navigation Tabs */}
      <div className="bg-white shadow">
        <div className="container mx-auto px-4">
          <div className="flex overflow-x-auto">
            <button 
              className={`py-4 px-6 font-medium text-sm ${activeTab === 'opportunities' ? 'text-green-700 border-b-2 border-green-700' : 'text-gray-500'}`}
              onClick={() => setActiveTab('opportunities')}
            >
              Peluang Usaha
            </button>
            <button 
              className={`py-4 px-6 font-medium text-sm ${activeTab === 'partnerships' ? 'text-green-700 border-b-2 border-green-700' : 'text-gray-500'}`}
              onClick={() => setActiveTab('partnerships')}
            >
              Program Kemitraan
            </button>
            <button 
              className={`py-4 px-6 font-medium text-sm ${activeTab === 'calculator' ? 'text-green-700 border-b-2 border-green-700' : 'text-gray-500'}`}
              onClick={() => setActiveTab('calculator')}
            >
              Kalkulator Investasi
            </button>
            <button 
              className={`py-4 px-6 font-medium text-sm ${activeTab === 'success' ? 'text-green-700 border-b-2 border-green-700' : 'text-gray-500'}`}
              onClick={() => setActiveTab('success')}
            >
              Kisah Sukses
            </button>
            <button 
              className={`py-4 px-6 font-medium text-sm ${activeTab === 'tracking' ? 'text-green-700 border-b-2 border-green-700' : 'text-gray-500'}`}
              onClick={() => setActiveTab('tracking')}
            >
              Lacak Aplikasi
            </button>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="container mx-auto px-4 py-8">
        {/* Business Opportunities */}
        {activeTab === 'opportunities' && (
          <div>
            <div className="flex justify-between items-center mb-6">
              <h2 className="text-2xl font-bold text-gray-800">Peluang Usaha Kehutanan</h2>
              <div className="flex gap-2">
                <select className="p-2 border border-gray-300 rounded">
                  <option>Semua Kategori</option>
                  <option>Ekowisata</option>
                  <option>Agroforesteri</option>
                  <option>Produksi</option>
                  <option>Karbon</option>
                </select>
                <select className="p-2 border border-gray-300 rounded">
                  <option>Semua Lokasi</option>
                  <option>Jawa</option>
                  <option>Sumatera</option>
                  <option>Kalimantan</option>
                  <option>Sulawesi</option>
                  <option>Papua</option>
                </select>
              </div>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {businessOpportunities.map(opportunity => (
                <div 
                  key={opportunity.id} 
                  className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow cursor-pointer"
                  onClick={() => setSelectedOpportunity(opportunity.id)}
                >
                  <div className="h-48 bg-gray-200">
                    <img src={`/api/placeholder/600/400`} alt={opportunity.title} className="w-full h-full object-cover" />
                  </div>
                  <div className="p-6">
                    <div className="flex justify-between items-start mb-2">
                      <h3 className="text-xl font-semibold text-gray-800">{opportunity.title}</h3>
                      <span className="bg-green-100 text-green-800 text-xs font-medium px-2.5 py-0.5 rounded">
                        {opportunity.category}
                      </span>
                    </div>
                    <p className="text-gray-600 mb-4">{opportunity.description}</p>
                    <div className="border-t pt-4">
                      <div className="flex justify-between text-sm mb-1">
                        <span className="text-gray-500">Investasi:</span>
                        <span className="font-medium">{opportunity.investmentRange}</span>
                      </div>
                      <div className="flex justify-between text-sm mb-1">
                        <span className="text-gray-500">ROI:</span>
                        <span className="font-medium text-green-700">{opportunity.roi}</span>
                      </div>
                      <div className="flex justify-between text-sm">
                        <span className="text-gray-500">Lokasi:</span>
                        <span className="font-medium">{opportunity.location}</span>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {/* Opportunity Detail Modal */}
            {selectedOpportunity && (
              <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4 z-50">
                <div className="bg-white rounded-lg max-w-3xl w-full max-h-[90vh] overflow-y-auto">
                  <div className="p-6">
                    <div className="flex justify-between items-start">
                      <h3 className="text-2xl font-bold">
                        {businessOpportunities.find(o => o.id === selectedOpportunity)?.title}
                      </h3>
                      <button 
                        onClick={() => setSelectedOpportunity(null)}
                        className="text-gray-500 hover:text-gray-700"
                      >
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                        </svg>
                      </button>
                    </div>
                    
                    <div className="my-4 h-64">
                      <img 
                        src="/api/placeholder/800/400" 
                        alt={businessOpportunities.find(o => o.id === selectedOpportunity)?.title} 
                        className="w-full h-full object-cover rounded-lg"
                      />
                    </div>
                    
                    <p className="text-gray-700 mb-6">
                      {businessOpportunities.find(o => o.id === selectedOpportunity)?.description}
                      {/* Extended description would go here */}
                      Proyek ini merupakan bagian dari inisiatif pembangunan berkelanjutan yang menyelaraskan kepentingan ekonomi dengan konservasi lingkungan. 
                      Dengan pendekatan multi-stakeholder, proyek ini melibatkan masyarakat lokal, pemerintah, dan sektor swasta untuk menciptakan 
                      model bisnis yang menguntungkan semua pihak sambil menjaga kelestarian hutan.
                    </p>
                    
                    <div className="grid grid-cols-2 gap-4 mb-6">
                      <div className="bg-gray-50 p-4 rounded-lg">
                        <h4 className="font-medium text-gray-800 mb-2">Detail Investasi</h4>
                        <ul className="space-y-2">
                          <li className="flex justify-between">
                            <span className="text-gray-600">Rentang Investasi:</span>
                            <span className="font-medium">{businessOpportunities.find(o => o.id === selectedOpportunity)?.investmentRange}</span>
                          </li>
                          <li className="flex justify-between">
                            <span className="text-gray-600">Estimasi ROI:</span>
                            <span className="font-medium text-green-700">{businessOpportunities.find(o => o.id === selectedOpportunity)?.roi}</span>
                          </li>
                          <li className="flex justify-between">
                            <span className="text-gray-600">Periode Pengembalian:</span>
                            <span className="font-medium">3-5 tahun</span>
                          </li>
                        </ul>
                      </div>
                      <div className="bg-gray-50 p-4 rounded-lg">
                        <h4 className="font-medium text-gray-800 mb-2">Lokasi & Perizinan</h4>
                        <ul className="space-y-2">
                          <li className="flex justify-between">
                            <span className="text-gray-600">Area:</span>
                            <span className="font-medium">{businessOpportunities.find(o => o.id === selectedOpportunity)?.location}</span>
                          </li>
                          <li className="flex justify-between">
                            <span className="text-gray-600">Status Lahan:</span>
                            <span className="font-medium">Hutan Produksi</span>
                          </li>
                          <li className="flex justify-between">
                            <span className="text-gray-600">Izin Diperlukan:</span>
                            <span className="font-medium">IUPHHK-RE</span>
                          </li>
                        </ul>
                      </div>
                    </div>
                    
                    <div className="flex justify-between">
                      <button className="bg-white border border-green-700 text-green-700 py-2 px-4 rounded hover:bg-green-50">
                        Unduh Brosur
                      </button>
                      <button className="bg-green-700 text-white py-2 px-6 rounded hover:bg-green-800">
                        Ajukan Minat
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            )}
          </div>
        )}

        {/* Partnership Programs */}
        {activeTab === 'partnerships' && (
          <div>
            <h2 className="text-2xl font-bold text-gray-800 mb-6">Program Kemitraan</h2>
            
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
              {partnershipPrograms.map(program => (
                <div key={program.id} className="bg-white rounded-lg shadow-md overflow-hidden">
                  <div className="p-6">
                    <h3 className="text-xl font-semibold text-gray-800 mb-3">{program.title}</h3>
                    <p className="text-gray-600 mb-4">{program.description}</p>
                    <div className="mb-4">
                      <h4 className="font-medium text-gray-700 mb-2">Persyaratan:</h4>
                      <p className="text-gray-600 text-sm">{program.requirements}</p>
                    </div>
                    <div>
                      <h4 className="font-medium text-gray-700 mb-2">Manfaat:</h4>
                      <p className="text-gray-600 text-sm">{program.benefits}</p>
                    </div>
                  </div>
                  <div className="px-6 py-3 bg-gray-50 border-t">
                    <button className="w-full bg-green-700 text-white py-2 rounded hover:bg-green-800">
                      Pelajari Lebih Lanjut
                    </button>
                  </div>
                </div>
              ))}
            </div>
            
            {/* Partnership Application Form */}
            <div className="bg-white rounded-lg shadow-md p-6">
              <h3 className="text-xl font-semibold text-gray-800 mb-4">Formulir Pengajuan Kemitraan</h3>
              
              {partnershipFormData.submitted ? (
                <div className="bg-green-50 border border-green-200 rounded-lg p-4 text-center">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-12 w-12 text-green-500 mx-auto mb-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <h4 className="text-lg font-medium text-green-800 mb-2">Pengajuan Berhasil!</h4>
                  <p className="text-green-700">Terima kasih atas minat Anda. Tim kami akan meninjau pengajuan dan menghubungi Anda dalam 5-7 hari kerja.</p>
                  <div className="mt-4 p-3 bg-green-100 rounded-lg">
                    <p className="text-sm text-green-800">ID Pelacakan Anda: <span className="font-bold">{applicationStatus.trackingId}</span></p>
                    <p className="text-xs mt-1">Simpan ID ini untuk melacak status pengajuan Anda.</p>
                  </div>
                </div>
              ) : (
                <form onSubmit={handlePartnershipSubmit}>
                  <div className="grid md:grid-cols-2 gap-4 mb-4">
                    <div>
                      <label className="block text-gray-700 text-sm font-medium mb-1">Nama Organisasi</label>
                      <input 
                        type="text" 
                        className="w-full p-2 border border-gray-300 rounded" 
                        value={partnershipFormData.organizationName}
                        onChange={(e) => setPartnershipFormData({...partnershipFormData, organizationName: e.target.value})}
                        required
                      />
                    </div>
                    <div>
                      <label className="block text-gray-700 text-sm font-medium mb-1">Nama Kontak</label>
                      <input 
                        type="text" 
                        className="w-full p-2 border border-gray-300 rounded" 
                        value={partnershipFormData.contactPerson}
                        onChange={(e) => setPartnershipFormData({...partnershipFormData, contactPerson: e.target.value})}
                        required
                      />
                    </div>
                    <div>
                      <label className="block text-gray-700 text-sm font-medium mb-1">Email</label>
                      <input 
                        type="email" 
                        className="w-full p-2 border border-gray-300 rounded" 
                        value={partnershipFormData.email}
                        onChange={(e) => setPartnershipFormData({...partnershipFormData, email: e.target.value})}
                        required
                      />
                    </div>
                    <div>
                      <label className="block text-gray-700 text-sm font-medium mb-1">Nomor Telepon</label>
                      <input 
                        type="tel" 
                        className="w-full p-2 border border-gray-300 rounded" 
                        value={partnershipFormData.phone}
                        onChange={(e) => setPartnershipFormData({...partnershipFormData, phone: e.target.value})}
                        required
                      />
                    </div>
                    <div className="md:col-span-2">
                      <label className="block text-gray-700 text-sm font-medium mb-1">Program yang Diminati</label>
                      <select 
                        className="w-full p-2 border border-gray-300 rounded"
                        value={partnershipFormData.programInterest}
                        onChange={(e) => setPartnershipFormData({...partnershipFormData, programInterest: e.target.value})}
                        required
                      >
                        <option value="">Pilih Program</option>
                        {partnershipPrograms.map(program => (
                          <option key={program.id} value={program.title}>{program.title}</option>
                        ))}
                      </select>
                    </div>
                    <div className="md:col-span-2">
                      <label className="block text-gray-700 text-sm font-medium mb-1">Ringkasan Proposal</label>
                      <textarea 
                        className="w-full p-2 border border-gray-300 rounded h-32" 
                        placeholder="Deskripsikan secara singkat proposal kemitraan yang ingin Anda ajukan..."
                        value={partnershipFormData.proposalSummary}
                        onChange={(e) => setPartnershipFormData({...partnershipFormData, proposalSummary: e.target.value})}
                        required
                      ></textarea>
                    </div>
                  </div>
                  <div className="flex items-center mb-4">
                    <input id="terms" type="checkbox" className="h-4 w-4 text-green-600 border-gray-300 rounded" required />
                    <label htmlFor="terms" className="ml-2 text-sm text-gray-600">
                      Saya menyetujui syarat dan ketentuan program kemitraan
                    </label>
                  </div>
                  <button type="submit" className="bg-green-700 text-white py-2 px-6 rounded hover:bg-green-800">
                    Kirim Pengajuan
                  </button>
                </form>
              )}
            </div>
          </div>
        )}

        {/* Investment Calculator */}
        {activeTab === 'calculator' && (
          <div>
            <h2 className="text-2xl font-bold text-gray-800 mb-6">Kalkulator Investasi Kehutanan</h2>
            
            <div className="grid lg:grid-cols-2 gap-8">
              <div className="bg-white rounded-lg shadow-md p-6">
                <h3 className="text-lg font-semibold text-gray-800 mb-4">Simulasi Investasi</h3>
                
                <div className="mb-6">
                  <label className="block text-gray-700 text-sm font-medium mb-1">Jumlah Investasi (Juta Rupiah)</label>
                  <div className="flex items-center">
                    <span className="mr-4 text-gray-700">Rp {investmentAmount} juta</span>
                    <input 
                      type="range" 
                      min="100" 
                      max="10000" 
                      step="100" 
                      value={investmentAmount}
                      onChange={(e) => setInvestmentAmount(parseInt(e.target.value))}
                      className="w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer"
                    />
                  </div>
                </div>
                
                <div className="mb-6">
                  <label className="block text-gray-700 text-sm font-medium mb-1">Jangka Waktu (Tahun)</label>
                  <div className="flex items-center">
                    <span className="mr-4 text-gray-700">{investmentYears} tahun</span>
                    <input 
                      type="range" 
                      min="1" 
                      max="20" 
                      step="1" 
                      value={investmentYears}
                      onChange={(e) => setInvestmentYears(parseInt(e.target.value))}
                      className="w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer"
                    />
                  </div>
                </div>
                
                <div className="mb-6">
                  <label className="block text-gray-700 text-sm font-medium mb-1">Estimasi ROI Tahunan (%)</label>
                  <div className="flex items-center">
                    <span className="mr-4 text-gray-700">{roi}%</span>
                    <input 
                      type="range" 
                      min="5" 
                      max="40" 
                      step="1" 
                      value={roi}
                      onChange={(e) => setRoi(parseInt(e.target.value))}
                      className="w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer"
                    />
                  </div>
                </div>
                
                <div className="flex items-center justify-center mt-8">
                  <button className="bg-green-700 text-white py-2 px-6 rounded hover:bg-green-800">
                    Hitung Hasil
                  </button>
                </div>
              </div>
              
              <div className="bg-white rounded-lg shadow-md p-6">
                <h3 className="text-lg font-semibold text-gray-800 mb-4">Hasil Simulasi</h3>
                
                <div className="bg-gray-50 rounded-lg p-6 mb-6">
                  <div className="grid grid-cols-2 gap-4">
                    <div>
                      <h4 className="text-sm text-gray-500 mb-1">Jumlah Investasi</h4>
                      <p className="text-2xl font-bold text-gray-900">Rp {investmentAmount.toLocaleString()} juta</p>
                    </div>
                    <div>
                      <h4 className="text-sm text-gray-500 mb-1">Jangka Waktu</h4>
                      <p className="text-2xl font-bold text-gray-900">{investmentYears} tahun</p>
                    </div>
                    <div>
                      <h4 className="text-sm text-gray-500 mb-1">ROI Tahunan</h4>
                      <p className="text-2xl font-bold text-green-700">{roi}%</p>
                    </div>
                    <div>
                      <h4 className="text-sm text-gray-500 mb-1">Pengembalian Tahunan</h4>
                      <p className="text-2xl font-bold text-green-700">Rp {investmentResults.
                        yearlyReturn.toLocaleString(undefined, { maximumFractionDigits: 2 })} juta</p>
                    </div>
                    <div className="col-span-2">
                      <h4 className="text-sm text-gray-500 mb-1">Total Pengembalian</h4>
                      <p className="text-3xl font-bold text-green-700">Rp {investmentResults.totalReturn.toLocaleString(undefined, { maximumFractionDigits: 2 })} juta</p>
                    </div>
                  </div>
                  <p className="text-sm text-gray-500 mt-4">
                    *Hasil simulasi berdasarkan asumsi ROI konstan. Pengembalian aktual dapat bervariasi tergantung kondisi pasar dan performa proyek.
                  </p>
                </div>
                
                <div className="text-center">
                  <p className="text-gray-600 mb-4">Ingin tahu lebih lanjut tentang peluang investasi kami?</p>
                  <button className="bg-white border border-green-700 text-green-700 py-2 px-6 rounded hover:bg-green-50">
                    Hubungi Konsultan Investasi
                  </button>
                </div>
              </div>
            </div>
          </div>
        )}

        {/* Success Stories */}
        {activeTab === 'success' && (
          <div>
            <h2 className="text-2xl font-bold text-gray-800 mb-6">Kisah Sukses</h2>
            
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {successStories.map(story => (
                <div key={story.id} className="bg-white rounded-lg shadow-md overflow-hidden">
                  <img src={story.imageUrl} alt={story.title} className="w-full h-48 object-cover" />
                  <div className="p-6">
                    <h3 className="text-xl font-semibold text-gray-800 mb-2">{story.title}</h3>
                    <p className="text-sm text-gray-500 mb-2">{story.location} • {story.year}</p>
                    <p className="text-gray-600 mb-4">{story.description}</p>
                    <div className="border-t pt-4">
                      <h4 className="text-sm font-medium text-gray-700 mb-2">Dampak:</h4>
                      <p className="text-sm text-gray-600">{story.impact}</p>
                    </div>
                  </div>
                  <div className="px-6 py-3 bg-gray-50 border-t">
                    <button className="w-full bg-green-700 text-white py-2 rounded hover:bg-green-800">
                      Baca Selengkapnya
                    </button>
                  </div>
                </div>
              ))}
            </div>
            
            <div className="text-center mt-8">
              <p className="text-gray-600 mb-4">Ingin menjadi bagian dari kisah sukses berikutnya?</p>
              <button className="bg-green-700 text-white py-2 px-6 rounded hover:bg-green-800">
                Jelajahi Peluang
              </button>
            </div>
          </div>
        )}

        {/* Application Tracking */}
        {activeTab === 'tracking' && (
          <div>
            <h2 className="text-2xl font-bold text-gray-800 mb-6">Lacak Pengajuan Kemitraan</h2>
            
            <div className="bg-white rounded-lg shadow-md p-6 max-w-2xl mx-auto">
              {applicationStatus.isTracking ? (
                <div className="text-center">
                  <h3 className="text-lg font-semibold text-gray-800 mb-4">Status Pengajuan</h3>
                  <div className="bg-gray-50 rounded-lg p-6 mb-6">
                    <p className="text-sm text-gray-600 mb-2">ID Pelacakan: <span className="font-bold">{applicationStatus.trackingId}</span></p>
                    <p className="text-lg font-medium text-green-700 mb-2">{applicationStatus.status}</p>
                    <p className="text-gray-600">{applicationStatus.message}</p>
                  </div>
                  <button 
                    className="bg-green-700 text-white py-2 px-6 rounded hover:bg-green-800"
                    onClick={() => setApplicationStatus({ isTracking: false, trackingId: '', status: '', message: '' })}
                  >
                    Lacak Pengajuan Lain
                  </button>
                </div>
              ) : (
                <form onSubmit={handleTrackApplication}>
                  <div className="mb-6">
                    <label className="block text-gray-700 text-sm font-medium mb-1">Masukkan ID Pelacakan</label>
                    <input 
                      type="text" 
                      className="w-full p-2 border border-gray-300 rounded"
                      placeholder="Contoh: PKH-123456"
                      value={applicationStatus.trackingId}
                      onChange={(e) => setApplicationStatus({ ...applicationStatus, trackingId: e.target.value })}
                      required
                    />
                  </div>
                  <div className="text-center">
                    <button type="submit" className="bg-green-700 text-white py-2 px-6 rounded hover:bg-green-800">
                      Lacak Status
                    </button>
                  </div>
                </form>
              )}
            </div>
            
            <div className="text-center mt-8">
              <p className="text-gray-600">Butuh bantuan dengan pengajuan Anda? Hubungi tim kami.</p>
              <a href="mailto:support@kehutanan.id" className="text-green-700 hover:underline">support@kehutanan.id</a>
            </div>
          </div>
        )}
      </div>

      {/* Footer Section */}
      <div className="bg-green-800 text-white py-8">
        <div className="container mx-auto px-4 text-center">
          <p className="mb-4">© 2025 Pengembangan Usaha Kehutanan. All rights reserved.</p>
          <div className="flex justify-center gap-6">
            <a href="#" className="hover:underline">Kebijakan Privasi</a>
            <a href="#" className="hover:underline">Syarat & Ketentuan</a>
            <a href="#" className="hover:underline">Hubungi Kami</a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PengembanganUsahaKehutanan;