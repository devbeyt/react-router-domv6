import React from 'react'
import {Routes,Route} from 'react-router-dom'
import Home from '../pages/Home'
import About from '../pages/About'
import Contact from '../pages/Contact'
import Posts from '../pages/Posts'
import SinglePage from '../pages/SinglePage'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import EditPost from '../pages/EditPost'
import NotFound from '../pages/NotFound'

function App() {
  return (
    <div>
       <Navbar/>
    <Routes>  
     <Route path="/" element={<Home/>}/>
     <Route path="/posts" element={<Posts/>}/>
     <Route path="/posts/:postId" element={<SinglePage/>}/>
     <Route path="/posts/:postId/edit" element={<EditPost/>}/>
     <Route path="/about" element={<About/>}/>
     <Route path="/contact" element={<Contact/>}/>
     <Route path="*" element={<NotFound/>}/>
   </Routes>
   <Footer/>
    </div>
  )
}

export default App