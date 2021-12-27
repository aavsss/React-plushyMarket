import React from "react";
// Images
import HeroImg from "../images/bear.jpg";
// Components
import HeroImage from "./HeroImage";

const Home = () => {
    return (
        <>
            <HeroImage image={HeroImg}/>
        </>
    )
}

export default Home;