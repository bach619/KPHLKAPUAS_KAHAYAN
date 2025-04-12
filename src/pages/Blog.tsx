import React from 'react';
import { format } from 'date-fns';
import { id } from 'date-fns/locale';
import { Bookmark, Share2, ThumbsUp } from 'lucide-react';

const blogPosts = [
  {
    id: 1,
    title: 'Mengenal Keanekaragaman Hayati Hutan Kalimantan',
    excerpt: 'Eksplorasi mendalam tentang berbagai spesies flora dan fauna yang ada di hutan Kalimantan dan upaya pelestariannya.',
    image: 'https://images.unsplash.com/photo-1542401886-65d6c61db217?ixlib=rb-4.0.3',
    date: new Date('2024-03-10'),
    author: 'Dr. Siti Nurhaliza',
    category: 'Konservasi',
    readTime: '8 menit',
  },
  {
    id: 2,
    title: 'Program Pemberdayaan Masyarakat Adat dalam Pelestarian Hutan',
    excerpt: 'Bagaimana KPHL Kapuas Kahayan bekerja sama dengan masyarakat adat untuk menjaga kelestarian hutan.',
    image: 'https://images.unsplash.com/photo-1565118531796-763e5082d113?ixlib=rb-4.0.3',
    date: new Date('2024-03-08'),
    author: 'Ir. Ahmad Dahlan',
    category: 'Pemberdayaan',
    readTime: '6 menit',
  },
  {
    id: 3,
    title: 'Teknologi Modern dalam Pemantauan Kawasan Hutan',
    excerpt: 'Penggunaan drone dan sistem informasi geografis dalam pemantauan dan perlindungan kawasan hutan.',
    image: 'https://images.unsplash.com/photo-1511497584788-876760111969?ixlib=rb-4.0.3',
    date: new Date('2024-03-05'),
    author: 'Teguh Prasetyo, M.Sc.',
    category: 'Teknologi',
    readTime: '5 menit',
  },
];

function Blog() {
  return (
    <div className="pt-24 min-h-screen bg-gray-50">
      <div className="container mx-auto px-6 py-12">
        <h1 className="text-4xl md:text-5xl font-bold text-center mb-4 bg-gradient-to-r from-green-600 to-blue-600 text-transparent bg-clip-text">
          Blog KPHL Kapuas Kahayan
        </h1>
        <p className="text-gray-600 text-center mb-12 max-w-3xl mx-auto">
          Temukan artikel menarik seputar konservasi hutan, pemberdayaan masyarakat, dan inovasi dalam pengelolaan kawasan hutan.
        </p>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {blogPosts.map((post) => (
            <article key={post.id} className="bg-white rounded-2xl shadow-lg overflow-hidden transform hover:scale-105 transition-transform duration-300">
              <div className="relative h-48 overflow-hidden">
                <img
                  src={post.image}
                  alt={post.title}
                  className="w-full h-full object-cover"
                />
                <div className="absolute top-4 right-4">
                  <span className="bg-green-600 text-white px-3 py-1 rounded-full text-sm">
                    {post.category}
                  </span>
                </div>
              </div>
              <div className="p-6">
                <div className="flex items-center text-sm text-gray-500 mb-4">
                  <span>{format(post.date, 'd MMMM yyyy', { locale: id })}</span>
                  <span className="mx-2">•</span>
                  <span>{post.readTime}</span>
                </div>
                <h2 className="text-xl font-bold mb-3 text-gray-800 line-clamp-2">
                  {post.title}
                </h2>
                <p className="text-gray-600 mb-4 line-clamp-3">
                  {post.excerpt}
                </p>
                <div className="flex items-center justify-between">
                  <div className="flex items-center space-x-4">
                    <button className="text-gray-500 hover:text-green-600 transition-colors">
                      <ThumbsUp className="h-5 w-5" />
                    </button>
                    <button className="text-gray-500 hover:text-green-600 transition-colors">
                      <Bookmark className="h-5 w-5" />
                    </button>
                    <button className="text-gray-500 hover:text-green-600 transition-colors">
                      <Share2 className="h-5 w-5" />
                    </button>
                  </div>
                  <span className="text-sm text-gray-500">{post.author}</span>
                </div>
              </div>
            </article>
          ))}
        </div>

        <div className="mt-12 text-center">
          <button className="bg-green-600 text-white px-8 py-3 rounded-full hover:bg-green-700 transition-all transform hover:scale-105 shadow-lg">
            Lihat Lebih Banyak
          </button>
        </div>
      </div>
    </div>
  );
}

export default Blog;