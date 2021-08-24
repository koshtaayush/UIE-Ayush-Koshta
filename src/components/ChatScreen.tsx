import React from 'react';
import styled from 'styled-components';
import bodyBackground from './bodyBackground.png';
import SendMessage from './SendMessage';
import MessageList from './MessageList';
interface Props {}

const ChatScreen: React.FC<Props> = () => {
    
    const [myAdditionalMessages, setMyAdditionalMessages] = React.useState([]);

    const addCurrentMessages = (currentMessage: any) => {
        let temp = []
        temp.push(currentMessage)
        let arr: any = [...myAdditionalMessages, ...temp]
        setMyAdditionalMessages(arr)
    }

    const nullifyAdditionalMessage = () => {
        setMyAdditionalMessages([]);
    }

    return (
        <React.Fragment>
            <ContainerBox>
                <WhiteBackground>
                <ChatApplication>
                    <Container>
                        <MessageList myAdditionalMessages={myAdditionalMessages} nullifyAdditionalMessage={nullifyAdditionalMessage} />
                        <SendMessage addCurrentMessages={addCurrentMessages} />
                    </Container>
                </ChatApplication>
                </WhiteBackground>
            </ContainerBox>

        </React.Fragment>
    )


}

export default ChatScreen


const ContainerBox = styled.div`
    height: 100%;
`

const WhiteBackground  = styled.div`
    display: flex;
    /* align-items: center; */
    justify-content: center;
    background: url(${bodyBackground});
    height: 100%;
`

const ChatApplication = styled.div`
    /* background: url(${bodyBackground}); */
    /* padding: 24px; */
    display: flex;
    justify-content: flex-end;
    flex-direction: column;
    align-items: center;
    height: calc(100vh - 120px);
    width: 100%;
    max-width: 640px;
`

const Container  = styled.div`
    /* max-width: 640px; */
    height: 100%;
    width: 100%;
    max-width: 640px;
`