import { useState } from 'react'
import "bootstrap/dist/css/bootstrap.min.css"
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import Header from './components/Header'
import Footer from './components/Footer'
import Sidebar from './components/Sidebar'
import './App.css'
import CreatePost from './components/CreatePost'
import Post from './components/Post'
import PostList from './components/PostList'
import PostListProvider from './store/post-list-store'

function App() {
  const [selectedTab, setselectedTab] = useState("Home")

  return (
    <PostListProvider>
    <div className='app-container'>
      
      <Sidebar selectedTab={selectedTab} setselectedTab={setselectedTab}></Sidebar>
      <div className="content">
      <Header></Header>
      {
       selectedTab === "Home" ? 
       (<PostList/>) :
       (<CreatePost/>)}
     
      <Footer></Footer>
      </div>
      </div>
      </PostListProvider>
  )
}

export default App
