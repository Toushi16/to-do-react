import './App.css';
import Form from './components/Form';
import ToDoList from './components/ToDoList';
import ToDo from './components/ToDo';
import {useState} from 'react';

function App() {

  const [task, setTask] = useState("");
  const [todos, setTodos] = useState([]);

  const fillToDo = () => {
    if (task !== "") {
      setTodos([...todos, task]);
      setTask('');
    }
  }

  const deleteTodo = (e) => {
    let element = e.target.parentNode.firstChild.textContent
    const filtered = todos.filter(todo => todo !== element);
    setTodos(filtered);
  }

  return (
    <div className="App">
      <h1>TODOLIST</h1>
      <Form value={task} onChange={setTask} onClick={fillToDo}/>
      <hr/>
      <ToDoList>
        {todos.map((el,i) =>
          <ToDo el={el} key={i} onClick={deleteTodo}/>
        )}
      </ToDoList>
    </div>
  );
}

export default App;
