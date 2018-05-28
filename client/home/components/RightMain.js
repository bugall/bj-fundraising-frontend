import React, { Component } from 'react'
import styles from '../sass/RightMain'
import {
  Col,
  Row,
  Grid,
  FormGroup,
  Form,
  Image,
  Button,
  Input,
  FormControl,
  Alert,
  ButtonGroup,
  Thumbnail 
} from 'react-bootstrap'

class RightMain extends Component {
  constructor() {
    super()
  }

  render() {
    return (
      <div className={styles.main}>
        <div className={styles.search}>
          <Form>
              <FormGroup>
                <FormControl type="text" placeholder="输入用户ID" />
              </FormGroup>
          </Form>
          <Button bsStyle="primary" block>查询</Button>
        </div>

        <div className={styles.userInfo}>
          <Form horizontal>
            <FormGroup>
              <div className={styles.avatar}>B</div>
            </FormGroup>
            <FormGroup>
              <div className={styles.name}>bugall</div>
            </FormGroup>
            <FormGroup>
              <div className={styles.name}>ID: 19304912</div>
            </FormGroup>
          </Form>
        </div>

        <div className={styles.juankuan}>
          <div>
              <Thumbnail className={styles.thumbnail}>
                <p>点击捐款方式生成二维码后捐款</p>
              </Thumbnail>
          <ButtonGroup justified>
            <Button bsStyle="success" href="#" className={styles.wechat}>微信</Button>
            <Button bsStyle="info" href="#" className={styles.zhifubao}>支付宝</Button>
          </ButtonGroup>
          </div>
        </div>
      </div>
    )
  }
}

export default RightMain 
