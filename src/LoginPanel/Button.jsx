import React from 'react';
import "./LoginPanel.styles.scss";

function Button({onButtonClick}) {
    return <div className= "login100-form-btn"  onClick = {onButtonClick}>Submit</div>
}

export default Button;