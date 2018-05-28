import React, {Component} from 'react'
import styles from '../sass/App'
import {
  Grid,
  Col,
  Row,
} from 'react-bootstrap'
import RightMain from '../components/RightMain';
import LeftMain from '../components/LeftMain';

class App extends Component {
  constructor() {
    super()
  }

  render() {
    const { actions } = this.props

    return (
      <div className={styles.app}>
        <Row className="show-grid">
          <Col md={3} mdPush={9} xs={12}>
            <RightMain/>
          </Col>
          <Col md={9} mdPull={3} xs={12}>
            <LeftMain/>
          </Col>
        </Row>
      </div>
    )
  }
}

export default App
