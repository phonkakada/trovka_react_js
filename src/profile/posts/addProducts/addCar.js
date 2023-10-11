import React , {useState} from "react"
import LocationPicker from "../../../location/location_class"
import DisplayPhonePost from "../components/display_phone";
import HandleAddPhone from "../components/handle_add_phone";
import InputValue from "../components/input_value";
import DropdownMenu from "../../../components/downDownMenu";
import { CarCategories, Categories, chairs, fuels, generateArrayOfYears, tax_types, used, warrantys } from "../../../assets/categories";

const PostCar = ({ setcar, image_products }) => {

    const [make, setmake] = useState(CarCategories[0])
    const [othermake, setothermake] = useState('')
    const [model, setmodel] = useState(CarCategories[0])
    const [price, setprice] = useState('')
    const [year, setyear] = useState(generateArrayOfYears()[0])
    const [color, setcolor] = useState('')
    const [warranty, setwarranty] = useState(warrantys()[12])
    const [hp, sethp] = useState('')
    const [cc, setcc] = useState('')
    const [Location, SetLocation] = useState('')
    const [LocationLink, SetLocationLink] = useState('')
    const [phone_number, setphone_number] = useState([])
    const [fuel, setfuel] = useState(fuels[0])
    const [use, setuse] = useState(used[1])
    const [chair, setchair] = useState(chairs()[7])
    const [tax_type, settax_type] = useState(tax_types[0])
    const car = {
        model: model,
        make: make,
        price: price,
        color: color,
        hp: hp,
        cc: cc,
        chair: chair,
        used: use,
        fuel: fuel,
        tax_type: tax_type,
        locationLink: LocationLink,
        phone_number: phone_number,

    }
    const post = document.getElementById("post_btn")
    if (post) {
        post.addEventListener('click', () => {
            setcar(car)
        })
    }
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
                    <div className="md:w-1/2 mt-4" ><p>Fuel<span className="italic text-xs"> *(Required)</span></p><DropdownMenu defaultValue={fuel} setValue={setfuel} arrayData={fuels} /></div>
                    <div className="md:w-1/2 mt-4 md:ml-2" ><p>Used<span className="italic text-xs"> *(Required)</span></p><DropdownMenu defaultValue={use} setValue={setuse} arrayData={used} /></div>
                </div>
                <div className=" md:flex">
                    <div className="md:w-1/2 mt-4" ><p>Chair</p><DropdownMenu defaultValue={chair} setValue={setchair} arrayData={chairs()} /></div>
                    <div className="md:w-1/2 mt-4 md:ml-2" ><p>Warranty<span className="italic text-xs"> *(Required)</span></p><DropdownMenu defaultValue={warranty} setValue={setwarranty} arrayData={warrantys()} /></div>
                </div>
                

                <div className="md:flex">
                    <div className="md:w-1/2 mt-4 " ><InputValue setValue={sethp} type={' HP'} /></div>
                    <div className="md:w-1/2 mt-4 md:ml-2" ><InputValue setValue={setcc} type={' CC'} /></div>
                </div>

                <div className="md:flex">
                    <div className="md:w-1/2 mt-4 " ><InputValue setValue={setcolor} type={' Color'} /></div>
                    <div className="md:w-1/2 md:ml-2   items-center justify-between" >  <p className="mt-4">Phone Contact<span className="italic text-xs"> *(Multiple)</span></p><div className="flex items-center justify-between"><input id="input_phone" placeholder=" Phone Number" className="bg-blue-200 italic outline-none h-10 w-[80%]"></input><button onClick={() => HandleAddPhone(phone_number, setphone_number, 'input_phone')}><i class="fa-solid text-slate-500 fa-plus mr-5 bg-blue-200 p-3 rounded-full"></i></button></div>
                        <div className="mt-2"></div>
                        <DisplayPhonePost phones={phone_number} setphone_number={setphone_number} />
                    </div>
                </div>
                <div className="mt-5"><span className="italic">Location : </span>{Location}</div>
                <div className="w-full mt-2 h-44 bg-blue-400 ">
                    <div className="sticky h-full w-full">
                        <LocationPicker LocationAddreess={SetLocation} LocationLink={SetLocationLink} />
                    </div>
                </div>


            </div>
        </>
    )
}

export default PostCar