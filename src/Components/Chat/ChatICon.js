import React, { Component } from 'react';
import {ChatBTN} from "./style";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCommentDots } from '@fortawesome/free-solid-svg-icons';

class ChatICon extends Component {
    render() {
        return (
            <ChatBTN onClick={()=>{alert("open the chat window")}}>
                <FontAwesomeIcon  icon={faCommentDots} />
            </ChatBTN>
        );
    }
}
 export default ChatICon;