import React from 'react';
import styled from 'styled-components';

import Input from './../shared/Input';
import Button from './../shared/Button';

import { makePost } from './../services/api.service';
import { POST_MESSAGE_API_ENDPOINT } from './../constants/api.constants';

interface Props {}

const PostMessage: React.FC<Props> = (props) => {

    const [messageValue, setMessageValue]=  React.useState<string>('');
    const [authorValue, setAuthorValue] = React.useState<string>('');
    const [apiError, setApiError] = React.useState<string>('');
    const [apiSuccess, setApiSuccess] = React.useState<string>('');
    const [showRequiredFieldsError, setShowRequiredFieldsError]= React.useState<boolean>(false)


    /**
     * Function which is called to submit message
     */
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
                setMessageValue('');
                setAuthorValue('');
            }, (err) => {
                console.log("Error", err);
                setApiError(err);
                setApiSuccess('');
            }).catch((error) => {
                setApiError(error);
                setApiSuccess('');
            })

    }

    /**
     * Function which is called to handle message change from input box
     */
    const handleMessageChange = (changedMessage: string) => {
        setMessageValue(changedMessage)
    }

    /**
     * Function which is called to handle author change from input box
     */
    const handleAuthorChange = (changedAuthor: string) => {
        setAuthorValue(changedAuthor)
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

                <ErrorContainer>
                    {showRequiredFieldsError &&
                    <ErrorMessage>
                        Please fill the required fields
                    </ErrorMessage>}
                    
                    {apiError !== '' && <SuccessMessage>{apiError}</SuccessMessage>}

                    {apiSuccess !== '' && <SuccessMessage>{apiSuccess}</SuccessMessage>}
                    
                </ErrorContainer>
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

const Field  = styled.div``

const Label  = styled.div`
    margin-bottom: 0.625rem;
`

const Value  = styled.div`
    margin-bottom: 0.625rem;
`

const ButtonContainer = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    margin-top: 1rem;
`

const ErrorContainer= styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    margin-top: 1rem;
`

const ErrorMessage  = styled.div`
    margin-top: 0.25rem;
    color: #f5222d;
    font-size: 1rem;
    font-weight: 500;
    line-height: 1.5rem;
`

const SuccessMessage  = styled.div`
    margin-top: 0.25rem;
    color: #00a300;
    font-size: 1rem;
    font-weight: 500;
    line-height: 1.5rem;
`