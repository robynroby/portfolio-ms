"use clients";

import { PiCaretLeftBold, PiCaretRightBold } from "react-icons/pi";
import { useSwiper } from "swiper/react";


const WorkSliderBtns = (containerStyles, btnStyles, iconsStyles) => {

    const swiper = useSwiper();

    return (
        <div className="flex gap-2 absolute right-0 bottom-[calc(50%_-_22px)] xl:bottom-0 z-20 w-full justify-between xl:w-max xl:justify-none">
            <button className="bg-accent hover:bg-accent-hover text-primary text-[22px] w-[44px] flex justify-center items-center transition-all" onClick={() => swiper.slidePrev()}>
                <PiCaretLeftBold className={iconsStyles} />
            </button>
            <button className="bg-accent hover:bg-accent-hover text-primary text-[22px] w-[44px] flex justify-center items-center transition-all p-2" onClick={() => swiper.slideNext()}>
                <PiCaretRightBold className={iconsStyles} />
            </button>
        </div>
    )
}

export default WorkSliderBtns