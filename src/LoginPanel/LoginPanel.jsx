import styles from "./LoginPanel.module.scss";
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
        <div className={styles.limiter}>
            <div className={styles.containerLogin100}>
                <div className={styles.wrapLogin100}>
                    <div className={styles.picture}></div>
                    <form className={styles.login100FormValidateForm}>
                        <span className={styles.login100FormTitle}>
                            Member Login
                        </span>
                        <div>
                            <input
                                className={styles.input100}
                                type="text"
                                name="email"
                                value={username}
                                placeholder="Email"
                                onChange={(e) => setUsername(e.target.value)}
                            ></input>
                            <span className={styles.focusInput100}></span>
                        </div>
                        <div
                            className={styles.wrapInput100ValidateInput}
                            data-validate="Password is required"
                        >
                            <input
                                className={styles.input100}
                                type="password"
                                name="pass"
                                value={password}
                                placeholder="Password"
                                onChange={(e) => setPassword(e.target.value)}
                            ></input>
                            <span className={styles.focusInput100}></span>
                        </div>
                        <div className={styles.containerLogin100FormBtn}>
                            <div className={styles.login100FormBtn}>
                                <Button onButtonClick={() => login()} />
                                {error && <div>{error}</div>}
                            </div>
                        </div>
                        {loading && <div>Loading...</div>}
                        <div className={styles.txt3}>
                            Forgot Username / Password?{" "}
                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
}
export default LoginPage;
