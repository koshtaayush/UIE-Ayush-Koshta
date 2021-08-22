import React from 'react';
import styled from 'styled-components';
import bodyBackground from './../../public/bodyBackground.png';
import SendMessage from './SendMessage';
interface Props {}

const ChatScreen: React.FC<Props> = () => {
    
    console.log("hello");

    const [messages, setMessages] = React.useState([]);

    return (
        <React.Fragment>
            <Container>
                Chat screen
                <SendMessage />
            </Container>
        </React.Fragment>
    )


}

export default ChatScreen

const Container = styled.div`
    background: url('bodyBackground');
`