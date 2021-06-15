import React from 'react';
import './header.scss'

const Header = () => {

    return (
        <div className="Header">
            <header>

                <nav>
                    <div class="logo">
                        <i class=" big blue react icon"></i>
                        <a href="">Home</a>
                    </div>
                    <div className="socials">
                        <a href=""><i class="white twitter icon"></i></a>
                        <a href=""><i class="white linkedin icon"></i></a>
                        <a href=""><i class="white github icon"></i></a>
                    </div>
                    <div className="navigation">
                        <a href="">About</a>
                        <a href="">Contact</a>
                        <a href="">Write</a>
                    </div>
                    <div className="auth">
                        <a href="">Login</a>
                        <a href="">Register</a>
                    </div>

                </nav>
            </header>
        </div>

    )
}
export default Header;