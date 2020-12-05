import React, { useState,useEffect } from 'react'
import { DeleteOutlined, BankOutlined,DollarCircleOutlined,CreditCardOutlined} from'@ant-design/icons';

import './cart.css'
import axios from 'axios'

let Cart =(props)=>{
 let [cart,setcart]=useState([]);
 const [data, setData] = useState([]);
 let [totalamt,setTotalamt]=useState({amt:0,ship:0,total:0});

 
 useEffect(()=>{
    //axios.get('https://fakestoreapi.com/products?limit=2')
    //.then(res=>{const data=res.data; console.log(data);setcart(data) });
    
   let temp = props.sendcart;
   console.log(temp);
   
   setcart((olddata)=>{
   let newdata= olddata.concat(temp);
   newdata.forEach(function (element) {
      element.qty = 0;
    });
      return newdata;
      console.log(cart);         
   })
      
},[]);
 

 let deleteFromCart=(id2)=>{
   setcart((oldcart)=>{
      let newcart=oldcart.filter((x) => x.id !== id2);
      return newcart;
   })
       console.log("delete from cart success"); console.log(cart);
 }


 let cartTotal=()=>{
   if(cart.length===0){ setTotalamt({amt:0,ship:0,total:0})}
   else{
   let temp=0;let qtysum=0;
    for(let i=0;i<cart.length;i++){
        qtysum=qtysum+cart[i].qty;
       let unit=cart[i].price*cart[i].qty;
        temp=temp+unit;
      
    }setTotalamt({amt:temp,ship:qtysum*5,total:temp+cart.length*5});
 }}
 
 useEffect(()=>{
   cartTotal();
 },[cart])

 

 
 let qtyInc=(id)=>{
   let tempcart=[...cart]
   console.log(tempcart)
   console.log(id);
   tempcart[id].qty++;
   setcart(tempcart);
      console.log(tempcart[id].qty)
      
}

let qtyDec=(id)=>{
   let tempcart=[...cart]
   console.log(tempcart)
   console.log(id);
   tempcart[id].qty--;
   setcart(tempcart);
      console.log(tempcart[id].qty)
   
}


    return (
       <div className="cart-wrap">
        
          <div className="cart-list">  <div className="order-title">Order Summary  </div>
         
             {cart.map((cart,index) => (
                <div className="cart-item">
                    
                   <img className="cart-img" src={cart.image}></img>
                   <div className="cart-data">
                      <div className="cart-name">{cart.title}</div>
                      <div className="cart-price">${cart.price}</div>
                      <div className="cart-qty">Quantity: <span onClick={()=>{qtyDec(index)}} className="dec"> - </span>{cart.qty}<span onClick={()=>{qtyInc(index)}} className="inc"> + </span></div>
                   </div>
                   <div className="cart-del">
                      <DeleteOutlined onClick={()=>deleteFromCart(cart.id)} />
                   </div>
                </div>
             ))}
           <p> </p>
          TODO: execute cart setState from parent component to avoid re-render after route swithch</div>
         
          <div className="cart-payment">
            <div className="text"> Price Details</div> 
          <div className="check-info">
              
                <div className="amounts">
             <p>Subtotal</p> <div>${totalamt.amt}</div>
                </div>
                <div className="amounts" style={{borderBottom:"2px dashed silver", marginBottom:"8px"}}>
                   <p>Shipping</p> <div>${totalamt.ship}</div>
                </div>
                
                <div className="amounts">
             <p>Total</p> <div style={{fontWeight:"bold"}}>${totalamt.total}</div>
                </div>
             </div>


              
                  <div id='pay-title'>Choose your payment method</div> 
                  <div className="pay-method">
                  <button><DollarCircleOutlined style={{fontSize:"20px"}}/> <div>Cash on Delivery</div></button>
                  <button><CreditCardOutlined style={{fontSize:"20px"}}/> <div> Credit/Debit Card</div></button>
                  <button><BankOutlined style={{fontSize:"20px"}}/><div> Online Banking</div></button>
               </div>

            </div>
       </div>
    );
}
export default Cart;