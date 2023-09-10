import React, { useState, useEffect } from "react";
import "../index.css";
import { fetchListings } from "../helper/helperFunctions";
import { Listing } from "../Components/Listing";

export const Home = () => {

  const[url, setUrl] = useState("https://pokeapi.co/api/v2/pokemon/");
  const[listings, setListings] = useState([]);
  const[page, setPage] = useState(0);

  useEffect(()=>{

    const fetchData = async ()=>{
      const {next, arrayListings} = await fetchListings(url);
      setUrl(next);
      setListings((prev) => [...prev, ...arrayListings])
    }
    fetchData()

    
  },[page]);

  return (
    <main className="main-site-content">
      <section className="filters">
        <div>
          
        </div>
      </section>

      <section className="accomodationInfo">
        <div className="search-info">informacion de busqueda</div>

        <div className="listings-container">
          {listings.map((elem) => {
              return <Listing key={elem.id} listingData={elem}/>
          })}
        </div>
      </section>
    </main>
  );
};

