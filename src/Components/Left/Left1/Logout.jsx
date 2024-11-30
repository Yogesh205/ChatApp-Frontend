import React, { useState } from "react";
  import { TbLogout2} from "react-icons/tb";
  import axios from "axios"
  import Cookies from "js-cookie"
import toast from "react-hot-toast";


export default function Logout() {
  const [loading,setLoading] =useState(false)
  const handleLogout =async()=>{
    setLoading(true);
    try {
      const res = await axios.post("http://localhost:5002/api/user/logout")
      localStorage.removeItem("ChatApp")
      Cookies.remove("jwt")
      setLoading(false);
      toast.success("Logout Successfully")
      
    } catch (error) {
      console.log(error);
      toast.error("Failed to Logout");
      
    }
  }
  return (
    <div className="w-[4%]  bg-gray-500 text-white flex flex-col justify-end">
      <div className="p-3 ">
        <form action="">
          <div className="flex space-x-3">
            <button>
              <TbLogout2
                className="text-5xl p-2 hover:bg-gray-400 rounded-lg duration-300"
                onClick={handleLogout}
              />
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}
