import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link, useNavigate } from 'react-router-dom';
import { current, logout } from '../../JS/actions/user';
import image8 from "./profil.png"
import "./Dashbord.css"
import { getCart } from '../../JS/actions/Cart';
import Cart from '../Cart';



const Dashbord = () => {
  const dispatch=useDispatch()
  const navigate=useNavigate()
  useEffect(() => {
    dispatch(current());
    dispatch(getCart());
  }, []);
  const user = useSelector((state) => state.userReducer.user);
  const Carts = useSelector(state => state.Cartreducer.Carts)
  const loadCarts = useSelector(state => state.Cartreducer.loadCarts)
 
  
  
  return <div>
    
    <div className='dash'>
      <div className='profil'>
      <Link to="/setting" style={{textDecoration:"none"}}><button style={{width: "100%",fontSize: "20px",backgroundColor: "#d0d0d0",borderRadius:"24px",color:" black"}}>Edit profil</button></Link>
      <button style={{width: "100%",fontSize: "20px",backgroundColor: "#d0d0d0",borderRadius:"24px",color:" black"}}>Change your photo</button>

        {user ? user.name : <h1>loading...</h1> }
        
    </div>
    <img style={{width: "128px",height: "128px",left: "45%",top: "20%",border: "1px solid #000000",boxSizing: "border-box",borderRadius:"80px"}} src={user.image}/>
        
         <input placeholder='Search'style={{width:"600px",borderRadius:"15px"}}/></div>
         <button style={{width:"5%"}} onClick={()=>{dispatch(logout());
    navigate("/")
    }}>Logout</button>
    <img/>



   <div style={{display:"flex" ,justifyContent:"space-around"}}>
   {loadCarts? (<h2>loading...</h2>): 
           (Carts.filter(el=>el.postedBy==user?.name).map(el => <Cart key={el._id} Cart={el}/>))}
   </div>
        
    </div>;
};

export default Dashbord;

