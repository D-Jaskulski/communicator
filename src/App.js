import "./App.scss";
import { useState } from "react";
import LoginPage from "./LoginPanel/LoginPanel";
import Slack from "./Slack/Slack";

function App() {
    const [userData, setUserData] = useState(null);

    if (userData) {
        return (
            <div>
                <Slack name={userData.me.name} token={userData.authToken} />
            </div>
        );
    } else {
        return <LoginPage onSuccess={setUserData} />;
    }
}

export default App;
