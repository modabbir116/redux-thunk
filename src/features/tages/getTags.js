import { api } from "../../api/api"

export const gettags = async ()=>{
    const res = await api.get("/tags");
    return res
} 