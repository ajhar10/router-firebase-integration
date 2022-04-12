import React from 'react';
import useFirebase from '../../Hooks/useFirebase';

const Login = () => {
    const { signInWithGoogle } = useFirebase();
    return (
        <div>
            <h3>Please Login</h3>
            <div style={{ margin: '25px' }}>
                <button onClick={signInWithGoogle} style={{ padding: "6px 10px", border: '1px solid cyan', cursor: 'pointer', background: 'gray', color: 'cyan' }}>Google Sign in</button>
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