
// import { useSession } from "next-auth/react";
// import CircleLoader from "./components/circle-loader";
import HomeScreen from "./HomeScreen/page";
import AuthScreen from "./AuthScren/page";
import { getServerSession } from "next-auth";


export default async function HomePage ()  {


	const session = await getServerSession()	
	

	//$ Even though I love how the spinner looks I turned this into a server component and it actually loads a lot faster.
	// if(status === "loading") return (
	// 	<div className="h-screen bg-black">
	// 		<CircleLoader></CircleLoader>
	// 	</div>
	// )

	return( 
							//$ Wrap the off screen with the cover image.
  	  <> 
	  	{session ? <HomeScreen /> : <div className="h-screen hero-bg"><AuthScreen /></div>}
	</>
	)
};


