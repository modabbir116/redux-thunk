import { configureStore } from '@reduxjs/toolkit';
import { videoSlice } from '../features/videos/VideoSlice';
import { tagsSlice } from '../features/tages/tagsSlice';


export const store = configureStore({
    reducer: {
        videos: videoSlice.reducer,
        tags: tagsSlice.reducer
    },
})