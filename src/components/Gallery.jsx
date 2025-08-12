import { RowsPhotoAlbum } from "react-photo-album";
import "react-photo-album/rows.css";

const photos = [
  { src: "/photos/_A7R5318.jpg", width: 800, height: 600 },
  { src: "/photos/_A7R5318.jpg", width: 800, height: 600 },
  { src: "/photos/_A7R5318.jpg", width: 800, height: 600 },
  { src: "/photos/_A7R5318.jpg", width: 800, height: 600 },
  { src: "/photos/_A7R5318.jpg", width: 800, height: 600 },
];

export default function Gallery() {
  return <RowsPhotoAlbum photos={photos} />;
}