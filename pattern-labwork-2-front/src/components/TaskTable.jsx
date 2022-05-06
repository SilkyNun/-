import axios from 'axios';
import React from 'react';
import { Button, Table } from 'react-bootstrap';

const TaskTable = ({ tasks }) => {



    return (
        <div>
            <Table striped bordered hover>
                <thead>
                    <tr>
                        <th>#</th>
                        <th>Название проекта</th>
                        <th>Название задачи</th>
                        <th>Трудоемкость (в часах)</th>
                        <th>Ресурс (человек)</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        tasks.map(task => <TableRow task={task} />)
                    }
                </tbody>
            </Table>
        </div>
    );
}

const TableRow = ({ task }) => {

    function deleteTask() {
        axios
            .delete(`/task/${task.taskId}`)
            .then(res => console.log(res))
            .catch(err => console.log(err))
    }

    return (
        <tr>
            <td>{task.taskId}</td>
            <td>{task.projectName}</td>
            <td>{task.taskName}</td>
            <td>{task.taskTime}</td>
            <td>{task.taskCrew}</td>
            <td>
                <Button onClick={deleteTask}>Удалить</Button>
            </td>
        </tr>
    )
}

export default TaskTable;
