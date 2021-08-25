import React from 'react';
import styled from 'styled-components';

import dateFormatter from './../services/dateFormatter';
import { SENDER_NAME } from './../config/config';
import { IMessage } from './../typings/sharedInterface';

interface Props{
    message: IMessage
}

const Message: React.FC<Props> = (props) => {

    // Message prop
    const { message }  = props;

    return (
        <IncomingMessage isMyMessage={message.author === SENDER_NAME}>
            <MessageContainer isMyMessage={message.author === SENDER_NAME}>
                {!(message.author === SENDER_NAME) && <Author test-id="author">{message.author}</Author>}
                <MessageText test-id="message">{message.message}</MessageText>

                <Time isMyMessage={message.author === SENDER_NAME} test-id="timeStamp">{dateFormatter(message.timestamp)}</Time>
            </MessageContainer>
        </IncomingMessage>
    )

}

export default Message

interface IIncomingMessage{
    isMyMessage: boolean
}

interface ITime{
    isMyMessage: boolean
}

interface IMessageContainer{
    isMyMessage: boolean
}

const IncomingMessage  = styled.div<IIncomingMessage>`
    display: flex;
    align-items: center;
    justify-content: ${(props) => props.isMyMessage ? 'flex-end' : 'flex-start'};
`

const MessageContainer = styled.div<IMessageContainer>`
    border: 0.0625rem solid #6D6D7A;
    padding: 1rem;
    margin-bottom: 0.5rem;
    position: relative;
    display: inline-block;
    margin-bottom: 0.3125rem;
    font-size: 0.7em;
    padding: 0.625rem 0.625rem 0.625rem 0.75rem;
    border-radius: 0.25rem;
    max-width: 50%;
    background-color: ${(props) => props.isMyMessage ? '#FCF6C5' : '#FFFFFF'}; ;
`

const Author = styled.div`
    color: #6D6D7A;
    margin-bottom: 0.375rem;
`

const MessageText = styled.div`
    margin-bottom: 0.375rem;
    line-height: 1rem;
`

const Time = styled.div<ITime>`
    color: #6D6D7A;
    text-align: ${(props) => props.isMyMessage ? 'end' : 'start'};
`