import React from "react";

function Buttons({ name, bkgColor='#fff', color='#111828' }) {
    return (
        <button className="p-2 mr-2 rounded" style={{background: bkgColor, color: color}}>{name}</button>
    );
}

export default Buttons;