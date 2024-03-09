import React, { useState } from "react";
import "../statics/css/styleMenu.css"

export function Menu(props) {
    const [menu, activeMenu] = useState(false)


    return (
        <div className={`menu ${menu ? "menu-on" : ""}`}>
            <div className={`menu_hamburguer ${menu ? "menu_hamburger-on" : "menu_hamburger-of"}`} onClick={() => activeMenu((state)=>!state)}>
                <span></span>
                <span></span>
                <span></span>
            </div>
        </div>
    )
}
