import axios from 'axios';
import React from 'react';
import { Form, Modal, Button } from 'react-bootstrap';


const CreateTaskForm = (props) => {

    const { show, setShow } = props;  
    const { tasks, setTasks } = props;
    
    const [projectName, setProjectName] = React.useState("");
    const [taskName, setTaskName] = React.useState("");
    const [taskTime, setTaskTime] = React.useState(0);
    const [taskCrew, setTaskCrew] = React.useState(0);

    function createTask(e) {
        e.preventDefault();

        const task = {
            projectName,
            taskName,
            taskTime,
            taskCrew
        };

        axios
            .post("/task", task)
            .then(res => console.log(res))
            .catch(err => console.log(err));

        setTasks(prev => [...prev, task]);
        setShow(false);
    }

    return (
        <>
            <Modal show={show} onHide={() => setShow(false)}>
                <Modal.Header closeButton>
                    <Modal.Title>Добавление новой задачи</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <Form>
                        <Form.Group controlId='regForm.projectName' className='mb-3'>
                            <Form.Label>Название проекта</Form.Label>
                            <Form.Control type='text' placeholder='Название проекта' autoFocus value={projectName.value} onChange={(e) => setProjectName(e.target.value)}/>
                        </Form.Group>
                        <Form.Group controlId='regForm.taskName' className='mb-3'>
                            <Form.Label>Название задачи</Form.Label>
                            <Form.Control type='text' placeholder='Название задачи' value={taskName.value} onChange={(e) => setTaskName(e.target.value)}/>
                        </Form.Group>
                        <Form.Group controlId='regForm.email' className='mb-3'>
                            <Form.Label>Запланированная трудоемкость (в часах)</Form.Label>
                            <Form.Control type="number" value={taskTime.value} onChange={(e) => setTaskTime(e.target.value)}/>
                        </Form.Group>
                        <Form.Group controlId='regForm.login' className='mb-3'>
                            <Form.Label>Запланированный ресурс (человек)</Form.Label>
                            <Form.Control type='number' value={taskCrew.value} onChange={(e) => setTaskCrew(e.target.value)}/>
                        </Form.Group>
                    </Form>
                </Modal.Body>
                <Modal.Footer>
                    <Button variant='primary' onClick={createTask}>Добавить задачу</Button>
                </Modal.Footer>
            </Modal>
        </>
    );
}

export default CreateTaskForm;
