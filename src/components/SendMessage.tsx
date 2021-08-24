import React from 'react';
import styled from 'styled-components';

import Input from './../shared/Input';
import Button from './../shared/Button';
import { makePost } from './../services/api.service';
import { POST_MESSAGE_API_ENDPOINT } from './../constants/api.constants';

interface Props {
    addCurrentMessages: (v: any) => void
}

const SendMessage: React.FC<Props> = (props) => {

    const { addCurrentMessages } = props;

    const [messageValue, setMessageValue]=  React.useState('');

    const handleMessageChange = (v: string) => {
        console.log("v", v)
        setMessageValue(v)
    }

    const handlePostMessage = () => {
        
        const data = {
            message: messageValue,
            author: "Ayush"
        }

        makePost(POST_MESSAGE_API_ENDPOINT, data)
            .then((res) => res.json())
            .then((resp) => {
                console.log("resp");
                addCurrentMessages(resp);
                setMessageValue('')
            }, (err) => {
                console.log("Error", err);
            }).catch((error) => {
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
    /* padding: 8px; */
    /* margin-bottom: -24px; */
    width: inherit;
    display: flex;
    align-items: center;
    justify-content: center;
    position: fixed;
    bottom: 0px;
    max-width: 640px;
`

const InputSection  = styled.div`
    width: 80%;
    padding: 8px;

`

const ButtonSection = styled.div`
    width: 20%;
    margin-left: 8px;
`