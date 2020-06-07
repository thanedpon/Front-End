import React from 'react';


export default class Homepage extends React.Component {

    onSubmit = () => {
        this.props.history.push('/');
    }
    render() {
        return(
            <div>
                <h1>
                    Homepage TEST
                </h1>
                <button onClick={this.onSubmit}> HI </button>
            </div>
        );
    }
}