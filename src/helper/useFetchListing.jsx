import React from "react";
import { useEffect, useState } from "react";

export function useFetchListing(url) {
  
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState({});
  const [listings, setListings] = useState([]);
  const [page, nextPage] = useState("");

  useEffect(() => {
    setLoading(true);
    async function fetchListings() {
      try {
        const data = await fetch(url);
        if (!data.ok) {
          throw {
            error: true,
            status: data.status,
            statusText: data.statusText,
          };
        }
        const result = await data.json();
        nextPage(result.next);

        const listingPromises = result.results.map(async (elem) => {
          const res = await fetch(elem.url);
          return res.json();
        });

        const resolvedListings = await Promise.all(listingPromises);
        let arrayListings =[];
        resolvedListings.map(elem => arrayListings.push({
          id: elem.id,
          name: elem.name,
          images: elem.sprites,
          price: elem.weight,
          location: "Colombia",
        }))
               
        setListings( (prev)=> [ ...prev, ...arrayListings]);
      } catch (error) {
        setError(error);
      } finally {
        setLoading(false);
      }
    }
    fetchListings();
  }, [url, page]);

  return { loading, error, listings, page, nextPage };
}


