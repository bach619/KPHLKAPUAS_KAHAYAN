// src/components/Video.tsx
import React, { useState, useEffect } from 'react';
import { HTMLAttributes } from 'react';

interface VideoProps extends HTMLAttributes<HTMLDivElement> {
  url: string;
  autoplay?: boolean;
  controls?: boolean;
  muted?: boolean;
  loop?: boolean;
  thumbnailQuality?: 'default' | 'mqdefault' | 'hqdefault' | 'sddefault' | 'maxresdefault';
  onError?: (error: string) => void;
}

const Video: React.FC<VideoProps> = ({
  url,
  autoplay = false,
  controls = true,
  muted = false,
  loop = false,
  thumbnailQuality = 'hqdefault',
  onError,
  className = '',
  ...props
}) => {
  const [videoId, setVideoId] = useState<string | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  // Fungsi yang diperbaiki untuk ekstrak ID video YouTube
  const extractVideoId = (url: string): string | null => {
    // Regex yang sudah dikoreksi
    const regExp = /^.*(youtu.be\/|v\/|u\/\w\/|embed\/|watch\?v=|&v=)([^#&?]*).*/;
    const match = url.match(regExp);
    
    // Alternatif untuk berbagai format URL
    if (!match || match[2].length !== 11) {
      // Cek format youtu.be
      const youtuBeMatch = url.match(/youtu.be\/([^#&?]{11})/);
      if (youtuBeMatch && youtuBeMatch[1]) {
        return youtuBeMatch[1];
      }
      
      // Cek format pendek
      const shortMatch = url.match(/^([^#&?]{11})$/);
      if (shortMatch && shortMatch[1]) {
        return shortMatch[1];
      }
      
      return null;
    }
    
    return match[2];
  };

  useEffect(() => {
    try {
      setLoading(true);
      const id = extractVideoId(url);
      
      if (!id) {
        throw new Error('URL video YouTube tidak valid. Contoh URL yang valid: https://www.youtube.com/watch?v=dQw4w9WgXcQ');
      }

      setVideoId(id);
      setError(null);
    } catch (err) {
      const errorMsg = err instanceof Error ? err.message : 'Terjadi kesalahan saat memuat video';
      setError(errorMsg);
      if (onError) {
        onError(errorMsg);
      }
    } finally {
      setLoading(false);
    }
  }, [url, onError]);

  if (loading) {
    return (
      <div className={`flex items-center justify-center bg-gray-100 rounded-lg ${className}`} {...props}>
        <div className="animate-pulse bg-gray-200 w-full h-full rounded-lg"></div>
      </div>
    );
  }

  if (error) {
    return (
      <div className={`bg-red-50 border border-red-200 rounded-lg p-4 ${className}`} {...props}>
        <div className="text-red-600 font-medium">Error</div>
        <div className="text-red-500">{error}</div>
      </div>
    );
  }

  if (!videoId) {
    return (
      <div className={`bg-yellow-50 border border-yellow-200 rounded-lg p-4 ${className}`} {...props}>
        <div className="text-yellow-700">Tidak dapat memuat video</div>
      </div>
    );
  }

  const embedParams = new URLSearchParams({
    autoplay: autoplay ? '1' : '0',
    controls: controls ? '1' : '0',
    mute: muted ? '1' : '0',
    loop: loop ? '1' : '0',
    rel: '0'
  });

  const embedUrl = `https://www.youtube.com/embed/${videoId}?${embedParams.toString()}`;

  return (
    <div className={`relative overflow-hidden rounded-lg shadow-md mt-20em ${className}`} {...props}>
      <div className="relative pb-[56.25%] h-0 ">
        <iframe
          className="absolute top-0 left-0 w-full h-full"
          src={embedUrl}
          title="YouTube video player"
          frameBorder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
          loading="lazy"
        />
      </div>
    </div>
  );
};

export default Video;