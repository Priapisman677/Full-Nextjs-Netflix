/// This page is static (TThere is no question about it, it is marked as static).
/// However, it is going to be revalidated every ten seconds (up to several minutes in production).
/// This is the revalidating behavior:
    /// When it is time to revalidate, the page will not be built in the background, there is no automation, it will not be until a user requests this page that it will trigger the revalidation.
    /// The user might notice some flickering.
    /// We could enable some auto-job, but that is not currently my goal and would need more research.

import HeroSection from "@/components/server-components/HomeHeroSection";
import HomeSlider from "@/components/server-components/HomeSliders";


//$ Even though the page is revalidating, this log only happens 2 times in the lifetime of the server (during build):
console.log('Rund npm run build and check I log! - HOME');



export const dynamic = 'force-static'
// ⬆️⬆️⬆️⬆️⬆️⬆️⬆️⬆️⬆️⬆️⬆️⬆️⬆️⬆️⬆️


//$ I believe as long as we are revalidating with a fetch request there is no need to revalidate here.
// export const revalidate = 100000000



interface Props {
    params: Promise<{type: ContentType | undefined}> 
}

export default async function HomeScreen({params}: Props) {

    const {type: contentType} =  await params  
    console.log('CONTENT TYPE:   ',  contentType);

    

    return (
        <>    
            <HeroSection contentType={contentType || 'movie'}></HeroSection>
            <div className="flex flex-col gap-10 bg-black py-10">
                <HomeSlider contentType={contentType || 'movie'}></HomeSlider>
            </div>
        </>
    )
}

export const generateStaticParams = ()=>{

    return [{type: 'movie'}, {type: 'tv'}]    

}

