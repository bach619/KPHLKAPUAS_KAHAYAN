// app/data/peraturan/page.tsx

import { useState } from 'react';

export default function PeraturanKebijakan() {
  const [searchQuery, setSearchQuery] = useState('');
  
  // Mock data - ganti dengan data API nanti
  const regulations = [
    { title: 'Perka BKN No 2 Tahun 2016', category: 'Kepegawaian', year: 2016, downloadLink: 'https://dishut.kalteng.go.id/files/produkhukum/08022016014042.pdf' },
    { title: 'Perda No 5 Tahun 2015 ttg RTRWP Prov. Kalteng', category: 'Lingkungan', year: 2015, downloadLink: 'https://dishut.kalteng.go.id/files/produkhukum/02082016074214.pdf' },
    { title: 'UU Nomor 41 Tahun 1999 Jo UU Nomor 19 Tah 2004', category: 'Pengawasan', year: 2004, downloadLink: 'https://dishut.kalteng.go.id/files/produkhukum/08282023035746.pdf' },
    { title: 'UU Nomor 23 Tahun 2014', category: 'Pengawasan', year: 2014, downloadLink: 'https://dishut.kalteng.go.id/files/produkhukum/08282023040703.pdf' },
  ];

  const filteredRegulations = regulations.filter(regulation =>
    regulation.title.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <div className="min-h-screen bg-gray-50 p-8">
      <div className="max-w-6xl mx-auto">
        <h1 className="text-3xl font-bold text-gray-800 mb-8">Peraturan & Kebijakan</h1>
        
        {/* Notification Section */}
        <div className="bg-blue-50 p-4 rounded-lg mb-8">
          <div className="flex items-center">
            <svg className="w-5 h-5 text-blue-400 mr-2" fill="currentColor" viewBox="0 0 20 20">
              <path d="M10 2a6 6 0 00-6 6v3.586l-.707.707A1 1 0 004 14h12a1 1 0 00.707-1.707L16 11.586V8a6 6 0 00-6-6zM10 18a3 3 0 01-3-3h6a3 3 0 01-3 3z"/>
            </svg>
            <span className="text-sm text-blue-700">
              Terakhir diperbarui: 15 Juni 2024 | 3 pembaruan baru
            </span>
          </div>
        </div>

        {/* Regulation Finder */}
        <div className="bg-white rounded-lg shadow-sm p-6 mb-8">
          <div className="flex flex-col md:flex-row gap-4 mb-6">
            <input
              type="text"
              placeholder="Cari peraturan..."
              className="flex-1 p-3 border rounded-lg"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
            />
            <button className="bg-green-600 text-white px-6 py-3 rounded-lg hover:bg-green-700 transition">
              Cari
            </button>
          </div>

          {/* Results Section */}
          <div className="space-y-4">
            {filteredRegulations.map((regulation, index) => (
              <div key={index} className="border-b pb-4">
                <div className="flex justify-between items-start">
                  <div>
                    <h3 className="text-lg font-semibold text-gray-800">
                      {regulation.title}
                    </h3>
                    <p className="text-sm text-gray-600 mt-1">
                      Kategori: {regulation.category} | Tahun: {regulation.year}
                    </p>
                  </div>
                  <a
                    href={regulation.downloadLink}
                    className="text-green-600 hover:text-green-700 flex items-center"
                    download
                  >
                    <svg className="w-5 h-5 mr-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4" />
                    </svg>
                    Unduh
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
