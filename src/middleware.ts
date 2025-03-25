import { NextRequest, NextResponse } from "next/server"
// import { getServerSession } from "next-auth"
// import { authOptions } from "./lib/auth-options"
import { getToken } from "next-auth/jwt"


export const middleware = async(req: NextRequest)=>{


    const publicRoutes = ["/signin", "/signup"]

    const protectedRoutes = ['/authonly', '/home']

    const path = req.nextUrl.pathname 
    // console.log(path);


    if (
        path !== "/" && //$ If I did not include this the user would not go through cookie shack for their content type.
        !publicRoutes.includes(path) &&
        !protectedRoutes.includes(path)
    ) {
        return NextResponse.next();
      }
    
    

    const token = await getToken({req, secret: process.env.NEXTAUTH_SECRET})  //$ "getServerSession()" doesn't work here, use "getToken()".

    if(publicRoutes.includes(path) && token){

        return NextResponse.redirect(new URL('/', req.nextUrl))
    }

    if(protectedRoutes.includes(path) && !token){
        
        return NextResponse.redirect(new URL('/signup', req.nextUrl))
    }

    //$ This guy will make sure that even though the user is visiting "/", the request will be rewritten to "/home" but they'll still be seeing the same URL. Behind, the server will be reWRITING the request to another URL without the user even noticing.

    const contentType = req.cookies.get('content')?.value || 'movie' // "tv" OR "movie"
    if(path === "/" && token){
        return NextResponse.rewrite(new URL('/home/' +  contentType, req.nextUrl))
    }

    //$ The middleware rewrites it internally to /home/movie, but it never sends a redirect status (like 302 or 307).

    //$ The browser receives the HTML/CSS/JS from /home/movie, but still sees / in the address bar.

    //$ Network tab in DevTools will show:

        //$ Only a request to /

        //$ No redirect



    return NextResponse.next()
}