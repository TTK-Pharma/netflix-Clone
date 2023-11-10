import React from "react";
import { Link, useNavigate } from "react-router-dom";
import { UserAuth } from "../context/authContext";

function Navbar() {
  const { user, logout } = UserAuth();
  const navigate = useNavigate()

  // console.log(user);

  const handleLogout = async ()=> {
    try{
      await logout()
      
    } catch(error) {
      console.log(error)
    }
    navigate('/')
  }

  return (
    <div>
      <Link to="/">
        <div className="absolute top-[3%] text-red-600 text-4xl left-[10%] z-50 cursor-pointer">
          <h3>NETFLIX</h3>
        </div>
      </Link>
      {user?.email ? <div>
        <div className=" absolute right-[19%] top-[3%] flex mr-12">
          <Link to="/account">
            <div className="absolute top-[3%] bg-red-600  z-50 rounded">
              <button className="cursor-pointer p-[5px] px-4  text-white">
                Account
              </button>
            </div>
          </Link>
        </div>
          <div onClick={handleLogout} className="absolute top-[3%] bg-red-600 right-[8%]  z-50 rounded">
            <button  className="cursor-pointer p-[5px] px-4 text-white">
              Logout
            </button>
          </div>
        
      </div> : <div>
        <div className=" absolute right-[19%] top-[3%] flex mr-8">
          <Link to="/login">
            <div className="absolute top-[3%] bg-red-600  z-50 rounded">
              <button className="cursor-pointer p-[5px] px-4  text-white">
                Login
              </button>
            </div>
          </Link>
        </div>
        <Link to="/signup">
          <div className="absolute top-[3%] bg-red-600 right-[8%]  z-50 rounded">
            <button className="cursor-pointer p-[5px] px-4 text-white">
              SignUp
            </button>
          </div>
        </Link>
      </div>}
    </div>
  );
}

export default Navbar;
