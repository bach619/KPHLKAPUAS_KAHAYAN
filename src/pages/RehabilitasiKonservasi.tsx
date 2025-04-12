import React, { useState } from 'react';
import { MapPin, Calendar, Users, Leaf, BarChart2, PieChart } from 'lucide-react';

// Types
type RehabProject = {
  id: number;
  title: string;
  description: string;
  beforeImage: string;
  afterImage: string;
  location: string;
  year: number;
  impact: string;
};

type Species = {
  id: number;
  name: string;
  scientificName: string;
  population: number;
  status: string;
  recoveryRate: number;
};

type VolunteerProgram = {
  id: number;
  title: string;
  description: string;
  date: string;
  location: string;
  slots: number;
  requirements: string[];
};

type TimelineEvent = {
  id: number;
  year: number;
  title: string;
  description: string;
};

// Sample data
const rehabilitationProjects: RehabProject[] = [
  {
    id: 1,
    title: "Restorasi Hutan Mangrove Pesisir Barat",
    description: "Program restorasi ekosistem mangrove untuk mengurangi abrasi pantai dan meningkatkan habitat ikan lokal.",
    beforeImage: "/api/placeholder/500/300",
    afterImage: "/api/placeholder/500/300",
    location: "Pesisir Barat, Lampung",
    year: 2023,
    impact: "Ditanam 50.000 bibit mangrove, meningkatkan populasi ikan sebesar 30%, dan mengurangi abrasi pantai sebesar 45%."
  },
  {
    id: 2,
    title: "Reboisasi Daerah Aliran Sungai Ciliwung",
    description: "Program reboisasi untuk mengendalikan erosi dan banjir di daerah aliran sungai Ciliwung.",
    beforeImage: "/api/placeholder/500/300",
    afterImage: "/api/placeholder/500/300",
    location: "Jakarta - Bogor",
    year: 2022,
    impact: "Berhasil menanam 25.000 pohon, mengurangi erosi sebesar 35%, dan penurunan risiko banjir sebesar 20%."
  },
  {
    id: 3,
    title: "Restorasi Hutan Gambut Kalimantan Tengah",
    description: "Program restorasi lahan gambut untuk mencegah kebakaran hutan dan melestarikan habitat orangutan.",
    beforeImage: "/api/placeholder/500/300",
    afterImage: "/api/placeholder/500/300",
    location: "Kalimantan Tengah",
    year: 2023,
    impact: "Restorasi 1.000 hektar lahan gambut, penurunan titik api sebesar 75%, dan peningkatan habitat orangutan sebesar 40%."
  }
];

const protectedSpecies: Species[] = [
  {
    id: 1,
    name: "Orangutan Kalimantan",
    scientificName: "Pongo pygmaeus",
    population: 104700,
    status: "Kritis",
    recoveryRate: 5
  },
  {
    id: 2,
    name: "Harimau Sumatera",
    scientificName: "Panthera tigris sumatrae",
    population: 400,
    status: "Kritis",
    recoveryRate: 2
  },
  {
    id: 3,
    name: "Badak Jawa",
    scientificName: "Rhinoceros sondaicus",
    population: 74,
    status: "Kritis",
    recoveryRate: 3
  },
  {
    id: 4,
    name: "Elang Jawa",
    scientificName: "Nisaetus bartelsi",
    population: 600,
    status: "Terancam",
    recoveryRate: 8
  }
];

