"use client";
import Link from "next/link";
import { login } from "@/actions";
import { useState } from "react";
import { useRouter } from "next/navigation";


export default function LogInForm({ dictionary }) {
    const [error, setError] = useState("");
    const router = useRouter();

    async function onSubmit(event) {
        event.preventDefault();

        try {
            const formData = new FormData(event.currentTarget);
            const response = await login(formData);
            if (!!response.error) {
                setError(response.error);
            } else {
                router.push("/checkout");
            }

        } catch (err) {
            setError(err.message);
        }
    }
    return (
        <>
            <div className="max-w-lg mx-auto shadow px-6 py-7 rounded overflow-hidden">
                {error && (
                    <div className="text-xl text-red-500 text-center">{error}</div>
                )}
                <h2 className="text-2xl uppercase font-medium mb-1">{dictionary.Login}</h2>
                <p className="text-gray-600 mb-6 text-sm">{dictionary.Welcome_Back_Customer}</p>
                <form onSubmit={onSubmit}>
                    <div className="space-y-2">
                        <div>
                            <label htmlFor="email" className="text-gray-600 mb-2 block">
                                {dictionary.Email_Address}
                            </label>
                            <input
                                type="email"
                                name="email"
                                id="email"
                                className="block w-full border border-gray-300 px-4 py-3 text-gray-600 text-sm rounded focus:ring-0 focus:border-primary placeholder-gray-400"
                                placeholder="youremail.@domain.com"
                            />
                        </div>
                        <div>
                            <label htmlFor="password" className="text-gray-600 mb-2 block">

                                {dictionary.Password}
                            </label>
                            <input
                                type="password"
                                name="password"
                                id="password"
                                className="block w-full border border-gray-300 px-4 py-3 text-gray-600 text-sm rounded focus:ring-0 focus:border-primary placeholder-gray-400"
                                placeholder="*******"
                            />
                        </div>
                    </div>
                    <div className="mt-4">
                        <button
                            type="submit"
                            className="block w-full py-2 text-center text-white bg-primary border border-primary rounded hover:bg-transparent hover:text-primary transition uppercase font-roboto font-medium"
                        >

                            {dictionary.Login}
                        </button>
                    </div>
                </form>
                {/* login with */}
                <div className="mt-6 flex justify-center relative">
                    <div className="text-gray-600 uppercase px-3 bg-white z-10 relative">
                        {dictionary.Or_login_with}
                    </div>
                    <div className="absolute left-0 top-3 w-full border-b-2 border-gray-200" />
                </div>
                <div className="mt-4 flex gap-4">
                    <Link
                        href="#"
                        className="w-1/2 py-2 text-center text-white bg-blue-800 rounded uppercase font-roboto font-medium text-sm hover:bg-blue-700"
                    >
                        facebook
                    </Link>
                    <Link
                        href="#"
                        className="w-1/2 py-2 text-center text-white bg-red-600 rounded uppercase font-roboto font-medium text-sm hover:bg-red-500"
                    >
                        google
                    </Link>
                </div>
                {/* login with */}
                <p className="mt-4 text-center text-gray-600">
                    {dictionary.Dont_have_account}
                    <Link href="/register" className="text-primary">
                        {dictionary.Register_now}
                    </Link>
                </p>
            </div>
        </>
    )
}