import React, { useState } from "react";
import {
  UserIcon,
  LockClosedIcon,
  EnvelopeIcon,
} from "@heroicons/react/24/solid";

const App = () => {
  const [register,SetRegister] = useState(true)
  console.log(register);
  return (
    <div className="pt-5">
      <div className={`wrapper relative  bg-yellow-100 h-[400px] w-[400px]`}>
        <div className={`w-[400px] rounded-md  ${!register ? "translate-x-[-400px]" :"translate-x-[0px]"} `}>
          <form className="p-6">
            <h2 className="font-bold text-3xl text-center">Login</h2>
            <label className="font-bold">Name</label>
            <div className="rounded-[5px]  w-full bg-transparent relative  border-current Input mb-2">
              <input
                type="text"
                placeholder="Enter your Name"
                className=" border-transparent  bg-transparent outline-none p-1 text-black"
              />
              <UserIcon className="w-5 h-5 text-black absolute right-1 top-1" />
            </div>

            <label className="font-bold">Password</label>
            <div className="rounded-md w-full bg-transparent relative  border-current Input mb-2">
              <input
                type="password"
                placeholder="Enter Your Password"
                className="border-transparent outline-none p-1 bg-transparent text-black"
              />
              <LockClosedIcon className="w-5 h-5 text-black absolute  right-1 top-1" />
            </div>

            <label className="font-bold">Password</label>
            <div className="rounded-md w-full bg-transparent relative  border-current Input">
              <input
                type="password"
                placeholder="Enter Your Password"
                className="border-transparent outline-none p-1 bg-transparent text-black"
              />
              <LockClosedIcon className="w-5 h-5 text-black absolute  right-1 top-1" />
            </div>

            <div className="flex justify-between mt-3">
              <div>
                <input type="checkbox" />
                <span>RemeberMe</span>
              </div>

              <p className="ml-5 hover:underline">Forget Password?</p>
            </div>

            <div className="w-full h-auto bg-slate-100 text-center rounded-md mt-2 mb-2 p-1 hover:bg-black hover:text-white">
              <button>Login</button>
            </div>

            <div className="flex justify-between">
              <span>Don't have an account?</span>
              <span className="font-bold hover:underline" onClick={()=>SetRegister(false)}>Register</span>
            </div>
          </form>
        </div>

        <div className={`w-[400px] Ptwo ${!register ? "translate-x-[0px]" : "translate-x-[400px]"}`}>
          <form className="p-6">
            <h2 className="font-bold text-3xl text-center">Register</h2>
            <label className="font-bold">Name</label>
            <div className="rounded-[5px]  w-full bg-transparent relative  border-current Input mb-2">
              <input
                type="text"
                placeholder="Enter your Name"
                className=" border-transparent  bg-transparent outline-none p-1 text-black"
              />
              <UserIcon className="w-5 h-5 text-black absolute right-1 top-1" />
            </div>


            <label className="font-bold">Mail</label>
            <div className="rounded-md w-full bg-transparent relative  border-current Input">
              <input
                type="email"
                placeholder="Enter Your Password"
                className="border-transparent outline-none p-1 bg-transparent text-black"
              />
              <EnvelopeIcon className="w-5 h-5 text-black absolute  right-1 top-1" />
            </div>

            <div className="flex justify-between mt-3">
              <div>
                <input type="checkbox" />
                <span>RemeberMe</span>
              </div>

              <p className="ml-5 hover:underline">Forget Password?</p>
            </div>

            <div className="w-full h-auto bg-slate-100 text-center rounded-md mt-2 mb-2 p-1 hover:bg-black hover:text-white">
              <button>Register</button>
            </div>

            <div className="flex justify-between">
              <span className="font-bold hover:underline" onClick={()=>SetRegister(true)}>Login</span>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default App;


