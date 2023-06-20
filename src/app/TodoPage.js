import React, { useState } from "react";
import ToDoList from "../component/ToDoList";
import ToDoForm from "../component/ToDoForm";

const TodoPage = () => {
    const [todo, setTodos] = useState([]);
    const addTodo = (text) => {
        setTodos([...todos, {id: todos.length+1, text}]);
    };
    const deleteTodo = (id) => {
        setTodos(todos.filter((todo) => todo.id !== id));
    };
    return (
        <div>
            <ToDoForm addTodo={addTodo} />
            <ToDoList todos={todos} deleteTodo={deleteTodo} />
        </div>
    );
};

export default TodoPage; 