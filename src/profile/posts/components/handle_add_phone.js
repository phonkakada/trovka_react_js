const HandleAddPhone = (phone, setphone, id) => {

    const inputPhone = document.getElementById(id)

    if (inputPhone) {
        if (inputPhone.value !== "") {
            let arr = [...phone, inputPhone.value]
            setphone(arr)
            inputPhone.value = ""
        }
    }
}

export default HandleAddPhone