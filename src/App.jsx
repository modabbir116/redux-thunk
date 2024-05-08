import { useState } from 'react'
import Navbar from './componants/navbar/Navbar'
import TagesContainer from './componants/tages/TagesContainer'
import VideoContainer from './componants/videos/VideoContainer'
import Pagination from './componants/paginations/Pagination'
import Footer from './componants/footer/Footer'


function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <Navbar/>
    <TagesContainer/>
    <VideoContainer/>
    <Pagination/>
    <Footer/>
    </>
  )
}

export default App
