import { Link } from "react-router-dom";
import "./sidebar.scss";

export default function Sidebar() {
    return (
        <div className="sidebar">
            <div className="divItem">
                <div className="divTitle">
                    Socials
                </div>
                <div className="socials">
                    <a href=""><i class="large twitter icon"></i></a><a href=""><i class=" large linkedin icon"></i></a><a href=""><i class="large github icon"></i></a>
                </div>
            </div>

            <div className="divItem">
                <div className="divTitle">
                    About
                </div>
                <div className="divDesc">
                    This Page is made for new users to understand React.js
                </div>
            </div>

            <div className="divItem">
                <div className="divTitle">
                    Help
                </div>
                <div className="divDesc">
                    <a>S.S.S</a>
                </div>
            </div>
            <div className="divItem">
                <div className="divTitle">
                    Copyright
                </div>
                <div className="divDesc">
                    <a>All Copyrights Reserved by firatmelih</a>
                </div>
            </div>
        </div>
    );
}