import { NextRequest, NextResponse } from "next/server"
// import { getServerSession } from "next-auth"
// import { authOptions } from "./lib/auth-options"
import { getToken } from "next-auth/jwt"


export const middleware = async(req: NextRequest)=>{

    //! This would normally be an action to my own server but if I'm using express that would be doing a double requests.

    const publicRoutes = ["/signin", "/signup"]

    const protectedRoutes = ['/authonly']

    const path = req.nextUrl.pathname 
    
    
    if(!publicRoutes.includes(path) && !protectedRoutes.includes(path)){
        return NextResponse.next()
    }

    // const session = await getServerSession(authOptions)
    // const session = true
    const token = await getToken({req, secret: process.env.NEXTAUTH_SECRET})  //$ "getServerSession()" doesn't work here, use "getToken()".

    if(publicRoutes.includes(path) && token){
        return NextResponse.redirect(new URL('/', req.nextUrl))
    }

    if(protectedRoutes.includes(path) && !token){
        return NextResponse.redirect(new URL('/signup', req.nextUrl))
    }

    return NextResponse.next()
}