import { getAuth, signInWithEmailAndPassword, signOut } from 'firebase/auth';
import { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import app from '../../firebase/firebase.init';

const auth = getAuth(app);
const Login = () => {
    const [loginError, setLoginError] = useState('');
    const [success, SetSuccess] = useState('');
    const [user, setUser] = useState(null);

    const handleLogin = event => {
        event.preventDefault();
        setLoginError('');
        SetSuccess('');

        const form = event.target;
        const email = form.email.value;
        const password = form.password.value;
        console.log(email, password);

        if (!/(?=.*[A-Z])/.test(password)) {
            setLoginError('password must be one uppercase');
            return;
        }
        //firebase connect

        signInWithEmailAndPassword(auth, email, password)
            .then(result => {
                const user = result.user;
                console.log(user);
                setUser(user);
                SetSuccess('login successfully');
                form.reset();
            })
            .catch(error => {
                setLoginError(error.message);
            })
    }

    const handleLogout = () => {
        signOut(auth)
            .then(setUser(null))
            .catch(error => setLoginError(error.message))
    }

    return (
        <div>

            {/* <Form onSubmit={handleLogin}>
                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label>Email address</Form.Label>
                    <Form.Control type="email" name='email' placeholder="Enter email" />

                </Form.Group>

                <Form.Group className="mb-3" controlId="formBasicPassword">
                    <Form.Label>Password</Form.Label>
                    <Form.Control type="password" name='password' placeholder="Password" />
                </Form.Group>
                <Form.Group className="mb-3" controlId="formBasicCheckbox">
                    <Form.Check type="checkbox" label="Check me out" />
                </Form.Group>
                <Button variant="primary" type="submit">
                    Login
                </Button>
            </Form> */}
            {
                user ? <div>
                    <p className='text-success'>{success}</p>
                    <h2>Welcome</h2>
                    <Button onClick={handleLogout} variant="primary" type="submit">
                        Log Out
                    </Button>
                </div> : <div>
                    <h4>Please Login</h4>
                    <Form onSubmit={handleLogin}>
                        <Form.Group className="mb-3" controlId="formBasicEmail">
                            <Form.Label>Email address</Form.Label>
                            <Form.Control type="email" name='email' placeholder="Enter email" />

                        </Form.Group>

                        <Form.Group className="mb-3" controlId="formBasicPassword">
                            <Form.Label>Password</Form.Label>
                            <Form.Control type="password" name='password' placeholder="Password" />
                        </Form.Group>
                        <Form.Group className="mb-3" controlId="formBasicCheckbox">
                            <Form.Check type="checkbox" label="Check me out" />
                        </Form.Group>
                        <Button variant="primary" type="submit">
                            Login
                        </Button>
                    </Form>
                    <p className='text-danger'>{loginError}</p>
                </div>

            }
        </div>
    );
};

export default Login;