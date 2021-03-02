import React, { Component } from "react";
import { connect } from "react-redux";
import { ChatStyle } from "./style";
import { Launcher } from "react-chat-window";
import FormBtn from "./FormBtn";
import { CHAT_USER, HELP } from "../../app/Actions/index";

class Chat extends Component {
  constructor() {
    super();
    this.state = {
      messageList: [
        {
          author: "them",
          type: "text",
          data: {
            text: "Hello there ...",
          },
        },
        {
          author: "them",
          type: "text",
          data: {
            text: <FormBtn _sendMessage={this._sendMessage} />,
          },
        },
      ],
      numberOfTexts : 0
    };
  }
  helpRequestSuccess = () => {
    this._sendMessage(
      "Your message has been sent successfully, We will respond to you via email ASAP."
    );
  };

  handleStrangerMessage = (message) => {
    var helpRequestInfo = {
      Email: this.props.gstate.chatUser.chatUser.email,
      Name: this.props.gstate.chatUser.chatUser.name,
      Message: message.data.text,
    };
    this.setState({numberOfTexts:this.state.numberOfTexts+1})
    if(this.state.numberOfTexts<1) { this.props.HELP(helpRequestInfo, this.helpRequestSuccess);}
  };

  handleUserMessage = (message) => {
    var helpRequestInfo = {
      Email: this.props.gstate.clientInfo.clientInfo.info.email,
      Name: this.props.gstate.clientInfo.clientInfo.info.name,
      Message: message.data.text,
    };
    this.setState({numberOfTexts:this.state.numberOfTexts+1})
    if(this.state.numberOfTexts<1) { this.props.HELP(helpRequestInfo, this.helpRequestSuccess);}
    
  };
  _onMessageWasSent(message) {
    if (this.props.gstate.clientInfo.clientInfo.info) {
      this.setState({
        messageList: [...this.state.messageList, message],
      });
      this.handleUserMessage(message);
    } else if (this.props.gstate.chatUser.chatUser.email) {
      this.setState({
        messageList: [...this.state.messageList, message],
      });
      this.handleStrangerMessage(message);
    }
  }

  _sendMessage(text) {
    if (text.length > 0) {
      this.setState({
        messageList: [
          ...this.state.messageList,
          {
            author: "them",
            type: "text",
            data: { text },
          },
        ],
      });
    }
  }
  render() {
    return (
      <ChatStyle>
        <Launcher
          agentProfile={{
            teamName: "Customer Service",
            imageUrl:
              "https://www.coworly.com/blog/wp-content/uploads/2018/06/live-answering-software-.jpg",
          }}
          onMessageWasSent={this._onMessageWasSent.bind(this)}
          messageList={this.state.messageList}
          showEmoji
        />
      </ChatStyle>
    );
  }
}

const mapStateToProps = (state) => {
  return { gstate: state };
};

export default connect(mapStateToProps, { CHAT_USER, HELP })(Chat);
