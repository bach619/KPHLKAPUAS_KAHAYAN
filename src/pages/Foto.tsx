import { useState, useEffect } from 'react';

type SocialMediaPhotoProps = {
  socialMediaUrl: string;
};

const Photo = ({ socialMediaUrl }: SocialMediaPhotoProps) => {
  const [imageUrl, setImageUrl] = useState('');
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  const getPlatform = (url: string) => {
    if (url.includes('instagram.com')) return 'instagram';
    if (url.includes('facebook.com')) return 'facebook';
    if (url.includes('pinterest.com')) return 'pinterest';
    return 'unknown';
  };

  const fetchImage = async (url: string) => {
    try {
      const platform = getPlatform(url);
      
      switch(platform) {
        case 'instagram':
          const oembedUrl = `https://api.instagram.com/oembed?url=${encodeURIComponent(url)}&omitscript=true`;
          const response = await fetch(oembedUrl);
          const data = await response.json();
          setImageUrl(data.thumbnail_url);
          break;
          
        case 'pinterest':
          const pinId = url.split('/pin/')[1]?.replace('/', '');
          setImageUrl(`https://i.pinimg.com/736x/${pinId}.jpg`);
          break;

        case 'facebook':
          setError('Facebook integration memerlukan backend');
          break;

        default:
          setError('Platform tidak didukung');
      }
    } catch (err) {
      setError('Gagal memuat gambar');
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchImage(socialMediaUrl);
  }, [socialMediaUrl]);

  if (loading) return (
    <div className="flex justify-center items-center h-64">
      <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-green-600"></div>
    </div>
  );

  if (error) return (
    <div className="text-red-600 p-4 border rounded-lg bg-red-50">
      ⚠️ {error}
    </div>
  );

  return (
    <div className="relative group">
      <img
        src={imageUrl}
        alt="Konten media sosial"
        className="w-full h-auto rounded-lg shadow-xl transform transition-transform duration-300 group-hover:scale-105"
        loading="lazy"
      />
      <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-20 transition-all duration-300 rounded-lg" />
    </div>
  );
};

export default Photo;