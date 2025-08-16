"use client";

import { RowsPhotoAlbum } from "react-photo-album";
import { useState } from "react";
import "react-photo-album/rows.css";

// Define albums with cover images
const albums = {
  "Sturgis 2025": {
    cover: "photos/Sturgis 2025/_A7R5318.jpg",
    photos: [
  { src: "/photos/Sturgis 2025/_A7R5318.jpg", width: 1200, height: 800 },
  { src: "/photos/Sturgis 2025/_A7R5320.jpg", width: 1200, height: 800 },
  { src: "/photos/Sturgis 2025/_A7R5324.jpg", width: 1200, height: 800 },
  { src: "/photos/Sturgis 2025/_A7R5326.jpg", width: 1200, height: 800 },
  { src: "/photos/Sturgis 2025/_A7R5328.jpg", width: 1200, height: 800 },
  { src: "/photos/Sturgis 2025/_A7R5329.jpg", width: 1200, height: 800 },
  { src: "/photos/Sturgis 2025/_A7R5330.jpg", width: 1200, height: 800 },
  { src: "/photos/Sturgis 2025/_A7R5332.jpg", width: 1200, height: 800 },
  { src: "/photos/Sturgis 2025/_A7R5340.jpg", width: 1200, height: 800 },
  { src: "/photos/Sturgis 2025/_A7R5341.jpg", width: 1200, height: 800 },
  { src: "/photos/Sturgis 2025/_A7R5350.jpg", width: 1200, height: 800 },
  { src: "/photos/Sturgis 2025/_A7R5351.jpg", width: 1200, height: 800 },
  { src: "/photos/Sturgis 2025/_A7R5352.jpg", width: 1200, height: 800 },
  { src: "/photos/Sturgis 2025/_A7R5353.jpg", width: 1200, height: 800 },
  { src: "/photos/Sturgis 2025/_A7R5357.jpg", width: 1200, height: 800 },
  { src: "/photos/Sturgis 2025/_A7R5358.jpg", width: 1200, height: 800 },
  { src: "/photos/Sturgis 2025/_A7R5359.jpg", width: 1200, height: 800 },
  { src: "/photos/Sturgis 2025/_A7R5364.jpg", width: 1200, height: 800 },
  { src: "/photos/Sturgis 2025/_A7R5367.jpg", width: 1200, height: 800 },
  { src: "/photos/Sturgis 2025/_A7R5369.jpg", width: 1200, height: 800 },
    ],
  },
  "Family": {
    cover: "/family_cover.jpg",
    photos: [
      { src: "/family1.jpg", width: 1000, height: 750 },
      { src: "/family2.jpg", width: 1200, height: 900 },
    ],
  },
  "Events": {
    cover: "/event_cover.jpg",
    photos: [
      { src: "/event1.jpg", width: 1600, height: 1200 },
      { src: "/event2.jpg", width: 1400, height: 1000 },
    ],
  },
};

export default function Gallery() {
  const [currentAlbum, setCurrentAlbum] = useState(null);

  return (
    <div className="p-6">
      <h1 className="text-2xl font-bold mb-8">Photo Gallery</h1>

      {/* Album Thumbnails */}
      {!currentAlbum && (
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
          {Object.keys(albums).map((album) => (
            <div
              key={album}
              className="cursor-pointer rounded overflow-hidden shadow hover:scale-105 transition-transform"
              onClick={() => setCurrentAlbum(album)}
            >
              <img
                src={albums[album].cover}
                alt={album}
                className="w-full h-88 object-cover"
              />
              <div className="p-2 text-center font-semibold">{album}</div>
            </div>
          ))}
        </div>
      )}

      {/* Album View */}
      {currentAlbum && (
        <div>
          <button
            onClick={() => setCurrentAlbum(null)}
            className="mb-4 px-4 py-2 bg-gray-300 rounded hover:bg-gray-400"
          >
            ← Back to Albums
          </button>
          <h2 className="text-xl font-bold mb-4">{currentAlbum}</h2>
          <RowsPhotoAlbum photos={albums[currentAlbum].photos} />
        </div>
      )}
    </div>
  );
}
