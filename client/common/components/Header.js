import React, { Component } from 'react'
import styles from '../sass/Header'
import imgAvatar from '../assets/avatar.png'
import {
  Grid,
  Row,
  Col,
  Navbar,
  Nav,
  NavItem,
  NavDropdown,
  MenuItem,
  Modal,
  Button,
  Form,
  FormGroup,
  FormControl,
  ControlLabel,
  Checkbox,
} from 'react-bootstrap'

class LoginModal extends Component {
  constructor() {
    super()
  }
  state = {
    show: false
  }
  componentWillReceiveProps(nextProps) {
    this.setState({
      show: nextProps.data.loginModal
    })
  }
  handleHide() {
    this.setState({ show: false });
  }
  render() {
    console.log(this.state)
    return (
      <Modal
        show={this.state.show}
        onHide={this.handleHide.bind(this)}
        container={this}
        aria-labelledby="contained-modal-title"
      >
        <Modal.Header closeButton>
          <Modal.Title id="contained-modal-title">
            登录
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form horizontal>
            <FormGroup controlId="formHorizontalEmail">
              <Col componentClass={ControlLabel} sm={2}>
                用户名
              </Col>
              <Col sm={10}>
                <FormControl type="email" placeholder="Email" />
              </Col>
            </FormGroup>

            <FormGroup controlId="formHorizontalPassword">
              <Col componentClass={ControlLabel} sm={2}>
                密码
              </Col>
              <Col sm={10}>
                <FormControl type="password" placeholder="Password" />
              </Col>
            </FormGroup>

          </Form>
        </Modal.Body>
        <Modal.Footer>
          <Button onClick={this.handleHide.bind(this)}>登录</Button>
        </Modal.Footer>
      </Modal>
    )
  }
}

class RegisterModal extends Component {
  constructor() {
    super()
  }
  state = {
    show: false
  }
  componentWillReceiveProps(nextProps) {
    console.log(nextProps)
    this.setState({
      show: nextProps.data.registerModal
    })
  }
  handleHide() {
    this.setState({ show: false });
  }
  render() {
    return (
      <Modal
        show={this.state.show}
        onHide={this.handleHide.bind(this)}
        container={this}
        aria-labelledby="contained-modal-title"
      >
        <Modal.Header closeButton>
          <Modal.Title id="contained-modal-title">
            注册
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form horizontal>
            <FormGroup controlId="formHorizontalEmail">
              <Col componentClass={ControlLabel} sm={2}>
                用户名
              </Col>
              <Col sm={10}>
                <FormControl type="email" placeholder="Email" />
              </Col>
            </FormGroup>

            <FormGroup controlId="formHorizontalPassword">
              <Col componentClass={ControlLabel} sm={2}>
                密码
              </Col>
              <Col sm={10}>
                <FormControl type="password" placeholder="Password" />
              </Col>
            </FormGroup>

            <FormGroup controlId="formHorizontalEmail">
              <Col componentClass={ControlLabel} sm={2}>
                真实姓名
              </Col>
              <Col sm={10}>
                <FormControl type="text" placeholder="李三" />
              </Col>
            </FormGroup>

            <FormGroup controlId="formHorizontalEmail">
              <Col componentClass={ControlLabel} sm={2}>
                邀请码
              </Col>
              <Col sm={10}>
                <FormControl type="text" placeholder="邀请码" />
              </Col>
            </FormGroup>

            <FormGroup controlId="formHorizontalEmail">
              <Col componentClass={ControlLabel} sm={2}>
                手机号
              </Col>
              <Col sm={10}>
                <FormControl type="text" placeholder="输入11位手机号码" />
              </Col>
            </FormGroup>
          </Form>
        </Modal.Body>
        <Modal.Footer>
          <Button onClick={this.handleHide.bind(this)}>注册</Button>
        </Modal.Footer>
      </Modal>
    )
  }
}

class Header extends Component {
  constructor() {
    super()
  }
  state = {
    current: 'mail',
    loginModal: false,
    registerModal: false
  }
  handleClick = (e) => {
    this.setState({
      current: e.key,
    });
  }
  handleLogin = ()=> {
    this.setState({
      loginModal: true,
      registerModal: false
    })
  }
  handleRegister = () =>  {
    this.setState({
      registerModal: true,
      loginModal: false,
    })
  }
  render() {
    let content = ""
    if (this.props.userInfo) {
      content = ( <Nav pullRight>
        <NavDropdown eventKey={3} title="bugall" id="basic-nav-dropdown">
          <MenuItem eventKey={3.1}>退出</MenuItem>
        </NavDropdown>
      </Nav>
      )
    } else {
      content = ( 
      <Nav pullRight>
        <NavItem eventKey={1} href="#" onClick={this.handleRegister}>
          注册
        </NavItem>
        <NavItem eventKey={2} href="#" onClick={this.handleLogin}>
          登录
        </NavItem>
      </Nav>
      )
    }
    return (
      <Navbar inverse collapseOnSelect>
        <Navbar.Header>
          <Navbar.Brand>
            <a href="#brand">爱心捐款</a>
          </Navbar.Brand>
          <Navbar.Toggle />
        </Navbar.Header>
        <Navbar.Collapse>
          {content}
        </Navbar.Collapse> 

        <LoginModal
          data = { this.state }
        />
        <RegisterModal
          data = { this.state }
        />
      </Navbar>
    )
  }
}
export default Header
