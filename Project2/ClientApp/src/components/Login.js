import React, { useState } from "react"

export function Login({ setToken }) {
    const [username, setUserName] = useState("");
    const [password, setPassword] = useState("");
    function handleSubmit(e){
        e.preventDefault();
        handleLogin();
    }

    async function handleLogin() {
        const response = await fetch('/user/login', {
            method: 'POST',
            headers: {
                'Authorization': 'Bearer ' + localStorage.getItem('token'),
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                username: username,
                password: password
            }),
        });

        const data = await response.json();
        console.log("login response : ");
        console.log(response);
        if (response.ok && data.token) {
            localStorage.setItem('token', data.token);     
            setToken(data.token);
        }
        //localStorage.removeItem('myData');
        //localStorage.getItem('token');
    }

    function handleUserNameChange(e) {
        setUserName(e.target.value);
    }

    function handlePasswordChange(e) {
        setPassword(e.target.value);
    }

    return <>
        <div className="container mt-5">
            <div className="row justify-content-center">
                <div className="col-md-6">
                    <div className="card">
                        <div className="card-header">Kullanıcı Girişi</div>
                        <div className="card-body">
                            <form onSubmit={handleSubmit}>
                                <div className="form-group">
                                    <label htmlFor="username">Kullanıcı Adı:</label>
                                    <input onChange={handleUserNameChange} type="text" className="form-control" id="username" placeholder="Kullanıcı Adı" />
                                </div>
                                <div className="form-group">
                                    <label htmlFor="password">Parola:</label>
                                    <input type="password" className="form-control" id="password" onChange={handlePasswordChange} placeholder="Parola" />
                                </div>
                                <button type="submit" className="btn btn-primary">Giriş Yap </button>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </div>

    </>
}