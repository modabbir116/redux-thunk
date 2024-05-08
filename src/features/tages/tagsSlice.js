import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { gettags } from "./getTags";

const initialState = {
    loding: false,
    isError: false,
    error: ",",
    video: []
}

export const featchTags = createAsyncThunk("tags/teatchVideos", async() =>{
    const {data} = await gettags()
    return data 
})

export const tagsSlice = createSlice({
    name: 'tags',
    initialState,
    extraReducers: (builder) =>{
        builder.addCase(featchTags.pending, (state)=>{
            state.loding = true
        })
        .addCase(featchTags.fulfilled, (state, action) =>{
            state.loding = false,
            state.data = action.payload
        })
        .addCase(featchTags.rejected, (state, action)=>{
            state.loding = false,
            state.isError =  true,
            state.data = [],
            state.error = action.error.message  
        })
    }
})

export default tagsSlice.reducer