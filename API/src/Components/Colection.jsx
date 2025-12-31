// import axios from "axios";
// import React, { useEffect, useState } from "react";

// const Colection = () => {
//   let [cartName, setCartName] = useState("");
//   let [cartDetails, setCartDetails] = useState("");
//   let [cartPrice, setCartPrice] = useState("");
//   let [cartImgFile , setCartImgFile] = useState(null)
//   let [collection, setCollection] = useState([]);

//   let cloudname = "dkwetapcb";
//   let preset = "New_Project";

//   useEffect(() => {
//     axios
//       .get("http://localhost:8080/getcollection")
//       .then((res) => {
//         alert(res.data.message);
//         setCollection(res.data.data);
//       })
//       .catch((err) => {
//         alert(err);
//       });
//   }, []);

//   let handelCreateCollecton = async () => {

//     let formData = new FormData()
//     formData.append("file",cartImgFile)
//     formData.append("upload_preset",preset) 

//      let res = await axios.post(`https://api.cloudinary.com/v1_1/${cloudname}/image/upload`, formData)

//      let imageurl = res.data.secure_url

//  axios
//       .post("http://localhost:8080/submitcollection", {
//         cartName,
//         cartDetails,
//         cartPrice,
//         imageurl,
//       })
//       .then((res) => {
//         alert(res.data.message);
//         setCartName("");
//         setCartDetails("");
//         setCartPrice("");
//         setCartImgFile("")
//       })
//       .catch((err) => {
//         alert(err);
//       });
//   };

//   let handelDeletCart = (id) => {
//     axios
//       .post("http://localhost:8080/deletecart", { id })
//       .then((res) => {
//         alert(res.data.message);
//         setCollection((e) => e.filter((item) => item._id !== id));
//       })
//       .catch((err) => {
//         alert(err);
//       });
//   };

//   let handelimage = ((e)=>{
//     let file = e.target.files[0]
//     setCartImgFile(file)
//   })

//   return (
//     <div>
//       <input 
//         type="file"
//         accept="image/*"
//         onChange={(e)=>handelimage(e)}      />
//       <input
//         type="text"
//         value={cartName}
//         placeholder="Entear Name..."
//         onChange={(e) => setCartName(e.target.value)}
//       />
//       <input
//         type="text"
//         value={cartDetails}
//         placeholder="Entear Details..."
//         onChange={(e) => setCartDetails(e.target.value)}
//       />
//       <input
//         type="text"
//         value={cartPrice}
//         placeholder="Entear Price..."
//         onChange={(e) => setCartPrice(e.target.value)}
//       />
//       <button onClick={handelCreateCollecton}>creat-collection</button>

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
//             <img src={e.imageUrl} style={{width:"100%",height:"120px",objectFit:"cover"}}/>

//             <h3 style={{ fontSize:"18px", marginBottom:"5px" }}>
//               NAME = {e.cartName}
//             </h3>
//             <h4 style={{ fontSize:"14px", marginBottom:"5px" }}>
//               DESCRIPTION = {e.cartDetails}
//             </h4>
//             <p style={{ fontSize:"16px", fontWeight:"bold" }}>
//               PRICE = ₹{e.cartPrice}
//             </p>

//             <button>Edit</button>
//             &nbsp;
//             <button onClick={() => handelDeletCart(e._id)}>Delet</button>
//           </div>
//         ))}
//       </div>
//     </div>
//   );
// };

// export default Colection;

import axios from "axios";
import React, { useEffect, useState } from "react";

