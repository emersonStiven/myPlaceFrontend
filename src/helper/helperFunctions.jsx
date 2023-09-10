

// export async function  fetchListings(endpoint){

//     const res = await fetch(endpoint);
//     if(!res.ok){
//         throw {
//             error:true, status: res.status, statusText: res.statusText
//         }
//     }
//     const data = await res.json();
//     return data.listings
// }

export async function fetchGeographicLocations(url){
    const data = await fetch(url)
    const response = await data.json();
    return response;
}


export async function fetchListings(url){
    const response = await fetch(url);
    if(!response.ok){
        throw {
            error: true,
            status: data.status,
            statusText: data.statusText,
        }
    }
    const data = await response.json();
   
    const next = data.next;
    const listPromises = data.results.map( async (elem) =>{
        const res = await fetch(elem.url)
        return res.json();
    }  )

    const listings = await Promise.all(listPromises);

    let arrayListings = [];
    listings.map(elem => {
        arrayListings.push({
            id: elem.id,
            name: elem.name,
            images: elem.sprites,
            price: elem.weight,
            location: "Colombia",
        })
    })
 
     return {next ,arrayListings };

}


