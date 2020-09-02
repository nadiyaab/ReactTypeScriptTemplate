import React from 'react';
import "./header.scss";
import "./App.scss";
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
} from "react-router-dom";


export const Header = () => {
    return (
        <section>
            
            <nav className="navbar">
                    <ul>
                    <img src= "library-react.jpeg" className="App-logo" alt="logo" />

                        <li>
                           <Link to="/">Home</Link>
                        </li>
                        <li>
                           <Link to="/books"> All Books</Link>
                        </li>
                        <li>
                           <Link to="/members">All Members</Link>
                        </li>
                        <li>
                            <Link to="/books/1"> Manage book</Link>
                        </li>
                        <li>
                            <Link to="/members/1"> Manage member</Link>
                        </li>
                    </ul>
            </nav>
                
        </section>

    )
};


    
            
            
               
       
                            
    //    <div className="navbar">
    //    <Link to="/">Home</Link>
    //    <div className="dropdown">
    //        <button className="dropbtn" onClick={() => { }}>Books
    //        </button>
    //            <Link to="/books"> All Books</Link>
    //        </div>
    //    </div>

    //    <div className="dropdown">
    //        <button className="dropbtn" onClick={() => { }}>Members
    //        </button>
    //        <div className="dropdown-content" id="myDropdown">
    //            <Link to="/members">AllMembers</Link>
    //        </div>
    //    </div>
