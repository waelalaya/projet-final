import React from 'react'
import "./Explore.css"
const Explore = () => {
  return (
    <div>
        <h1 style={{display:"flex",justifyContent:"center",marginTop:"3%"}}>Explore Collections</h1>
        <ul style={{display:"flex",justifyContent:"space-between",margin:"0px",marginTop:"5%",fontSize:"18px",listStyle:"none",borderBottom:"1px gray solid"}}>
          <li>Trending</li>
          <li>Top</li>
          <li>Art</li>
          <li>Collectibles</li>
          <li>Photography</li>
          <li>Sports</li>
          <li>Utility</li>
          <li>Virtual worlds</li>
        </ul>
    </div>
  )
}

export default Explore