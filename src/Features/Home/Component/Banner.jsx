import React from 'react';
import Banner1 from '../../../Assets/images/banner/1_1.jpg';
import Banner2 from '../../../Assets/images/banner/1_2.jpg';
import SliderShow from './SliderShow';
const Banner = () => {
    return (
        <div className="slider-with-banner">
            <div className="container">
                <div className="row">
                {/* Begin Slider Area */}
                <div className="col-lg-8 col-md-8">
                    <SliderShow />
                </div>
                {/* Slider Area End Here */}
                {/* Begin Li Banner Area */}
                <div className="col-lg-4 col-md-4 text-center pt-xs-30">
                    <div className="li-banner">
                    <a href="/">
                        <img src={Banner1} alt="1" />
                    </a>
                    </div>
                    <div className="li-banner mt-15 mt-sm-30 mt-xs-30">
                    <a href="/">
                        <img src={Banner2} alt="2" />
                    </a>
                    </div>
                </div>
                {/* Li Banner Area End Here */}
                </div>
            </div>
            </div>

    );
};

export default Banner;