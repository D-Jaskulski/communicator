import { useState } from "react";
import LoginPage from "./LoginPanel/LoginPanel.jsx";
import Slack from "./Slack/Slack.jsx";
import ChannelsContext from "./channelsContext";

function App() {
    const [userData, setUserData] = useState(null);
    // const [channelsList, setChannelsList] = useState([]);
    if (userData) {
        return (
            <ChannelsContext.Provider>
                <Slack userData={userData} />
            </ChannelsContext.Provider>
        );
    } else {
        return <LoginPage onSuccess={setUserData} />;
    }
}

export default App;
