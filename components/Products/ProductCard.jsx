
import {
    MagnifyingGlass,
    Heart,
    Star
} from "@/icons";
import Image from "next/image";
import Link from "next/link";
import AddToCartButton from "../AddToCartButton";
import { auth } from "@/auth";
import { getUserByEmail } from "@/database/queries";
import { getDictionary } from "@/app/[lang]/dictionaries";

export async function ProductCard({ product, lang }) {
    const dictionary = await getDictionary(lang);
    const session = await auth();
    let loggedInUser = {};
    if (session) {
        loggedInUser = await getUserByEmail(session?.user?.email);
    }

    return (

        <>
            <div className="bg-white shadow rounded overflow-hidden group">
                <div className="relative">
                    <Image
                        width={358}
                        height={265}
                        src={product.image}
                        alt="product 1"
                        className="w-full"
                    />
                    <div
                        className="absolute inset-0 bg-black bg-opacity-40 flex items-center 
              justify-center gap-2 opacity-0 group-hover:opacity-100 transition"
                    >
                        <Link
                            href="#"
                            className="text-white text-lg w-9 h-8 rounded-full bg-primary flex items-center justify-center hover:bg-gray-800 transition"
                            title="view product"
                        >
                            {MagnifyingGlass}
                        </Link>
                        <Link
                            href="#"
                            className="text-white text-lg w-9 h-8 rounded-full bg-primary flex items-center justify-center hover:bg-gray-800 transition"
                            title="add to wishlist"
                        >
                            {Heart}
                        </Link>
                    </div>
                </div>
                <div className="pt-4 pb-3 px-4">
                    <Link href={`/${lang}/product/${product.id}`}>
                        <h4 className="uppercase font-medium text-xl mb-2 text-gray-800 hover:text-primary transition">
                            {product.name}
                        </h4>
                    </Link>
                    <div className="flex items-baseline mb-1 space-x-2">
                        <p className="text-xl text-primary font-semibold">${product.price}</p>
                        <p className="text-sm text-gray-400 line-through">${product.original_price}</p>
                    </div>
                    <div className="flex items-center">
                        <div className="flex gap-1 text-sm text-yellow-400">
                            <span>
                                {Star}
                            </span>
                            <span>
                                {Star}
                            </span>
                            <span>
                                {Star}
                            </span>
                            <span>
                                {Star}
                            </span>
                            <span>
                                {Star}
                            </span>
                        </div>
                        <div className="text-xs text-gray-500 ml-3">({product.rating})</div>
                    </div>
                </div>





                {
                    session ? (<AddToCartButton userId={loggedInUser.id} productId={product.id}
                        classNames="block w-full py-1 text-center text-white bg-primary border border-primary rounded-b hover:bg-transparent hover:text-primary transition"
                    >
                        {dictionary.Add_To_Cart}
                    </AddToCartButton>) : (
                        <Link
                            href="/login"
                            className="block w-full py-1 text-center text-white bg-primary border border-primary rounded-b hover:bg-transparent hover:text-primary transition"
                        >
                            {dictionary.Add_To_Cart}
                        </Link>
                    )
                }



            </div>
        </>)
}