import React, { useEffect, useState} from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { getCart } from '../JS/actions/Cart'
import Cart from './Cart'

const Cartlist = () => {
    const dispatch = useDispatch()
    const Carts = useSelector(state => state.Cartreducer.Carts)
    const loadCarts = useSelector(state => state.Cartreducer.loadCarts)
    useEffect(() => {
        dispatch(getCart())
        
    }, [dispatch])
    const [search, setsearch] = useState("");
    const searchCart = (search) => { setsearch(search);};
   
    return (
         <div>
              

             <input placeholder='Search'style={{width:"600px",borderRadius:"15px"}}  onChange={(e) => searchCart(e.target.value)} />
        <div style={{display:"grid", gridTemplateColumns:"30% 30% 30%", marginLeft:"10%",gridGap:"20px"}}>
           {loadCarts? (<h2>loading...</h2>): 
           (Carts.filter(el=>el.title.includes(search)).map(el => <Cart key={el._id} Cart={el}/>))}
          
           
        </div>

        </div>
    )
}

export default Cartlist