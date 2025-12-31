// import axios from 'axios';
// import React from 'react'
// import { useState } from 'react';
// import { useNavigate } from 'react-router-dom';

// const SubmitOtp = () => {

//   let [otp, setOtp] = useState("");
//   let navigate = useNavigate()

//     let handelOtpSubmit = () => {
//     axios
//       .post("http://localhost:8080/fileotp", { otp })
//       .then((res) => {
//         alert(res.data.message);
//         if (res.data.message === "OTP verified successfully!") {
//          navigate("/comparePass") 
//         }
//       })
//       .catch((err) => {
//         console.log(err);
//       });
//   };

//   return (
//     <div>
//       <h1>Enter-OTP</h1>
//       <input
//             type="number"
//             value={otp}
//             placeholder="Enter your otp..."
//             onChange={(e) => setOtp(e.target.value)}
//           />
//           <button onClick={handelOtpSubmit}>Submit otp</button>
//     </div>
//   )
// }

// export default SubmitOtp

import axios from 'axios';
import React from 'react'
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const SubmitOtp = () => {

  let [otp, setOtp] = useState("");
  let navigate = useNavigate()

  let handelOtpSubmit = () => {
    axios
      .post("http://localhost:8080/fileotp", { otp })
      .then((res) => {
        alert(res.data.message);
        if (res.data.message === "OTP verified successfully!") {
          navigate("/comparePass")
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
          Enter OTP
        </h1>

        <div className="mb-6">
          <input
            type="number"
            value={otp}
            placeholder="Enter your OTP..."
            onChange={(e) => setOtp(e.target.value)}
            className="w-full p-3 rounded-lg bg-gray-700 outline-none
                       focus:ring-2 focus:ring-blue-500 text-center tracking-widest"
          />
        </div>

        <button
          onClick={handelOtpSubmit}
          className="w-full bg-blue-600 hover:bg-blue-700
                     transition py-3 rounded-lg font-semibold"
        >
          Submit OTP
        </button>

      </div>
    </div>
  )
}

export default SubmitOtp
