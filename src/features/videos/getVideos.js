import { api } from "../../api/api"

export const getVideos = async ()=>{
    const res = await api.get("/videos");
    return res
} 