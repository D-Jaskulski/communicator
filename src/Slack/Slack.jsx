import React from "react";
import "./Slack.scss";

const Slack =({name, token}) => {
    return (
    <div className = "chat-main-style">
        <div className= "chat-navigation-panel">
            <div className= "user-name">
            {name} {token}
            </div>
            <input
                className="look-up"
                type = "text"
                placeholder="jump to">
            </input>
            <div className = "channels-style">
                <label className="channels-headers">Channels</label>
                <li>front-end devs</li>
                <li>graphic-designers</li>
                <li>travels</li>
                <li>human resources</li>
            </div>
        </div>
    </div>
    )
}

export default Slack;