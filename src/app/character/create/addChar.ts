"use server"

import { addChar } from "@/utils/helpers/charHelpers"
import { getCurrentUser } from "@/utils/helpers/jwt"


export default async function addCharFromForm (prevData: any, data: FormData) {
    const name = data.get("name") as string
    const url = data.get("url") as string
    const currentUser = await getCurrentUser()

    console.log(name)
    console.log(url)
    console.log(currentUser)
    if (!name || !url) return {message:"Must provide character name and url"}
    if (!currentUser) return {message:"Must be logged in to use this feature"}
    await addChar(currentUser, name, url)

    return
}