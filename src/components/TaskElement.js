import React from 'react';
import styled, {css} from 'styled-components';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTrash, faCheck } from '@fortawesome/free-solid-svg-icons'

const TaskElement = function ({ title, completed, id, toggleTask, showModalDelete }) {

    const handleChange = () => {
        toggleTask(id);
    }

    const handleClick = () => {
        showModalDelete(id);
    }

    return (
        <Row>
            <Cell className="title-task">
                <p>{title}</p>
            </Cell>
            <Cell>
                <Label htmlFor={`status-task-${id}`} completed={completed.toString()}>
                    <IconCheck icon={faCheck} completed={completed.toString()}/>
                </Label>
                <CheckBox type="checkbox" name="status-task" checked={completed} onChange={handleChange} id={`status-task-${id}`} />
            </Cell>
            <Cell>
                <ButtonAction onClick={handleClick}>
                    <FontAwesomeIcon icon={faTrash}/>
                </ButtonAction>
            </Cell>
        </Row>
    )
}

export default TaskElement;

/* Styled Compoenents Elements */

const Row = styled.tr`
    padding: 10px 0;
`;

const Cell = styled.td`

      &.title-task {
          text-align: left;
      }

      @media only screen and (max-width: 425px) {
        overflow-x: auto;
        font-size: 12px;
        max-width: 100px;
    }

    @media only screen and (max-width: 320px) {
        font-size: 11px;
    }

`;

const Label = styled.label`
    display: inline-flex;
    justify-content: center;
    align-items: center;
    width: 20px;
    height: 20px;
    padding: 10px;
    border: 2px solid #fff;
    border-radius: 100%;
    background: transparent;
    cursor: pointer;
    transition: 0.3s ease;

    ${props => props.completed === 'true' && css`
      background: var(--primary);
      border-color: var(--primary);
    `}

    &:hover {
        border-color: var(--primary);
    }
`;

const CheckBox = styled.input`
    display: none;
`;

const ButtonAction = styled.button`
    padding: 10px 20px;
    border-radius: 10px;
    background: #ff0d7a70;
    color: #fff;
    cursor: pointer;
    transition: 0.3s ease;

    &:hover {
        background: var(--primary);
    }
`;

const IconCheck = styled(FontAwesomeIcon)`
    color: #fff;
    transition: 0.3s ease;
    opacity: 0;
    visibility: hidden;

    ${props => props.completed === 'true' && css`
        opacity: 1;
        visibility: visible;
    `}
`;