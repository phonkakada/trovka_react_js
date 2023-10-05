import React, { useEffect, useState } from "react";
import SimpleImageSlider from "react-simple-image-slider";
import AdvertisementListImage from "../api/Advertisement/get_Advertisement";

const Advertisement =  () => {

    let [sliderImages , setsliderImages] = useState([]);
     
    useEffect(() => {
        const GetData = async () => {
           setsliderImages(await AdvertisementListImage())
        }
    
            GetData();
    } , [])
    
    const ImageLength = sliderImages.length;
    return (
        <>
            {ImageLength !== 0 && <div className="text-center flex justify-center">
                <div className="bg-blue-300 overflow-hidden">
                    <AdvertisementSlider sliderImages={sliderImages} />
                </div>
            </div>}
        </>
    )
}


const AdvertisementSlider = ({ sliderImages }) => {

    return (
        <div className="w-full h-full">
            <div className="block md:hidden">
                <SimpleImageSlider
                    autoPlay={true}
                    width={350}
                    height={200}
                    images={sliderImages}
                    showNavs={true}
                    slideDuration={1}
                />
            </div>
            <div className="hidden md:block ">
                <SimpleImageSlider
                    autoPlay={true}
                    width={550}
                    height={300}
                    images={sliderImages}
                    showNavs={true}
                    slideDuration={1}
                />
            </div>
        </div>
    );
}

export default Advertisement