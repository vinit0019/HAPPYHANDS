// import React, { useEffect, useState } from "react";
// import axios from "axios";
// import Colection from "./Colection";

// const Superadmin = () => {
//   const [datas, setDatas] = useState([]);
//   const [collection, setCollection] = useState([]);

//   useEffect(() => {
//     axios
//       .get("http://localhost:8080/superadmin")
//       .then((res) => {
//         alert(res.data.message);
//         setDatas(res.data.data);
//       })
//       .catch((err) => {
//         console.log(err);
//       });

//    axios
//           .get("http://localhost:8080/getcollection")
//           .then((res) => {
//             alert(res.data.message);
//             setCollection(res.data.data);
//           })
//           .catch((err) => {
//             alert("Error fetching collection");
//             console.log(err);
//           });
//   }, []);

//   const handelRoleChange = (id, role) => {
//     axios
//       .post("http://localhost:8080/updateRole", { id, role })
//       .then((res) =>{
//          alert(res.data.message)
//          setDatas((e) =>
//           e.map((user) =>
//             user._id === id ? { ...user, role: role } : user
//           )
//         );
//         })
//       .catch((err) => {
//         console.log(err)
//       });
//   };

//   const handelDelete = (email) => {
//     axios
//       .post("http://localhost:8080/deleteUser", { email })
//       .then((res) => {
//         alert(res.data.message);
//         setDatas(datas.filter((u) => u.email !== email));
//       })
//       .catch((err) => console.log(err));
//   };

//   return (
//     <div className="p-6">

//   <h1 className="text-3xl font-bold mb-4">Super-Admin Page</h1>

//   {datas.length === 0 ? (
//     <p className="text-gray-500">Loading Users.....</p>
//   ) : (
//     datas.map((e, i) => (
//       <div key={i} className="mb-4 p-4 border rounded-lg shadow-sm bg-white">
//         <h3 className="text-lg font-semibold">{e.name}</h3>
//         <p className="text-gray-700">{e.email}</p>

//         <select
//           value={e.role}
//           onChange={(element) =>
//             handelRoleChange(e._id, element.target.value)
//           }
//           className="border p-2 rounded-md mt-2"
//         >
//           <option value="user">user</option>
//           <option value="admin">admin</option>
//         </select>

//         <button
//           onClick={() => handelDelete(e.email)}
//           className="ml-4 bg-red-500 text-white px-3 py-1 rounded-md hover:bg-red-600"
//         >
//           Delete
//         </button>
//       </div>
//     ))
//   )}

//   <hr className="my-6" />

//   {/* Horizontal Scroll Cards */}
//   <div className="flex gap-4 overflow-x-auto py-4">

//     {collection.map((e, i) => (
//       <div
//         key={i}
//         className="border border-gray-300 rounded-xl p-3 w-[200px] min-w-[200px] shadow-md bg-white"
//       >
//         <img
//           src={e.imageUrl}
//           className="w-full h-[120px] object-cover rounded-md"
//         />

//         <h3 className="text-lg font-semibold mt-2">
//           NAME = {e.cartName}
//         </h3>
//         <h4 className="text-sm text-gray-700">
//           DESCRIPTION = {e.cartDetails}
//         </h4>
//         <p className="text-lg font-bold text-gray-900 mt-1">
//           PRICE = ₹{e.cartPrice}
//         </p>
//       </div>
//     ))}

//   </div>
// </div>

//   );
// };

// export default Superadmin;

import React, { useEffect, useState } from "react";
import axios from "axios";
import Colection from "./Colection";

const Superadmin = () => {
  const [datas, setDatas] = useState([]);
  const [collection, setCollection] = useState([]);

  useEffect(() => {
    axios
      .get("http://localhost:8080/superadmin")
      .then((res) => {
        alert(res.data.message);
        setDatas(res.data.data);
      })
      .catch((err) => {
        console.log(err);
      });

    axios
      .get("http://localhost:8080/getcollection")
      .then((res) => {
        alert(res.data.message);
        setCollection(res.data.data);
      })
      .catch((err) => {
        alert("Error fetching collection");
        console.log(err);
      });
  }, []);

  const handelRoleChange = (id, role) => {
    axios
      .post("http://localhost:8080/updateRole", { id, role })
      .then((res) => {
        alert(res.data.message)
        setDatas((e) =>
          e.map((user) =>
            user._id === id ? { ...user, role: role } : user
          )
        );
      })
      .catch((err) => {
        console.log(err)
      });
  };

  const handelDelete = (email) => {
    axios
      .post("http://localhost:8080/deleteUser", { email })
      .then((res) => {
        alert(res.data.message);
        setDatas(datas.filter((u) => u.email !== email));
      })
      .catch((err) => console.log(err));
  };

  return (
    <div className="min-h-screen bg-gray-900 text-white p-6">

      <h1 className="text-3xl font-bold mb-6 text-blue-400">
        Super Admin Dashboard
      </h1>

      {datas.length === 0 ? (
        <p className="text-gray-400 animate-pulse">
          Loading Users.....
        </p>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {datas.map((e, i) => (
            <div
              key={i}
              className="bg-gray-800 p-5 rounded-xl shadow-lg
                         hover:shadow-blue-500/20 transition"
            >
              <h3 className="text-xl font-semibold text-blue-300">
                {e.name}
              </h3>

              <p className="text-gray-300 mt-1">
                {e.email}
              </p>

              <div className="flex items-center gap-3 mt-4">
                <select
                  value={e.role}
                  onChange={(element) =>
                    handelRoleChange(e._id, element.target.value)
                  }
                  className="bg-gray-700 p-2 rounded-lg outline-none
                             focus:ring-2 focus:ring-blue-500"
                >
                  <option value="user">user</option>
                  <option value="admin">admin</option>
                </select>

                <button
                  onClick={() => handelDelete(e.email)}
                  className="bg-red-600 hover:bg-red-700
                             px-4 py-2 rounded-lg text-sm font-semibold"
                >
                  Delete
                </button>
              </div>
            </div>
          ))}
        </div>
      )}

      <hr className="my-10 border-gray-700" />

      <h2 className="text-2xl font-bold mb-4 text-blue-400">
        Collections
      </h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {collection.map((e, i) => (
          <div
            key={i}
            className="bg-gray-800 rounded-xl p-4 shadow-lg
                 hover:shadow-blue-500/20 transition
                 flex flex-col h-full"
          >
            {/* Image box */}
            <div className="w-full h-40 bg-gray-900 rounded-lg flex items-center justify-center mb-3">
              <img
                src={e.cartimg}
                className="max-h-full max-w-full object-contain"
              />
            </div>

            {/* Product info */}
            <h3 className="text-lg font-semibold text-blue-300 line-clamp-1">
              {e.cartName}
            </h3>

            <p className="text-sm text-gray-300 mt-1 line-clamp-2 flex-grow">
              {e.cartDetails}
            </p>

            {/* Price always at bottom */}
            <p className="text-lg font-bold mt-3 text-green-400">
              ₹{e.cartPrice}
            </p>
          </div>
        ))}
      </div>


    </div>
  );
};

export default Superadmin;
