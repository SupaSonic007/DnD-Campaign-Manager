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
    if (!name || !url) console.error("Must provide character name and url")
    if (currentUser) await addChar(currentUser, name, url)
    else {console.error("Must be logged in to use this feature")}

    return
}