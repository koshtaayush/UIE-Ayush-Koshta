import React, { useEffect } from 'react';
import styled from 'styled-components';
import { makeGet } from '../services/api.service';
import { GET_ALL_MESSAGES, GET_MESSAGES_AFTER_TIMESTAMP } from './../constants/api.constants';
import Message from './Message';
import useInterval from './../hooks/useInterval'

interface Props{
    myAdditionalMessages: Array<message>
    nullifyAdditionalMessage: () => void
}

interface message {
    message: string,
    author: string,
    timestamp: number,
    token: number,
    _id: string
}

const MessageList: React.FC<Props> = (props) => {

    let fetchMessagesPoll: any = null

    const [listOfMessages, setListOfMessages] = React.useState([]);
    let [fetchedTimestamp, setFetchedTimestamp] = React.useState(0);  

    const { myAdditionalMessages, nullifyAdditionalMessage } = props;

    console.log("myAdditionalMessages", myAdditionalMessages)
    console.log("listOfMessages", listOfMessages)

    const scrollToBottom = () => {
        const chat = document.getElementById("messageSet") as any;
        console.log("moving to bottom", chat.offsetHeight)
        if(chat.offsetHeight != 0){
            // chat.scrollTop = chat.offsetHeight;
            chat.scrollTop = chat.scrollHeight;
        }
    };

    useEffect(() => {
        handleFetchMessages()
        console.log("setging up timsetamp", (new Date()).getTime()  )
        setFetchedTimestamp((new Date()).getTime());
        scrollToBottom()
        return function cleanup() {
        }
    }, [])

    useInterval(() => {
        fetchMessagesAfterTimestamp()
    }, 10000)
    // }, 5000 * 10000)

    const fetchMessagesAfterTimestamp = () => {
        console.log("fetchedTimestamp", fetchedTimestamp)
        const url = GET_MESSAGES_AFTER_TIMESTAMP + 'since=' + fetchedTimestamp + '&limit=10&token=XfHdvAfPm3FB';
        makeGet(url)
            .then((res) =>  res.json())
            .then((resp) => {
                setFetchedTimestamp((new Date()).getTime());
                console.log("resp", resp)
                let arr: any = [...listOfMessages, ...resp]
                setListOfMessages(arr);
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

        const url = GET_ALL_MESSAGES;
        makeGet(url)
            .then((res) =>  res.json())
            .then((resp) => {
                console.log("resp", resp)
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
                  {listOfMessages.map((message) => {
                      return <Message message={message} key={message['id']} />
                  })}

                  {myAdditionalMessages.map((message: any) => {
                      return <Message message={message} key={message['id']} />
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