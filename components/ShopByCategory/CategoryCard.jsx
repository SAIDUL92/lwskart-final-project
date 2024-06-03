import Image from "next/image";
import Link from "next/link";

export default function CategoryCard({ category,lang }) {
    const encodedCategory = encodeURIComponent(category.name);
    return (
        <>
            <div className="relative rounded-sm overflow-hidden group">
                <Image
                    width={493}
                    height={308}
                    src={category.image}
                    alt="category 1"
                    className="w-full"
                />
                <Link
                    href={`/${lang}/shop/${encodedCategory}`}
                    className="absolute inset-0 bg-black bg-opacity-40 flex items-center justify-center text-xl text-white font-roboto font-medium group-hover:bg-opacity-60 transition"
                >
                    {category.name}
                </Link>
            </div>
        </>
    )
}