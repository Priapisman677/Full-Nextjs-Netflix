import Image from "next/image"
import Link from "next/link"
import { Info, Play } from "lucide-react"
import Navbar from "@/components/client-components/Navbar"
import { getTrendingMovie } from "@/lib/fetchContent";
import { MOVIE_CATEGORIES, ORIGINAL_IMG_BASE_URL, TV_CATEGORIES } from "@/lib/constants";
import HomeSlider from "./HomeSliders";



function isMovie(content: MovieByCategoryResult | TvShowByCategoryResult): content is MovieByCategoryResult {
    //$ ✅ How to read it in plain English:
    //$ "If release_date exists in this object, then you can treat it as a MovieObject safely."
    return 'release_date' in content;
  }


export default async function HeroSection({ contentType }: { contentType: ContentType }) {

    
    
    const {content: trendingContent} = await getTrendingMovie(contentType)
    
    
    
    const overview = trendingContent.overview.length > 200 ? trendingContent.overview.slice(0, 200) + '...' : trendingContent.overview
    let title: string;
    let releaseYear: string;
    const backdropPath = ORIGINAL_IMG_BASE_URL + trendingContent.backdrop_path;
    const watchLink = `watch/${trendingContent.id}`
    // let rating: string;

    if (isMovie(trendingContent)) { //- This is purely typescript, if we use type "any" there wouldn't be need for this.
        title = trendingContent.title;
        releaseYear = trendingContent.release_date.split('-')[0];
        // rating = trendingContent.adult ? '18+' : 'pg-13';
      } else {
        title = trendingContent.name;
        releaseYear = trendingContent.first_air_date.split('-')[0];
        // rating = trendingContent.adult ? '18+' : 'pg-13';
      }
    return (
        <>        
            <div className='h-screen text-white relative'>
                <Navbar contentType={contentType  || 'movie'} />
                <Image src={backdropPath} alt={"Hero image"} width={5000} height={5000} className="absolute top-0 left-0 h-full w-full object-cover -z-50"></Image>
                <div aria-hidden='true' className="absolute top-0 left-0  h-full w-full bg-black/50 -z-50" />
                <div className='absolute top-0 left-0 w-full h-full flex flex-col justify-center px-8 md:px-16 lg:px-32 z-10'>
                <div className='bg-gradient-to-b from-black via-transparent to-transparent absolute w-full h-full top-0 left-0 -z-10'/>

                    <div className='max-w-2xl'>
                        <h1 className='mt-4 text-6xl font-extrabold text-balance'> {title} </h1>
                        <p className='mt-2 text-lg'> {releaseYear} </p>
                        <p className='mt-2 text-lg'> {overview} </p>
                        <p className='mt-2 text-lg'> 1h 49min </p>
                    </div>
                    <div className="flex mt-8">
                        <Link href={watchLink} className='bg-white hover:bg-white/80 text-black font-bold py-2 px-4 rounded mr-4 flex items-center cursor-pointer'> 
                            <Play className="size-6 mr-2" fill="black"/>  Play
                        </Link>

                        <Link href={watchLink} className='bg-gray-500/70 hover:bg-gray-500 text-white font-bold py-2 px-4 rounded mr-4 flex items-center'> 
                            <Info className="size-6 mr-2" />  More info
                        </Link>
                    </div>
                </div>
            </div>

        </>
    )
}