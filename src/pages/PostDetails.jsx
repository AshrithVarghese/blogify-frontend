import { useParams } from 'react-router-dom';
import { useEffect, useState } from 'react';
import API from '../services/api.js';
import { toast } from 'react-toastify';
import { Link } from 'react-router-dom';

function PostDetails() {
  const { id } = useParams();
  const [post, setPost] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchPost = async () => {
      try {
        const response = await API.get(`/api/posts/${id}`);
        setPost(response.data);
        setLoading(false);
      } catch (error) {
        toast.error(error.message || 'Failed to fetch post. Please try again later.');
        setLoading(false);
      }
    };

    fetchPost();
  }, [id]);

  if (loading) return (
     <div className='flex flex-col items-center justify-center mt-50'>
      <img src="/images/loading.svg" alt="" className="w-20"/>
    </div>
  );
  if (!post) return (
     <div className="flex flex-col items-center justify-center min-h-screen bg-white text-center p-6">
      <img src="/images/caveman.gif" alt="404" className="w-150 mb-0 mt-3" />
      <h1 className="text-5xl font-bold text-blue-600 mb-2">404</h1>
      <h1 className="text-3xl font-bold text-blue-600 mb-2">Page Not Found</h1>
      <p className="text-gray-600 mb-6">Sorry, we couldn't find the blog you were looking for.</p>
      <p className="text-gray-600 mb-6">What about reading another blog?</p>
      <Link to="/blogs">
        <button className="px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700 transition">
          Go To Blogs
        </button>
      </Link>
    </div>
  );

  return (
    <div className="p-6 max-w-3xl mx-auto mt-30 bg-white rounded-lg shadow-md mb-10">
      <h1 className="text-3xl font-bold mb-2">{post.post.title}</h1>
      <p className="text-sm text-gray-500 mb-6">By {post.post.author.name} on {new Date(post.post.createdAt).toLocaleDateString()}</p>
      <div className="text-lg text-gray-800 whitespace-pre-line">{post.post.content}</div>
      <p className='text-xs text-blue-600 text-center mt-10'>Created on Blogify</p>
    </div>
  );
}

export default PostDetails;
