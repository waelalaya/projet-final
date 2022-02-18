import './App.css';
import {Route, Routes}from 'react-router-dom'
import Signup from './Components/Signup/Signup.js';
import Dashbord from './Components/Dashbord/Dashbord';
import PrivateRoute from './Components/router/PrivateRoute';
import { useDispatch } from 'react-redux';
import { current } from './JS/actions/user';
import { useEffect } from 'react';
import Navbar from './Components/Navbar/Navbar';
import Home from './Components/Home/Home';
import Add from './Components/Add';
import Cartlist from './Components/Cartlist';
import Explore from './Components/Signup/Explore';
import Setting from './Components/Dashbord/Setting';
import Footer from './Components/Footer/Footer';



function App() {
  const dispatch=useDispatch();
  useEffect(() => {
   dispatch(current()) 
  }, [dispatch]);
  
  return (
    <div className="App">
      
      
     <Navbar/>

     <Routes>
     <Route  path='/Resources' element={ <Cartlist />}/>
     <Route  path='/Explore' element={ <Explore/>}/>   
     <Route  path='/setting' element={ <Setting />}/>  
     
     <Route  path='/add' element={ <Add />}/>  
     <Route  path='/' element={ <Home />}/>
      <Route  path='/signup' element={<Signup/>}/>
      <Route element={<PrivateRoute/>}>
        <Route path="/dashbord" element={<Dashbord/>}/>
        
      </Route>
    </Routes>
    <Footer/>
    </div>
  );
}

export default App;
