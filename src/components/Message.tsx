import React from 'react';
import styled from 'styled-components';

interface Props{
    message: {
        message: string,
        author: string,
        timestamp: number,
        token: number,
        _id: string
    }
}

const Message: React.FC<Props> = (props) => {

    const { message }  = props;
    return (
        <MessageContainer>
            <Author>{message.author}</Author>
            <MessageText>{message.message}</MessageText>

            <Time>{message.timestamp}</Time>
        </MessageContainer>
    )

}

const MessageContainer = styled.div`
    
`

const Author = styled.div`

`

const MessageText = styled.div`

`

const Time = styled.div`

`