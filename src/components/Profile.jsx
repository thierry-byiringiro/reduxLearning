import React from "react";
import { useSelector } from "react-redux";

function Profile() {
  const user = useSelector((state) => state.user.value);
  const theme = useSelector((state) => state.theme.value);
  return (
    <>
      <h1 className={`text-2xl font-bold text-[${theme}]`}>User Profile</h1>
      <p className={`text-xs font-bold`}>Name: {user.name}</p>
      <p className={`text-xs font-bold`}>Age: {user.age}</p>
      <p className={`text-xs font-bold`}>Email: {user.email}</p>
    </>
  );
}

export default Profile;
