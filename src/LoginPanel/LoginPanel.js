import "./LoginPanel.styles.scss";
import React, { useState } from "react";
import Button from "./Button";

function LoginPage({ onSuccess }) {
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState("");

    const login = () => {
        setLoading(true);
        fetch("https://open.rocket.chat/api/v1/login", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify({
                user: username,
                password: password,
            }),
        })
            .then((response) => {
                return response.json();
            })
            .then((response) => {
                if (response.status !== "success") {
                    setError("Nie udało się zalogować");
                } else {
                    onSuccess(response.data);
                }
                setLoading(false);
            });
    };

    return (
        <div className="limiter">
            <div className="container-login100">
                <div className="wrap-login100">
                    <div className="login100-pic data-tilt"></div>
                    <form className="login100-form validate-form">
                        <span className="login100-form-title">
                            Member Login
                        </span>
                        <div>
                            <input
                                className="input100"
                                type="text"
                                name="email"
                                value={username}
                                placeholder="Email"
                                onChange={(e) => setUsername(e.target.value)}
                            ></input>
                            <span className="focus-input100"></span>
                        </div>
                        <div
                            class="wrap-input100 validate-input"
                            data-validate="Password is required"
                        >
                            <input
                                className="input100"
                                type="password"
                                name="pass"
                                value={password}
                                placeholder="Password"
                                onChange={(e) => setPassword(e.target.value)}
                            ></input>
                            <span className="focus-input100"></span>
                        </div>
                        <div className=".container-login100-form-btn">
                            <Button
                                onButtonClick={() => login()}
                            />
                            {loading && <div>Loading...</div>}
                            {error && <div>{error}</div>}
                            <br />
                        </div>
                            <div classNeme= "txt3">
                                Forgot Username / Password?{" "}
                            </div>
                    </form>
                </div>
            </div>
        </div>
    );
}
export default LoginPage;
