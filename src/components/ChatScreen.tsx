import React from 'react';
import styled from 'styled-components';
import bodyBackground from './../assets/bodyBackground.png';
import SendMessage from './SendMessage';
import MessageList from './MessageList';
import { IMessage } from './../typings/sharedInterface';

interface Props {}

const ChatScreen: React.FC<Props> = () => {
    
    // The message sent by the current user gets temporarily stored in the local state 
    //    (which is just being used to render the message) to avoid excess fetch API call
    const [myAdditionalMessages, setMyAdditionalMessages] = React.useState<Array<IMessage>>([]);

    /**
     * Function to add the message sent by user to temporary list
     */
    const addCurrentMessages = (currentMessage: IMessage) => {
        setMyAdditionalMessages([...myAdditionalMessages, ...[currentMessage]])
    }

    /**
     * Function to clear the temporary message list after the API call
     */
    const nullifyAdditionalMessage = (): void => {
        setMyAdditionalMessages([]);
    }

    return (
        <React.Fragment>
            <ChatApplicationSection>
                <ChatApplication>
                    <Container>
                        <MessageList 
                            myAdditionalMessages={myAdditionalMessages} 
                            nullifyAdditionalMessage={nullifyAdditionalMessage} />
                        <SendMessage 
                            addCurrentMessages={addCurrentMessages} />
                    </Container>
                </ChatApplication>
            </ChatApplicationSection>
        </React.Fragment>
    )


}

export default ChatScreen

const ChatApplicationSection = styled.div`
    height: 100%;
    display: flex;
    justify-content: center;
    background: url(${bodyBackground});
`

const ChatApplication = styled.div`
    display: flex;
    justify-content: flex-end;
    flex-direction: column;
    align-items: center;
    height: calc(100vh - 7.5rem);
    width: 100%;
    max-width: 40rem;
`

const Container  = styled.div`
    height: 100%;
    width: 100%;
    max-width: 40rem;
`