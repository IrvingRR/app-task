import React, {Fragment} from 'react';
import TaskElement from './TaskElement';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTrash} from '@fortawesome/free-solid-svg-icons'

const TasksList = function ({tasks, toggleTask, deleteTasksCompleted, showModalDelete}) {

    return (

        <Fragment>
            <h2 className="table-title">My Tasks</h2>
            <div className="container-table">
                <table className="table">
                    <thead>
                        <tr>
                            <th className="thead-task">Task</th>
                            <th>Completed</th>
                            <th>Actions</th>
                        </tr>
                    </thead>
                    <tbody>
                        {tasks.length > 0
                            ?   tasks.map((task) => <TaskElement  showModalDelete={showModalDelete} toggleTask={toggleTask} id={task.id} key={task.id} title={task.title} completed={task.completed} />)
                            :   <tr>
                                    <td colSpan="3" className="table-message">No tasks</td>
                                </tr>
                        }
                    </tbody>
                </table>
                <div className="container-table-footer">
                    <button className="container-table-footer-button" onClick={deleteTasksCompleted}>
                        <FontAwesomeIcon className="container-table-footer-button-icon" icon={faTrash} />
                        <span>Delete completeds</span>
                    </button>
                    <p className="container-table-footer-amount">
                        Pendind tasks:
                        <span>
                            {tasks.filter((task) => task.completed === false).length}
                        </span>
                    </p>
                </div>
            </div>
        </Fragment>

    );
}

export default TasksList;