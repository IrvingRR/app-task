import React, {useState} from 'react';
import styled, {css} from 'styled-components';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTimes } from '@fortawesome/free-solid-svg-icons'
import uuid from 'react-uuid'

const FormTask = function ({ addTask }) {

    // States
    const [inputTask, setInputTask] = useState(null);
    const [form, setForm] = useState(null);
    const [task, setTask] = useState({ id:null, title: '', completed: false });

    // Expressions
    const expressionTask = /^[a-zA-ZÀ-ÿ\s0-9]{4,40}$/;

    // Functions
    const hiddenMessageError = () => {
        setTimeout(() => {
            setForm("true");
        }, 3000);
    }

    const validation = (e) => {
      if(expressionTask.test(e.target.value)) {
          setInputTask("true");
      } else {
            setInputTask("false");
      }
    }

    const handleChange = (e) => {

        setTask(prevTask => {
            const newTask = { ...prevTask, id:uuid(), title: e.target.value };
            return newTask;
        });
    }

    const handleSubmit = (e) => {
        e.preventDefault();

        if(inputTask === 'false' || task.title === '') {
            setForm('false');
            hiddenMessageError();

        } else {
            setForm('true');
            addTask(task);
            setTask({ id:null, title: '', completed: false });
            e.target.reset();
        }
    }

    return (
        <Form className="formTask" onSubmit={handleSubmit}>
            <GroupInput>
                <Input className="formTask-input" type="text" name="task" placeholder="Add new task" valid={inputTask} autoComplete="off" onChange={handleChange} onKeyUp={validation} />
            </GroupInput>
                <MessageInput valid={inputTask}>
                    <p>Task must have only letters and numbers</p>
                    <FontAwesomeIcon icon={faTimes} />
                </MessageInput>
            <Button className="formTask-button">Add</Button>
            <MessageError form={form}>Please enter a valid value</MessageError>
        </Form>
    )
}

export default FormTask;

const Form = styled.form`
  width: 400px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 16px;
  padding: 20px 30px;
  text-align: center;
`;

const GroupInput = styled.div`
    width: 100%;
    height: 50px;
`;

const Input = styled.input`
    width: 100%;
    max-width: 300px;
    height: 100%;
    border-radius: 80px;
    border: 2px solid whitesmoke;
    padding: 10px 20px;
    font-family: var(--font);
    font-weight: 600;
    color: #fff;
    background: transparent;
    transition: 0.3s ease;

    &:focus {
        border-color: #fff;
    }

    &::placeholder {
        color: whitesmoke;
    }

    ${props => props.valid === 'false' && css`
        border-color: var(--primary) !important;
    `}
`;

const Button = styled.button`
    padding: 10px 20px;
    border-radius: 80px;
    font-weight: 600;
    letter-spacing: 1px;
    background: transparent;
    border: 2px solid #fff;
    color: #fff;
    transition: 0.3s ease;
    cursor: pointer;

    &:hover {
    background: #fff;
    color: var(--primary);
    }
`;

const MessageInput = styled.div`
    width: 100%;
    display: flex;
    justify-content: space-between;
    align-items: center;
    background: var(--primary);
    color: #fff;
    font-size: 13px;
    transition: 0.3s ease;
    z-index: 100;
    overflow: hidden;
    padding: 0 20px;
    height: 0;
    border-radius: 0;
    opacity: 0;

    ${props => props.valid === 'false' && css`
        padding: 10px 20px;
        height: 40px;
        opacity: 1;
        border-radius: 30px;
    `}

    @media only screen and (max-width: 375px) {
        font-size: 12px;
    }
    
`;

const MessageError = styled.div`
    width: 100%;
    padding: 0 20px;
    background: var(--gradient-error);
    color: #fff;
    font-weight: 600;
    border-radius: 30px;
    height: 0;
    transition: 0.3s ease;
    font-size: 13px;
    opacity: 0;
    overflow: hidden;

    ${props => props.form === 'false' && css`
        padding: 10px 20px;
        height: 40px;
        opacity: 1;
    `}
`;