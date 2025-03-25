import { fetchFromTMDB } from "./fetchFromTMDB"


export const getTrendingMovie = async(contentType: ContentType = 'movie'): Promise<{succress: boolean, content: MovieByCategoryResult | TvShowByCategoryResult}>=>{

    // console.log('FETCH CONTENT:',  `https://api.themoviedb.org/3/${contentType}/popular?language=en-US&page=1`);
    
    
    const data = await fetchFromTMDB<MovieByCategory |  TvShowByCategory>(`https://api.themoviedb.org/3/${contentType}/popular?language=en-US&page=1`);
    const popularResult = data.results[Math.floor(Math.random() * data.results.length)]
    
    if(popularResult.backdrop_path === null || popularResult.backdrop_path === undefined){
        //* if no backdrop path, fetch again (recursive)
        return getTrendingMovie(contentType)
    }    
    
    return {succress: true, content: popularResult}
}    

export const getMoviesByCategory = async(category: string, contentType: ContentType = 'movie')=>{

    const data = await fetchFromTMDB<MovieByCategory | TvShowByCategory>(`https://api.themoviedb.org/3/${contentType}/${category}?language=en-US&page=1`)
    return {success: true, content: data.results}

}

//     const {id} = req.params
// export const getMovieTrailers = async( req: Request<{ id: string }>, res: Response )=>{
    

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


