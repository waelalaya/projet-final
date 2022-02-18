import React from 'react';
import "./Navbar.css";
import image from "./Group 1 (1).png"
import {Link} from "react-router-dom"
import image9 from "./wallet.jpg"
const Navbar = () => {
  const isAuth= localStorage.getItem("token")

  return <div className='navigation'>
    <Link to="/" style={{textDecoration:"none"}}><img src={image}/></Link>
      
      <div className='list'>
        <ul>
        <Link to="/Explore" style={{textDecoration:"none"}}><li>Explore</li></Link>
         <Link to="/Resources" style={{textDecoration:"none"}}><li>Resources</li></Link>
         {isAuth?<Link to="/Add" style={{textDecoration:"none"}}><li>Create</li></Link>:<Link to="/signup" style={{textDecoration:"none"}}><li>Create</li></Link>
         
         
}
     </ul>
     {isAuth?<Link to="/wallet"><ion-icon name="wallet-outline" style={{fontSize:"30px"}}></ion-icon></Link>:null}
      {isAuth?<Link to="/Dashbord"><ion-icon name="person-circle-outline" style={{fontSize:"30px"}}></ion-icon></Link>:<div style={{display:'flex'}}><Link to="/signup"style={{textDecoration:"none"}}><button style={{backgroundColor:"red", color:"white", fontFamily:"Reem Kufi",fontStyle:"normal",fontWeight:"bold",fontSize:"30px",lineHeight:"45px"}}>Login</button></Link>
      <Link to="/signup" style={{textDecoration:"none"}}><button style={{backgroundColor:"#E2DCDC", color:"black", fontFamily:"Reem Kufi",fontStyle:"normal",fontWeight:"bold",fontSize:"30px",lineHeight:"45px"}}>Register</button></Link>
   
      
      </div>}
     </div>
       
  </div>
  
};

export default Navbar;
