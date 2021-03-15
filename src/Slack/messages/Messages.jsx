import React, { useEffect, useState } from "react";
import { API_URL } from "../../api";
import MessagesInput from "./MessagesInput";
import styles from "./Messages.module.scss";

function Messages({ channelId, token, userId }) {
    const [messages, setMessages] = useState([]);

    const getMessages = () => {
        fetch(API_URL + `/channels.messages?roomId=${channelId}`, {
            method: "GET",
            headers: {
                "Content-Type": "application/json",
                "X-Auth-Token": token,
                "X-User-Id": userId,
            },
        })
            .then((response) => {
                return response.json();
            })
            .then((response) => {
                setMessages(response.messages.reverse());
            });
    };
    useEffect(() => {
        getMessages();
    }, [channelId, token, userId]);
    return (
        <div className={styles.messagesContainer}>
            <div className={styles.displayedMessages}>
                Current channel:
                {channelId}
                {messages.map((message) => (
                    <div>
                        {message.u.name} : {message.msg}
                    </div>
                ))}
            </div>
            <div className={styles.inputContainer}>
                <MessagesInput
                    token={token}
                    userId={userId}
                    channelId={channelId}
                    updateMessages={getMessages}
                />
            </div>
        </div>
    );
}

export default Messages;
