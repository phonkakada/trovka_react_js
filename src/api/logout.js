import { deleteToken, deleteUUID } from "../cookie/cookie"
import { home } from "../routes/string_routes";

const HandleLogout = () => {
    deleteToken();
    deleteUUID();

    window.location.href = home
}

export default HandleLogout