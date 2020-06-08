import React from 'react';
import Navmain from '../nav/Navmain';
import User from '../service/User';
import './Homepage.css';


export default class Homepage extends React.Component {
      
    onSubmit = () => {
        this.props.history.push('/');
    }
    render() {
        return (
            <div>
                <Navmain />
                <br />
                <br />
                <h2> Random User</h2>
                <div>
                    <User />

                </div>
            </div>

        );
    }
}