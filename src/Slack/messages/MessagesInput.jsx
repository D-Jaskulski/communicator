import React, { useState } from "react";
import { API_URL } from "../../api";
function MessagesInput(token, userId, channelId, updateMessages) {
    const [message, setMessage] = useState(" ");

    const sendMessage = () => {
        fetch(API_URL + `/chat.postMessage`, {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
                "X-Auth-Token": token,
                "X-User-Id": userId,
            },
            body: JSON.stringify({
                text: message,
                roomId: channelId,
            }),
        }).then(() => {
            updateMessages();
        });
    };
    return (
        <div>
            <input
                value={message}
                onChange={(e) => setMessage(e.target.value)}
            />
            <button onClick={sendMessage}>Send</button>
        </div>
    );
}

export default MessagesInput;
