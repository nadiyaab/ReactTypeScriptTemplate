import React from 'react';
import "./header.scss"
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
} from "react-router-dom";


export const Header = () => {
    return (
        <section>
            
            <img src= "library-react.jpeg" className="App-logo" alt="logo" />
                <div className="navbar">
                    <Link to="/">Home</Link>
                    <div className="dropdown">
                        <button className="dropbtn" onClick={() => { }}>Books
                        </button>
                            <Link to="/books"> All Books</Link>
                        </div>
                    </div>

                    <div className="dropdown">
                        <button className="dropbtn" onClick={() => { }}>Members
                        </button>
                        <div className="dropdown-content" id="myDropdown">
                            <Link to="/members">All Members</Link>
                        </div>
                    </div>

        </section>

    )
};