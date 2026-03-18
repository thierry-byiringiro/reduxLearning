import React from 'react';
import { useSelector } from 'react-redux';

function Profile(props) {
    const user = useSelector((state) => state.user.value);
    const theme = useSelector((state) => state.theme.value);
    console.log(user)
    return (
        <>
           <h1 className='text-2xl font-bold'>User Profile</h1>
           <p className={`text-xs font-bold text-[${theme}]`}>Name: {user.name}</p>
           <p className={`text-xs font-bold text-[${theme}]`}>Age: {user.age}</p>
           <p className={`text-xs font-bold text-[${theme}]`}>Email: {user.email}</p> 
        </>
    );
}

export default Profile;