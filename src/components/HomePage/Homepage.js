import React from 'react';
import Navmain from '../nav/Navmain';
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
                <div className="header">
                    <h1 className="text-header">
                        HI
                    </h1>

                </div>
            </div>

        );
    }
}