'use client'
import { signOut } from "next-auth/react"
const Logout = ({ dictionary }) => {
    return (
        <button
            className="bg-primary border border-primary text-white px-8 py-3 font-medium rounded-md hover:bg-transparent hover:text-primary"
            onClick={() => {
                signOut({ callbackUrl: "http://localhost:3000/login" })
            }}
        >{dictionary.Sign_Out}</button>
    )
}

export default Logout