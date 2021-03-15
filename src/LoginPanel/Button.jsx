import React from 'react';
import "./LoginPanel.module.scss";

function Button({onButtonClick}) {
    return <div className= "login100-form-btn"  onClick = {onButtonClick}>Login</div>
}

export default Button;