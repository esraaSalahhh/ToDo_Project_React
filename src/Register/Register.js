import React from 'react';
import {  useState } from "react";
import './Register.css';
import { Container } from 'reactstrap';
import axios from 'axios';
const Register = (props) => {

  const [RegisterForm, setRegisterForm] = useState({
    Email: "",
    Password: "",
    FirstName:"",
});

const [formErrors, setFormErros] = useState({
    EmailErrors: null,
    PasswordErros: null,
    FirstNameErros:null,
});

  const handleFormChange = (e) => {
    console.log(e.target.value, e.target.name)
    setRegisterForm({
        Email: e.target.name === 'Email' ? e.target.value : RegisterForm.Email,
        Password: e.target.name === 'Password' ? e.target.value : RegisterForm.Password,
        FirstName: e.target.name === 'FirstName' ? e.target.value : RegisterForm.FirstName,
    });
    let x = e.target.value.length;
    let re =/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;  
    
    setFormErros({
        EmailErrors: e.target.name === 'Email' ? (x === 0) ? "this filed is required" :(!re.test(e.target.value)) ? "that not email format ": null : formErrors.EmailErrors,
        PasswordErros: e.target.name === 'Password' ? (x === 0) ? "this filed is required" : (x < 8) ? "Password length not less than 8 characters" : null : RegisterForm.PasswordErros,
        FirstNameErros: e.target.name === 'FirstName' ? (x === 0) ? "this filed is required" :  null : Register.FirstNameErros,
    });
};

const handleFormSubmit = () => {
  console.log(RegisterForm);
  const { Email, Password , FirstName } = RegisterForm;
  setFormErros({
      EmailErrors: Email.length > 0 ? null : "This field is required",
      PasswordErros: Password.length > 0 ? null : "This field is required",
      FirstNameErros: FirstName.length > 0 ? null : "This field is required",
  });
  axios.post('http://localhost:3005/api/register',{
                email    : RegisterForm.Email,
                password : RegisterForm.Password,
                firstName: RegisterForm.FirstName
              }
        )
            .then(function (response) {
                console.log(response);
                localStorage.setItem('myData', response.data.token);
                console.log(localStorage.getItem('myData'));
               alert("verify your email then Login");
               props.history.push("/login");

            })
            
            .catch(function (error) {
                console.log(error);
                alert("Register Fail");
            });
  

};

  return (
    <>
<Container>
                <h2>Register</h2>
                <br />
                <input
                    onChange={handleFormChange}
                    placeholder="Email"
                    name="Email"
                    value={RegisterForm.Email}
                    className={`form-control mt-4 ${formErrors.EmailErrors ? "border-danger" : ""
                        }`}
                />
                <br />
                <small className="text-danger"> {formErrors.EmailErrors}</small>
                <input
                    onChange={handleFormChange}
                    placeholder="Password"
                    name="Password"
                    className={`form-control mt-4 mb-4 ${formErrors.PasswordErros ? "border-danger" : ""
                        }`}
                    value={RegisterForm.Password}
                />
                
                <small className="text-danger"> {formErrors.PasswordErros}</small>
                <input
                    onChange={handleFormChange}
                    placeholder="FirstName"
                    name="FirstName"
                    value={RegisterForm.FirstName}
                    className={`form-control mt-4 ${formErrors.FirstNameErros ? "border-danger" : ""
                        }`}
                />
                <br />
                <small className="text-danger"> {formErrors.FirstNameErros}</small>
                <button className="d-block btn btn-info" onClick={handleFormSubmit} >
                    Register
      </button>
            </Container>
    </>
  );
}

export default Register;