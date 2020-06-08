import React from 'react';
import TForm from './TForm';
import Navmain from '../nav/Navmain';

export default class TList extends React.Component {
    render() {
        const history = this.props;
        return(
            <div className="Homepage">
                <Navmain />
                <br></br>
                <br />
                <TForm />
            </div>
        );
    }
}