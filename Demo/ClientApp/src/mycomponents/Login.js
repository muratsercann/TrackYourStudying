import React from 'react'
import '../styles/login.css'
import { PiStudent } from "react-icons/pi";

export default function Login() {

    return (
        <div className='login-container'>
            <div className='login-icon'>
                <PiStudent color="white" weight="fill" size={100} />
            </div>
            <div className='login-header'>
                Ders Takip
            </div>
            <div className='login-content'>
                <form>
                    <div className="form-group">
                        <input type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Kullanıcı Adı" />
                    </div>
                    <div className="form-group">
                        <input type="password" className="form-control" id="exampleInputPassword1" placeholder="Parola" />
                    </div>
                    <button type="submit" className="btn btn-primary">Giriş</button>
                </form>
            </div>
        </div>
    );
}