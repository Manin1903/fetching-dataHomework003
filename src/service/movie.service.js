//Get All movie
export async function getAllMovieService(genre){
    const resData = await fetch(`https://movie-api-get-only-bmc3.vercel.app/api`,{cache:`no-store`});

    const  data =await resData.json();
    return data;
}


//Get data by id
export async function getMovieById(id){
    const resData = await fetch(`https://movie-api-get-only-bmc3.vercel.app/api/${id}`,{cache:`no-store`});

    const  data =await resData.json();
    return data;
}

//Get data by genre
export async function getMovieGenre(genre) {
    const resData = await fetch(
        `https://movie-api-get-only-bmc3.vercel.app/api/?genre=${genre}`,{ cache: `no-store` });
    
    const  data =await resData.json();
    return data;
}