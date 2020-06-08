import React from 'react';
import logo from '../nav/logo.svg';
import Navbar from 'react-bootstrap/Navbar';
import './Navmain.css';

export default class Navmain extends React.Component {
    render() {
        return (
            <div class="navbar">
                <img src={logo} width="40" height="40" className="imagebar" />
                <a href="/Homepage">Home</a>
                <a href="/Todo">Todo</a>
                <a href="/TodoList">Calculate</a>
                <div class="topnav-right">
                    <a href="/">logout</a>
                </div>
            </div>

        )
    }
}