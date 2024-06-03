"use client";
import { useEffect, useState } from "react";
import {
    FacebookShareButton,
    TwitterShareButton,
    InstapaperShareButton,
    FacebookIcon,
    InstapaperIcon,
    XIcon
} from "react-share";

export default function SocialShare({ title }) {
    const [currentUrl, setCurrentUrl] = useState("");

    useEffect(() => {
        setCurrentUrl(window.location.href);
    }, []);

    return (
        <>

            <FacebookShareButton url={currentUrl} quote={title}>
                <FacebookIcon size={30} round />
            </FacebookShareButton>

            <TwitterShareButton url={currentUrl} quote={title}>
                <XIcon size={30} round />
            </TwitterShareButton>

            <InstapaperShareButton url={currentUrl} quote={title}>
                <InstapaperIcon size={30} round />
            </InstapaperShareButton>



        </>
    );
}
