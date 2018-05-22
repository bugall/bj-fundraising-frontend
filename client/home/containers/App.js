import React, {Component} from 'react'
import LeftMain from '../components/LeftMain'
import styles from '../sass/App'
import RightMain from '../components/RightMain';
import { Col, Row } from 'antd'

class App extends Component {
  constructor() {
    super()
  }

  render() {
    const { actions } = this.props

    return (
      <div className={styles.app}>
        <Row gutter={16} justify="space-around">
          <Col span={18}>
            <LeftMain/>
          </Col>
          <Col span={6}>
            <RightMain/>
          </Col>
        </Row>
      </div>
    )
  }
}

export default App
