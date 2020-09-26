import React from "react";
import Radium from "radium";

import { Prompt } from "react-router-dom";
import { Form, Row, Col, Button } from "react-bootstrap";

const styles = {
  container: {
    backgroundColor: "#fff",
    color: "#212529",
    minHeight: "inherit",
  },
  sectionMainTitle: {
    fontWeight: "900",
  },
  submitButton: {
    border: "none",
    backgroundColor: "#3eb650",
    ":hover": {
      backgroundColor: "#4fc761",
      border: "1px solid #fff",
    },
  },
  elementOnFocus: {
    ":focus": {
      outline: "none",
      border: "1px solid #3eb650",
    },
    ":active": {
      outline: "none",
      border: "1px solid #3eb650",
    },
  },
};

class Feedback extends React.Component {
  state = {
    fName: "",
    lName: "",
    email: "",
    message: "",
  };

  handleFormInputChange = (event) => {
    const name = event.target.name;
    const value = event.target.value;
    this.setState({
      [name]: value,
    });
  };

  handleFormSubmit = (event) => {
    event.preventDefault();
    this.setState({
      fName: "",
      lName: "",
      email: "",
      topic: "",
      message: "",
    });
  };

  render() {
    return (
      <div className="p-4" style={styles.container}>
        <h1 className="text-center m-3" style={styles.sectionMainTitle}>
          Send feedback
        </h1>
        <div className="row p-md-0 m-0">
          <FeedbackForm
            name={this.state.fName}
            surname={this.state.lName}
            email={this.state.email}
            topic={this.state.topic}
            message={this.state.message}
            handleFormInputChange={this.handleFormInputChange}
            handleFormSubmit={this.handleFormSubmit}
          />
        </div>
      </div>
    );
  }
}
export default Radium(Feedback);

const FeedbackForm = (props) => {
  return (
    <>
      <Form className="p-4 m-auto">
        <Form.Label>First and last name</Form.Label>
        <Row className="mb-2">
          <Col>
            <Form.Control
              name="fName"
              value={props.name}
              onChange={props.handleFormInputChange}
              placeholder="First name"
              style={styles.elementOnFocus}
            />
          </Col>
          <Col>
            <Form.Control
              name="lName"
              value={props.surname}
              onChange={props.handleFormInputChange}
              placeholder="Last name"
            />
          </Col>
        </Row>
        <Row className="m-auto mb-2">
          <Col className="m-0 p-0">
            <Form.Group controlId="formBasicEmail">
              <Form.Label>Email</Form.Label>
              <Form.Control
                type="email"
                name="email"
                value={props.email}
                onChange={props.handleFormInputChange}
                placeholder="Enter email"
              />
              <Form.Text className="text-muted">
                We'll never share your email with anyone else.
              </Form.Text>
            </Form.Group>
          </Col>
        </Row>
        <Form.Label>Topic</Form.Label>
        <Row className="mb-2">
          <Col>
            <Form.Control
              name="topic"
              value={props.topic}
              onChange={props.handleFormInputChange}
              placeholder="Enter a topic"
            />
          </Col>
        </Row>
        <Row className="m-auto mb-2">
          <Form.Group controlId="exampleForm.ControlTextarea1">
            <Form.Label>Message</Form.Label>
            <Form.Control
              as="textarea"
              name="message"
              value={props.message}
              onChange={props.handleFormInputChange}
              rows="10"
              cols="50"
              placeholder="Write your message here"
            />
          </Form.Group>
        </Row>
        <SubmitButton handleFormSubmit={props.handleFormSubmit} />
      </Form>
      <Prompt
        when={
          props.name ||
          props.surname ||
          props.topic ||
          props.email ||
          props.message
        }
        message="You have unsaved changes, are you sure you want to leave?"
      ></Prompt>
    </>
  );
};

const submitbutton = (props) => {
  return (
    <div className="m-auto text-center">
      <Button
        className="m-auto text-center"
        type="submit"
        onClick={props.handleFormSubmit}
        style={styles.submitButton}
      >
        Submit
      </Button>
    </div>
  );
};
const SubmitButton = Radium(submitbutton);
