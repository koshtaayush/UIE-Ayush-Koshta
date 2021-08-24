import React from 'react';
import styled from 'styled-components';

interface Props{
    onClick: () =>  void
    buttonType: 'S' | 'L'
}

const Button: React.FC<Props> = (props) => {

    const {onClick, buttonType} = props;
    return (
        <React.Fragment>
                <ButtonContainer
                    type="button"
                    name="sendMessage"
                    onClick={onClick}
                    disabled={false}
                    buttonType={buttonType}>
                        Send
                </ButtonContainer>        
        </React.Fragment>
    )
}

export default Button


interface IButtonContainer{
    buttonType: string
}

const ButtonContainer  = styled.button<IButtonContainer>`
    background-color: #FF876D;
    color: #FFFFFF;
    height: 56px;
    border: none;
    margin-left: 8px;
    border-radius: 4px;
    padding: ${(props) => props.buttonType === 'S' ? '8px' : '16px'};
    cursor: pointer;
    width: calc(100% - 16px);
`
