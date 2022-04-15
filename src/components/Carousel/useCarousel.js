import { useState } from "react";

const useCarousel = (items) => {
    const [currImgIndex, setCurrImgIndex] = useState(0);

    const handleLeftClick = () => {
        const index = (currImgIndex - 1) % items.length;
        console.log((currImgIndex - 1), items.length, (currImgIndex - 1) % items.length);
        setCurrImgIndex(Math.abs(index));
    };

    const handleRightClick = () => {
        const index = (currImgIndex + 1) % items.length
        setCurrImgIndex(Math.abs(index));
    }
    return {
        currImgIndex,
        handleLeftClick,
        handleRightClick
    }
}

export default useCarousel;