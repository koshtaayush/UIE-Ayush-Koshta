import React, { useEffect } from 'react';
import styled from 'styled-components';
import { makeGet } from '../services/api.service';
import { GET_ALL_MESSAGES, GET_MESSAGES_AFTER_TIMESTAMP } from './../constants/api.constants';
import Message from './Message';
import useInterval from './../hooks/useInterval'
import { IMessage } from './../typings/sharedInterface';

interface Props{
    myAdditionalMessages: Array<IMessage>
    nullifyAdditionalMessage: () => void
}

const MessageList: React.FC<Props> = (props) => {

    const [listOfMessages, setListOfMessages] = React.useState<Array<IMessage>>([]);
    const [fetchedTimestamp, setFetchedTimestamp] = React.useState(0);  

    const { myAdditionalMessages, nullifyAdditionalMessage } = props;

    const scrollToBottom = () => {
        const chat = document.getElementById("messageSet") as any;
        if(chat.offsetHeight != 0){
            chat.scrollTop = chat.scrollHeight;
        }
    };

    useEffect(() => {
        handleFetchMessages()
        setFetchedTimestamp((new Date()).getTime());
        scrollToBottom()
    }, [])

    useInterval(() => {
        fetchMessagesAfterTimestamp()
    }, 10000)
    // }, 5000 * 10000)

    const fetchMessagesAfterTimestamp = () => {
        const fetchMessagesUrl = GET_MESSAGES_AFTER_TIMESTAMP + 'since=' + fetchedTimestamp + '&limit=10&';
        makeGet(fetchMessagesUrl)
            .then((res) =>  res.json())
            .then((resp) => {
                setFetchedTimestamp((new Date()).getTime());
                setListOfMessages([...listOfMessages, ...resp]);
                nullifyAdditionalMessage()
                if(resp.length != 0){
                    scrollToBottom();
                }
            }, (err) => {
                console.log("err", err)
            })
            .catch((error) => {
                console.log("Error", error)
            })
    }

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
    padding: 24px;
`