import react from "react";
import { useState } from "react";
import { ListingGallery } from "./ListingGallery";

export const Listing = ({ listingData }) => {
  
  let arrayImages = Object.values(listingData.images).filter(
    (elem) => elem !== null
  );

  return (
    <div className="listing-item">
      <ListingGallery array={arrayImages} ></ListingGallery>
     

      <div className="listing-info">
        <div className="listing-place-rating">
          <span>{listingData.location}</span>
          <span>{listingData.price}</span>
        </div>
        <div className="listing-price">
          <span>{listingData.name}</span>
        </div>
      </div>
      
    </div>
  );
};
