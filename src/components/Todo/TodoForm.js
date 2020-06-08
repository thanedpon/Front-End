import React from 'react';
import shortid from 'shortid';

export default class TodoForm extends React.Component {

    constructor(props){
        super(props)

        this.state = {
            text: ""
        }
    }

    handlechange = (e) => {
        this.setState({
            [e.target.name]: e.target.value
        });
    };

    handleSubmit = (e) => {
        e.preventDefault();
        this.props.onSubmit({
            id: shortid.generate(),
            text: this.state.text,
            complete: false,
        });
        this.setState({
            text: ""
        });
        console.log('check', this.state.text);
    };

    handledelete = (e) => {
        e.preventDefault();
    }


    render() {
        return (
            <form className="wrapper-form" onSubmit={this.hanblesubmit}>
                 <input name="text" value={this.state.text} onChange={this.handlechange} placeholder="todo..." />
                 <form id="Submit">
                     <button onClick={this.handleSubmit}>add todo</button>
                 </form>
                 <form id="Del">
                    <button onClick={this.handledelete}>Delete</button> 
                 </form>
                 
                 

            </form>
           
        );
    }
}


