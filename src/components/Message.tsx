import React from 'react';
import styled from 'styled-components';
import dateFormatter from './../services/dateFormatter';
import { SENDER_NAME } from './../config/config';
import { IMessage } from './../typings/sharedInterface';

interface Props{
    message: IMessage
}

const Message: React.FC<Props> = (props) => {

    const { message }  = props;

    return (
        <IncomingMessage isMyMessage={message.author === SENDER_NAME}>
            <MessageContainer isMyMessage={message.author === SENDER_NAME}>
                {!(message.author === SENDER_NAME) && <Author >{message.author}</Author>}
                <MessageText>{message.message}</MessageText>

                <Time isMyMessage={message.author === SENDER_NAME}>{dateFormatter(message.timestamp)}</Time>
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
    border: 1px solid #6d6d7a;
    padding: 1rem;
    margin-bottom: 8px;
    position: relative;
    display: inline-block;
    margin-bottom: 5px;
    color: $white;
    font-size: 0.7em;
    padding: 10px 10px 10px 12px;
    border-radius: 4px;
    background-color: ${(props) => props.isMyMessage ? '#FCF6C5' : '#fff'}; ;
`

const Author = styled.div`
    color: #6d6d7a;
    margin-bottom: 6px;

`

const MessageText = styled.div`
    margin-bottom: 6px;
    line-height: 16px;
`

const Time = styled.div<ITime>`
    color: #6d6d7a;
    text-align: ${(props) => props.isMyMessage ? 'end' : 'start'};

`