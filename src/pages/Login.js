/* eslint-disable no-unused-vars */
import React, { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { toast } from "react-toastify";

const Login = () => {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [showPassword, setShowPassword] = useState(false);
    const navigate = useNavigate();
    const toggleShowPassword = () => {
        setShowPassword(!showPassword);
    };

    const usenavigate=useNavigate();
    const ProceedLogin = (e) => {
        e.preventDefault();
        if (validate()) {
            ///implentation
            // console.log('proceed');
            fetch("https://loginapi-b861.onrender.com/user/" + username).then((res) => {
                return res.json();
            }).then((resp) => {
                //console.log(resp)
                if (Object.keys(resp).length === 0) {
                    toast.error('Please Enter valid username');
                } else {
                    if (resp.password === password) {
                        toast.success('Success');
                        sessionStorage.setItem('username',username);
                        sessionStorage.setItem('userrole',resp.role);
                        usenavigate('/dashboard')
                    }else{
                        toast.error('Please Enter valid credentials');
                    }
                }
            }).catch((err) => {
                toast.error('Login Failed due to :' + err.message);
            });
        }
    }

    const ProceedLoginusingAPI = (e) => {
        e.preventDefault();
        if (validate()) {
            ///implentation
            // console.log('proceed');
            let inputobj={"username": username,
            "password": password};
            fetch("https://loginapi-b861.onrender.com/User/Authenticate",{
                method:'POST',
                headers:{'content-type':'application/json'},
                body:JSON.stringify(inputobj)
            }).then((res) => {
                return res.json();
            }).then((resp) => {
                console.log(resp)
                if (Object.keys(resp).length === 0) {
                    toast.error('Login failed, invalid credentials');
                }else{
                     toast.success('Success');
                     sessionStorage.setItem('username',username);
                     sessionStorage.setItem('jwttoken',resp.jwtToken);
                   usenavigate('/dashboard')
                }
            }).catch((err) => {
                toast.error('Login Failed due to :' + err.message);
            });
        }
    }
    const validate = () => {
        let result = true;
        if (username === '' || username === null) {
            result = false;
            toast.warning('Please Enter Username');
        }
        if (password === '' || password === null) {
            result = false;
            toast.warning('Please Enter Password');
        }
        return result;
    }

    return (
        <div className="row">
            <div className="offset-lg-0 col-lg-12" style={{ marginTop: '100px' }}>
                <form onSubmit={ProceedLogin} className="container">
                    <div className="card">
                        <div className="card-header">
                            <h2>User Login</h2>
                        </div>
                        <div className="card-body">
                            <div className="form-group">
                                <label>User Name <span className="errmsg" style={{color:"red"}}>*</span></label>
                                <input
                                    value={username}
                                    onChange={(e) => setUsername(e.target.value)}
                                    className="form-control"
                                />
                            </div>
                            <div className="form-group">
                                <label>Password <span className="errmsg" style={{color:"red"}}>*</span></label>
                                <div className="password-input-container">
                                    <input
                                        type={showPassword ? "text" : "password"}
                                        value={password}
                                        onChange={(e) => setPassword(e.target.value)}
                                        className="form-control"
                                    />
                    
                                       <input type="checkbox" name="" id=""className="toggle-password-button"
                                        onClick={toggleShowPassword}/> Show Password
                                  
                                </div>
                            </div>
                        </div>
                        <div className="card-footer">
                            <button type="submit" className="btn btn-primary">
                                Login
                            </button>{" "}
                            |
                            <Link className="btn btn-success" to={"/register"}>
                                New User
                            </Link>
                        </div>
                    </div>
                </form>
            </div>
        </div>
    );
};

export default Login;
