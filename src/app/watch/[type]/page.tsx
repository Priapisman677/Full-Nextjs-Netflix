/// This page is static (TThere is no question about it, it is marked as static).
/// However, it is going to be revalidated every ten seconds (up to several minutes in production).
/// This is the revalidating behavior:
    /// When it is time to revalidate, the page will not be built in the background, there is no automation, it will not be until a user requests this page that it will trigger the revalidation.
    /// The user might notice some flickering.
    /// We could enable some auto-job, but that is not currently my goal and would need more research.


//$ Even though the page is revalidating, this log only happens 2 times in the lifetime of the server (during build):
console.log('Rund npm run build and check I log! - HOME');



export const dynamic = 'force-static'
// ⬆️⬆️⬆️⬆️⬆️⬆️⬆️⬆️⬆️⬆️⬆️⬆️⬆️⬆️⬆️


//$ I believe as long as we are revalidating with a fetch request there is no need to revalidate here.
// export const revalidate = 100000000

import Image from "next/image"
import Link from "next/link"
import { Info, Play } from "lucide-react"
import Navbar from "@/components/Navbar"
import { getTrendingMovie } from "@/lib/fetchContent";
// import UrlCleaner from "@/components/UrlCleaner";


function isMovie(content: PopularMovieResult | PopularTvResult): content is PopularMovieResult {
    //$ ✅ How to read it in plain English:
    //$ "If release_date exists in this object, then you can treat it as a MovieObject safely."
    return 'release_date' in content;
  }

interface Props {
    params: Promise<{type: ContentType | undefined}> 
}

export default async function HomeScreen({params}: Props) {

    const {type} =  await params  

    console.log('CONTENT TYPE:   ',  type);
    
    
    
    const {content: trendingContent} = await getTrendingMovie(type)
    // console.log('TRENDING PATH:  ', backdropPath);
    
    const ORIGINAL_IMG_BASE_URL = 'https://image.tmdb.org/t/p/original'
    
    
    const overview = trendingContent.overview.length > 200 ? trendingContent.overview.slice(0, 200) + '...' : trendingContent.overview
    const backdropPath = trendingContent.backdrop_path;
    let title: string;
    let releaseYear: string;
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
                <Navbar contentType={type  || 'movie'} />
                <Image src={ORIGINAL_IMG_BASE_URL + backdropPath} alt={"Hero image"} width={5000} height={5000} className="absolute top-0 left-0 h-full w-full object-cover -z-50"></Image>
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
                        <Link href={'/play/123'} className='bg-white hover:bg-white/80 text-black font-bold py-2 px-4 rounded mr-4 flex items-center cursor-pointer'> 
                            <Play className="size-6 mr-2" fill="black"/>  Play
                        </Link>

                        <Link href={'/play/123'} className='bg-gray-500/70 hover:bg-gray-500 text-white font-bold py-2 px-4 rounded mr-4 flex items-center'> 
                            <Info className="size-6 mr-2" />  More info
                        </Link>
                    </div>
                </div>
            </div>
        </>
    )
}

export const generateStaticParams = ()=>{

    return [{type: 'movie'}, {type: 'tv'}]    

}

