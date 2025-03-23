import { authOptions } from "@/lib/auth-options";
import { getServerSession } from "next-auth"



export default async function NewPage() {

    const session = await getServerSession(authOptions)

    if(session){
        console.log({sessionAuthOnly: session});
        
    } else {
        console.log('bad');
        
    }

    return (
        <div>NewPage</div>
    )
}