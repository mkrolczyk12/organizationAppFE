import React from "react";
import { Prompt } from "react-router-dom";
import { Form, Row, Col, Button } from "react-bootstrap";

const styles = {
  container: {
    backgroundColor: "#fff",
    // backgroundColor: "#212529",
    color: "#212529",
    // color: "#fff",
    minHeight: "inherit",
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
        <h1 className="text-center m-3">Napisz do mnie wiadomość</h1>
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
export default Feedback;

const FeedbackForm = (props) => {
  return (
    <>
      <Form className="p-4 m-auto border border-white">
        <Form.Label>Imie i nazwisko</Form.Label>
        <Row className="mb-2">
          <Col>
            <Form.Control
              name="fName"
              value={props.name}
              onChange={props.handleFormInputChange}
              placeholder="First name"
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
        <div className="m-auto text-center">
          <Button
            className=""
            variant="primary"
            type="submit"
            onClick={props.handleFormSubmit}
          >
            Submit
          </Button>
        </div>
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
