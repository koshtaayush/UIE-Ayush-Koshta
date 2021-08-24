import React from 'react';
import styled from 'styled-components';

import Input from './../shared/Input';
import Button from './../shared/Button';

import { makePost } from './../services/api.service';
import { POST_MESSAGE_API_ENDPOINT } from './../constants/api.constants';
import { SENDER_NAME } from './../config/config';
import { IMessage } from './../typings/sharedInterface';

interface Props {
    addCurrentMessages: (msg: IMessage) => void
}

const SendMessage: React.FC<Props> = (props) => {

    //Props
    const { addCurrentMessages } = props;

    //Current message value which user is typing
    const [messageValue, setMessageValue]=  React.useState<string>('');

    /**
     * Function which is called to handle message change from input box
     */
    const handleMessageChange = (changedMessage: string) => {
        setMessageValue(changedMessage)
    }

    /**
     * Function which is called to submit message
     */
    const handlePostMessage = () => {
        
        const data = {
            message: messageValue,
            author: SENDER_NAME
        }

        makePost(POST_MESSAGE_API_ENDPOINT, data)
            .then((res) => res.json())
            .then((resp) => {
                addCurrentMessages(resp);
                setMessageValue('')
            }, (err) => {
                console.log("Error", err);
            }).catch((error) => {
                console.log("Error", error);
            })

    }

    return (
        <React.Fragment>
            <SendMessageContainer>
                <InputSection>
                    <Input 
                        onChangeProp={(v) => handleMessageChange(v)}
                        inputValue={messageValue}
                        placeHolderText={'Message'}></Input>
                </InputSection>

                <ButtonSection>
                    <Button 
                        buttonType="S"
                        onClick={() => handlePostMessage()}>
                    </Button>
                </ButtonSection>
            </SendMessageContainer>
        </React.Fragment>
    )
}

export default SendMessage

const SendMessageContainer = styled.div`
    background-color: #3798D4;
    width: inherit;
    display: flex;
    align-items: center;
    justify-content: center;
    position: fixed;
    bottom: 0rem;
    max-width: 40rem;
`

const InputSection  = styled.div`
    width: 80%;
    padding: 0.5rem;
`

const ButtonSection = styled.div`
    width: 20%;
    margin-left: 0.5rem;
`