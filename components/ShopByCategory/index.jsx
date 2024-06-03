import { getDictionary } from "@/app/[lang]/dictionaries";
import CategoryCard from "./CategoryCard";

export default async function ShopByCategories({ categories, lang }) {
    const dictionary = await getDictionary(lang);
    return (
        <>
            {/* categories */}
            <div className="container py-16">
                <h2 className="text-2xl font-medium text-gray-800 uppercase mb-6">
                    {dictionary.SHOP_BY_CATEGORY}
                </h2>
                <div className="grid grid-cols-3 gap-3">

                    {categories.length >= 0 ? categories.map(category => (
                        <CategoryCard key={crypto.randomUUID()} category={category} lang={lang} />
                    )) : (<p>No Categories found</p>)}

                </div>
            </div>
            {/* categories */}
        </>

    )
}