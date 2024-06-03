import { getDictionary } from "@/app/[lang]/dictionaries";
import Link from "next/link";

export default async function Banner({ lang }) {
    const dictionary = await getDictionary(lang);
    return (
        <>
            {/* banner */}
            <div
                className="bg-cover bg-no-repeat bg-center py-36"
                style={{ backgroundImage: 'url("assets/images/banner-bg.jpg")' }}
            >
                <div className="container">
                    <h1 className="text-6xl text-gray-800 font-medium mb-4 capitalize font-roboto">
                        {dictionary.HomeBannerTitleLine1} <br /> {dictionary.HomeBannerTitleLine2}
                    </h1>
                    <p>

                        {dictionary.HomeBannerSubTitleLine1}
                    </p>
                    <div className="mt-12">
                        <Link
                            href="#"
                            className="bg-primary border border-primary text-white px-8 py-3 font-medium rounded-md hover:bg-transparent hover:text-primary"
                        >

                            {dictionary.Shop_Now}
                        </Link>
                    </div>
                </div>
            </div>
            {/* banner */}
        </>

    )
}