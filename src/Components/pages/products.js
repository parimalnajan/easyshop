import React, { useEffect,useState, useContext } from 'react'
import store from '../../store';
import './products.scss'
import axios from 'axios'
import * as action from '../../actions/userActions';



export default function Products(props) {
const [products, setproducts] = useState([]);
//const [products2, setproducts2] = useContext([]);

useEffect(()=>{
    axios.get('https://fakestoreapi.com/products?limit=10')
    .then(res=>{const data=res.data; console.log(data);setproducts(data) ;setproducts((prevCart)=>{
        let temp=[...prevCart]
        temp.forEach(function (element) {
          element.qty = 1;
        });
        return temp;
      });});
      
},[]);


let addCart = (id) =>{
    console.log(products[id]);
props.addCall(products[id]);
}



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
                    <button className="buy-btn" onClick={()=>console.log(item.id)}>Buy Now</button>
                    <button className="cart-btn" onClick={()=>
                        addCart(item.id-1)
                    }>Add to cart</button>
                </div>
 
             </div>            
        
        
        ))}
            </div>     
        </div>
    )
}
