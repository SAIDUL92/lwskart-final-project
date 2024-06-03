import CopyRight from "@/components/CopyRight";
import Footer from "@/components/Footer";
import Header from "@/components/Header";
import NavBar from "@/components/Navbar";
import WishlistCard from "@/components/WishlistCard";
import { ChevronRight, House } from "@/icons";
import Link from "next/link";
import { getDictionary } from "../dictionaries";

export const metadata = {
    title: "Lws kart Whishlist page",
    description: "Generated by create next app",
};

export default async function WishlistPage({ params: { lang } }) {
    const dictionary = await getDictionary(lang);
    return (

        <>
            <Header lang={lang} />
            <NavBar lang={lang} />
            <main>

                {/* breadcrumb */}
                <div className="container py-8 flex items-center gap-3">
                    <Link href="/" className="text-primary text-base">
                        {House}
                    </Link>
                    <span className="text-sm text-gray-400">
                        {ChevronRight}
                    </span>
                    <p className="text-gray-600 font-medium">{dictionary.Wishlist}</p>
                </div>
                {/* breadcrumb */}


                {/* wrapper */}

                <div className="container gap-6 pt-4 pb-16">
                    {/* wishlist */}
                    <div className="mx-auto space-y-4 max-w-6xl">
                        <WishlistCard dictionary={dictionary} />

                    </div>
                    {/* wishlist */}
                </div>


                {/* wrapper */}


            </main>

            <Footer lang={lang} />
            <CopyRight lang={lang} />
        </>

    );
}