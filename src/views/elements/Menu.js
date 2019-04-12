import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import { Link, Route } from 'react-router-dom';

const menus = [
    {
        name: "Trang chủ",
        to: "/manager",
        exact: true
    },
    {
        name: "Quản lý nguồn tin",
        to: "/manager/sources",
        exact: false
    },
    {
        name: "Quản lý chuyên mục",
        to: "/manager/category",
        exact: false
    },
    {
        name: "Quản lý tin tức",
        to: "/manager/news",
        exact: false
    },
    {
        name: "Quản lý người dùng",
        to: "/manager/user",
        exact: false
    },

]




class Menu extends Component {

    showMenus = (menus) => {
        var result = null
        if (menus.length > 0) {
            result = menus.map((menu, i) => {
                return (<li key={i}>
                    <Link className="app-menu__item" to={menu.to} exact={menu.exact}>
                        <span className="app-menu__label">{menu.name}</span>
                    </Link>
                </li>)
            })
        }
        return result
    }

    render() {
        return (
            <div>
                {this.showMenus(menus)}
            </div>
        )
    }

}
export default Menu;
