import React from 'react';
import Slider from 'react-slick';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const SlideLogo = () => {
    let settings = {
        autoplay: true,
        dots: false,
        infinite: true,
        speed: 500,
        slidesToShow: 3,
        slidesToScroll: 1
    };
    let Image = [
        "https://global.toyota/pages/global_toyota/mobility/toyota-brand/emblem_ogp_001.png",
        "https://resource.digitaldealer.com.au/image/1027481236616752b23efde453431830_0_0.png",
        "https://upload.wikimedia.org/wikipedia/commons/thumb/f/f4/BMW_logo_%28gray%29.svg/2048px-BMW_logo_%28gray%29.svg.png",
    ]

    return (
        <Slider {...settings}>
            {Image.map((item, index) => (
                <div key={index} className=' relative w-24 h-24'>
                    <div className='absolute inset-0'>
                        <img className='max-h-full object-scale-down max-w-full h-full w-full' src={item} key={index}></img>
                    </div>
                </div>
            ))}
        </Slider>
    );
}

export default SlideLogo