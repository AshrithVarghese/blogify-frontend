import { useParams } from 'react-router-dom';
import { useEffect, useState } from 'react';
import API from '../services/api.js';
import { toast } from 'react-toastify';

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
        toast.error('Failed to fetch post. Check your network connection or try again later.');
        setLoading(false);
      }
    };

    fetchPost();
  }, [id]);

  if (loading) return (
     <div className='flex flex-col items-center justify-center mt-50'>
      <img src="/images/Firmware-rafiki.svg" alt="" className="w-3xs"/>
    </div>
  );
  if (!post) return (
     <div className='flex flex-col items-center justify-center mt-50'>
      <img src="/images/404 Error with a cute animal-bro.svg" alt="" className="w-3xs"/>
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
