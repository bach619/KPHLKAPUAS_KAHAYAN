import React, { useState, useEffect } from 'react';
import { Search, Download, FileText, Book, Calendar, BookOpen, Award, Filter, ChevronDown, ChevronRight } from 'lucide-react';

interface Publication {
  id: string;
  title: string;
  type: 'research' | 'report' | 'technical' | 'educational';
  author: string;
  date: string;
  description: string;
  downloadUrl: string;
  citation: string;
  thumbnailUrl: string;
}

const PublikasiPage: React.FC = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const [filterType, setFilterType] = useState<string | null>(null);
  const [showFilters, setShowFilters] = useState(false);
  const [publications, setPublications] = useState<Publication[]>([]);
  const [selectedDocument, setSelectedDocument] = useState<Publication | null>(null);
  const [downloadCount, setDownloadCount] = useState<Record<string, number>>({});

  // Mock data for demonstration
  useEffect(() => {
    const mockPublications: Publication[] = [
      {
        id: '1',
        title: 'Analisis Dampak Perubahan Iklim pada Ekonomi Indonesia',
        type: 'research',
        author: 'Dr. Budi Santoso, et al.',
        date: '2025-03-15',
        description: 'Penelitian komprehensif mengenai dampak perubahan iklim terhadap berbagai sektor ekonomi di Indonesia.',
        downloadUrl: '/downloads/climate-impact-2025.pdf',
        citation: 'Santoso, B., et al. (2025). Analisis Dampak Perubahan Iklim pada Ekonomi Indonesia. Jurnal Ekonomi Indonesia, 45(2), 123-145.',
        thumbnailUrl: '/api/placeholder/150/200',
      },
      {
        id: '2',
        title: 'Laporan Tahunan Kementerian 2024',
        type: 'report',
        author: 'Tim Pelaporan Kementerian',
        date: '2025-01-30',
        description: 'Laporan tahunan yang mencakup semua kegiatan, pencapaian, dan anggaran kementerian selama tahun 2024.',
        downloadUrl: '/downloads/annual-report-2024.pdf',
        citation: 'Kementerian Republik Indonesia. (2025). Laporan Tahunan Kementerian 2024. Jakarta: Pemerintah Republik Indonesia.',
        thumbnailUrl: '/api/placeholder/150/200',
      },
      {
        id: '3',
        title: 'Panduan Teknis Implementasi Sistem Informasi Terpadu',
        type: 'technical',
        author: 'Departemen TI',
        date: '2024-11-10',
        description: 'Dokumen teknis yang menjelaskan arsitektur, komponen, dan prosedur implementasi Sistem Informasi Terpadu.',
        downloadUrl: '/downloads/technical-guide-2024.pdf',
        citation: 'Departemen TI. (2024). Panduan Teknis Implementasi Sistem Informasi Terpadu. Jakarta: Kementerian Republik Indonesia.',
        thumbnailUrl: '/api/placeholder/150/200',
      },
      {
        id: '4',
        title: 'Modul Pembelajaran Dasar Analisis Data untuk Pegawai Negeri',
        type: 'educational',
        author: 'Tim Pengembangan SDM',
        date: '2024-09-22',
        description: 'Materi pelatihan komprehensif untuk memahami dan menerapkan analisis data dasar dalam lingkup pemerintahan.',
        downloadUrl: '/downloads/data-analysis-module.pdf',
        citation: 'Tim Pengembangan SDM. (2024). Modul Pembelajaran Dasar Analisis Data untuk Pegawai Negeri. Jakarta: Pusat Pelatihan Kementerian.',
        thumbnailUrl: '/api/placeholder/150/200',
      },
      {
        id: '5',
        title: 'Studi Kasus: Transformasi Digital di Sektor Publik Indonesia',
        type: 'research',
        author: 'Prof. Agus Wijaya, Dr. Siti Rahma',
        date: '2024-10-05',
        description: 'Penelitian mendalam tentang proses, tantangan, dan hasil transformasi digital di berbagai lembaga pemerintah Indonesia.',
        downloadUrl: '/downloads/digital-transformation-2024.pdf',
        citation: 'Wijaya, A., & Rahma, S. (2024). Studi Kasus: Transformasi Digital di Sektor Publik Indonesia. Jurnal Administrasi Publik, 32(4), 78-96.',
        thumbnailUrl: '/api/placeholder/150/200',
      },
      {
        id: '6',
        title: 'Laporan Semester I 2024: Progres Program Prioritas Nasional',
        type: 'report',
        author: 'Badan Perencanaan',
        date: '2024-07-15',
        description: 'Laporan tengah tahun yang menyajikan kemajuan, pencapaian, dan tantangan dalam implementasi program prioritas nasional.',
        downloadUrl: '/downloads/semester-report-2024.pdf',
        citation: 'Badan Perencanaan. (2024). Laporan Semester I 2024: Progres Program Prioritas Nasional. Jakarta: Pemerintah Republik Indonesia.',
        thumbnailUrl: '/api/placeholder/150/200',
      }
    ];

    setPublications(mockPublications);
    
    // Initialize download counts
    const initialCounts: Record<string, number> = {};
    mockPublications.forEach(pub => {
      initialCounts[pub.id] = Math.floor(Math.random() * 1000);
    });
    setDownloadCount(initialCounts);
  }, []);

  const filteredPublications = publications.filter(pub => {
    const matchesSearch = pub.title.toLowerCase().includes(searchQuery.toLowerCase()) || 
                          pub.author.toLowerCase().includes(searchQuery.toLowerCase()) ||
                          pub.description.toLowerCase().includes(searchQuery.toLowerCase());
    
    const matchesType = filterType ? pub.type === filterType : true;
    
    return matchesSearch && matchesType;
  });

  const handleDownload = (publication: Publication) => {
    setDownloadCount(prev => ({
      ...prev,
      [publication.id]: (prev[publication.id] || 0) + 1
    }));
    // In a real app, you would trigger the download here
    alert(`Mengunduh: ${publication.title}`);
  };

  const copyToCitation = (citation: string) => {
    navigator.clipboard.writeText(citation)
      .then(() => {
        alert('Sitasi disalin ke clipboard!');
      })
      .catch(err => {
        console.error('Gagal menyalin sitasi:', err);
      });
  };

  const typeLabels = {
    'research': 'Publikasi Penelitian',
    'report': 'Laporan Tahunan',
    'technical': 'Dokumen Teknis',
    'educational': 'Materi Edukasi'
  };

  const typeIcons = {
    'research': <Book className="h-5 w-5" />,
    'report': <FileText className="h-5 w-5" />,
    'technical': <FileText className="h-5 w-5" />,
    'educational': <BookOpen className="h-5 w-5" />
  };

  return (
    <div className="container mx-auto px-4 py-8">
      <div className="mb-8">
        <h1 className="text-3xl font-bold mb-2">Publikasi & Laporan</h1>
        <p className="text-gray-600">
          Akses dokumen penelitian, laporan tahunan, dokumen teknis, dan materi edukasi terbaru.
        </p>
      </div>

      {/* Search and Filter Section */}
      <div className="bg-white rounded-lg shadow-md p-6 mb-8">
        <div className="flex flex-col md:flex-row gap-4 mb-4">
          <div className="relative flex-grow">
            <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
              <Search className="h-5 w-5 text-gray-400" />
            </div>
            <input
              type="text"
              className="block w-full pl-10 pr-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500"
              placeholder="Cari publikasi atau laporan..."
              value={searchQuery}
              onChange={e => setSearchQuery(e.target.value)}
            />
          </div>
          <button 
            className="flex items-center justify-center px-4 py-2 border border-gray-300 rounded-md shadow-sm text-sm font-medium text-gray-700 bg-white hover:bg-gray-50"
            onClick={() => setShowFilters(!showFilters)}
          >
            <Filter className="h-5 w-5 mr-2" />
            Filter
            {showFilters ? <ChevronDown className="h-4 w-4 ml-1" /> : <ChevronRight className="h-4 w-4 ml-1" />}
          </button>
        </div>

        {showFilters && (
          <div className="flex flex-wrap gap-2 mt-10">
            <button
              className={`px-3 py-1 rounded-full text-sm ${filterType === null ? 'bg-blue-600 text-white' : 'bg-gray-200 text-gray-700'}`}
              onClick={() => setFilterType(null)}
            >
              Semua
            </button>
            <button
              className={`flex items-center px-3 py-1 rounded-full text-sm ${filterType === 'research' ? 'bg-blue-600 text-white' : 'bg-gray-200 text-gray-700'}`}
              onClick={() => setFilterType('research')}
            >
              <Book className="h-4 w-4 mr-1" /> Penelitian
            </button>
            <button
              className={`flex items-center px-3 py-1 rounded-full text-sm ${filterType === 'report' ? 'bg-blue-600 text-white' : 'bg-gray-200 text-gray-700'}`}
              onClick={() => setFilterType('report')}
            >
              <FileText className="h-4 w-4 mr-1" /> Laporan
            </button>
            <button
              className={`flex items-center px-3 py-1 rounded-full text-sm ${filterType === 'technical' ? 'bg-blue-600 text-white' : 'bg-gray-200 text-gray-700'}`}
              onClick={() => setFilterType('technical')}
            >
              <FileText className="h-4 w-4 mr-1" /> Dokumen Teknis
            </button>
            <button
              className={`flex items-center px-3 py-1 rounded-full text-sm ${filterType === 'educational' ? 'bg-blue-600 text-white' : 'bg-gray-200 text-gray-700'}`}
              onClick={() => setFilterType('educational')}
            >
              <BookOpen className="h-4 w-4 mr-1" /> Materi Edukasi
            </button>
          </div>
        )}
      </div>

      {/* Main Content Area */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        {/* Document Library */}
        <div className="lg:col-span-2">
          <h2 className="text-xl font-semibold mb-4">Perpustakaan Dokumen</h2>
          
          {filteredPublications.length > 0 ? (
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {filteredPublications.map(publication => (
                <div 
                  key={publication.id} 
                  className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow duration-300"
                  onClick={() => setSelectedDocument(publication)}
                >
                  <div className="flex">
                    <div className="w-24 h-32 flex-shrink-0">
                      <img src={publication.thumbnailUrl} alt={publication.title} className="h-full w-full object-cover" />
                    </div>
                    <div className="p-4 flex-grow">
                      <div className="flex items-center text-xs text-gray-500 mb-1">
                        {typeIcons[publication.type]}
                        <span className="ml-1">{typeLabels[publication.type]}</span>
                      </div>
                      <h3 className="font-medium text-gray-900 mb-1 line-clamp-2">{publication.title}</h3>
                      <div className="flex items-center text-xs text-gray-500 mb-2">
                        <Calendar className="h-3 w-3 mr-1" />
                        <span>{new Date(publication.date).toLocaleDateString('id-ID', { year: 'numeric', month: 'short', day: 'numeric' })}</span>
                      </div>
                      <div className="flex items-center text-xs text-gray-500">
                        <Download className="h-3 w-3 mr-1" />
                        <span>{downloadCount[publication.id] || 0} unduhan</span>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          ) : (
            <div className="bg-white rounded-lg shadow-md p-8 text-center">
              <p className="text-gray-500">Tidak ada publikasi yang ditemukan.</p>
            </div>
          )}
        </div>

        {/* Document Preview / Details */}
        <div className="lg:col-span-1">
          {selectedDocument ? (
            <div className="bg-white rounded-lg shadow-md p-6 sticky top-6">
              <h2 className="text-xl font-semibold mb-2">{selectedDocument.title}</h2>
              <div className="flex items-center text-sm text-gray-600 mb-4">
                <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-blue-100 text-blue-800">
                  {typeLabels[selectedDocument.type]}
                </span>
                <span className="mx-2">•</span>
                <Calendar className="h-4 w-4 mr-1" />
                <span>{new Date(selectedDocument.date).toLocaleDateString('id-ID', { year: 'numeric', month: 'short', day: 'numeric' })}</span>
              </div>
              
              <p className="text-gray-600 mb-4">{selectedDocument.description}</p>
              
              <div className="mb-4">
                <h3 className="text-sm font-medium text-gray-700 mb-1">Penulis:</h3>
                <p className="text-gray-600">{selectedDocument.author}</p>
              </div>
              
              <div className="mb-6">
                <h3 className="text-sm font-medium text-gray-700 mb-1">Sitasi:</h3>
                <div className="bg-gray-50 p-3 rounded-md text-xs text-gray-600 border border-gray-200">
                  {selectedDocument.citation}
                  <button 
                    onClick={() => copyToCitation(selectedDocument.citation)}
                    className="mt-12 text-blue-600 hover:text-blue-800 text-xs font-medium inline-flex items-center"
                  >
                    Salin Sitasi
                  </button>
                </div>
              </div>
              
              <div className="flex flex-col space-y-3">
                <button 
                  onClick={() => handleDownload(selectedDocument)}
                  className="w-full flex items-center justify-center px-4 py-2 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
                >
                  <Download className="h-5 w-5 mr-2" />
                  Unduh Dokumen
                </button>
                
                <button 
                  className="w-full flex items-center justify-center px-4 py-2 border border-gray-300 rounded-md shadow-sm text-sm font-medium text-gray-700 bg-white hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
                >
                  Pratinjau Dokumen
                </button>
              </div>
            </div>
          ) : (
            <div className="bg-white rounded-lg shadow-md p-6 text-center">
              <FileText className="h-12 w-12 mx-auto text-gray-400 mb-3" />
              <h3 className="text-lg font-medium text-gray-900 mb-1">Pilih Dokumen</h3>
              <p className="text-gray-500">Silakan pilih dokumen dari perpustakaan untuk melihat detail.</p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default PublikasiPage;