import React from 'react';

const Register = () => {
    return (
        <div>
            <h3>Please Register</h3>
            <form action="">
                <input type="text" placeholder='Your Name' />
                <br />
                <input type="email" placeholder='Your email' id="" />
                <br />
                <input type="password" placeholder='password' />
                <br />
                <input type="button" value="Register" />

            </form>
        </div>
    );
};

export default Register;