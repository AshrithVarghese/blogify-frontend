import { toast } from 'react-toastify';
import { useState } from 'react';
import API from '../services/api';
import { useNavigate } from 'react-router-dom';


const WriteBlog = () => {

  const [loading, setLoading] = useState(false);
  const [title, setTitle] = useState('');
  const [content, setContent] = useState('');
  const navigate = useNavigate();

  const handleSubmit = async (e) =>{
    e.preventDefault()
    setLoading(true);
    
    const token = localStorage.getItem('token');

    try {
      if (!token) {
        toast.error('You must be logged in to publish a blog.');
        return;
      }
      const res = await API.post('/api/posts/create',{title,content},{headers: {Authorization: `Bearer ${token}`}})
      toast.success('Blog published successfully!');
      setTitle('');
      setContent('');
      setLoading(false);
      navigate(`/posts/${res.data.id}`)
    } catch (error) {
      console.error('Error publishing blog:', error);
      toast.error( error.message || 'Failed to publish blog. Please try again.');
    } finally {
      setLoading(false); // Stop loading
    }
  }

  return (
    <div className='flex flex-col items-center justify-center min-h-screen bg-gray-100'>
      <div className='w-full max-w-md p-8 space-y-6 bg-white rounded shadow-md mt-[15vh] mb-[20vh]'>
        <h1 className='text-2xl font-bold text-center text-blue-600'>Write a Blog</h1>
        <p className='text-center font-medium'>Start writing your thoughts, ideas, or stories here!</p>
        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label className="block mb-1 text-sm font-medium" htmlFor="title">Title:</label>
            <input value={title} onChange={(e) => {setTitle(e.target.value)}} type="text" id="title" name="title" className="w-full px-3 py-2 border rounded outline-none focus:ring-2 focus:ring-blue-500" placeholder='Give an engaging and descriptive title.' required />
          </div>
          <div>
            <label className="block mb-1 text-sm font-medium" htmlFor="content">Content:</label>
            <textarea value={content} onChange={(e) =>{setContent(e.target.value)}} id="content" name="content" rows="10" className="w-full px-3 py-2 border rounded outline-none focus:ring-2 focus:ring-blue-500" placeholder='Your blog content here...' required></textarea>
          </div>
          <button
            type="submit"
            className="w-full px-4 py-2 text-white bg-blue-600 rounded hover:bg-blue-700 disabled:opacity-50 cursor-pointer"
            disabled={loading}
          >
            {loading ? (
              <span className="flex items-center justify-center gap-2">
                <svg className="w-5 h-5 animate-spin text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                  <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                  <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4z"></path>
                </svg>
                Publishing to world...
              </span>
            ) : (
              'Make It Public'
            )}
          </button>
        </form>
      </div>
    </div>
  )
}

export default WriteBlog