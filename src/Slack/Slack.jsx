import React, { useState } from "react";
import styles from "./Slack.module.scss";
import ChannelsList from "./ChannelsList";
import Messages from "./messages/Messages";

function Slack({ userData }) {
    const [currentChannelId, setCurrentChannelId] = useState(null);
    return (
        <div className={styles.container}>
            <div className={styles.channelsList}>
                <ChannelsList
                    token={userData.authToken}
                    userId={userData.userId}
                    name={userData.me.name}
                    setCurrentChannel={setCurrentChannelId}
                    currentChannelId={currentChannelId}
                />
            </div>

            <div className={styles.messages}>
                {currentChannelId && (
                    <Messages
                        channelId={currentChannelId}
                        token={userData.authToken}
                        userId={userData.userId}
                    />
                )}
            </div>
        </div>
    );
}

export default Slack;
