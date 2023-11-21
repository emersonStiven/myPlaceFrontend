import React, { useState, useEffect } from "react";
import "../../index.css";
import { fetchListings } from "../../Utils/helperFunctions";
import { Listing } from "../../components/home/Listing";
import { DoublePriceFilter } from "../../components/home/filters/DoublePriceFilter";
import { PropertyType } from "../../components/home/filters/PropertyType";
import { RoomsFilter } from "../../components/home/filters/RoomsFilter";
import { ServicesFilter } from "../../components/home/filters/ServicesFilter";
import "/src/components/home/filters/lefthandfilters.css"

export const Home = () => {
  const [url, setUrl] = useState("https://pokeapi.co/api/v2/pokemon/");
  const [listings, setListings] = useState([]);
  const [page, setPage] = useState(0);
  const [hide, setHide] = useState(false);

  const [visibleFilters, setVisibleFilters] = useState({
    propertyType: true,
    doublePrice: true,
    roomsFilter: true,
    servicesFilter: true,
  });

  let styleFilter = "";
  let styleListingInfo = "";
  if (hide) {
    styleListingInfo = "listings-info-section-hide";
    styleFilter = "filters-section-hide";
  } else {
    styleListingInfo = "listings-info-section";
    styleFilter = "filters-section";
  }

  useEffect(() => {
    const fetchData = async () => {
      const { next, arrayListings } = await fetchListings(url);
      setUrl(next);
      setListings((prev) => [...prev, ...arrayListings])
    };
    fetchData();
  }, [page]);

  return (
    <main className="main-site-content">
      <aside className={styleFilter}>
        <div className="filters-wrapper">

          <div className="filter-category first">
            <h3>Filtrar por</h3>
            <div>
              <button className="container-h-s">
                Reset
              </button>
            </div>
          </div>

          <div>
            <PropertyType
              visible={visibleFilters}
              setVisible={setVisibleFilters}
            />
            <DoublePriceFilter
              visible={visibleFilters}
              setVisible={setVisibleFilters}
            />
            <RoomsFilter
              visible={visibleFilters}
              setVisible={setVisibleFilters}
            />
            <ServicesFilter
              visible={visibleFilters}
              setVisible={setVisibleFilters}
            />
          </div>
        </div>
      </aside>

      <div onClick={() => setHide((prev) => !prev)}  className="hide-container">

          <img
            className="filters-hide"
            src="src\assets\home\chevron-left-solid.svg"
          ></img>

      </div>

      <section className={styleListingInfo}>
        <div className="search-info">Informacion de busqueda</div>

        <div className="listings-container">
          {listings.map((elem) => {
            return <Listing key={elem.id} listingData={elem} />;
          })}
        </div>
      </section>
    </main>
  );
};
