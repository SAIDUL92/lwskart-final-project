import { auth } from "@/auth";
import { Heart, BagShopping, user } from "@/icons";
import Link from "next/link";
import { getUserByEmail } from "@/database/queries";
import { getDictionary } from "@/app/[lang]/dictionaries";

export default async function Actions({ lang }) {
    const dictionary = await getDictionary(lang);
    const session = await auth();
    let loggedInUser = {};
    if (session) {
        loggedInUser = await getUserByEmail(session?.user?.email);
    }


    return (
        <>
            <div className="flex items-center space-x-6">
                <Link
                    href="/wishlist"
                    className="text-center text-gray-700 hover:text-primary transition relative flex gap-1 items-center"
                >
                    <span className="text-2xl">
                        {Heart}

                    </span>
                    <span className="text-xs leading-3">{dictionary.Wishlist}</span>
                    <span className="absolute right-0 -top-1 w-5 h-5 rounded-full flex items-center justify-center bg-primary text-white text-xs">
                        {
                            session ? (loggedInUser.wishlist.length) : ("0")
                        }
                    </span>
                </Link>
                <Link
                    href="/cart"
                    className="text-center text-gray-700 hover:text-primary transition relative flex gap-1 items-center"
                >
                    <span className="text-2xl">
                        {BagShopping}
                    </span>
                    <span className="text-xs leading-3">{dictionary.Cart}</span>
                    <span className="absolute -right-3 -top-1 w-5 h-5 rounded-full flex items-center justify-center bg-primary text-white text-xs">
                        {
                            session ? (loggedInUser.cart.length) : ("0")
                        }
                    </span>
                </Link>
                <Link
                    href="/my-account"
                    className="text-center text-gray-700 hover:text-primary transition relative flex gap-1 items-center"
                >
                    <span className="text-2xl">
                        {user}
                    </span>
                    <span className="text-xs leading-3">{dictionary.Account}</span>
                </Link>
            </div>
        </>
    )
}