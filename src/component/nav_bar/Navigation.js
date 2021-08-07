import React from 'react';
import './Navigation.css';
import '../../App.css';

const Navigation = ({menuList, getMenuByTime, cartList}) => {
    const cartCount = cartList.reduce((initial , obj)=>{
        return initial + obj.order
      },0);
    return (
        <nav>
            <ul className="ul_container">
               {
                   menuList.map((menu,idx)=>{
                       return (
                           <li className={"list_style " + (menu.active ? 'active':'')} key={idx} onClick={()=>getMenuByTime(menu.menuTime)}>{menu.menuTime} </li>
                       )
                   })
               }
               <div className="cart_icon"><span className="pill">{cartCount}</span><i className="fas fa-cart-plus"></i></div>
            </ul>
        </nav>
    )
}

export default Navigation
