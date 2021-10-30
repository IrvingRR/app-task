import React from 'react';
import styled, {css} from 'styled-components';

const ModalDelete = function({title, modalDelete, setModalDelete, hiddenModalDelete, deleteTask}) {

    const handleClickConfirm = () => {
        deleteTask(modalDelete.id);
    }
    
    return (
        <ContainerModal modalDelete={modalDelete.state.toString()}>
            <Card modalDelete={modalDelete.state.toString()}>
                <Title>
                    {title}
                </Title>
                <Actions>
                    <ButtonConfirm onClick={handleClickConfirm}>Confirm</ButtonConfirm>
                    <ButtonCancel onClick={hiddenModalDelete}>Cancel</ButtonCancel>
                </Actions>
            </Card>
        </ContainerModal>
    )
}

export default ModalDelete;

/* Style Components
----------------------------------- */

const Title = styled.h2`
    color: #fff;
    text-align: center;
    padding: 10px;
`;

const ContainerModal = styled.div`
    width: 100%;
    height: 100vh;
    background: var(--dark-gradient);
    z-index: 100;
    display: flex;
    justify-content: center;
    align-items: center;
    position: fixed;
    top: 0;
    left: 0;
    padding-top: 30px;
    transition: 0.3s ease;
    opacity: 0;
    visibility: hidden;

    ${props => props.modalDelete === "true" && css`
        opacity: 1;
        visibility: visible;
    `}
`;

const Card = styled.div`
    width: 80%;
    max-width: 500px;
    background: rgba(0,0,0,0.9);
    padding: 20px;
    border-radius: 10px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    transition: 0.3s ease;
    transform: translateY(-30px);
    opacity: 0;

     ${props => props.modalDelete === "true" && css`
        transform: translateY(0);
        opacity: 1;
    `}
`;

const Actions = styled.div`
    width: 100%;
    display: flex;
    justify-content: center;
    gap: 20px;
    padding: 10px;
`;

const Button = styled.button`
    padding: 10px 20px;
    border-radius: 10px;
    color: #fff;
    font-weight: 600;
    letter-spacing: 1px;
    transition: 0.3s ease;
    border: 1px solid transparent;
    cursor: pointer;
`;

const ButtonConfirm = styled(Button)`
    background: var(--primary);

    &:hover {
        background: var(--primary-hover);
    }
`;

const ButtonCancel = styled(Button)`
    background: transparent;
    border-color: #fff;

    &:hover {
        background: #fff;
        color: var(--primary);
    }
`