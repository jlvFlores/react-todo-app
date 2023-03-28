import TodosLogic from './components/TodosLogic';
import './styles/App.css';

function App() {
  return (
    <div className="app">
      <div className="header">
        <h1>Todos</h1>
        <p>items will persist in the browser local storage</p>
      </div>
      <TodosLogic />
    </div>
  );
}

export default App;
