import React from 'react'
import "./Setting.css"

const setting = () => {
  return (
    <div >
        <p style={{position:"absolute",left:"150px",top:"150px"}}>First name</p>
        <p style={{position:"absolute",left:"500px",top:"150px"}}>Surname</p>
        <p style={{position:"absolute",left:"150px",top:"275px"}}>About</p>
        <p style={{position:"absolute",left:"150px",top:"520px"}}>Website</p>

        <input style={{width: "20%",backgroundColor: "#d0d0d0",borderRadius:"24px",color:" black",position:"absolute",left:"130px",top:"180px"}}></input>
        <input style={{width: "20%",backgroundColor: "#d0d0d0",borderRadius:"24px",color:" black",position:"absolute",left:"480px",top:"180px"}}></input>
        <input placeholder='Tell your story' style={{width: "47%",height:"25%",backgroundColor: "#d0d0d0",borderRadius:"24px",color:" black",position:"absolute",left:"130px",top:"300px"}}></input>
        <input placeholder='Add a link to drive traffic to your site' style={{width: "47%",height:"5%",backgroundColor: "#d0d0d0",borderRadius:"24px",color:" black",position:"absolute",left:"130px",top:"550px"}}></input>

    </div>
  )
}

export default setting