import react from "react";
import {useState} from 'react'

export function ListingGallery({ array }) {
    
  const [image, setImage] = useState(0);
  const [isFavorite, setIsFavorite] = useState(false);

  const handleNextImage = () => {
    setImage((prev) => {
      if (array.length === prev) {
        return 0;
      }
      return prev + 1;
    });
  };
  const handlePrevImage = () => {
    setImage((prev) => {
      if (prev === 0) {
        return array.length;
      }
      return prev - 1;
    });
  };
  const handleFavorite = ()=>{
    setIsFavorite(!isFavorite)
  }

  return (
    <div className="listing-gallery" >

        <img src={array[image]} alt="Listing-picture" />

        <div onClick={()=> handleFavorite()} className={isFavorite ? 'favorite true ' : 'favorite false '}></div>
        
        <div onClick={()=> handleNextImage()} className="listing-next-picture"></div>

        <div onClick={()=> handlePrevImage()} className="listing-prev-picture"></div>

        <div className="image-counter">{image}</div>
    </div>
  );
}
