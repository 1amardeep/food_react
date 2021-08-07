import React, { useState,useReducer } from 'react';
import Navigation from './component/nav_bar/Navigation';
import menuList from './menu';
import FoodCard from './component/food_card/FoodCard';
import './App.css';
import { reducer } from './reducer';

let navState = [{ menuTime: 'All', active: true }, ...Array.from(new Set(menuList.map(obj => obj.menuTime))).map((menuTime) => {
    return {
        menuTime,
        active: false
    }
})]

const App = () => {

    const [menuLists, setmenuLists] = useState(menuList);
    const [navList, setnavList] = useState(navState);
    const [cartList, dispatch] = useReducer(reducer, []);

    const getMenuByTime = (time) => {
        setNav(time);
        if (time === 'All') {
            setmenuLists(menuList);
            return;
        }
        setMenu(time);
    }

    const setNav = (time) => {
        navState = navState.map((obj) => {
            if (time === obj.menuTime) {
                obj = { ...obj, active: true };
            } else {
                obj = { ...obj, active: false };
            }
            return obj;
        });
        setnavList(navState);
    }

    const setMenu = (time) => {
        let filterMenuList = menuList.filter((obj) => {
            return obj.menuTime === time;
        });
        setmenuLists(filterMenuList);
    }

    return (
        <div>
            <h1 className="header"><i className="fas fa-hamburger"></i><span id="business_name">Restaurant Cart</span></h1>
            <Navigation menuList={navList} getMenuByTime={getMenuByTime} cartList={cartList} />
            <FoodCard menuList={menuLists} dispatch={dispatch}/>
        </div>
    )
}

export default App




