"use server"

import { cookies } from "next/headers"



export const setContentTypeCookie = async(contentType: ContentType)=>{

    const cookieStore = await cookies()
    cookieStore.set('content', contentType, {path: '/'})

    return
}