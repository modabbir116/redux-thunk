import React, { useEffect } from 'react'
import SingleVideos from './SingleVideos'
import { useDispatch, useSelector  } from 'react-redux'
import { featchVideos } from '../../features/videos/VideoSlice'

const VideoContainer = () => {
  const {error, isError, loding, data} = useSelector((state) => state.videos)
  const dispatch = useDispatch()
  useEffect(()=>{
    dispatch(featchVideos())
  }, [dispatch])  


  let content
  if (loding) {
    content = "Loading...";
  } else if (isError) {
    content = `Error: ${error}`;
  } else if (data && data.length > 0) {
    content = data.map((video) => <SingleVideos video={video} key={video.id} />);
  } else {
    content = "No videos found.";
  }
  
  return (
    <section className="pt-12">
        <section className="pt-12">
            <div className="grid grid-cols-12 gap-4 max-w-7xl mx-auto px-5 lg:px-0 min-h-[300px]">
            {/* single video */}
            {content}
            {/* error section
              <div class="col-span-12">some error happened</div> */}
            </div>
        </section>
    </section>

  )
}

export default VideoContainer