import Image from "next/image";
import Link from "next/link";

export default function AddBanner() {
    return (
        <>
            {/* ads */}
            <div className="container pb-16">
                <Link href="#">
                    <Image src="/assets/images/offer.jpg" alt="ads" className="w-full" width={1504} height={362} />
                </Link>
            </div>
            {/* ads */}
        </>


    )
}