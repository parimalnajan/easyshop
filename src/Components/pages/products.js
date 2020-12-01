import React, { useEffect,useState } from 'react'
import store from '../../store';
import './products.scss'
import axios from 'axios'
import * as action from '../../actions/userActions';



export default function Products(props) {
const [products, setproducts] = useState([]);

useEffect(()=>{
    axios.get('https://fakestoreapi.com/products?limit=10')
    .then(res=>{const data=res.data; console.log(data);setproducts(data) });
      
},[]);

console.log(products[0]);
for (let i =0;i<products.length;i++){

    let product=products[i];
   
}

let obj={};
    const product=(obj)=>{return <div>
        {obj.a}{obj.b}{obj.c}
    </div>}
    

    return ( 
        <div className="product-page-wrap">
            <div className="product-wrap">
        {products.map((item,index) =>(
                  
             <div className="product-card">
                <div className="temp">
                <div className="product-img"><img src={item.image}></img></div>
                <div className="product-name">{item.title}</div>
                <div className="product-desc">{item.category} </div>
                <div className="product-text">{item.description} </div>
                <div className="product-price">${item.price}</div>
                </div>
                <div className="btn-wrap">
                    <button className="buy-btn" onClick={()=>console.log(products)}>Buy Now</button>
                    <button className="cart-btn">Add to cart</button>
                </div>
 
             </div>            
        
        
        ))}
            </div>     
        </div>
    )
}
