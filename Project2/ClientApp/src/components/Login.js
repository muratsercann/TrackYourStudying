import React, { useState } from "react"
import utils from "../utils";

export function Login({ setToken }) {
    const [username, setUserName] = useState("");
    const [password, setPassword] = useState("");
    function handleSubmit(e){
        e.preventDefault();
        handleLogin();
    }

    async function handleLogin() {
        const response = await utils.apiRequest.user.login(username, password);
                
        console.log("login response : ");
        console.log(response);

        if (response.ok) {
            const data = await response.json();
            localStorage.setItem('token', data.token);     
            setToken(data.token);
        }
        else if (response.status === 400) {//BadRequest
            alert("Hatalı giriş !");//TODO: msercan Tüm hata mesajları tek bir yerden kontrol edilsin. Alert için ayrı birşey yap

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