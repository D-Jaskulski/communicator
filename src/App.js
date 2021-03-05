import "./App.scss";
import { useState } from "react";
import LoginPage from "./LoginPanel/LoginPanel";

function App() {
    const [userData, setUserData] = useState(null);

    if (userData) {
        return (
            <div>
                congrat...you're on the next level <br />
                {userData.me.name} {userData.authToken}
            </div>
        );
    } else {
        return <LoginPage onSuccess={setUserData} />;
    }
}

export default App;
