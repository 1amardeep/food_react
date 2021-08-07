import React from 'react';
import './FoodCard.css';

const FoodCard = ({ menuList, dispatch }) => {
    return (
        <div className="foodcard_container">
            {
                menuList.map((menu, idx) => {
                    return (
                        <div className="card" key={idx}>
                            {menu.order>0 ? <div className="selected"></div> : ''}
                            <h1 className="text_center">{menu.name}</h1>
                            <p className="text_center">{menu.discription}</p>
                            <img src={menu.img} alt="" width="200px" height="200px" />
                            <div className="card_header">
                                <div className="price">Price : {menu.price}</div>
                                <div className="order">X {menu.order}</div>
                                <button className="btn incr" onClick={()=>dispatch({type : 'increment', menu})}><i className="fas fa-plus-square"></i></button>
                                <button className="btn decr" onClick={()=>dispatch({type : 'decrement', menu})}><i className="fas fa-minus-square"></i></button>
                            </div>
                        </div>
                    )
                })
            }
        </div>
    )
}

export default FoodCard
