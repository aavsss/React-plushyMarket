import React from 'react'
// styles
import { Wrapper, Inner } from './Carousel.styles'
// images
import Autumn from '../../images/autumn.png';
import { ArrowBackIos, ArrowForwardIos } from '@material-ui/icons';
// hook
import useCarousel from './useCarousel';
// components
import HeroImage from '../HeroImage';


const Carousel = ({ items }) => {

    const { currImgIndex, handleLeftClick, handleRightClick } = useCarousel(items);

    return (
        <Wrapper>
            <Inner image={items[currImgIndex].imageUrl}>
                <div className='left' onClick={handleLeftClick} >
                    <ArrowBackIos />
                </div>
                <div className='center'>
                    <HeroImage
                        image={items[currImgIndex].imageUrl}
                        title={items[currImgIndex].name}
                        text={items[currImgIndex].description}
                    />
                </div>
                <div className='right' onClick={handleRightClick}>
                    <ArrowForwardIos />
                </div>
            </Inner>
        </Wrapper>
    )
}

export default Carousel;