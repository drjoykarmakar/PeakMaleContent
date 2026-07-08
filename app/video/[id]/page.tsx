'use client';

import { useParams } from 'next/navigation';
import Link from 'next/link';

export default function VideoDetailPage() {
  const params = useParams();
  const videoId = params.id;

  return (
    <div className="max-w-5xl mx-auto px-6 py-12">
      <Link href="/" className="text-orange-400 mb-6 inline-block">← Back to Home</Link>
      
      <div className="aspect-video bg-zinc-900 rounded-3xl mb-8 flex items-center justify-center">
        <div className="text-center">
          <div className="text-6xl mb-4">🎥</div>
          <div className="font-bold">Video Player for Video #{videoId}</div>
          <p className="text-sm text-zinc-400 mt-2">YouTube embed would go here in production</p>
        </div>
      </div>

      <h1 className="text-4xl font-black mb-4">Video Detail Page</h1>
      <p className="text-zinc-400">This is a placeholder for individual video pages. In a full app, this would show full description, comments, related videos, etc.</p>
    </div>
  );
}
