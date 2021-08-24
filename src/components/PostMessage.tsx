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
                <Field>
                    <Label>Author (mandatory): </Label>
                    <Value>
                        <Input 
                            onChangeProp={(v) => handleAuthorChange(v)}
                            inputValue={authorValue}
                            placeHolderText={'Author'}></Input>
                    </Value>
                </Field>
                
                <Field>
                    <Label>Message (mandatory): </Label>
                    <Value>
                        <Input 
                        onChangeProp={(v) => handleMessageChange(v)}
                        inputValue={messageValue}
                        placeHolderText={'Message'}></Input>
                    </Value>
                </Field>

                
                <ButtonContainer>
                    <Button 
                        buttonType="L"
                        onClick={() => handlePostMessage()}>Send</Button>
                </ButtonContainer>

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
    display: flex;
    flex-direction: column;
    padding: 2rem;
`

const Field  = styled.div`

`

const Label  = styled.div`
    margin-bottom: 10px;

`

const Value  = styled.div`
    margin-bottom: 10px;

`

const ButtonContainer = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    margin-top: 1rem;
`

const RequiredFieldsError  = styled.div``