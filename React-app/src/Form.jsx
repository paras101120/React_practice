
import { useState } from "react";

function Form() {
    const [Name, setName] = useState("");
    const [Email, setEmail] = useState("");
    const [Password, setPassword] = useState("");
    const [Submit, setSubmit] = useState(false);

    // Form validation and submission
    function handleSubmit(e) {
        e.preventDefault();

        if (Name === "") {
            alert("Please enter your name");
            return;
        }

        if (Email === "") {
            alert("Please enter your email");
            return;
        }

        if (Password === "") {
            alert("Please enter your password");
            return;
        }

        if (Password.length < 6) {
            alert("Password must be at least 6 characters");
            return;
        }

        if (!Email.includes("@")) {
            alert("Email must contain @");
            return;
        }

        setSubmit(true);
    }

    // Reset form
    function reset() {
        setName("");
        setEmail("");
        setPassword("");
        setSubmit(false);
    }

    return (
        <div>
            <h2>Registration Form</h2>

            <form onSubmit={handleSubmit}>

                <input
                    type="text"
                    placeholder="Name"
                    value={Name}
                    onChange={(e) => setName(e.target.value)}
                />

                <br /><br />

                <input
                    type="text"
                    placeholder="Email"
                    value={Email}
                    onChange={(e) => setEmail(e.target.value)}
                />

                <br /><br />

                <input
                    type="password"
                    placeholder="Password"
                    value={Password}
                    onChange={(e) => setPassword(e.target.value)}
                />

                <br /><br />

                <button type="submit">Submit</button>

                <button type="button" onClick={reset}>
                    Reset
                </button>

            </form>

            {Submit && (
                <div>
                    <h2>Registration Successful!</h2>
                    <p>Name: {Name}</p>
                    <p>Email: {Email}</p>
                </div>
            )}
        </div>
    );
}

export default Form;
