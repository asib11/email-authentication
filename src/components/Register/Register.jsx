import { useState } from "react";

const Register = () => {
    const [email, setEmail] = useState('');

    const handleRegister = (event) =>{
        event.preventDefault();
        console.log(event.target.email.value, event.target.password.value);
    }

    const handleEmail = (event) =>{
        console.log(event.target.value);
        setEmail(event.target.value);
    }
    const handlePassword = (event) =>{
        console.log(event.target.value)
    }
    return (
        <div onSubmit={handleRegister}>
            <h4>Please Register</h4>
            <form action="">
                <input onChange={handleEmail} type="email" name="email" id="email" placeholder="Your Email"/>
                <br />
                <input onBlur={handlePassword} type="password" name="passowrd" id="password" placeholder="Your Password"/>
                <br />
                <input type="submit" value="Register" />
            </form>
        </div>
    );
};

export default Register;