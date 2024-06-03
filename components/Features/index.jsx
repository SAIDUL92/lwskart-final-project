import Image from "next/image";
import FeaturesCard from "./FeaturesCard";
import { getDictionary } from "@/app/[lang]/dictionaries";

export default async function Features({ lang }) {
    const dictionary = await getDictionary(lang);
    return (
        <>
            {/* features */}
            <div className="container py-16">
                <div className="w-10/12 grid grid-cols-1 md:grid-cols-3 gap-6 mx-auto justify-center">
                    <FeaturesCard>
                        <Image
                            width={48}
                            height={48}
                            src="/assets/images/icons/delivery-van.svg"
                            alt="Delivery"
                            className="w-12 h-12 object-contain"
                        />
                        <div>
                            <h4 className="font-medium capitalize text-lg">{dictionary.Free_Shipping}</h4>
                            <p className="text-gray-500 text-sm">{dictionary.Order_over_200}</p>
                        </div>

                    </FeaturesCard>
                    <FeaturesCard>
                        <Image
                            width={48}
                            height={48}
                            src="/assets/images/icons/money-back.svg"
                            alt="Delivery"
                            className="w-12 h-12 object-contain"
                        />
                        <div>
                            <h4 className="font-medium capitalize text-lg">{dictionary.Money_Rturns}</h4>
                            <p className="text-gray-500 text-sm">{dictionary.d30_Days_Money_Rturns}</p>
                        </div>

                    </FeaturesCard>
                    <FeaturesCard>
                        <Image
                            width={48}
                            height={48}
                            src="/assets/images/icons/service-hours.svg"
                            alt="Delivery"
                            className="w-12 h-12 object-contain"
                        />
                        <div>
                            <h4 className="font-medium capitalize text-lg">{dictionary.Support_24_7}</h4>
                            <p className="text-gray-500 text-sm">{dictionary.Customer_Support}</p>
                        </div>

                    </FeaturesCard>
                </div>
            </div>
            {/* features */}
        </>

    )
}