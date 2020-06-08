import React from 'react';
import './TForm.css';
import TListItems from './TListItems';

export default class TForm extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            items: [],
            currentItem: {
                text:"",
                key: ""
            }
        };
        this.handleInput = this.handleInput.bind(this);
        this.addItem = this.addItem.bind(this);
        this.deleteItem = this.deleteItem.bind(this);
    }

    handleInput(e){
        this.setState({
            currentItem: {
                text: e.target.value,
                key:Date.now() 
            }
        })
    }

    addItem (e) {
        e.preventDefault();

        const newItem = this.state.currentItem;
        console.log(newItem);
        if(newItem.text !== ""){
            const newItems = [...this.state.items, newItem];
            this.setState({
                items: newItems,
                currentItem: {
                    text: '',
                    key: ''
                }
            })
        }
    }

    deleteItem(key){
        const filterItem = this.state.items.filter(item => (item.key !== key));
            this.setState({
                items: filterItem
            });
    }


    render() {
        return(
            <div className="TForm">
                <header>
                    <form id="todo-form" onSubmit={this.addItem}>
                        <br />
                        <h3> TodoList</h3>
                        <input type="text" placeholder="enter text" value={this.state.currentItem.text} onChange={this.handleInput}/>
                        <button type="submit"> add </button>
                    </form>
                </header>
                <TListItems items = {this.state.items} deleteItem={this.deleteItem}></TListItems>
            </div>
        );
    }
}