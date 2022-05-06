import './App.css';
import axios from 'axios';
import CreateTaskForm from './components/CreateTaskForm';
import { Button, Container, Nav, Row } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import React from 'react';
import TaskTable from './components/TaskTable';
import FunctionalHeader from './components/FunctionalHeader';

axios.defaults.baseURL = "http://127.0.0.1:3000";

function App() {

  const [show, setShow] = React.useState(false);
  const [searchValue, setSearchValue] = React.useState("");
  const [tasks, setTasks] = React.useState([]);

  function loadTasks() {
    axios
      .get("task")
      .then(res => setTasks(res.data))
      .catch(err => console.log(err));
  }

  React.useEffect(() => {
    loadTasks();
  }, [tasks]);

  console.log(tasks)

  const filteredTasks = tasks.filter(task => task.taskName.includes(searchValue));

  return (
    <>
      <Container>
        <Row style={{marginBottom: 20, marginTop: 5}}>
          <FunctionalHeader setShow={setShow} />
        </Row>
        <TaskTable tasks={filteredTasks} />
      </Container>
      <div><input placeholder='Поиск...' value={searchValue} onChange={(e) => setSearchValue(e.target.value)} /></div>
      <CreateTaskForm show={show} setShow={setShow} tasks={tasks} setTasks={setTasks} />
    </>
  );
}

export default App;
