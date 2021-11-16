import React from "react";
import {NavLink} from "react-router-dom"

const Menu = () => {
        return (
            <>
                <NavLink to="/">Router</NavLink>
                <br />
                <NavLink to="/Router">RouterDemo</NavLink>

                {/* You can use Link insted of NavLink also 
                and use exact attr and activeClassName as well */}
               
            </>
        ) 
}

export default Menu