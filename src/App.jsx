import { Routes, Route } from 'react-router-dom'
import Home from './pages/Home'
import Login from './pages/Login'
import Register from './pages/Register'
import Navbar from './components/Navbar'
import Blogs from './pages/Blogs'
import PostDetails from './pages/PostDetails'
import WriteBlog from './pages/WriteBlog'
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Profile from './pages/Profile'
import NotFound from './pages/NotFound'


function App() {
  return (
    <div>
      <Navbar />
      <Routes>
        <Route path='/' element={<Home/>} />
        <Route path='/login' element={<Login/>} />
        <Route path='/register' element={<Register/>} />
        <Route path='/blogs' element={<Blogs/>} />
        <Route path="/posts/:id" element={<PostDetails />} />
        <Route path="/writeblog" element={<WriteBlog />} />
        <Route path="/profile" element={<Profile />} />

        {/* This should be always LAST */}
        <Route path="*" element={<NotFound />} />
      </Routes>
      <ToastContainer position="top-right" autoClose={5000} />
    </div>
  )
}

export default App
