import React , {useState} from "react"
import InputValue from "../components/input_value";
import DropdownMenu from "../../../components/downDownMenu";
import { CarCategories, Categories, MotorCategory, chairs, fuels, generateArrayOfYears, tax_types, transmissions, used, warrantys } from "../../../assets/categories";

const PostMotor = ({ fromData }) => {

    const [make, setmake] = useState(MotorCategory[0])
    const [othermake, setothermake] = useState('')
    const [model, setmodel] = useState(CarCategories[0])
    const [price, setprice] = useState('')
    const [year, setyear] = useState(generateArrayOfYears()[0])
    const [color, setcolor] = useState('')
    const [warranty, setwarranty] = useState(warrantys()[12])
    const [cc, setcc] = useState('')
    const [use, setuse] = useState(used[1])
    const [transmission , settransmission] = useState(transmissions[0])
    const [tax_type, settax_type] = useState(tax_types[0])
            fromData.append('model' , model)
            fromData.append('make' , make)
            fromData.append('cc' , cc)
            fromData.append('warranty' , warranty)
            fromData.append('year' , year)
            fromData.append('used' , use)
            fromData.append('color' , color)
            fromData.append('price' , price)
            fromData.append('tax_type' , tax_type)
            fromData.append('transmission' , transmission)
    return (
        <>
            <div className="w-full h-full">

                <div className="mt-4"> <p>Make <span className="italic text-xs"> *(Required)</span></p><DropdownMenu arrayData={CarCategories} setValue={setmake} defaultValue={make} /></div>
                <div >{make === CarCategories[CarCategories.length - 1] && <InputValue setValue={setothermake} type={' Make'} />}</div>

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

                    <div className="md:w-1/2" ><InputValue setValue={setcc} type={' CC'} /></div>
                    <div className="md:w-1/2 md:ml-2"><p>Tax Type</p>
                    <DropdownMenu defaultValue={tax_type} arrayData={tax_types} setValue={settax_type} />
                </div>
                </div>

                <div className="mt-4">
                    <p>Transmission</p>
                    <DropdownMenu defaultValue={transmission} arrayData={transmissions} setValue={settransmission} />
                </div>
                <div className="md:flex mt-4 justify-between">

                    <div className="md:w-1/2 md:ml-2" ><InputValue setValue={setcolor} type={' Color'} /></div>
                </div>
            </div>
        </>
    )
}

export default PostMotor