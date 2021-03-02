import React, { Component } from "react";
import { connect } from "react-redux";
import BUTTON from "../Button/Button";
import { CHAT_USER, HELP } from "../../app/Actions/index";

class FormBtn extends Component {
  state = {
    name: "",
    email: "",
  };
  btnStyle = {
    padding: "3px 10px",
    borderRadius: "10%",
    marginRop: "15px",
    fontSize: "16px",
    fontWeight: "100",
  };

  submitHandle = () => {
    const email_form = /\S+@\S+\.\S+/;
    if (this.state.email !== "" && this.state.name !== "") {
      if (this.state.email.match(email_form)) {
        window.localStorage.setItem("chatUser", JSON.stringify(this.state));
        this.props.CHAT_USER(this.state);
      }
    }
  };
  render() {
    return (
      <>
        {this.props.gstate.clientInfo.clientInfo.info ? (
          "How can we Help you ? "
        ) : this.props.gstate.chatUser.chatUser.email ? (
          "its all set now , How can we Help you ? "
        ) : (
          <form
            
            onSubmit={(e) => {
              e.preventDefault();
            }}
          >
            <p>Please provide email and name to Contact you through</p>
            <input
              required
              style={{
                margin: "5px 0px",
                border: "none",
                padding: "5px 0px 5px 5px",
              }}
              type="text"
              placeholder="Name"
              value={this.state.name}
              onChange={(e) => {
                this.setState({ name: e.target.value });
              }}
            />
            <input
              required
              style={{
                margin: "5px 0px",
                border: "none",
                padding: "5px 0px 5px 5px",
              }}
              type="email"
              placeholder="Email"
              value={this.state.email}
              onChange={(e) => {
                this.setState({ email: e.target.value });
              }}
            />
            <small>{this.state.badEmail && "Invalid Email"}</small>
            <BUTTON
              style={this.btnStyle}
              text="send"
              handleFunction={this.submitHandle}
            />
          </form>
        )}
      </>
    );
  }
}

const mapStateToProps = (state) => {
  return { gstate: state };
};

export default connect(mapStateToProps, { CHAT_USER, HELP })(FormBtn);
