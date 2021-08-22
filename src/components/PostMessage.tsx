import React from 'react';
import styled from 'styled-components';

import Input from './../shared/Input';
import Button from './../shared/Button';

import { makePost } from './../services/api.service';
import { POST_MESSAGE_API_ENDPOINT } from './../constants/api.constants';

interface Props {

}

const PostMessage: React.FC<Props> = (props) => {

    const [messageValue, setMessageValue]=  React.useState('');
    const [authorValue, setAuthorValue] = React.useState('');
    const [apiError, setApiError] = React.useState('');
    const [apiSuccess, setApiSuccess] = React.useState('');
    const [showRequiredFieldsError, setShowRequiredFieldsError]= React.useState(false)


    const handlePostMessage = () => {

        if(messageValue === '' || authorValue === ''){
            setShowRequiredFieldsError(true);
            return;
        }

        setShowRequiredFieldsError(false);
        
        const data = {
            message: messageValue,
            author: authorValue
        }

        makePost(POST_MESSAGE_API_ENDPOINT, data)
            .then((res) => res.json())
            .then((resp) => {
                setApiSuccess('Posted message successfully');
            }, (err) => {
                console.log("Error", err);
                setApiError(err);
                setApiSuccess('');
            }).catch((error) => {
                setApiError(error);
                setApiSuccess('');
            })

    }

    const handleMessageChange = (v: string) => {
        console.log("v", v)
        setMessageValue(v)
    }

    const handleAuthorChange = (v: string) => {
        console.log("v", v)
        setAuthorValue(v)
    }



    return (
        <React.Fragment>
            <SendMessageContainer>
                <Label>Author (mandatory): </Label>
                <Value><Input 
                    onChangeProp={(v) => handleAuthorChange(v)}
                    inputValue={authorValue}></Input>
                </Value>
                
                <Label>Message (mandatory): </Label>
                <Value>
                    <Input 
                    onChangeProp={(v) => handleMessageChange(v)}
                    inputValue={messageValue}></Input>
                </Value>

                <Button onClick={() => handlePostMessage()}>Send</Button>

                {showRequiredFieldsError &&
                <RequiredFieldsError>
                    Please fill the required fields
                </RequiredFieldsError>}
            </SendMessageContainer>


        </React.Fragment>
    )
}

export default PostMessage

const SendMessageContainer = styled.div`
`

const Label  = styled.div``

const Value  = styled.div``

const RequiredFieldsError  = styled.div``