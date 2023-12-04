import { get_all_car, get_all_computer, get_all_motor, get_all_phone, post_car } from "../route_api"
import { useState } from "react"
import AxiosInstance from "../axios"



const GetAllPhones = async (setstatus) => {
    let prices = [];
    let models = [];
    let images = [];
    let makes = [];
    let years = [];
    let colors = [];
    let powers = [];
    let cpus = [];
    let rams = [];
    let watts = [];
    let speakers = [];
    let storages = [];
    let locations = [];
    let locationsLink = [];
    let imgs = [];
    let ids = []

    await AxiosInstance.get(get_all_phone).then((response) => {
        for (let i = 0; i < response.data.length; i++) {
            let id = response.data[i].Post.id
            let price = response.data[i].Post.price
            let model = response.data[i].Post.getinfo[0].model
            let make = response.data[i].Post.getinfo[0].make
            let year = response.data[i].Post.getinfo[0].year
            let ram = response.data[i].Post.getinfo[0].ram
            let storage = response.data[i].Post.getinfo[0].storage
            let power = response.data[i].Post.getinfo[0].power
            let watt = response.data[i].Post.getinfo[0].watt
            let cpu = response.data[i].Post.getinfo[0].cpu
            let color = response.data[i].Post.getinfo[0].color
            let location = response.data[i].Post.locations[0].province
            let locationLink = response.data[i].Post.locations[0].locationLink
            for (let j = 0; j < response.data[i].Post.products.length; j++) {
                let img = response.data[i].Post.products[j].product_image_url     
                imgs.push(img)
            }
            images.push(imgs)
            imgs = []
            prices.push(parseInt(price))
            models.push(model)
            makes.push(make)
            years.push(year)
            cpus.push(cpu)
            rams.push(ram)
            watts.push(watt)
            powers.push(power)
            colors.push(color)
            storages.push(storage)
            locations.push(location)
            locationsLink.push(locationLink)
            ids.push(id)
        }
        setstatus(200);

    }).catch((e) => {

    })
    return [prices, models , cpus,
            makes , images ,
            years ,
            rams , locations,
            locationsLink, speakers,
            storages,powers , ids
        ]
}


export default GetAllPhones