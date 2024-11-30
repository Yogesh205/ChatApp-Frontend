import React, { useEffect, useState } from "react";

import axios from "axios";

function useGetAllUsers() {

  const [allUsers, setAllUsers] = useState([]);
  const [loading, setLoading] = useState(false);
  useEffect(() => {
    const getUsers = async () => {
      setLoading(true);
      try {
        
      
        const response = await axios.get("http://localhost:5002/api/user/getUserProfile", {
          withCredentials: true,
      
        });
        setAllUsers(response.data);
        setLoading(false);
      } catch (error) {
        console.log("Error in useGetAllUsers: " + error);
      }
    };
    getUsers();
  }, []);
  return [allUsers, loading];
}

export default useGetAllUsers;