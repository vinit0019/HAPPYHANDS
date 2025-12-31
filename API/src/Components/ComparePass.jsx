// import React, { useState } from "react";
// import axios from "axios";
// import { useNavigate } from "react-router-dom";

// const ComparePass = () => {
//   const [confirmPass1, setConfirmPass1] = useState("");
//   const [confirmPass2, setConfirmPass2] = useState("");
//   const navigate = useNavigate();

//   const handelSetPass = () => {
//     let getemail = JSON.parse(localStorage.getItem("Forgotemail"));

//     if (confirmPass1 === confirmPass2) {
//       axios
//         .post("http://localhost:8080/cheakpass", { confirmPass1, getemail })
//         .then((res) => {
//           alert(res.data.message);
//           if (res.data.message === "Password updated successfully!") {
//             localStorage.removeItem("Forgotemail");
//             navigate("/");
//           }
//         })
//         .catch((err) => {
//           console.log(err);   
//         });
//     } else {
//       alert("Passwords do not match!");
//     }
//   };

//   return (
//     <div>
//       <h1>Set New Password</h1>

//       <label htmlFor="first">Enter New Password</label>
//       <input
//         id="first"
//         type="password"
//         value={confirmPass1}
//         onChange={(e) => setConfirmPass1(e.target.value)}
//       />
//       <br /><br />

//       <label htmlFor="second">Confirm Password</label>
//       <input
//         id="second"
//         type="password"
//         value={confirmPass2}
//         onChange={(e) => setConfirmPass2(e.target.value)}
//       />
//       <br /><br />

//       <button onClick={handelSetPass}>Set Password</button>
//     </div>
//   );
// };

// export default ComparePass;

import React, { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const ComparePass = () => {
  const [confirmPass1, setConfirmPass1] = useState("");
  const [confirmPass2, setConfirmPass2] = useState("");
  const navigate = useNavigate();

  const handelSetPass = () => {
    let getemail = JSON.parse(localStorage.getItem("Forgotemail"));

    if (confirmPass1 === confirmPass2) {
      axios
        .post("http://localhost:8080/cheakpass", { confirmPass1, getemail })
        .then((res) => {
          alert(res.data.message);
          if (res.data.message === "Password updated successfully!") {
            localStorage.removeItem("Forgotemail");
            navigate("/");
          }
        })
        .catch((err) => {
          console.log(err);
        });
    } else {
      alert("Passwords do not match!");
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-900 text-white">

      <div className="bg-gray-800 p-8 rounded-2xl shadow-xl w-full max-w-md">

        <h1 className="text-3xl font-bold text-center text-blue-400 mb-6">
          Set New Password
        </h1>

        <div className="mb-4">
          <label
            htmlFor="first"
            className="block mb-2 text-gray-300"
          >
            Enter New Password
          </label>
          <input
            id="first"
            type="password"
            value={confirmPass1}
            onChange={(e) => setConfirmPass1(e.target.value)}
            className="w-full p-3 rounded-lg bg-gray-700 outline-none
                       focus:ring-2 focus:ring-blue-500"
          />
        </div>

        <div className="mb-6">
          <label
            htmlFor="second"
            className="block mb-2 text-gray-300"
          >
            Confirm Password
          </label>
          <input
            id="second"
            type="password"
            value={confirmPass2}
            onChange={(e) => setConfirmPass2(e.target.value)}
            className="w-full p-3 rounded-lg bg-gray-700 outline-none
                       focus:ring-2 focus:ring-blue-500"
          />
        </div>

        <button
          onClick={handelSetPass}
          className="w-full bg-blue-600 hover:bg-blue-700
                     transition py-3 rounded-lg font-semibold"
        >
          Set Password
        </button>

      </div>
    </div>
  );
};

export default ComparePass;
