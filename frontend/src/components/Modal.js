import React, { Component } from "react";
import {
  Button,
  Modal,
  ModalHeader,
  ModalBody,
  ModalFooter,
  Form,
  FormGroup,
  Input,
  Label,
} from "reactstrap";

export default class CustomModal extends Component {
  constructor(props) {
    super(props);
    this.state = {
      activeItem: this.props.activeItem,
    };
  }

  handleChange = (e) => {
    let { name, value } = e.target;

    if (e.target.type === "checkbox") {
      value = e.target.checked;
    }

    const activeItem = { ...this.state.activeItem, [name]: value };

    this.setState({ activeItem });
  };

  render() {
    const { toggle, onSave } = this.props;

    return (
      <Modal isOpen={true} toggle={toggle}>
        <ModalHeader toggle={toggle}>테스또</ModalHeader>
        <ModalBody>
          <Form>
            <FormGroup>
              <Label for="todo-name">이름</Label>
              <Input
                type="text"
                id="todo-name"
                name="name"
                value={this.state.activeItem.name}
                onChange={this.handleChange}
                placeholder="이름"
              />
            </FormGroup>
            <FormGroup>
              <Label for="todo-age">나이</Label>
              <Input
                type="text"
                id="todo-age"
                name="age"
                value={this.state.activeItem.age}
                onChange={this.handleChange}
                placeholder="나이"
              />
            </FormGroup>
            <FormGroup check>
              <Label check>
                <Input
                  type="checkbox"
                  name="sex"
                  checked={this.state.activeItem.sex}
                  onChange={this.handleChange}
                />
                성별
              </Label>
            </FormGroup>
          </Form>
        </ModalBody>
        <ModalFooter>
          <Button
            color="success"
            onClick={() => onSave(this.state.activeItem)}
          >
            저장
          </Button>
        </ModalFooter>
      </Modal>
    );
  }
}