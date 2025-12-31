// import axios from 'axios';
// import React, { useEffect, useState } from 'react'

// const Home = () => {

//   let userdata =  JSON.parse(localStorage.getItem("userdata"))
//   const [collection, setCollection] = useState([]);


//    useEffect(()=>{
//     axios
//           .get("http://localhost:8080/getcollection")
//           .then((res) => {
//             alert(res.data.message);
//             setCollection(res.data.data);
//           })
//           .catch((err) => {
//             alert("Error fetching collection");
//             console.log(err);
//           });
//    },[])

//   return (
//     <div>
//       <h1>Wlcome {userdata.name}</h1>
//       <div style={{
//           display:"flex",
//           flexWrap:"nowrap",
//           overflowX:"auto",
//           gap:"15px",
//           padding:"10px",
//         }}>

//         {collection.map((e, i) => (
//           <div key={i} style={{
//               border:"1px solid #ccc",
//               borderRadius:"10px",
//               padding:"10px",
//               width:"200px",
//               minWidth:"200px",
//               boxShadow:"0 0 5px rgba(0,0,0,0.1)",
//               flexShrink:0,
//             }}>
//             <img src={e.cartimg} style={{width:"100%",height:"120px",objectFit:"cover"}}/>

//             <h3 style={{ fontSize:"18px", marginBottom:"5px" }}>
//               NAME = {e.cartName}
//             </h3>
//             <h4 style={{ fontSize:"14px", marginBottom:"5px" }}>
//               DESCRIPTION = {e.cartDetails}
//             </h4>
//             <p style={{ fontSize:"16px", fontWeight:"bold" }}>
//               PRICE = ₹{e.cartPrice}
//             </p>
//           </div>
//         ))}
//       </div>
//     </div>
//   )
// }

// export default Home

import axios from 'axios';
import React, { useEffect, useState } from 'react'

const Home = () => {

  let userdata = JSON.parse(localStorage.getItem("userdata"))
  const [collection, setCollection] = useState([]);

  useEffect(() => {
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
  }, [])

  return (
    <div className="min-h-screen bg-gray-900 text-white p-6">

      <h1 className="text-3xl font-bold mb-6 text-blue-400">
        Welcome {userdata.name}
      </h1>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {collection.map((e, i) => (
          <div
            key={i}
            className="bg-gray-800 rounded-xl p-4 shadow-lg
                 hover:shadow-blue-500/20 transition
                 flex flex-col h-full"
          >
            {/* Image */}
            <div className="w-full h-40 flex items-center justify-center bg-gray-900 rounded-lg mb-3">
              <img
                src={e.cartimg}
                className="max-h-full max-w-full object-contain"
              />
            </div>

            {/* Content */}
            <h3 className="text-lg font-semibold text-blue-300 line-clamp-1">
              {e.cartName}
            </h3>

            <p className="text-sm text-gray-300 mt-1 line-clamp-2 flex-grow">
              {e.cartDetails}
            </p>

            {/* Price fixed at bottom */}
            <p className="text-lg font-bold mt-3 text-green-400">
              ₹{e.cartPrice}
            </p>
          </div>
        ))}
      </div>


    </div>
  )
}

export default Home
