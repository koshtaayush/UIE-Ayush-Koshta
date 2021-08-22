import React from 'react';
import styled from 'styled-components';

interface Props{
    onClick?: () =>  void
}

const Button: React.FC<Props> = (props) => {

    const {onClick} = props;
    return (
        <React.Fragment>
            <button 
                type="button"
                name="sendMessage"
                onClick={onClick}
                disabled={false}>
                    Send
            </button>                
        </React.Fragment>
    )
}

export default Button