const volunteerPrograms: VolunteerProgram[] = [
  {
    id: 1,
    title: "Penanaman Mangrove Bersama",
    description: "Program penanaman mangrove melibatkan masyarakat lokal dan relawan untuk merehabilitasi kawasan pesisir.",
    date: "15 Juni 2025",
    location: "Pesisir Muara Gembong, Bekasi",
    slots: 100,
    requirements: ["Usia minimal 17 tahun", "Mampu bekerja di lingkungan berlumpur", "Membawa pakaian ganti"]
  },
  {
    id: 2,
    title: "Observasi Burung Migran",
    description: "Program pengamatan dan pendataan burung migran di kawasan konservasi.",
    date: "22-23 Juli 2025",
    location: "Taman Nasional Baluran, Jawa Timur",
    slots: 50,
    requirements: ["Pengetahuan dasar tentang burung", "Kemampuan fotografi (opsional)", "Peralatan pengamatan pribadi"]
  },
  {
    id: 3,
    title: "Pembibitan Pohon Endemik",
    description: "Program pembibitan dan perawatan bibit pohon endemik untuk program rehabilitasi hutan.",
    date: "Setiap Sabtu, Mei-Agustus 2025",
    location: "Pusat Pembibitan Bogor",
    slots: 30,
    requirements: ["Komitmen minimal 3 hari Sabtu", "Pengetahuan dasar tentang tanaman", "Ketelitian tinggi"]
  }
];

const timelineEvents: TimelineEvent[] = [
  {
    id: 1,
    year: 2018,
    title: "Inisiasi Program Restorasi Gambut",
    description: "Dimulainya program restorasi gambut nasional untuk mengembalikan fungsi hidrologis lahan gambut."
  },
  {
    id: 2,
    year: 2020,
    title: "Peluncuran Koridor Satwa",
    description: "Pembentukan koridor satwa untuk menghubungkan habitat yang terfragmentasi dan memfasilitasi pergerakan satwa liar."
  },
  {
    id: 3,
    year: 2021,
    title: "Proyek Percontohan Agroforestri",
    description: "Implementasi sistem agroforestri yang mengintegrasikan pertanian dan kehutanan untuk keberlanjutan."
  },
  {
    id: 4,
    year: 2023,
    title: "Pembentukan Kawasan Konservasi Berbasis Masyarakat",
    description: "Inisiasi kawasan konservasi yang dikelola bersama masyarakat lokal untuk meningkatkan partisipasi dan rasa kepemilikan."
  },
  {
    id: 5,
    year: 2024,
    title: "Ekspansi Program Restorasi Mangrove",
    description: "Perluasan program restorasi mangrove ke 10 provinsi pesisir untuk perlindungan garis pantai dan habitat pesisir."
  }
];

