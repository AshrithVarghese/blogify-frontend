import { useState } from 'react';
import API from '../services/api';
import { Link, useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';


function Login() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);

  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError('');
    setLoading(true);

    try {
      const res = await API.post('/api/user/login', { email, password });
      const token = res.data.token;
      const userId = res.data.user._id;
      localStorage.setItem('token', token);
      localStorage.setItem('userId', userId);
      toast.success('Login successful!');
      navigate('/blogs');
    } catch (err) {
      setError(err.response?.data?.message || 'Login failed. try again');
      toast.error(err.response.data.message || 'Login failed. Please try again.');
    } finally {
      setLoading(false); // Stop loading
    }
  };

  return (
    <div className="flex items-center justify-center h-auto bg-gray-100">
      <div className="w-full max-w-md p-8 space-y-6 bg-white rounded shadow-md mt-[15vh] mb-[20vh]">
        <img src="images/Computer login-rafiki.svg" alt="" className='mb-0' />
        <h2 className="text-2xl font-bold text-center text-blue-600">Login to Blogify</h2>
        <p className='text-center font-medium'>Log in to continue sharing and exploring amazing stories.</p>
        {error && <p className="text-red-600 text-sm bg-red-100 p-[10px] rounded-[5px] border-l-5 border-l-red-300">{error}</p>}
        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label className="block mb-1 text-sm font-medium">Email</label>
            <input value={email} onChange={(e) => setEmail(e.target.value)} type="email" className="w-full px-3 py-2 border rounded" required/>
          </div>
          <div>
            <label className="block mb-1 text-sm font-medium">Password</label>
            <input value={password} onChange={(e) => setPassword(e.target.value)} type="password" className="w-full px-3 py-2 border rounded" required/>
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
                Logging in...
              </span>
            ) : (
              'Login'
            )}
          </button>
        </form>
        <p>Don't have an account? <Link to='/register' className='text-[#0000FF]'>Register here</Link></p>
      </div>
    </div>
  );
}

export default Login;
