// import React, { useState } from "react";
// import axios from "axios";
// import { Link, useNavigate } from "react-router-dom";

// const Signup = () => {
//   const [name, setName] = useState("");
//   const [email, setEmail] = useState("");
//   const [password, setPassword] = useState("");

//   const navigate = useNavigate()

//   const handleSignup = () => {
//     if (!name || !email || !password) {
//       alert("Please fill all fields!");
//       return;
//     }
//     axios.post("http://localhost:8080/signup",{name,email,password})
//     .then((res)=>{
//       alert(res.data.message)
//       if (res.data.message === "User Created Successfully!") {
//         navigate("/")
//       }
//     })
//     .catch((err)=>{
//       console.log(err)
//     })

//   };

//   return (
//     <div style={{ textAlign: "center", marginTop: "40px" }}>
//       <h1>Sign Up</h1>

//       <input
//         type="text"
//         value={name}
//         placeholder="Enter Name..."
//         onChange={(e) => setName(e.target.value)}
//       />
//       <br />

//       <input
//         type="email"
//         value={email}
//         placeholder="Enter Email..."
//         onChange={(e) => setEmail(e.target.value)}
//       />
//       <br />

//       <input
//         type="password"
//         value={password}
//         placeholder="Enter Password..."
//         onChange={(e) => setPassword(e.target.value)}
//       />
//       <br />

//       <button onClick={handleSignup}>Sign Up</button>

//       <p>
//         Go to <Link to="/">Login</Link> page
//       </p>
//     </div>
//   );
// };

// export default Signup;

import React, { useState } from "react";
import axios from "axios";
import { Link, useNavigate } from "react-router-dom";

const Signup = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const navigate = useNavigate()

  const handleSignup = () => {
    if (!name || !email || !password) {
      alert("Please fill all fields!");
      return;
    }
    axios.post("http://localhost:8080/signup", { name, email, password })
      .then((res) => {
        alert(res.data.message)
        if (res.data.message === "User Created Successfully!") {
          navigate("/")
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
          Sign Up
        </h1>

        <div className="mb-4">
          <input
            type="text"
            value={name}
            placeholder="Enter Name..."
            onChange={(e) => setName(e.target.value)}
            className="w-full p-3 rounded-lg bg-gray-700 outline-none
                       focus:ring-2 focus:ring-blue-500"
          />
        </div>

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
          onClick={handleSignup}
          className="w-full bg-blue-600 hover:bg-blue-700
                     transition py-3 rounded-lg font-semibold"
        >
          Sign Up
        </button>

        <p className="text-center text-gray-300 mt-6">
          Go to{" "}
          <Link to="/" className="text-blue-400 hover:underline">
            Login
          </Link>{" "}
          page
        </p>

      </div>
    </div>
  );
};

export default Signup;
