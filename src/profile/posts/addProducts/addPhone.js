import React, { useState } from "react"
import InputValue from "../components/input_value";
import DropdownMenu from "../../../components/downDownMenu";
import { CarCategories, Categories, LaptopCategories, MotorCategory, PhoneCategory, chairs, fuels, generateArrayOfYears, tax_types, touch_screens, transmissions, used, warrantys } from "../../../assets/categories";

const PostPhone = ({ fromData }) => {

    const [make, setmake] = useState(PhoneCategory[0])
    const [othermake, setothermake] = useState('')
    const [model, setmodel] = useState('')
    const [price, setprice] = useState('')
    const [year, setyear] = useState(generateArrayOfYears()[0])
    const [color, setcolor] = useState('')
    const [warranty, setwarranty] = useState(warrantys()[12])
    const [ram, setram] = useState('')
    const [cpu, setcpu] = useState('')
    const [gpu, setgpu] = useState('')
    const [use, setuse] = useState(used[1])
    const [storage, setStorage] = useState()
    const [watt, setWatt] = useState('')
    const [rear_camera, setrear_camera] = useState('')
    const [battery, setbattery] = useState('')
    const [front_camera, setfront_camera] = useState('')
    const [screen, setScreen] = useState('')
    const [touch_screen, settouch_Screen] = useState(touch_screens[1])
    fromData.append('model', model)
    fromData.append('make', make? make : othermake)
    fromData.append('warranty', warranty)
    fromData.append('year', year)
    fromData.append('used', used)
    fromData.append('watt', watt)
    fromData.append('ram', ram)
    fromData.append('cpu', cpu)
    fromData.append('battery', battery)
    fromData.append('rear_camera', rear_camera)
    fromData.append('gpu', gpu)
    fromData.append('storage', storage)
    fromData.append('front_camera', front_camera)
    fromData.append('screen', screen)
    fromData.append('color', color)
    fromData.append('price', price)
    fromData.append('touch_screen', touch_screen)
    return (
        <>
            <div className="w-full h-full">

                <div className="mt-4"> <p>Make <span className="italic text-xs"> *(Required)</span></p><DropdownMenu arrayData={PhoneCategory} setValue={setmake} defaultValue={make} /></div>
                <div >{make === PhoneCategory[PhoneCategory.length - 1] && <InputValue setValue={setothermake} type={' Make'} />}</div>

                <div ><InputValue setValue={setmodel} type={' Model'} required={true} /></div>
                <div className="md:flex">
                    <div className="md:w-1/2 mt-4"><InputValue setValue={setprice} type={' Price'} required={true} /></div>
                    <div className="md:w-1/2 mt-4 md:ml-2" ><p>Year<span className="italic text-xs"> *(Required)</span></p><DropdownMenu defaultValue={year} setValue={setyear} arrayData={generateArrayOfYears()} /></div>
                </div>
                <div className=" md:flex">
                    <div className="md:w-1/2 mt-4" ><p>Used<span className="italic text-xs"> *(Required)</span></p><DropdownMenu defaultValue={use} setValue={setuse} arrayData={used} /></div>
                    <div className="md:w-1/2 mt-4 md:ml-2" ><p>Warranty<span className="italic text-xs"> *(Required)</span></p><DropdownMenu defaultValue={warranty} setValue={setwarranty} arrayData={warrantys()} /></div>
                </div>

                <div className="md:flex mt-4">

                    <div className="md:w-1/2" ><InputValue setValue={setStorage} type={' Storage (Gigabyte)'} /></div>
                    <div className="md:w-1/2 md:ml-2 mt-4 md:mt-0">
                        <div className="" ><InputValue setValue={setram} type={' Ram (Gigabyte)'} /></div>
                    </div>
                </div>
                <div className="mt-4 md:flex justify-between">
                    <div className="md:w-1/2" ><InputValue setValue={setcpu} type={' CPU'} /></div>
                    <div className="md:w-1/2 mt-4 md:mt-0 md:ml-2" ><InputValue setValue={setgpu} type={' GPU'} /></div>
                </div>

                <div className="mt-4 md:flex justify-between">
                    <div className="md:w-1/2" ><InputValue setValue={setrear_camera} type={' Rear Camera (Watt)'} /></div>
                    <div className="md:w-1/2 mt-4 md:mt-0 md:ml-2" ><InputValue setValue={setfront_camera} type={' Front Camera'} /></div>
                </div>
                <div className="md:flex mt-4 justify-between">
                    <div className="w-full" ><InputValue setValue={setWatt} type={'Power (Watt)'} /></div>
                </div>
                <div className="md:flex mt-4 justify-between">
                    <div className="md:w-1/2" ><InputValue setValue={setScreen} type={' Screen (Inch)'} /></div>
                    <div className="md:w-1/2 mt-4 md:mt-0 md:ml-2" ><InputValue setValue={setcolor} type={' Color'} /></div>
                </div>
                <div className="mt-4">
                    <p>Touch Screen</p>
                    <DropdownMenu defaultValue={touch_screen} setValue={settouch_Screen} arrayData={touch_screens} />
                </div>

            </div>
        </>
    )
}

export default PostPhone