import { useState } from 'react';
import { v4 as uuidv4 } from 'uuid';
import InputTodo from './InputTodo';
import TodoList from './TodoList';

const TodosLogic = () => {
  const [todos, setTodos] = useState([
    {
      id: uuidv4(),
      title: 'Make a todo list',
      completed: false,
    },
    {
      id: uuidv4(),
      title: 'Feed the cats',
      completed: true,
    },
    {
      id: uuidv4(),
      title: 'Cure hungover',
      completed: false,
    },
  ]);

  const handleChange = (id) => {
    setTodos((prevState) => prevState.map((todo) => {
      if (todo.id === id) {
        return {
          ...todo,
          completed: !todo.completed,
        };
      }
      return todo;
    }));
  };

  const deleteTodo = (id) => {
    setTodos([
      ...todos.filter((todo) => todo.id !== id),
    ]);
  };

  const addTodoItem = (title) => {
    const newTodo = {
      id: uuidv4(),
      title,
      completed: false,
    };
    setTodos([...todos, newTodo]);
  };

  return (
    <div>
      <InputTodo addTodoItem={addTodoItem} />
      <TodoList todosProps={todos} handleChange={handleChange} deleteTodo={deleteTodo} />
    </div>
  );
};

export default TodosLogic;
