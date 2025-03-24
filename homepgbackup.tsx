

// import { useSession } from "next-auth/react";
// import CircleLoader from "./components/circle-loader";
import { redirect } from "next/navigation";
// import AuthScreen from "../components/AuthScreen";
// import HomeScreen from "./test-home/HomeScreen";
import { getServerSession } from "next-auth";


export default async function HomePage ()  {


	const session = await getServerSession()	
	

	//$ Even though I love how the spinner looks I turned this into a server component and it actually loads a lot faster.

	if(session){
		//* As far as I am experimenting, I do need to redirect to the /watch page if I want it to be fully static. It is going to be revalidating every ten seconds.
		// return <HomeScreen />
		//* If I wanted to make it intoa returned component, The component could not be static because next JS understand that in this page we need to check for the session on demand when someone visits it.
		redirect('/watch')
		//$ Wrap the auth screen with the cover image.
		
		
		
		
	} else{
		// return <AuthScreen></AuthScreen>
		redirect('/join')
			
	}
};


