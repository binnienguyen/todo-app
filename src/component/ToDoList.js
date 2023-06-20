import React from "react";

const ToDoList = ({todos}) => {
    return (
        <ul>
            {todos.map((todo) => (
                <li key={todo.id}>
                    <span>{todo.text}</span>
                    <button>Delete</button>
                </li>
            ))}
        </ul>
    );
};

export default ToDoList;