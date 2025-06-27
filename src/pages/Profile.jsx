import React, { useEffect, useState } from 'react'
import { toast } from 'react-toastify';
import API from '../services/api.js';

const Profile = () => {
  const [loading, setLoading] = useState(true);
  const [userInfo, setUserInfo] = useState(null);


  useEffect(() => {
    const fetchUserProfile = async () => {
      try {
        const response = await API.get('/api/user/profile',{headers : {Authorization: `Bearer ${localStorage.getItem('token')}`}})
        setUserInfo(response.data);
        setLoading(false);
      } catch (error) {
        toast.error('Error fetching user profile:', error);
        setLoading(false);
      }
    }
    fetchUserProfile();
  }, [])

  if (loading) return (
     <div className='flex flex-col items-center justify-center mt-50'>
      <img src="/images/loading.svg" alt="" className="w-20"/>
    </div>
  );

  return (
    <div>
      <div className="p-6 max-w-3xl mx-auto mt-30 bg-white rounded-lg shadow-md mb-10">
        <h1 className="text-3xl font-bold mb-2 text-center text-blue-600">Profile</h1>
        <h1 className="text-lg mb-2 text-center">What we know about you is here</h1>
        <div className="text-lg text-gray-800 mb-4">
          <p><strong>Name:</strong> {userInfo.user.name}</p>
          <p><strong>Email:</strong> {userInfo.user.email}</p>
          <p><strong>Joined on:</strong> {new Date(userInfo.user.createdAt).toLocaleDateString()}</p>
        </div>
      </div>
    </div>
  )
}

export default Profile