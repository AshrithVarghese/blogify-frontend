import { Link } from 'react-router-dom';

function Home() {
  return (
    <div className="flex flex-col justify-center items-center">
      <h2 className="text-7xl font-bold text-blue-600 mt-[20vh] md:mt-[30vh] text-center z-2 md:w-[400px]">Welcome to Blogify</h2>
      <p className="mt-[50px] font-medium text-center w-[60vw] text-lg z-2">Your space to write, share, and connect with the world.</p>
      <p className="mt-[20px] font-medium w-2xs text-center text-lg z-2">At Blogify, we believe everyone has a story worth telling. Whether you're a writer, developer, traveler, or thinker - this is your platform to express freely and build your digital voice.</p>
      <div>
        <img src="images/undraw_blog-post_f68f.svg" alt="" className="hidden lg:block lg:absolute z-1 lg:left-[10vw] lg:top-[40vh] lg:w-[20vw]" />
        <img src="images/undraw_publish-post_7g2z.svg" alt="" className="hidden lg:block lg:absolute z-1 lg:top-[40vh] lg:left-[67vw] lg:w-[300px] lg:h-[20vw]" />
      </div>
      <Link to="/register"><button className='bg-blue-600 text-white font-bold mt-[50px] mb-[100px] w-auto p-[20px] z-2 h-[40px] text-xl rounded-[5px] flex justify-center items-center cursor-pointer hover:text-blue-600 hover:bg-white hover:border hover:border-blue-600  transition-all duration-[500ms]'>Get Started</button></Link>
    </div>
  )
}
export default Home;