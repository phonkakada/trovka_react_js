import { get_all_car, post_car } from "../route_api"
import AxiosInstance from "../axios"



const GetAllCars = async (setstatus) => {
    let prices = [];
    let models = [];
    let images = [];
    let makes = [];
    let years = [];
    let Cc = [];
    let Hp = [];
    let locations = [];
    let locationsLink = [];
    let Ids = []

    let imgs = [];

    await AxiosInstance.get(get_all_car).then((response) => {
        for (let i = 0; i < response.data.length; i++) {
            let price = response.data[i].Post.price
            let model = response.data[i].Post.getinfo[0].model
            let make = response.data[i].Post.getinfo[0].make
            let year = response.data[i].Post.getinfo[0].year
            let hp = response.data[i].Post.getinfo[0].hp
            let cc = response.data[i].Post.getinfo[0].cc
            let location = response.data[i].Post.locations[0].province
            let locationLink = response.data[i].Post.locations[0].locationLink
            let Id = response.data[i].Post.id;
            for (let j = 0; j < response.data[i].Post.products.length; j++) {
                let img = response.data[i].Post.products[j].product_image_url     
                imgs.push(img)
            }
            imgs.reverse()
            images.push(imgs)
            imgs = []
            prices.push(parseInt(price))
            models.push(model)
            makes.push(make)
            years.push(year)
            Cc.push(cc)
            Hp.push(hp)
            locations.push(location)
            locationsLink.push(locationLink)
            Ids.push(Id)
        }

    }).catch((e) => {
        // console.log(e)
    })
    return [prices, models ,
            makes , images ,
            years , Hp,
            Cc , locations,
            locationsLink , Ids]
}


export default GetAllCars