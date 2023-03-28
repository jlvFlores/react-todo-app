import PropTypes from 'prop-types';
import TodoItem from './TodoItem';

const TodosList = ({ todosProps, handleChange, deleteTodo }) => (
  <ul>
    {todosProps.map((todo) => (
      <TodoItem key={todo.id} itemProp={todo} handleChange={handleChange} deleteTodo={deleteTodo} />
    ))}
  </ul>
);

TodosList.propTypes = {
  todosProps: PropTypes.instanceOf(Array).isRequired,
  handleChange: PropTypes.func.isRequired,
  deleteTodo: PropTypes.func.isRequired,
};

export default TodosList;
