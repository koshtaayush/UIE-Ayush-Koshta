import React from 'react';
import styled from 'styled-components';

import Input from './../shared/Input';
import Button from './../shared/Button';

interface Props {

}

const SendMessage: React.FC<Props> = (props) => {

    return (
        <React.Fragment>
            <SendMessageContainer>
                <Input></Input>
                <Button></Button>
            </SendMessageContainer>
        </React.Fragment>
    )
}

export default SendMessage

const SendMessageContainer = styled.div`


`