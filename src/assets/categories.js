const Categories = [
    "Home",
    "Land",
    "Car",
    "Computer",
    "Smart Home",
   
    "Motor",
    "Bike",
    "Accessories",
    "Fashion",
]

const CarCategories =
    ["LEXUS","AUDI", "BMW", "BUGATTI", "CADILLAC", "CHANGAN", "CHEVROLET", "FERRARI", "FORD", "FORTHING", "HONDA",
        "HUMMER", "HYUNDAI", "ISUZU", "JAGUAR", "JEEP", "KIA", "LAMBORGHINI", "LAND ROVER", "MAZDA",
        "MERCEDES-BENZ", "MG", "MITSUBISHI MOTORS", "NISSAN", "PEUGEOT", "PORSCHE", "ROLLS ROYCE", "SUZUKI", "TESLA",
        "TOYOTA", "VOLKSWAGEN", "Other"];

function generateArrayOfYears() {
    
    var max = new Date().getFullYear()
    var min = max - 25
    var years = ["2024"]


    for (var i = max; i >= min; i--) {
        years.push(i)
    }
    return years
}

const fuels = [
    "Gasoline",
    "Diesel",
    "Electric",
    "Hybrid",
]

const used = [
    "Yes",
    "No"
]

const tax_types = [
    "Paper",
    "Plate Number"
]

const chairs = () => {
    let arr = []
    for (let i = 0 ; i < 25 ; i++){
        arr.push(i)
    }
    return arr
}

const warrantys = () => {
    let arr = ["No"]
    for (let i = 1 ; i < 12 ; i++){
        arr.push(i + " Months")
    }
    for (let i = 1 ; i < 10 ; i++){
        arr.push(i + " Years")
    }
    return arr
}



module.exports = {generateArrayOfYears,tax_types ,
      Categories, CarCategories,
      used,fuels,chairs , warrantys
     }