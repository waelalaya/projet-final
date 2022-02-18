import React from 'react';
import "./Home.css"
import image1 from "./photossss 1.png"
import image2 from "./hj 1.png"
import { Link } from 'react-router-dom';

const Home = () => {
  return <div className='home'>
    
   <div className='home-container'>
      
    <div className='text'>
       <h1 style={{fontSize:"35px"}}>Discover, collect, and sell your photos</h1>  
    <h3  style={{fontSize:"20px"}}>Your PIC is the world's first and largest Photos marketplace...</h3>
    <div style={{display:"flex",alignItems:"center"}}>
      <ion-icon name="send"></ion-icon>
    <h2 >Learn more about Your PIC</h2>
    </div>

  
    <div style={{display:"flex",justifyContent:"space-around"}}>
    <Link to="/Explore"><button style={{width:"165px",height:"66px",backgroundColor:"blue",color:"white",borderRadius:"20px",fontSize:"30px"}}>Explore</button></Link>
    <Link to="/Add"><button style={{width:"165px",height:"66px",backgroundColor:"white",color:"black",borderRadius:"20px",fontSize:"30px"}}>Create</button></Link>
    </div>
  
 </div>
     <img style={{fontSize:"50%"}} src={image2}/>
   </div>

  </div>;
};

export default Home;
