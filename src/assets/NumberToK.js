const NumberToK  = (Number) => {

        if (Number >= 1000 && Number < 1000000){
            return " " +  Number / 1000 + "K"
        }
        if (Number >= 1000000 && Number < 100000000){
            return " " +  Number / 1000000 + "M"
        }else{
            return " " + Number 
        }
}

export default NumberToK