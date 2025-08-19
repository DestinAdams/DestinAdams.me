import { RowsPhotoAlbum } from "react-photo-album";
import "react-photo-album/rows.css";

const photos = [
  {
    src: "/Jewelry/_A7R6748.jpg",
    width: 800,
    height: 600,
    srcSet: [
      { src: "/Jewelry/_A7R6748.jpg", width: 400, height: 300 },
    ],
  },
];

export default function Gallery() {
  return (
    <RowsPhotoAlbum
      photos={photos}
      targetRowHeight={300} // ✅ sets row height
    />
  );
}
