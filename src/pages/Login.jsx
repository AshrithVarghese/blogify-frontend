import { useState } from 'react';
import API from '../services/api';
import { Link, useNavigate } from 'react-router-dom';

function Login() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError('');

    try {
      const res = await API.post('/api/user/login', { email, password });
      const token = res.data.token;
      localStorage.setItem('token', token);
      navigate('/');
    } catch (err) {
      setError(err.response?.data?.message || 'Login failed. try again');
    }
  };

  return (
    <div className="flex items-center justify-center h-auto bg-gray-100">
      <div className="w-full max-w-md p-8 space-y-6 bg-white rounded shadow-md mt-[15vh] mb-[20vh]">
        <img src="./src/assets/Computer login-rafiki.svg" alt="" className='mb-0' />
        <h2 className="text-2xl font-bold text-center text-blue-600">Login to Blogify</h2>
        <p className='text-center font-medium'>Log in to continue sharing and exploring amazing stories.</p>
        {error && <p className="text-red-600 text-sm">{error}</p>}
        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label className="block mb-1 text-sm font-medium">Email</label>
            <input value={email} onChange={(e) => setEmail(e.target.value)} type="email" className="w-full px-3 py-2 border rounded" />
          </div>
          <div>
            <label className="block mb-1 text-sm font-medium">Password</label>
            <input value={password} onChange={(e) => setPassword(e.target.value)} type="password" className="w-full px-3 py-2 border rounded" />
          </div>
          <button type="submit" className="w-full px-4 py-2 text-white bg-blue-600 rounded hover:bg-blue-700">Login</button>
        </form>
        <p>Don't have an account? <Link to='/register' className='text-[#0000FF]'>Register here</Link></p>
      </div>
    </div>
  );
}

export default Login;
