import {useState} from "react";
import LoginPage from "./LoginPanel/LoginPanel.jsx";
import Slack from "./Slack/Slack.jsx";

function App() {
    const [userData, setUserData] = useState(null);

    if (userData) {
        return (
        <Slack userData={userData}/>
        );
    } else {
        return <LoginPage onSuccess={setUserData} />;
    }
}

export default App;
