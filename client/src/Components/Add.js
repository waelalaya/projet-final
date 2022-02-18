import axios from "axios";
import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addCart } from "../JS/actions/Cart";
import "./Add.css"

const Add = () => {
  const user = useSelector((state) => state.userReducer.user);
  const [card, setCard] = useState({ title: "", description: "", image: "", postedBy:user.name ,price:""});

  const dispatch = useDispatch();
  const uploadFileHandler = async (e) => {
    const file = e.target.files[0];
    const bodyFormData = new FormData();
    bodyFormData.append("file", file);
    const { data } = await axios.post(
      "http://localhost:5000/story/uploads",
      bodyFormData
    );
    console.log(data);
    setCard({ ...card, image: data });
  };
  return (
      <div className="addbutton">
      <a href="#modal-opened" class="link-1" id="modal-closed">
        Add Image
      </a>
      <div class="modal-container" id="modal-opened">
        
        <div class="modal">
          
          <input
            type="file"
            placeholder="Add your image"
            onChange={uploadFileHandler}
            />
          <input
            type="title"
            placeholder="title"
            onChange={(e) => setCard({ ...card, title: e.target.value })}
            />
            
          <input
            type="Description"
            placeholder="description"
            onChange={(e) => setCard({ ...card, description: e.target.value })}
            />
             <input
            type="price"
            placeholder="price"
            onChange={(e) => setCard({ ...card, price: e.target.value })}
            />
             <button
            class="modal__btn"
            onClick={() =>
              dispatch(
                addCart(card)
              )
            }
          >
            Button &rarr;
          </button>
          
          <a href="#modal-closed" class="link-2"></a>
        </div>
      </div>
    </div>
     
  );
};

export default Add;