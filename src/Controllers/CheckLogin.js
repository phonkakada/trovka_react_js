import { checkTokenUUID } from "../api/route_api";
import VerifyTokenUUID from "../api/tokenVerify";
import { GetToken, GetUUID } from "../cookie/cookie";
import { login } from "../routes/string_routes";

const CheckLogin = async () => {
    const Token = GetToken();
    const UUID = GetUUID();

    if (Token && UUID) {
        if (await VerifyTokenUUID(UUID, Token)) {
                return true
        } else {
            
        }
    } else {
       
    }
    return false
}

export default CheckLogin