"use server"
import { removeUserToken } from "@/utils/helpers/jwt";

export default async function logout () {
    
    await removeUserToken()

    return

}