import { fetchFromTMDB } from "./fetchFromTMDB"


export const getTrendingMovie = async(contentType: ContentType = 'movie')=>{

    console.log('FETCH CONTENT:',  `https://api.themoviedb.org/3/${contentType}/popular?language=en-US&page=1`);
    

    const data = await fetchFromTMDB<Movie>(`https://api.themoviedb.org/3/${contentType}/popular?language=en-US&page=1`);
    const randomMovie = data.results[Math.floor(Math.random() * data.results.length)]

    return {succress: true, content: randomMovie}
}

// export const getMovieTrailers = async( req: Request<{ id: string }>, res: Response )=>{

//     const {id} = req.params

//     const data = await fetchFromTMDB<Video>(`https://api.themoviedb.org/3/movie/${id}/videos?language=en-US`)
//     res.json({success: true, trailers: data.results})

// }


// export const getMovieDetails = async( req: Request<{ id: string }>, res: Response )=>{

//     const {id} = req.params

//     const data = await fetchFromTMDB<Details>(`https://api.themoviedb.org/3/movie/${id}?language=en-US`)
//     res.json({success: true, trailers: data})

// }



// export const getSimilarMovies = async( req: Request<{ id: string }>, res: Response )=>{

//     const {id} = req.params

//     const data = await fetchFromTMDB<SimilarMovies>(`https://api.themoviedb.org/3/movie/${id}/similar?language=en-USpage=1`)
//     res.json({success: true, trailers: data.results})

// }


// export const getMoviesByCategory = async( req: Request<{ category: string }>, res: Response )=>{

//     const {category} = req.params

//     const data = await fetchFromTMDB<any>(`https://api.themoviedb.org/3/movie/${category}?language=en-US&page=1`)
//     res.json({success: true, trailers: data.results})

// }

