import React from 'react';
import './TListItems.css';

function TListItems(props) {
    const items = props.items;
    const listItems = items.map(item => {
        return (
            <div className="list" key={item.key}>
                <p>{item.text}
                    <span>
                        <button className="faicons" onClick={ () => props.deleteItem(item.key)}> X </button>
                    </span>
                </p>
            </div>
        )
    })
    return (

        <div>TodoList :{listItems}</div>
    )
}
export default TListItems;