import { Link } from 'react-router-dom';

function Home() {
  return (
    <div className="flex flex-col justify-center items-center">
      <h2 className="text-7xl font-bold text-blue-600 mt-[20vh] md:mt-[30vh] text-center z-2 md:w-[400px]">Welcome to Blogify</h2>
      <p className="mt-[50px] font-medium text-center w-[60vw] text-lg z-2">Your space to write, share, and connect with the world.</p>
      <p className="mt-[20px] font-medium w-2xs text-center text-lg z-2">At Blogify, we believe everyone has a story worth telling. Whether you're a writer, developer, traveler, or thinker - this is your platform to express freely and build your digital voice.</p>
      {/* <div>
        <img src="./src/assets/undraw_blog-post_f68f.svg" alt="" className="absolute w-[200px] left-[22vw] top-[15vh] sm:right-[20vw] z-1 md:left-[15vw] md:top-[40vh] md:w-[300px]" />
        <img src="./src/assets/undraw_publish-post_7g2z.svg" alt="" className="absolute w-[200px] left-[15vw] bottom-[-400px] z-1 md:top-[40vh] md:left-[67vw] md:w-[300px]" />
      </div> */}
      <Link to="/register"><button className='bg-blue-600 text-white font-bold mt-[50px] mb-[100px] w-auto p-[20px] z-2 h-[40px] text-xl rounded-[5px] flex justify-center items-center cursor-pointer p-[10px] hover:text-blue-600 hover:bg-white hover:border hover:border-blue-600  transition-all duration-[500ms]'>Get Started</button></Link>
    </div>
  )
}
export default Home;