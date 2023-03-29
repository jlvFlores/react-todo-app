import PropTypes from 'prop-types';

const TodoItem = ({ itemProp, handleChange, deleteTodo }) => (
  <li>
    <input type="checkbox" checked={itemProp.completed} onChange={() => handleChange(itemProp.id)} />
    <button type="button" onClick={() => deleteTodo(itemProp.id)}>Delete</button>
    {itemProp.title}
  </li>
);

TodoItem.propTypes = {
  itemProp: PropTypes.instanceOf(Object).isRequired,
  handleChange: PropTypes.func.isRequired,
  deleteTodo: PropTypes.func.isRequired,
};

export default TodoItem;
