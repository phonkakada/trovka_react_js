import React , {useState} from "react"
import NumberToK from "../../assets/NumberToK"
import DisplayFullImage from "../../components/display_image_full"

const DisplayAllLiked = ({ profile }) => {
    let arr = []
    let Posts = 10

    for (let i = 0; i < Posts; i++) {
        arr.push(<Likes Profile={profile} />)
    }

    return (
        <>
            <p className="text-blue-500 text-3xl font-bold ml-7 mt-5">Liked</p>
            <center>

                <div className="w-[350px] h-[400px] sm:w-[500px] sm:h-[650px] md:w-[800px] md:h-[900px] xl:w-[1080px] xl:h-[1080px]">
                    {arr}
                </div>
            </center>
        </>
    )
}

const Likes = ({ Profile }) => {
    let Images = [
        "https://nhaquanly.vn/uploads/2020/06/06/v9GNb9dVlexus-lx-570-supper-sport-oto-com-vn-72-455f.jpg",
        "https://enygqau86od.exactdn.com/wp-content/uploads/2022/10/lexus-lx-570-2021-for-rent-in-dubai-g16.jpg?strip=all&lossy=1&resize=900%2C600&ssl=1",
        "https://dashboard.kaiandkaro.com/media/vehicles/images/WhatsApp_Image_2022-11-15_at_11.01.52.jpeg",
        "https://images.squarespace-cdn.com/content/v1/5a09a654e5dd5bcfe00c5f3a/1610614207417-A1PJSIFTKW067E1PJW1N/Photo+11-01-2021%2C+4+34+06+PM.jpg?format=1000w",
    ]
    let Name = "PHON KAKADA"
    let Date = "2023-09-20"
    let AnotherImage = Images.length - 3
    let arr = []
    let TotalLikes = 20000
    let TotalUnlikes = 500
    let TotalComments = 100
    let TotalShares = 100

    let Make = "Lexus"
    let Model = "LX 570"
    let Price = 270000
    let Hp = 383
    let CC = 5700
    let Year = 2022
    let Color = "White"
    let Tax = "Tax Paper"

    const [Display, setDisplay] = useState(false);


    return (
        <>
            <div className="h-full w-full flex mt-14 ">
                <div className="w-[90%] h-full">
                    <div className="w-full flex h-[15%] items-center">

                        <div className="w-full flex h-[15%] items-center">
                            <div className="w-[13%] h-[0] pb-[13%] md:w-[90px] md:pb-[90px] relative rounded-full bg-black overflow-hidden">
                                <div className="absolute inset-0">
                                    <img
                                        className="w-full h-full object-cover rounded-full"
                                        src={Profile}
                                        alt="Profile"
                                    ></img>
                                </div>
                            </div>

                            <div className="items-center text-start ml-[4%] text-sm md:text-base xl:text-2xl">
                                <p className="font-semibold">{Name}</p>
                                <p className="font-extralight">{Date}</p>
                            </div>
                        </div>
                       
                    </div>
                    <div className="w-full h-[45%] ">
                        <img className="max-h-full max-w-full h-full w-full object-cover" src={Images[0]}></img>

                    </div>
                    <div className="w-full h-[25%] mt-2 flex">
                        <div className="h-full w-[49%] ">
                            <img className="max-h-full max-w-full h-full w-full m-auto object-cover" src={Images[1]}></img>
                        </div>
                        <div className="h-full w-[49%] " onClick={(e) => <DisplayFullImage ListImages={Images} Start={2} />}>
                            <img className="max-h-full max-w-full h-full w-full m-auto object-cover ml-[4%]" src={Images[2]}></img>
                            <p className="text-yellow-500 text-4xl mt-[-45%] ">+{AnotherImage}</p>

                        </div>
                    </div>
                    <div className="w-full h-[15%]">
                        <div className="text-start text-4xl flex justify-between">
                            <p className="text-base font-semibold text-slate-500">{Make} {Model}</p>
                            <p className=" text-base font-semibold text-blue-500">{Price} $</p>
                        </div>
                        <ul className="text-start flex justify-between font-light text-sm md:text-xl">
                            <div>
                                <li>HP: {Hp}</li>
                                <li>CC: {CC}</li>
                                <li>Tax: {Tax}</li>
                            </div>
                            <div className="text-start">
                                <li>Year: {Year}</li>
                                <li>Color: {Color}</li>
                            </div>
                            <div>

                            </div>
                        </ul>
                    </div>
                </div>
                <div className="mt-[10%] text-center w-[10%] ml-2 h-full ">
                    <ul className="text-[90%] text-blue-500 h-[80%] w-full flex flex-col justify-evenly top-10 sm:text-2xl">
                        <li><i class="fa-regular fa-thumbs-up"></i><p className="text-[90%] font-light">{NumberToK(TotalLikes)}</p></li>
                        <li><i class="fa-regular fa-thumbs-down"></i><p className="text-[90%] font-light">{NumberToK(TotalUnlikes)}</p></li>
                        <li><i class="fa-regular fa-comment"></i><p className="text-[90%] font-light">{NumberToK(TotalComments)}</p></li>
                        <li><i class="fa-solid fa-share"></i><p className="text-[90%] font-light">{NumberToK(TotalShares)}</p></li>
                    </ul>
                </div>
            </div>
            <hr className="mt-14 md:mt-5 xl:mt-10"></hr>
        </>
    )
}

export default DisplayAllLiked
