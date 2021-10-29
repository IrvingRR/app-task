import React from 'react';
import TaskElement from './TaskElement';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTrash} from '@fortawesome/free-solid-svg-icons'

const TasksList = function ({tasks, toggleTask, deleteTasksCompleted, showModalDelete}) {

    return (

        <div className="tasksList">
            <h2 className="tasksList-title">My Tasks</h2>
            <table className="tasksList-table">
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
                                <td colSpan="3" className="tasksList-table-message">No tasks</td>
                            </tr>
                    }
                </tbody>
                <tfoot>
                    <tr>
                        <td colSpan="2" className="taskLit-table-foot-action">
                            <button className="taskList-table-foot-button" onClick={deleteTasksCompleted}>
                                <FontAwesomeIcon className="tableList-foot-button-icon" icon={faTrash} />
                                <span>Delete completeds</span>
                            </button>
                        </td>
                        <td className="taskLit-table-foot-amount">
                            <p>
                                Pendings:
                                <span>
                                    {tasks.filter((task) => task.completed === false).length}
                                </span>
                            </p>
                        </td>
                    </tr>
                </tfoot>
            </table>
        </div>

    );
}

export default TasksList;