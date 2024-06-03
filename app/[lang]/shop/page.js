import SideBar from "@/components/AsideBar";
import CopyRight from "@/components/CopyRight";
import Footer from "@/components/Footer";
import Header from "@/components/Header";
import NavBar from "@/components/Navbar";
import { ProductCard } from "@/components/Products/ProductCard";
import SideDrawer from "@/components/SideDrawer";
import { findProductsBySearchTerm, getAllProducts } from "@/database/queries";
import { ChevronRight, House } from "@/icons";
import Link from "next/link";

export const metadata = {
    title: "LWSKART Ecommerce - Shop Page",
    description: "Generated by create next app",
};



const refineCategory = (category) => {
    const decodedCategory = decodeURI(category);
    if (decodedCategory === 'undefined') {
        return "";
    }
    return decodedCategory;
}


export default async function ShopPage({
    searchParams: { search, category, minPrice, maxPrice, size },
    params: { lang }
}) {
    const categories = refineCategory(category)

    // const products = await findProductsBySearchTerm(search);
    const allProducts = await getAllProducts(search, categories, minPrice, maxPrice, size);

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
                    <p className="text-gray-600 font-medium">Shop</p>
                </div>
                {/* breadcrumb */}


                <>
                    {/* shop wrapper */}
                    <div className="container grid md:grid-cols-4 grid-cols-2 gap-6 pt-4 pb-16 items-start">
                        {/* sidebar */}

                        <SideDrawer />
                        {/* sidebar */}
                        <div className="col-span-1 bg-white px-4 pb-6 shadow rounded overflow-hiddenb hidden md:block">
                            <SideBar lang={lang} />
                        </div>
                        {/* products */}
                        <div className="col-span-3">
                            <div className="grid md:grid-cols-3 grid-cols-2 gap-6">
                                {
                                    allProducts.length > 0 ? allProducts.map(product => (
                                        <ProductCard key={product.id} product={product} lang={lang} />
                                    )) : (<p>No Product found</p>)
                                }
                            </div>
                        </div>
                        {/* products */}
                    </div>
                    {/* shop wrapper */}
                </>


            </main>

            <Footer lang={lang} />
            <CopyRight lang={lang} />
        </>

    );
}