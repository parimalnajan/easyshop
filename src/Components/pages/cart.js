import React, { useState,useEffect } from 'react'
import { DeleteOutlined, BankOutlined,DollarCircleOutlined,CreditCardOutlined} from'@ant-design/icons';

import './cart.css'
import axios from 'axios'

let Cart =(props)=>{

 let [cart,setcart]=useState([]);
 const [products, setproducts] = useState([]);
 useEffect(()=>{
    axios.get('https://fakestoreapi.com/products?limit=2')
    .then(res=>{const data=res.data; console.log(data);setcart(data) });
      
},[]);
 let prod=products[0];
 console.log(prod);


 let addtocart=(item)=>{
     let tempitem=item;
     setcart(cart.concat(item));
     console.log("add to cart success"); console.log(cart);
 }


    return (
       <div className="cart-wrap">
        
          <div className="cart-list">  <div className="order-title">Order Summary  </div>
         
             {cart.map((item, index) => (
                <div className="cart-item">
                    
                   <img className="cart-img" src={item.image}></img>
                   <div className="cart-data">
                      <div className="cart-name">{item.title}</div>
                      <div className="cart-price">${item.price}</div>
                      <div className="cart-qty">Quantity:2</div>
                   </div>
                   <div className="cart-del">
                      <DeleteOutlined />
                   </div>
                </div>
             ))}
           <p> </p>
          </div>
         
          <div className="cart-payment">
            <div className="text"> Price Details</div> 
          <div className="check-info">
              
                <div className="amounts">
                   <p>Subtotal</p> <div>$420</div>
                </div>
                <div className="amounts" style={{borderBottom:"2px dashed silver", marginBottom:"8px"}}>
                   <p>Shipping</p> <div>$69</div>
                </div>
                
                <div className="amounts">
                   <p>Total</p> <div style={{fontWeight:"bold"}}>$489</div>
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