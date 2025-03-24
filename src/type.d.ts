type UserCredentials = { username: string; password: string, email: string };


interface ReceivedUser {
    name: string;
    email: string;
    image?: string
    searchHistory?:  []
    createdAt: Date;
    updatedAt: Date;
}

type ServerMessage = {
    message: string
    error? : any
    data?: any
    success: boolean
}

interface SuccessUserBack extends ServerMessage {
    data: ReceivedUser
}



interface UserInput {
    name: string;
    email: string;
    password: string;
    image?: string
    searchHistory?:  []
}




 interface MovieObject {
    adult:             boolean;
    backdrop_path:     string;
    genre_ids:         number[];
    id:                number;
    original_language: string;
    original_title:    string;
    overview:          string;
    popularity:        number;
    poster_path:       string;
    release_date:      Date;
    title:             string;
    video:             boolean;
    vote_average:      number;
    vote_count:        number;
}


 type Movie = {results: MovieObject[] }


 interface Video {
    id:      number;
    results: VideoObject[];
}

 interface VideoObject {
    iso_639_1:    string;
    iso_3166_1:   string;
    name:         string;
    key:          string;
    site:         string;
    size:         number;
    type:         string;
    official:     boolean;
    published_at: Date;
    id:           string;
}


 interface Details {
    adult:                 boolean;
    backdrop_path:         string;
    belongs_to_collection: null;
    budget:                number;
    genres:                Genre[];
    homepage:              string;
    id:                    number;
    imdb_id:               string;
    origin_country:        string[];
    original_language:     string;
    original_title:        string;
    overview:              string;
    popularity:            number;
    poster_path:           string;
    production_companies:  ProductionCompany[];
    production_countries:  ProductionCountry[];
    release_date:          Date;
    revenue:               number;
    runtime:               number;
    spoken_languages:      SpokenLanguage[];
    status:                string;
    tagline:               string;
    title:                 string;
    video:                 boolean;
    vote_average:          number;
    vote_count:            number;
}

 interface Genre {
    id:   number;
    name: string;
}

 interface ProductionCompany {
    id:             number;
    logo_path:      null | string;
    name:           string;
    origin_country: string;
}

 interface ProductionCountry {
    iso_3166_1: string;
    name:       string;
}

 interface SpokenLanguage {
    english_name: string;
    iso_639_1:    string;
    name:         string;
}


 interface SimilarMovies {
    page:          number;
    results:       Result[];
    total_pages:   number;
    total_results: number;
}

 interface Result {
    adult:             boolean;
    backdrop_path:     null | string;
    genre_ids:         number[];
    id:                number;
    original_language: string;
    original_title:    string;
    overview:          string;
    popularity:        number;
    poster_path:       string;
    release_date:      Date;
    title:             string;
    video:             boolean;
    vote_average:      number;
    vote_count:        number;
}


type ContentType = 'movie' | 'tv'