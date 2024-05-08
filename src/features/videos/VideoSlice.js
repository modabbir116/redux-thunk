import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { getVideos } from "./getVideos";

const initialState = {
    loding: false,
    isError: false,
    error: ",",
    video: []
}

export const featchVideos = createAsyncThunk("video/teatchVideos", async() =>{
    const {data} = await getVideos()
    return data 
})

export const videoSlice = createSlice({
    name: 'videos',
    initialState,
    extraReducers: (builder) =>{
        builder.addCase(featchVideos.pending, (state)=>{
            state.loding = true
        })
        .addCase(featchVideos.fulfilled, (state, action) =>{
            state.loding = false,
            state.data = action.payload
        })
        .addCase(featchVideos.rejected, (state, action)=>{
            state.loding = false,
            state.isError =  true,
            state.data = [],
            state.error = action.error.message  
        })
    }
})

export default videoSlice.reducer