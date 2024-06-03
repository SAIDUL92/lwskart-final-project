import Link from "next/link";
import { Heart, BagShopping, Star } from "@/icons";
import { auth } from "@/auth";
import AddToCartButton from "../AddToCartButton";
import WishlistAddToButton from "../WishlistAddToButton";
import { getUserByEmail } from "@/database/queries";
import QuantityUpdate from "./updateQuantity";
import SocialShare from "../SocialShare";
import { getDictionary } from "@/app/[lang]/dictionaries";

export default async function ProductDetails({ product, lang }) {
    const dictionary = await getDictionary(lang);
    const session = await auth();
    let loggedInUser = {};
    if (session) {
        loggedInUser = await getUserByEmail(session?.user?.email);
    }
    return (


        <>
            <div>
                <h2 className="text-3xl font-medium uppercase mb-2">
                    {product.name}
                </h2>
                <div className="flex items-center mb-4">
                    <div className="flex gap-1 text-sm text-yellow-400">
                        <span>{Star}</span>
                        <span>{Star}</span>
                        <span>{Star}</span>
                        <span>{Star}</span>
                        <span>{Star}</span>
                    </div>
                    <div className="text-xs text-gray-500 ml-3">({product.reviews} Reviews)</div>
                </div>
                <div className="space-y-2">
                    <p className="text-gray-800 font-semibold space-x-2">
                        <span>{dictionary.Availability}: </span>
                        <span className={product.availability ? "text-green-600" : "text-red-600"}>{product.availability ? 'In Stock' : "Out of Stock"}</span>
                    </p>
                    <p className="space-x-2">
                        <span className="text-gray-800 font-semibold">{dictionary.Brand}: </span>
                        <span className="text-gray-600">{product.brand}</span>
                    </p>
                    <p className="space-x-2">
                        <span className="text-gray-800 font-semibold">{dictionary.Category}: </span>
                        <span className="text-gray-600">{product.category}</span>
                    </p>
                    <p className="space-x-2">
                        <span className="text-gray-800 font-semibold">SKU: </span>
                        <span className="text-gray-600">{product.sku}</span>
                    </p>
                </div>
                <div className="flex items-baseline mb-1 space-x-2 font-roboto mt-4">
                    <p className="text-xl text-primary font-semibold">${product.price}</p>
                    <p className="text-base text-gray-400 line-through">${product.original_price}</p>
                </div>
                <p className="mt-4 text-gray-600">
                    {product.short_description}
                </p>
                {/* <div className="mt-4">
                    <h3 className="text-sm text-gray-800 uppercase mb-1">Quantity</h3>
                    <div className="flex border border-gray-300 text-gray-600 divide-x divide-gray-300 w-max">
                        <button className="h-8 w-8 text-xl flex items-center justify-center cursor-pointer select-none">
                            -
                        </button>
                        <span className="h-8 w-8 text-base flex items-center justify-center">
                            4
                        </span>
                        <button className="h-8 w-8 text-xl flex items-center justify-center cursor-pointer select-none">
                            +
                        </button>
                    </div>
                </div> */}

                <QuantityUpdate productId={product.id} userId={loggedInUser.id} dictionary={dictionary} />
                <div className="mt-6 flex gap-3 border-b border-gray-200 pb-5 pt-5">


                    {
                        session ? (
                            <AddToCartButton userId={loggedInUser.id} productId={product.id}

                                classNames="bg-primary border border-primary text-white px-8 py-2 font-medium rounded uppercase flex items-center gap-2 hover:bg-transparent hover:text-primary transition"
                            >
                                {BagShopping} {dictionary.Add_To_Cart}

                            </AddToCartButton>

                        ) : (
                            <Link
                                href="/login"
                                className="bg-primary border border-primary text-white px-8 py-2 font-medium rounded uppercase flex items-center gap-2 hover:bg-transparent hover:text-primary transition"
                            >
                                {BagShopping} {dictionary.Add_To_Cart}
                            </Link>
                        )
                    }





                    {
                        session ? (
                            <WishlistAddToButton userId={loggedInUser.id} productId={product.id}>
                                {Heart} {dictionary.Wishlist}
                            </WishlistAddToButton>

                        ) : (
                            <Link
                                href="/login"
                                className="border border-gray-300 text-gray-600 px-8 py-2 font-medium rounded uppercase flex items-center gap-2 hover:text-primary transition"
                            >
                                {Heart} {dictionary.Wishlist}
                            </Link>
                        )
                    }





                </div>
                <div className="flex gap-3 mt-4">
                    <SocialShare />
                </div>


            </div>
        </>
    )
}