const Colection = () => {
  let [cartName, setCartName] = useState("");
  let [cartDetails, setCartDetails] = useState("");
  let [cartPrice, setCartPrice] = useState("");
  let [cartImgFile, setCartImgFile] = useState(null)
  let [collection, setCollection] = useState([]);

  let cloudname = "dkwetapcb";
  let preset = "New_Project";

  useEffect(() => {
    axios
      .get("http://localhost:8080/getcollection")
      .then((res) => {
        alert(res.data.message);
        setCollection(res.data.data);
      })
      .catch((err) => {
        alert(err);
      });
  }, []);

  let handelCreateCollecton = async () => {

    let formData = new FormData()
    formData.append("file", cartImgFile)
    formData.append("upload_preset", preset)

    let res = await axios.post(
      `https://api.cloudinary.com/v1_1/${cloudname}/image/upload`,
      formData
    )

    let imageurl = res.data.secure_url

    axios
      .post("http://localhost:8080/submitcollection", {
        cartName,
        cartDetails,
        cartPrice,
        imageurl,
      })
      .then((res) => {
        alert(res.data.message);
        setCartName("");
        setCartDetails("");
        setCartPrice("");
        setCartImgFile("")
      })
      .catch((err) => {
        alert(err);
      });
  };

  let handelDeletCart = (id) => {
    axios
      .post("http://localhost:8080/deletecart", { id })
      .then((res) => {
        alert(res.data.message);
        setCollection((e) => e.filter((item) => item._id !== id));
      })
      .catch((err) => {
        alert(err);
      });
  };

  let handelimage = (e) => {
    let file = e.target.files[0]
    setCartImgFile(file)
  }

  return (
    <div className="mt-10 bg-gray-900 text-white p-6 rounded-xl">

      <h2 className="text-2xl font-bold mb-6 text-blue-400">
        Create Collection
      </h2>

      {/* Form */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
        <input
          type="file"
          accept="image/*"
          onChange={(e) => handelimage(e)}
          className="file:bg-blue-600 file:text-white file:px-4 file:py-2
                     file:rounded-lg file:border-0 bg-gray-800
                     text-gray-300 rounded-lg p-2"
        />

        <input
          type="text"
          value={cartName}
          placeholder="Enter Name..."
          onChange={(e) => setCartName(e.target.value)}
          className="bg-gray-800 p-3 rounded-lg outline-none
                     focus:ring-2 focus:ring-blue-500"
        />

        <input
          type="text"
          value={cartDetails}
          placeholder="Enter Details..."
          onChange={(e) => setCartDetails(e.target.value)}
          className="bg-gray-800 p-3 rounded-lg outline-none
                     focus:ring-2 focus:ring-blue-500"
        />

        <input
          type="text"
          value={cartPrice}
          placeholder="Enter Price..."
          onChange={(e) => setCartPrice(e.target.value)}
          className="bg-gray-800 p-3 rounded-lg outline-none
                     focus:ring-2 focus:ring-blue-500"
        />
      </div>

      <button
        onClick={handelCreateCollecton}
        className="bg-blue-600 hover:bg-blue-700 transition
                   px-6 py-3 rounded-lg font-semibold mb-8"
      >
        Create Collection
      </button>

      {/* Collection List */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {collection.map((e, i) => (
          <div
            key={i}
            className="bg-gray-800 rounded-xl p-4 shadow-lg
                 hover:shadow-blue-500/20 transition
                 flex flex-col h-full"
          >
            {/* Image box */}
            <div className="w-full h-40 bg-gray-900 rounded-lg
                      flex items-center justify-center mb-3">
              <img
                src={e.imageUrl}
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

            <p className="text-lg font-bold mt-2 text-green-400">
              ₹{e.cartPrice}
            </p>

            {/* Action buttons fixed at bottom */}
            <div className="flex gap-2 mt-4">
              <button
                className="flex-1 bg-yellow-500 hover:bg-yellow-600
                     text-black py-2 rounded-md text-sm font-semibold"
              >
                Edit
              </button>

              <button
                onClick={() => handelDeletCart(e._id)}
                className="flex-1 bg-red-600 hover:bg-red-700
                     py-2 rounded-md text-sm font-semibold"
              >
                Delete
              </button>
            </div>
          </div>
        ))}
      </div>


    </div>
  );
};

export default Colection;
