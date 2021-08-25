import React, { useEffect } from 'react';
import styled from 'styled-components';

import { makeGet } from '../services/api.service';
import { GET_ALL_MESSAGES, GET_MESSAGES_AFTER_TIMESTAMP } from './../constants/api.constants';
import useInterval from './../hooks/useInterval'
import { IMessage } from './../typings/sharedInterface';
import { POLLING_INTERVAL } from './../config/config';

import Message from './Message';

interface Props{
    myAdditionalMessages: Array<IMessage>
    nullifyAdditionalMessage: () => void
}

const MessageList: React.FC<Props> = (props) => {

    //List of messages fetched
    const [listOfMessages, setListOfMessages] = React.useState<Array<IMessage>>([]);
    
    //Timestamp to store when last fetch call was made so that next fetch call can be made after this
    const [fetchedTimestamp, setFetchedTimestamp] = React.useState(0);  

    //Props
    const { myAdditionalMessages, nullifyAdditionalMessage } = props;

    /**
     * Function move the scroll bar to bottom of screen
     */
    const scrollToBottom = () => {
        const chat = document.getElementById("messageSet") as any;
        if(chat.offsetHeight !== 0){
            chat.scrollTop = chat.scrollHeight;
        }
    };
    
    useEffect(() => {
        handleFetchMessages()
        setFetchedTimestamp((new Date()).getTime());
        scrollToBottom()
    }, [])

    //Polling mechanism to fetch the recent messages
    useInterval(() => {
        fetchMessagesAfterTimestamp()
    }, POLLING_INTERVAL)

    /**
     * Function which is called to fetch messages after a given timestamp
     */
    const fetchMessagesAfterTimestamp = () => {
        const fetchMessagesUrl = GET_MESSAGES_AFTER_TIMESTAMP + 'since=' + fetchedTimestamp + '&limit=10&';
        makeGet(fetchMessagesUrl)
            .then((res) =>  res.json())
            .then((resp) => {
                setFetchedTimestamp((new Date()).getTime());
                setListOfMessages([...listOfMessages, ...resp]);
                nullifyAdditionalMessage()
                if(resp.length !== 0){
                    scrollToBottom();
                }
            }, (err) => {
                console.log("err", err)
            })
            .catch((error) => {
                console.log("Error", error)
            })
    }

    /**
     * Function which is called to fetch all messages
     */
    const handleFetchMessages = () => {
        const fetchAllMessagesUrl = GET_ALL_MESSAGES;
        makeGet(fetchAllMessagesUrl)
            .then((res) =>  res.json())
            .then((resp) => {
                setListOfMessages(resp);
                scrollToBottom()
            }, (err) => {
                console.log("err", err)
            })
            .catch((error) => {
                console.log("Error", error)
            })
    }

    return (
        <React.Fragment>
            <MessageSet id="messageSet">
                  {listOfMessages.map((message: IMessage) => {
                      return <Message message={message} key={message._id} />
                  })}

                  {myAdditionalMessages.map((message: IMessage) => {
                      return <Message message={message} key={message._id} />
                  })}
            </MessageSet>
        </React.Fragment>
    )
}

export default MessageList

const MessageSet  = styled.div`
    position: relative;
    overflow-y: scroll;
    height: 100%;
    padding: 1.5rem;
`