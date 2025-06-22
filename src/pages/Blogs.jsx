import { Share2, Heart } from 'lucide-react';

const blogs = [
  {
    id: 1,
    title: 'Understanding React Hooks',
    excerpt: 'Hooks let you use state and other React features without writing a class...',
    author: 'Ashrith Varghese',
    date: 'June 21, 2025',
    tags: ['React', 'JavaScript'],
  },
  // Add more blog objects here...
];

function BlogList() {
  return (
    <div className="min-h-screen bg-gray-50 px-4 py-10">
      <h1 className="text-4xl font-bold text-blue-600 text-center mb-8">Explore Blogs</h1>

      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-7xl mx-auto">
        {blogs.map((blog) => (
          <div key={blog.id} className="bg-white rounded-2xl p-6 shadow-md hover:shadow-xl transition">
            <div className="flex items-center gap-3 mb-4 text-gray-600 text-sm">
              <span>{blog.author}</span>
              <span>{blog.date}</span>
            </div>

            <h2 className="text-xl font-semibold text-gray-800 mb-2">{blog.title}</h2>
            <p className="text-gray-600 line-clamp-3 mb-4">{blog.excerpt}</p>

            <div className="flex gap-2 flex-wrap">
              {blog.tags.map((tag, index) => (
                <span
                  key={index}
                  className="text-sm bg-blue-100 text-blue-700 px-2 py-1 rounded-full"
                >
                  #{tag}
                </span>
              ))}
            </div>
            <div className="mt-4 flex justify-between">
              <button className="border border-blue-600 text-blue-600 font-medium px-4 py-2 rounded-lg hover:bg-blue-700 hover:text-white transition">
                Read More
              </button>
              <div className='flex items-center gap-5'>
                <Share2 />
                <Heart />
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default BlogList;
