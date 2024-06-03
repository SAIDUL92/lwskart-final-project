"use client"
import React, { useRef, useState } from 'react';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/free-mode';
import 'swiper/css/navigation';
import 'swiper/css/thumbs';
// import required modules
import { FreeMode, Navigation, Thumbs } from 'swiper/modules';

import Image from "next/image";

export default function ProductThumbNailCarousel({ product }) {
    const [thumbsSwiper, setThumbsSwiper] = useState(null);
    return (

        <>

            <Swiper
                style={{
                    '--swiper-navigation-color': '#fd3d57',
                    '--swiper-pagination-color': '#fd3d57',
                }}
                spaceBetween={10}
                navigation={true}
                thumbs={{ swiper: thumbsSwiper }}
                modules={[FreeMode, Navigation, Thumbs]}
                className="mySwiper2"
            >

                {
                    product.gallery_images.length > 0 ? product.gallery_images.map(gallery_image => (
                        <SwiperSlide key={crypto.randomUUID()}>
                            <Image
                                src={gallery_image}
                                width={740}
                                height={548}
                                alt="product"
                                className="w-full"
                            />
                        </SwiperSlide>
                    )) : <p>No Imagefound for gallery</p>
                }

            </Swiper>


            <Swiper
                onSwiper={setThumbsSwiper}
                spaceBetween={16}
                slidesPerView={5}
                freeMode={true}
                watchSlidesProgress={true}
                modules={[FreeMode, Navigation, Thumbs]}
                className="mySwiper mt-4"
            >
                {
                    product.gallery_images.length > 0 ? product.gallery_images.map((gallery_image) => (
                        <SwiperSlide key={crypto.randomUUID()}>
                            <Image
                                src={gallery_image}
                                width={133}
                                height={99}
                                alt="product2"
                                className="w-full"
                            />
                        </SwiperSlide>
                    )) : <p>No Imagefound for gallery</p>
                }


            </Swiper>
        </>
    )
}

