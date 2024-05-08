import React, { useEffect } from 'react'
import Tage from './Tage'
import { useDispatch, useSelector  } from 'react-redux'
import { featchTags } from '../../features/tages/tagsSlice';

const TagesContainer = () => {
  const {error, isError, loding, data} = useSelector((state) => state.tags)
  const dispatch = useDispatch()
  useEffect(()=>{
    dispatch(featchTags())
  }, [dispatch])  


  let content
  if (loding) {
    content = "Loading...";
  } else if (isError) {
    content = `Error: ${error}`;
  } else if (data && data.length > 0) {
    content = data.map((tag) => <Tage tag={tag} key={tag.id} />);
  } else {
    content = "No videos found.";
  }
  return (
    <section>
        <div className="flex gap-2 px-5 py-6 mx-auto overflow-y-auto border-b max-w-7xl lg:px-0">
            {content}
            {/* selected */}
            {/* <div className="px-4 py-1 text-white bg-blue-600 rounded-full cursor-pointer">
            redux
            </div> */}
        </div>
    </section>

  )
}

export default TagesContainer