import { useRef } from "react";

import Video from "../assets/video/hero-video.mp4";

const HeroVideo = () => {
    const videoRef = useRef(null);

    const playVideo = () => {
        if (videoRef.current) {
            videoRef.current.play();
        }
    };
    return (
        <div class="w-screen h-screen overflow-hidden" onClick={playVideo}>
            <video
                ref={videoRef}
                src={Video}
                muted
                loop
                controls={false}
                autoPlay
                className="w-full h-full absolute top-0 left-0 object-cover -z-10"
            ></video>
        </div>
    );
};

export default HeroVideo;
