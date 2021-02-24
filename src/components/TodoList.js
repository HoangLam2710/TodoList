import React, { Component } from 'react';
import Todo from './Todo';

class TodoList extends Component {    
    render() {
        const { todosList, isCheckedAll, checkAllTodos } = this.props;
        return (
            <section className="main">
                <input type="checkbox" className="toggle-all" checked={isCheckedAll}/>
                <label htmlFor="toggle-all" onClick={checkAllTodos}></label>
                <ul className="todo-list">
                    {
                        todosList.map((todo,index) => <Todo key={`todo${todo.id}`} {...{todo}} {...this.props} index={index}/>)
                    }                
                </ul>
            </section>
        )
    }
}

export default TodoList;