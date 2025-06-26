import { Share2, Heart } from 'lucide-react';
import { useEffect, useState } from 'react';
import { toast } from 'react-toastify';
import API from '../services/api.js';
import { Link } from 'react-router-dom';

function BlogList() {
  // Function to handle sharing the blog post
  const handleShare = async (postId) => {
    const url = `${window.location.origin}/posts/${postId}`;

    if (navigator.share) {
      try {
        await navigator.share({
          title: 'Check out this blog on Blogify!',
          url,
        });
      } catch (err) {
        console.error('Sharing failed:', err);
      }
    } else {
      // Fallback: copy to clipboard
      try {
        await navigator.clipboard.writeText(url);
        alert('Link copied to clipboard!');
      } catch (err) {
        console.error('Clipboard write failed:', err);
      }
    }
  };

  const [posts, setPosts] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchPosts = async () =>{
      try {
        const response = await API.get('/api/posts/all');
        setPosts(response.data.posts || []);
        setLoading(false);
        
      } catch (error) {
        toast.error('Failed to fetch blogs. Please try again later.');
        setLoading(false);
      }
    };

    fetchPosts();
  }, []);

  if(loading) return (
     <div className='flex flex-col items-center justify-center mt-50'>
      <img src="/images/Firmware-rafiki.svg" alt="" className="w-2xs"/>
    </div>
  );

  return (
    <div className="min-h-screen bg-gray-50 px-4 py-10 mt-20">
      <h1 className="text-2xl font-bold text-blue-600 text-center mb-8">Explore All Blogs</h1>

      {posts.length === 0 ? (
        <div className='flex flex-col items-center justify-center mt-20'>
          <img src="images/File searching-rafiki.svg" alt="No blogs" className="w-2xs" />
          <p className='w-3xs text-center'>Oops! No blogs here yet. Looks like it's a bit quiet...<br></br><br></br> Why not write the first one?</p>
        </div>
      ) : (
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-7xl mx-auto">
          {posts.map((post) => (
            <div key={post._id} className="bg-white rounded-2xl p-6 shadow-md hover:shadow-xl transition">
              <div className="flex items-center gap-3 mb-4 text-gray-600 text-sm">
                <span>{post.author.name}</span>
                <span>{new Date(post.createdAt).toLocaleDateString()}</span>
              </div>

              <h2 className="text-xl font-semibold text-gray-800 mb-2">{post.title}</h2>
              <p className="text-gray-600 line-clamp-3 mb-4">{post.content.slice(0, 150)}...</p>

              <div className="mt-4 flex justify-between">
                <Link to={`/posts/${post._id}`} className="flex items-center">
                  <button className="border border-blue-600 text-blue-600 font-medium px-4 py-2 rounded-lg hover:bg-blue-700 hover:text-white transition">
                    Read More
                  </button>
                </Link>
                <div className='flex items-center gap-5'>
                  <Share2 className='cursor-pointer' onClick={() => handleShare(post._id)}/>
                  <Heart className='cursor-pointer' />
                </div>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}

export default BlogList;
