// import axios from "axios";
// import React, { useState } from "react";
// import { useNavigate } from "react-router-dom";

// const Forgot = () => {
//   let [forgotEmail, setForgotemail] = useState("");
//   let navigate = useNavigate()

//   let handelOtp = () => {
//     axios
//       .post("http://localhost:8080/forgot", { forgotEmail })
//       .then((res) => {
//         alert(res.data.message);
//         if (res.data.message === "OTP sent successfully!") {
//           localStorage.setItem("Forgotemail",JSON.stringify(forgotEmail))
//          navigate("/submitOtp") 
//         }
//       })
//       .catch((err) => {
//         console.log(err);
//       });
//   };

//   return (
//     <div>
//       <h1>Sent-OTP</h1>
//       <input
//         type="email"
//         value={forgotEmail}
//         placeholder="Enter Your Email..."
//         onChange={(e) => setForgotemail(e.target.value)}
//       />
//       <button onClick={handelOtp}>Get OTP</button>
//     </div>
//   );
// };

// export default Forgot;
import axios from "axios";
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const Forgot = () => {
  let [forgotEmail, setForgotemail] = useState("");
  let navigate = useNavigate()

  let handelOtp = () => {
    axios
      .post("http://localhost:8080/forgot", { forgotEmail })
      .then((res) => {
        alert(res.data.message);
        if (res.data.message === "OTP sent successfully!") {
          localStorage.setItem("Forgotemail", JSON.stringify(forgotEmail))
          navigate("/submitOtp")
        }
      })
      .catch((err) => {
        console.log(err);
      });
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-900 text-white">

      <div className="bg-gray-800 p-8 rounded-2xl shadow-xl w-full max-w-md">

        <h1 className="text-3xl font-bold text-center text-blue-400 mb-6">
          Send OTP
        </h1>

        <div className="mb-6">
          <input
            type="email"
            value={forgotEmail}
            placeholder="Enter Your Email..."
            onChange={(e) => setForgotemail(e.target.value)}
            className="w-full p-3 rounded-lg bg-gray-700 outline-none
                       focus:ring-2 focus:ring-blue-500"
          />
        </div>

        <button
          onClick={handelOtp}
          className="w-full bg-blue-600 hover:bg-blue-700
                     transition py-3 rounded-lg font-semibold"
        >
          Get OTP
        </button>

      </div>
    </div>
  );
};

export default Forgot;
