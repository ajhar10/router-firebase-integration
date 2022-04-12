import { getAuth } from 'firebase/auth';
import React from 'react';
import { useSignInWithGoogle } from 'react-firebase-hooks/auth';
import app from '../../firebase.init';

const auth = getAuth(app)
const Login = () => {
    const [signInWithGoogle, user] = useSignInWithGoogle(auth)
    return (
        <div>
            <h3>Please Login</h3>
            <div style={{ margin: '25px' }}>
                <button onClick={() => { signInWithGoogle() }} style={{ padding: "6px 10px", border: '1px solid cyan', cursor: 'pointer', background: 'gray', color: 'cyan' }}>Google Sign in</button>
            </div>
            <form action="">

                <input type="email" placeholder='Your email' id="" />
                <br />
                <input type="password" placeholder='password' />
                <br />
                <input type="button" value="Login" />

            </form>
        </div>
    );
};

export default Login;