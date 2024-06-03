import CopyRight from "@/components/CopyRight";
import Footer from "@/components/Footer";
import Header from "@/components/Header";
import NavBar from "@/components/Navbar";
import ProductSection from "@/components/Products";
import ProductThumbNailCarousel from "@/components/Products/productThumbNailCarousel";
import ProductDetails from "@/components/Products/productdetails";
import { findProductById, findRelatedProducts } from "@/database/queries";
import { ChevronRight, House } from "@/icons";
import Link from "next/link";
import { getDictionary } from "../../dictionaries";

export async function generateMetadata({ params: { productId } }) {
    const product = await findProductById(productId);
    return {
        title: `Lws kart - ${product?.name}`,
        description: product?.short_description,
        openGraph: {
            images: [product?.image],
        },
    };
}




export default async function ProductDetailsPage({ params: { lang, productId } }) {
    const dictionary = await getDictionary(lang);

    const product = await findProductById(productId);

    const relatedProducts = await findRelatedProducts(productId)

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
                    <p className="text-gray-600 font-medium">Product Details Page</p>
                </div>
                {/* breadcrumb */}



                {/* product-detail */}

                <div className="container grid grid-cols-2 gap-6">
                    <div>
                        <ProductThumbNailCarousel product={product} lang={lang} />
                    </div>
                    <ProductDetails product={product} lang={lang} />
                </div>
                {/* product-detail */}


                {/* description */}
                <div className="container pb-16 pt-16">
                    <h3 className="border-b border-gray-200 font-roboto text-gray-800 pb-3 font-medium">
                        {dictionary.Product_Details}
                    </h3>
                    <div className="w-3/5 pt-6">
                        <div className="text-gray-600">

                            <p>
                                {product.long_description}
                            </p>

                        </div>
                    </div>
                </div>
                {/* description */}

                {/*related product */}
                <ProductSection SectionHeading={`${dictionary.Related_Products}`} products={relatedProducts} lang={lang} />
                {/*related product */}

            </main>

            <Footer lang={lang} />
            <CopyRight lang={lang} />
        </>

    );
}
