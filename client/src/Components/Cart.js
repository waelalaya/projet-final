import React from 'react'
import { useDispatch} from 'react-redux'
import { deleteCart } from '../JS/actions/Cart'
import "./Cart.css"
import Edit from './Edit'
const Cart = ({Cart}) => {
  const dispatch=useDispatch()

    return (
        <div >
       <div class="wrap">
  <div class="product" >
    <div style={{display:'flex', alignItems:"center",justifyContent:"space-between"}}>
  <p class="price">{Cart.postedBy}</p>
  <p className='price2' >{Cart.price}$</p>
  </div>
    <img class="duration" src={`${Cart.image}`}/>
    <div class="product-descr">
    <p>{Cart.title}</p>
      <p style={{fontSize:"0.6rem"}}>{Cart.description}</p>
      
    </div>
    {window.location.pathname.includes("/Resources")?<a href="#" class="btn btn-color1">BUY</a>:null}

    

    {window.location.pathname.includes("/Dashbord")?<button onClick={()=>dispatch(deleteCart(Cart._id))}>delete</button>:null}
    {window.location.pathname.includes("/Dashbord")?<button style={{backgroundColor:"green"}}>Edit</button>:null}



  </div>
  </div>

        </div>
    )
}

export default Cart