const RehabilitasiKonservasiPage: React.FC = () => {
  const [activeProject, setActiveProject] = useState<RehabProject | null>(rehabilitationProjects[0]);
  const [isBeforeImage, setIsBeforeImage] = useState<boolean>(true);
  const [impactValues, setImpactValues] = useState({
    area: 100,
    duration: 5,
    effort: 3
  });

  // Calculate estimated impact based on inputs
  const calculateImpact = () => {
    const { area, duration, effort } = impactValues;
    const carbonSeq = area * 2.5 * duration * effort / 10;
    const biodiversity = area * 0.3 * effort * (duration / 2);
    const waterQuality = area * 0.2 * effort * Math.sqrt(duration);
    
    return {
      carbonSequestration: Math.round(carbonSeq), // tons of CO2
      biodiversityIncrease: Math.round(biodiversity), // percentage
      waterQualityImprovement: Math.round(waterQuality) // percentage
    };
  };
  
  const impact = calculateImpact();

  return (
    <div className="bg-gray-50 min-h-screen">
      {/* Hero Section */}
      <div className="relative h-96 overflow-hidden">
        <div 
          className="absolute inset-0 bg-cover bg-center"
          style={{ 
            backgroundImage: `url('/api/placeholder/1920/600')`,
            backgroundPosition: 'center'
          }}
        />
        <div className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center">
          <div className="text-center text-white p-6 max-w-4xl">
            <h1 className="text-4xl md:text-5xl font-bold mb-4">Rehabilitasi & Konservasi</h1>
            <p className="text-xl md:text-2xl">
              Upaya pemulihan ekosistem hutan dan konservasi keanekaragaman hayati untuk masa depan berkelanjutan
            </p>
          </div>
        </div>
      </div>

      {/* Overview Section */}
      <div className="container mx-auto py-12 px-4">
        <div className="mb-16">
          <h2 className="text-3xl font-bold mb-6 text-green-800">Program Konservasi</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-white p-6 rounded-lg shadow-md border-t-4 border-green-600">
              <div className="text-green-600 mb-4">
                <Leaf size={32} />
              </div>
              <h3 className="text-xl font-bold mb-3">Pemulihan Habitat</h3>
              <p className="text-gray-700">
                Program pemulihan habitat yang terdegradasi melalui reboisasi, restorasi lahan gambut, 
                dan rehabilitasi mangrove untuk mengembalikan fungsi ekologis ekosistem.
              </p>
            </div>
            
            <div className="bg-white p-6 rounded-lg shadow-md border-t-4 border-green-600">
              <div className="text-green-600 mb-4">
                <MapPin size={32} />
              </div>
              <h3 className="text-xl font-bold mb-3">Perlindungan Spesies</h3>
              <p className="text-gray-700">
                Upaya konservasi terfokus untuk melindungi dan memulihkan populasi spesies terancam punah
                melalui perlindungan habitat, breeding program, dan mitigasi konflik manusia-satwa.
              </p>
            </div>
            
            <div className="bg-white p-6 rounded-lg shadow-md border-t-4 border-green-600">
              <div className="text-green-600 mb-4">
                <Users size={32} />
              </div>
              <h3 className="text-xl font-bold mb-3">Konservasi Berbasis Masyarakat</h3>
              <p className="text-gray-700">
                Program konservasi yang melibatkan masyarakat lokal sebagai pengelola utama, menggabungkan
                pengetahuan tradisional dengan pengelolaan modern untuk keberlanjutan jangka panjang.
              </p>
            </div>
          </div>
        </div>

        {/* Before/After Rehabilitation Gallery */}
        <h2 className="text-3xl font-bold mb-6 text-green-800">Proyek Rehabilitasi</h2>
        <div className="bg-white rounded-lg shadow-md overflow-hidden mb-16">
          <div className="grid grid-cols-1 md:grid-cols-3">
            <div className="p-6 border-r border-gray-200">
              <h3 className="font-bold text-xl mb-4">Proyek Rehabilitasi</h3>
              <div className="space-y-4">
                {rehabilitationProjects.map(project => (
                  <div 
                    key={project.id}
                    className={`p-3 rounded-md cursor-pointer ${activeProject?.id === project.id ? 'bg-green-100 border-l-4 border-green-600' : 'hover:bg-gray-100'}`}
                    onClick={() => setActiveProject(project)}
                  >
                    <h4 className="font-bold">{project.title}</h4>
                    <div className="flex items-center text-sm text-gray-600 mt-2">
                      <MapPin size={14} className="mr-1" />
                      <span>{project.location}</span>
                    </div>
                    <div className="flex items-center text-sm text-gray-600 mt-1">
                      <Calendar size={14} className="mr-1" />
                      <span>{project.year}</span>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            
            <div className="md:col-span-2 p-6">
              {activeProject && (
                <div>
                  <div className="flex justify-between items-center mb-4">
                    <h3 className="font-bold text-xl">{activeProject.title}</h3>
                    <div className="flex space-x-2">
                      <button 
                        className={`px-3 py-1 text-sm rounded ${isBeforeImage ? 'bg-green-600 text-white' : 'bg-gray-200'}`}
                        onClick={() => setIsBeforeImage(true)}
                      >
                        Sebelum
                      </button>
                      <button 
                        className={`px-3 py-1 text-sm rounded ${!isBeforeImage ? 'bg-green-600 text-white' : 'bg-gray-200'}`}
                        onClick={() => setIsBeforeImage(false)}
                      >
                        Sesudah
                      </button>
                    </div>
                  </div>
                  
                  <div className="relative h-64 md:h-80 bg-gray-100 rounded-lg overflow-hidden mb-4">
                    <img 
                      src={isBeforeImage ? activeProject.beforeImage : activeProject.afterImage} 
                      alt={`${isBeforeImage ? 'Sebelum' : 'Sesudah'} - ${activeProject.title}`}
                      className="w-full h-full object-cover"
                    />
                    <div className="absolute bottom-0 left-0 bg-black bg-opacity-70 text-white px-3 py-1 m-2 text-sm rounded">
                      {isBeforeImage ? 'Sebelum Rehabilitasi' : 'Sesudah Rehabilitasi'}
                    </div>
                  </div>
                  
                  <p className="text-gray-700 mb-4">{activeProject.description}</p>
                  
                  <div className="bg-green-50 p-4 rounded-lg">
                    <h4 className="font-bold text-green-800 mb-2">Dampak Program</h4>
                    <p>{activeProject.impact}</p>
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>

        {/* Species Protection Section */}
        <h2 className="text-3xl font-bold mb-6 text-green-800">Perlindungan Spesies</h2>
        <div className="bg-white rounded-lg shadow-md p-6 mb-16">
          <p className="text-gray-700 mb-6">
            Kami berkomitmen untuk melindungi dan memulihkan populasi spesies terancam punah di Indonesia 
            melalui program konservasi terintegrasi yang menggabungkan perlindungan habitat, breeding program, 
            penelitian, dan edukasi masyarakat.
          </p>
          
          <div className="overflow-x-auto">
            <table className="min-w-full bg-white">
              <thead className="bg-green-800 text-white">
                <tr>
                  <th className="py-3 px-4 text-left">Nama Spesies</th>
                  <th className="py-3 px-4 text-left">Nama Ilmiah</th>
                  <th className="py-3 px-4 text-right">Populasi</th>
                  <th className="py-3 px-4 text-center">Status</th>
                  <th className="py-3 px-4 text-right">Tingkat Pemulihan</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-200">
                {protectedSpecies.map(species => (
                  <tr key={species.id} className="hover:bg-gray-50">
                    <td className="py-3 px-4 font-medium">{species.name}</td>
                    <td className="py-3 px-4 italic">{species.scientificName}</td>
                    <td className="py-3 px-4 text-right">{species.population.toLocaleString()}</td>
                    <td className="py-3 px-4">
                      <span className="inline-block text-center px-2 py-1 rounded-full text-xs font-medium bg-red-100 text-red-800">
                        {species.status}
                      </span>
                    </td>
                    <td className="py-3 px-4 text-right">
                      <div className="flex items-center justify-end">
                        <span className="mr-2">{species.recoveryRate}%</span>
                        <div className="w-24 bg-gray-200 rounded-full h-2">
                          <div 
                            className="bg-green-600 h-2 rounded-full" 
                            style={{ width: `${species.recoveryRate * 4}%` }}
                          ></div>
                        </div>
                      </div>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

        {/* Timeline Section */}
        <h2 className="text-3xl font-bold mb-6 text-green-800">Timeline Proyek Rehabilitasi</h2>
        <div className="bg-white rounded-lg shadow-md p-6 mb-16">
          <div className="relative">
            {/* Timeline Line */}
            <div className="absolute left-4 lg:left-1/2 transform lg:-translate-x-1/2 h-full w-1 bg-green-200"></div>
            
            {/* Timeline Events */}
            <div className="space-y-12">
              {timelineEvents.map((event, index) => (
                <div key={event.id} className={`relative flex flex-col lg:flex-row ${index % 2 === 0 ? 'lg:flex-row-reverse' : ''}`}>
                  {/* Timeline Dot */}
                  <div className="absolute left-4 lg:left-1/2 transform lg:-translate-x-1/2 -translate-y-1/2 w-8 h-8 rounded-full bg-green-600 flex items-center justify-center text-white font-bold border-4 border-white z-10">
                    {/* Could add an icon here */}
                  </div>
                  
                  {/* Content */}
                  <div className={`pl-12 lg:pl-0 ${index % 2 === 0 ? 'lg:pr-12 lg:text-right lg:mr-1/2' : 'lg:pl-12 lg:ml-1/2'} w-full lg:w-1/2`}>
                    <div className="bg-gray-50 p-4 rounded-lg shadow-sm border border-gray-200">
                      <div className="bg-green-100 text-green-800 font-bold px-3 py-1 rounded inline-block mb-2">
                        {event.year}
                      </div>
                      <h3 className="text-lg font-bold mb-2">{event.title}</h3>
                      <p className="text-gray-700">{event.description}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Interactive Features */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-16">
          {/* Project Impact Calculator */}
          <div className="bg-white rounded-lg shadow-md p-6">
            <h2 className="text-2xl font-bold mb-6 text-green-800 flex items-center">
              <BarChart2 className="mr-2" />
              Kalkulator Dampak Proyek
            </h2>
            <p className="text-gray-700 mb-6">
              Estimasikan dampak positif dari proyek rehabilitasi hutan berdasarkan luas area, 
              durasi proyek, dan tingkat upaya yang diinvestasikan.
            </p>
            
            <div className="space-y-4 mb-6">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Luas Area (hektar)
                </label>
                <input 
                  type="range" 
                  min="10" 
                  max="1000" 
                  step="10"
                  value={impactValues.area}
                  onChange={(e) => setImpactValues({...impactValues, area: parseInt(e.target.value)})}
                  className="w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer"
                />
                <div className="flex justify-between text-xs text-gray-500 mt-1">
                  <span>10</span>
                  <span>{impactValues.area} ha</span>
                  <span>1000</span>
                </div>
              </div>
              
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Durasi Proyek (tahun)
                </label>
                <input 
                  type="range" 
                  min="1" 
                  max="20" 
                  value={impactValues.duration}
                  onChange={(e) => setImpactValues({...impactValues, duration: parseInt(e.target.value)})}
                  className="w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer"
                />
                <div className="flex justify-between text-xs text-gray-500 mt-1">
                  <span>1</span>
                  <span>{impactValues.duration} tahun</span>
                  <span>20</span>
                </div>
              </div>
              
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Tingkat Upaya (1-5)
                </label>
                <input 
                  type="range" 
                  min="1" 
                  max="5" 
                  value={impactValues.effort}
                  onChange={(e) => setImpactValues({...impactValues, effort: parseInt(e.target.value)})}
                  className="w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer"
                />
                <div className="flex justify-between text-xs text-gray-500 mt-1">
                  <span>Minimal</span>
                  <span>Level {impactValues.effort}</span>
                  <span>Maksimal</span>
                </div>
              </div>
            </div>
            
            <div className="bg-green-50 p-4 rounded-lg">
              <h3 className="font-bold text-green-800 mb-3">Estimasi Dampak</h3>
              <div className="grid grid-cols-3 gap-4 text-center">
                <div>
                  <div className="text-2xl font-bold text-green-600">{impact.carbonSequestration}</div>
                  <div className="text-sm text-gray-600">Ton CO2 Terserap</div>
                </div>
                <div>
                  <div className="text-2xl font-bold text-green-600">{impact.biodiversityIncrease}%</div>
                  <div className="text-sm text-gray-600">Peningkatan Biodiversitas</div>
                </div>
                <div>
                  <div className="text-2xl font-bold text-green-600">{impact.waterQualityImprovement}%</div>
                  <div className="text-sm text-gray-600">Perbaikan Kualitas Air</div>
                </div>
              </div>
            </div>
          </div>
          
          {/* Conservation Area Map */}
          <div className="bg-white rounded-lg shadow-md p-6">
            <h2 className="text-2xl font-bold mb-6 text-green-800 flex items-center">
              <MapPin className="mr-2" />
              Peta Area Konservasi
            </h2>
            <p className="text-gray-700 mb-6">
              Peta interaktif menunjukkan lokasi area konservasi dan proyek rehabilitasi yang sedang berlangsung.
            </p>
            
            <div className="aspect-w-16 aspect-h-9 mb-4">
              <div className="w-full h-64 bg-gray-200 rounded-lg flex items-center justify-center text-gray-600">
                <div className="text-center">
                  <p>Peta Interaktif Area Konservasi</p>
                  <p className="text-sm">(Visualisasi peta akan ditampilkan di sini)</p>
                </div>
              </div>
            </div>
            
            <div className="bg-blue-50 p-4 rounded-lg text-blue-800 text-sm">
              <p>Fitur peta interaktif akan menampilkan:</p>
              <ul className="list-disc pl-5 mt-2 space-y-1">
                <li>Lokasi proyek konservasi aktif</li>
                <li>Area perlindungan spesies terancam punah</li>
                <li>Kawasan rehabilitasi hutan dan lahan</li>
                <li>Koridor satwa dan area konservasi berbasis masyarakat</li>
              </ul>
            </div>
          </div>
        </div>

        {/* Volunteer Opportunities */}
        <h2 className="text-3xl font-bold mb-6 text-green-800">Peluang Partisipasi Masyarakat</h2>
        <div className="bg-white rounded-lg shadow-md p-6 mb-16">
          <p className="text-gray-700 mb-6">
            Kami menyediakan berbagai kesempatan bagi masyarakat untuk terlibat langsung dalam upaya konservasi 
            dan rehabilitasi hutan. Bergabunglah dengan program relawan kami untuk berkontribusi pada pelestarian lingkungan!
          </p>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {volunteerPrograms.map(program => (
              <div key={program.id} className="border border-gray-200 rounded-lg overflow-hidden">
                <div className="h-40 bg-gray-200"></div>
                <div className="p-4">
                  <h3 className="font-bold text-lg mb-2">{program.title}</h3>
                  <p className="text-gray-700 text-sm mb-4">{program.description}</p>
                  
                  <div className="flex items-center text-sm text-gray-600 mb-2">
                    <Calendar size={14} className="mr-2" />
                    <span>{program.date}</span>
                  </div>
                  
                  <div className="flex items-center text-sm text-gray-600 mb-2">
                    <MapPin size={14} className="mr-2" />
                    <span>{program.location}</span>
                  </div>
                  
                  <div className="flex items-center text-sm text-gray-600 mb-4">
                    <Users size={14} className="mr-2" />
                    <span>{program.slots} partisipan</span>
                  </div>
                  
                  <div className="text-sm mb-4">
                    <span className="font-medium text-gray-700">Persyaratan:</span>
                    <ul className="list-disc pl-5 mt-1 space-y-1">
                      {program.requirements.map((req, i) => (
                        <li key={i}>{req}</li>
                      ))}
                    </ul>
                  </div>
                  
                  <button className="w-full bg-green-600 hover:bg-green-700 text-white font-medium py-2 px-4 rounded transition">
                    Daftar Sekarang
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Ecosystem Visualization */}
        <div className="bg-white rounded-lg shadow-md p-6 mb-16">
          <h2 className="text-2xl font-bold mb-6 text-green-800 flex items-center">
            <PieChart className="mr-2" />
            Visualisasi Ekosistem
          </h2>
          <p className="text-gray-700 mb-6">
            Visualisasi interaktif ini menunjukkan kompleksitas ekosistem hutan dan bagaimana 
            setiap spesies berperan dalam menjaga keseimbangan alam.
          </p>
          
          <div className="aspect-w-16 aspect-h-9">
            <div className="w-full h-96 bg-gray-200 rounded-lg flex items-center justify-center text-gray-600">
              <div className="text-center">
                <p>Visualisasi Interaktif Ekosistem</p>
                <p className="text-sm">(Komponen visualisasi ekosistem akan ditampilkan di sini)</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default RehabilitasiKonservasiPage;