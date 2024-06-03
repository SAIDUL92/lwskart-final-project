
import { ProductCard } from "./ProductCard";

export default async function ProductSection({ SectionHeading, products, lang }) {

    return (
        <>
            {/* new arrival */}
            <div className="container pb-16">
                <h2 className="text-2xl font-medium text-gray-800 uppercase mb-6">
                    {SectionHeading}
                </h2>
                <div className="grid grid-cols-1 md:grid-cols-4 gap-6">

                    {
                        products.length > 0 ? products.map(product => (
                            <ProductCard key={crypto.randomUUID()} product={product} lang={lang} />
                        )) : (<p>No Product found</p>)
                    }

                </div>
            </div>
            {/* new arrival */}
        </>

    )
}