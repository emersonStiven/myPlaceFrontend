

export const validateForm = (f) =>{
    let errors={}
    const regexName = /^[A-Za-zÑñÁáÉéÍíÓóÚúÜü\s]+$/;
    const regexEmail = /^(\w+[/./-]?){1,}@[a-z]+[/.]\w{2,}$/;

    if(f.firstName.trim() === ""){
      errors.name = "El campo no puede estar vacio"
    }else if(!regexName.test(f.firstName.trim())){
      errors.name = "El campo debe...."
    }

    if(f.lastName.trim()===""){
      errors.lastName = "El campo no puede estar vacio";
    }else if(!regexName.test(f.lastName.trim())){
      errors.lastName = "El apellido no puede...."
    }

    if(f.lastName.trim()===""){
      errors.email = "El campo no puede estar vacio"
    }else if(!regexEmail.test(f.email.trim())){
      errors.email = "El campo..."
    }
    return errors;
  }



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


