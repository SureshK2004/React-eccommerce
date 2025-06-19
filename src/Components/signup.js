import React, { useState } from "react";
function Signup() {
    const [username, setUSername] = ("")
    const [email, setEmail] = ("")
    const [password, setPassword] = ("")
    const [confirmpass, setConfirmpass] = ("")

    const handlesumbit = (e) => {
        e.preventDefault();
        console.log(username, email, password)

    }
    return (
        <>
           <button type="button" className="btn btn-danger m-2">SignUp</button>

        </>
    );

}
export default Signup;