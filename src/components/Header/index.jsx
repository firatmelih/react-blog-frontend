import React from 'react';
import './header.scss'
import { Link } from "react-router-dom";

const Header = () => {

    return (
        <>
            <header>
                <nav>
                    <div className="logo">
                        <Link exact to="/">
                            <i class="large rss square icon" />
                        </Link>
                    </div>
                    <div className="navigation">
                        <Link exact to="/"><i class="large home icon" /></Link>
                        <a href=""><i class="large user icon" /></a>
                        <a href=""><i class="large edit icon" /></a>
                        <a href=""><i class="large comment alternate icon" /></a>
                    </div>
                    <div className="auth">
                        {/* <a href="">Login</a>
                        <Link
                            exact
                            to="/register"
                        >Register</Link> */}
                        <div className="auth-true">
                            <img src="/img/image.jpg"></img>
                        </div>
                    </div>

                </nav>
            </header>
        </>

    )
}
export default Header;