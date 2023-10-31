import { useState } from "react";
import { getAuth, createUserWithEmailAndPassword, sendEmailVerification } from "firebase/auth";
import app from "../../firebase/firebase.init";
import { Link } from "react-router-dom";


const auth = getAuth(app);

const Register = () => {
    const [registerError, setRegisterError] = useState('');
    const [success, setSuccess] = useState('');

    const handleRegister = (event) => {
        event.preventDefault();
        setRegisterError('');
        setSuccess('');
        const fieldEmail = event.target.email.value;
        const fieldPassword = event.target.password.value;
        console.log(fieldEmail, fieldPassword);
        if(!/(?=.*[A-Z])/.test(fieldPassword)){
            setRegisterError('password must be one uppercase');
            return;
        }
        //connect firebase
        createUserWithEmailAndPassword(auth, fieldEmail, fieldPassword)
            .then(result => {
                const user = result.user;
                console.log(user);
                setSuccess('register successful');
                userVerification(user)
                event.target.reset();
            })
            .catch(error => {
                setRegisterError(error.message);
            })

    };

    const userVerification = (user)=>{
        sendEmailVerification(user)
        .then(result =>{
            console.log(result);
            alert('please verify your account');
        })
    }

    return (
        <div onSubmit={handleRegister}>
            <h4>Please Register</h4>
            <form action="">
                <input type="email" name="email" id="email" placeholder="Your Email" />
                <br />
                <input type="password" name="passowrd" id="password" placeholder="Your Password" />
                <br />
                <input type="submit" value="Register" />
            </form>
            <p><small>Have you already account? please <Link to="/login">Login</Link> </small></p>
            <p style={{color: 'red'}}>{registerError}</p>
            <p style={{color: 'green'}}>{success}</p>
        </div>
    );
};

export default Register;

// // import { useState } from "react";
// import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";
// import app from "../../firebase/firebase.init";


// const auth = getAuth(app);
// const Register = () => {
//     // const [email, setEmail] = useState('');


//     const handleRegister = (event) => {
//         event.preventDefault();
//         const fieldEmail = event.target.email.value;
//         const fieldPassword = event.target.password.value;
//         // console.log(fieldEmail, fieldPassword);
//         //connect firebase
//         createUserWithEmailAndPassword(auth, fieldEmail, fieldPassword)
//             .then(result => {
//                 const user = result.user;
//                 console.log(user);
//             })
//             .catch(error => console.error(error.message))

//     }

//     // const handleEmail = (event) => {
//     //     console.log(event.target.value);
//     //     setEmail(event.target.value);
//     // }
//     // const handlePassword = (event) => {
//     //     console.log(event.target.value)
//     // }
//     return (
//         <div onSubmit={handleRegister}>
//             <h4>Please Register</h4>
//             <form action="">
//                 <input type="email" name="email" id="email" placeholder="Your Email" />
//                 <br />
//                 <input type="password" name="passowrd" id="password" placeholder="Your Password" />
//                 <br />
//                 {/* <input onChange={handleEmail} type="email" name="email" id="email" placeholder="Your Email" />
//                 <br />
//                 <input onBlur={handlePassword} type="password" name="passowrd" id="password" placeholder="Your Password" />
//                 <br /> */}
//                 <input type="submit" value="Register" />
//             </form>
//         </div>
//     );
// };

// export default Register;