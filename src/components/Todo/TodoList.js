import React from 'react';
import TodoForm from './TodoForm';
import Todo from './Todo';
import Navmain from '../nav/Navmain';

export default class TodoList extends React.Component {

  constructor(props){
    super(props)

    this.state = {
        todos: []
    };
  }

  addTodo = todo => {
    //const newTodos = [todo, ...this.state.todos];
    this.setState({
      todos: [todo, ...this.state.todos]

    });
  };

  toggleComplete = (id) => {
    this.setState({
        todos: this.state.todos.map(todo => {
            if (todo.id === id) {
                return{
                    id: todo.id,
                    text: todo.text,
                    complete: !todo.complete
                };
            } else{
                return todo;
            }
        })
    })
  }


  render() {
    return (
      <div>
        <Navmain />
        <br />
        <br />
        <br />
        <TodoForm onSubmit={this.addTodo} />
        {this.state.todos.map(todo => { return(
            <Todo key={todo.id} toggleComplete={() => this.toggleComplete(todo.id)} text={todo.text} />
            
  
        )})}

        
        
      </div>
    );
  }
}

