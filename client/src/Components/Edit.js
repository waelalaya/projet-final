// import axios from "axios";
// import React, { useState } from "react";
// import { useDispatch, useSelector } from "react-redux";
// import { editCart } from "../JS/actions/Cart";
// import "./Add.css"

// const Edit = () => {
//   const user = useSelector((state) => state.userReducer.user);
//   const [card, setCard] = useState({ title: "", description: "", image: "", postedBy:user.name ,price:""});
// const [show, setshow] = useState(false)
//   const dispatch = useDispatch();
//   const uploadFileHandler = async (e) => {
//     const file = e.target.files[0];
//     const bodyFormData = new FormData();
//     bodyFormData.append("file", file);
//     const { data } = await axios.post(
//       "http://localhost:5000/story/uploads",
//       bodyFormData
//     );
//     console.log(data);
//     setCard({ ...card, image: data });
//   };
//   return (
//       <div className="addbutton">
//       <button onClick={()=>setshow(!show)}>
//         Edit Image
//       </button>
//     {show?  <div  className="mod">
        
//         <div className="mod-b">

//             <button  onClick={()=>setshow(!show)}>close</button>
          
//           <input
//             type="text"
//             placeholder="Add your image"
//             onChange={(e) => setCard({ ...card, image: e.target.value })}
//             />
//           <input
//             type="title"
//             placeholder="title"
//             onChange={(e) => setCard({ ...card, title: e.target.value })}
//             />
            
//           <input
//             type="Description"
//             placeholder="description"
//             onChange={(e) => setCard({ ...card, description: e.target.value })}
//             />
//              <input
//             type="price"
//             placeholder="price"
//             onChange={(e) => setCard({ ...card, price: e.target.value })}
//             />
//              <button
//             class="modal__btn"
//             onClick={() =>
//               dispatch(
//                 editCart(card)
//               )
//             }
//           >
//             Button &rarr;
//           </button>
          
//         </div>
//       </div>:null}
//     </div>
     
//   );
// };

// export default Edit;