// import React, { useState  } from 'react'
// import axios from 'axios'
// import { Link, useNavigate } from 'react-router-dom'

// const Login = () => {

//     let [email,setEmail] = useState("");
//     let [password,setPassword] = useState("");
//     const navigate = useNavigate()

//     let handleLogin = ()=>{
//         axios.post("http://localhost:8080/login",{email, password})
//         .then((res)=>{
//           const users =  {
//             name : res.data.name,
//             token : res.data.token,
//             role : res.data.role,
//           }
//           localStorage.setItem("userdata",JSON.stringify(users))
//             alert(res.data.message) 

//             if (res.data.SuperToken) {
//               navigate("/superadmin")
//             }
//             if (res.data.message === "Admin Log-in!") {
//               navigate("/admin")
//             }
//            else if(res.data.token){
//               navigate("/home")
//             }

//         })
//         .catch((err)=>{
//             console.log(err)
//         })
//     };

//   return (
//     <div>
//         <h1>Log-In</h1>
//       <input type="email" value={email} placeholder='Enter Email....' onChange={(e)=> setEmail(e.target.value)}/>
//         <input type="password" value={password} placeholder='Enter Password....' onChange={(e)=> setPassword(e.target.value)}/>

//          <button onClick={handleLogin}>Login</button>

//          <p>Go-To <Link to='/signup' >Sign-up</Link> page</p>
//          <Link to='/forgot' >Forgot Password</Link>
//     </div>
//   );
// };

// export default Login;

import React, { useState } from 'react'
import axios from 'axios'
import { Link, useNavigate } from 'react-router-dom'

const Login = () => {

  let [email, setEmail] = useState("");
  let [password, setPassword] = useState("");
  const navigate = useNavigate()

  let handleLogin = () => {
    axios.post("http://localhost:8080/login", { email, password })
      .then((res) => {
        const users = {
          name: res.data.name,
          token: res.data.token,
          role: res.data.role,
        }
        localStorage.setItem("userdata", JSON.stringify(users))
        alert(res.data.message)

        if (res.data.SuperToken) {
          navigate("/superadmin")
        }
        if (res.data.message === "Admin Log-in!") {
          navigate("/admin")
        }
        else if (res.data.token) {
          navigate("/home")
        }

      })
      .catch((err) => {
        console.log(err)
      })
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-900 text-white">

      <div className="bg-gray-800 p-8 rounded-2xl shadow-xl w-full max-w-md">

        <h1 className="text-3xl font-bold text-center text-blue-400 mb-6">
          Log In
        </h1>

        <div className="mb-4">
          <input
            type="email"
            value={email}
            placeholder="Enter Email..."
            onChange={(e) => setEmail(e.target.value)}
            className="w-full p-3 rounded-lg bg-gray-700 outline-none
                       focus:ring-2 focus:ring-blue-500"
          />
        </div>

        <div className="mb-6">
          <input
            type="password"
            value={password}
            placeholder="Enter Password..."
            onChange={(e) => setPassword(e.target.value)}
            className="w-full p-3 rounded-lg bg-gray-700 outline-none
                       focus:ring-2 focus:ring-blue-500"
          />
        </div>

        <button
          onClick={handleLogin}
          className="w-full bg-blue-600 hover:bg-blue-700
                     transition py-3 rounded-lg font-semibold"
        >
          Login
        </button>

        <p className="text-center text-gray-300 mt-6">
          Go-To{" "}
          <Link to='/signup' className="text-blue-400 hover:underline">
            Sign-up
          </Link>{" "}
          page
        </p>

        <p className="text-center mt-2">
          <Link
            to='/forgot'
            className="text-sm text-blue-400 hover:underline"
          >
            Forgot Password?
          </Link>
        </p>

      </div>
    </div>
  );
};

export default Login;
