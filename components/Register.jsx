"use client";
import { registerUser } from "csc-start/utils/data";
import React from "react";

export const Register = () => {

    const testRegister = () =>{
        registerUser(null, null, null,'foo')

    }
  return <div>

    <button onClick = {testRegister}> Click me</button>
  </div>;
};

export default Register;
