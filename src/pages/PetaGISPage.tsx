import React from 'react';

const PetaGISPage = (): JSX.Element => {
  return (
    <div className="min-h-screen bg-gray-50 mt-15">
      <div className="max-w-7xl mx-auto px-4 py-8 mt-[50px]">
        {/* Header Section */}
        <div className="mb-6 mt-[25px]">
          <h1 className="text-3xl font-bold text-gray-900 mb-2">
            Peta & GIS Hutan Kalimantan Tengah
          </h1>
          {/* <p className="text-gray-600">
            Sistem Informasi Geografis untuk Data Kehutanan Terintegrasi
          </p> */}
          <p className="text-sm text-gray-500 mt-2">
            Sumber data: ArcGIS - Dinas Kehutanan Provinsi Kalimantan Tengah
          </p>
        </div>

        {/* Map Container */}
        <div className="bg-white rounded-lg shadow-lg overflow-hidden mb-6">
          <div className="w-full h-[690px]">
            <iframe
              title="GIS Map"
              src="https://www.arcgis.com/apps/View/index.html?appid=85f73b5489eb498a9d91c9419fff7380"
              width="100%"
              height="100%"
              frameBorder="0"
              allowFullScreen
              allow="geolocation"
              className="min-h-[460px]"
              style={{ border: 'none' }}
            />
          </div>
        </div>

        {/* Feature Highlights */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 mb-6">
          {[
            { title: 'Peta Interaktif', color: 'green', content: 'Eksplorasi data spasial dengan zoom dan pan' },
            { title: 'Layer GIS', color: 'blue', content: 'Aktifkan/nonaktifkan berbagai layer data' },
            { title: 'Analisis Spasial', color: 'purple', content: 'Alat pengukuran area dan jarak' },
            { title: 'Pencarian', color: 'yellow', content: 'Temukan lokasi spesifik di peta' },
          ].map((feature, index) => (
            <div key={index} className="bg-white p-4 rounded-lg shadow">
              <h3 className={`font-semibold text-${feature.color}-700 mb-2`}>
                {feature.title}
              </h3>
              <p className="text-sm text-gray-600">{feature.content}</p>
            </div>
          ))}
        </div>

        {/* Disclaimer Section */}
        <div className="text-xs text-gray-500 bg-white p-3 rounded-lg">
          <p className="font-semibold">Informasi:</p>
          <ul className="list-disc pl-5 mt-10 space-y-1">
            <li>Sistem ini memanfaatkan data real-time dari platform ArcGIS</li>
            <li>Fitur interaktif mungkin memerlukan izin akses lokasi</li>
            <li>Untuk optimalisasi, gunakan browser terbaru (Chrome, Firefox, Edge)</li>
            <li>Peta mungkin memerlukan waktu loading tergantung koneksi internet</li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default PetaGISPage;