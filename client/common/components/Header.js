import React, { Component } from 'react'
import styles from '../sass/Header'
import imgAvatar from '../assets/avatar.png'
import { Avatar, Row, Col, Menu, Dropdown, Icon } from 'antd';

const menu = (
  <Menu>
    <Menu.Item>
      <a target="_blank">退出登录</a>
    </Menu.Item>
  </Menu>
)

class Header extends Component {
  constructor() {
    super()
  }
  state = {
    current: 'mail',
  }
  handleClick = (e) => {
    console.log('click ', e);
    this.setState({
      current: e.key,
    });
  }
  render() {
    return (
      <div className={styles.header}>
        <Row>
          <Col span={1}> </Col>
          <Col span={18}> </Col>
          <Col span={4}>
            <div className={styles.userInfo}>
              <Dropdown overlay={menu}>
                <div>
                  <div className={styles.username}>
                    bugall 
                  </div>
                  <div className={styles.avatar} >
                    <Avatar style= {{verticalAlign: 'middle', backgroundColor: '#1891ff'}} icon="user" />
                  </div>
                </div>
              </Dropdown>
            </div>
          </Col>
          <Col span={1}> </Col>
        </Row>
      </div>
    )
  }
}

export default Header
