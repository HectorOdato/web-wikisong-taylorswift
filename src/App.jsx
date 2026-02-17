import {Routes, Route} from "react-router-dom";
import Home from './pages/HomePage/Home.jsx'
import AlbumPage from './pages/AlbumPage/AlbumPage.jsx'
import {Footer} from './components/layout/Footer.jsx'
import Header from './components/layout/Header.jsx'
import { BiographyPage } from './pages/BiographyPage.jsx'
import ScrollToTop from './components/layout/ScrollToTop.jsx'


function App() {

  return (
      <>
      <ScrollToTop/>
      <Header/>
        <Routes>
          <Route path="/" element={<Home/>} />
          <Route path="/album/:id" element={<AlbumPage/>} />
          <Route path="/biography" element={<BiographyPage/>} />
        </Routes>
        <Footer/>
      </>
  )
}

export default App
