import Cookies from "universal-cookie";

const cookie = new Cookies();
const uuid  = 'uuid'
const token = "token"

const SetUUID = (UUID) => {
    cookie.set(uuid , UUID)
}
const setToken = (TOKEN) => {
    cookie.set(token , TOKEN)
}

const deleteToken = () => cookie.remove(token)
const deleteUUID = () =>  cookie.remove(uuid);


const GetToken = () => cookie.get(token)
const GetUUID = () => cookie.get(uuid)

export { setToken  , SetUUID , GetToken , GetUUID , deleteToken , deleteUUID }