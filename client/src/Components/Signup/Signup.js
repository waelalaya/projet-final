import "./Signup.css";
import {useState} from "react"
import {useDispatch}from "react-redux"
import { registerUser } from '../../JS/actions/user';
import {loginUser} from '../../JS/actions/user'
import { useNavigate } from "react-router-dom";
const Signup = () => {
  const [name, setName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const dispatch=useDispatch();
  const navigate=useNavigate();
  

  const handleRegister=(e)=>{
    e.preventDefault()
    dispatch(registerUser({name,lastName,email,password},navigate))
  }
  const handleLogin=(e)=>{
    e.preventDefault()
    dispatch(loginUser({email,password},navigate))
  }



    return (
      <div className="bodyy">
        <div className="main">  	
          <input type="checkbox" id="chk" aria-hidden="true" />
          <div className="signup">
            <form>
              <label htmlFor="chk" aria-hidden="true" style={{color:"#6b0000"}}>Sign up</label>
              <input type="text" name="txt" placeholder="name" required onChange={(e)=>setName(e.target.value)} />
              <input type="text" name="txt" placeholder="last name" required onChange={(e)=>setLastName(e.target.value)} />
              <input type="email" name="email" placeholder="Email" required onChange={(e)=>setEmail(e.target.value)} />
              <input type="password" name="pswd" placeholder="Password" required onChange={(e)=>setPassword(e.target.value)} />
              <button onClick={handleRegister}>Sign up </button>
            </form>
          </div>
          <div className="login">
            <form>
              <label htmlFor="chk" aria-hidden="true">Login</label>
              <input type="email" name="email" placeholder="Email" required onChange={(e)=>setEmail(e.target.value)} />
              <input type="password" name="pswd" placeholder="Password" required onChange={(e)=>setPassword(e.target.value)}/>
              <button onClick={handleLogin}>Login</button>
            </form>
          </div>
        </div>
      </div>
    );
  
}
  

export default Signup;
