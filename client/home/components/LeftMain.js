import React, { Component } from 'react'
import styles from '../sass/LeftMain'
import {
  Panel,
  Table,
} from 'react-bootstrap'

class LeftMain extends Component {
  constructor() {
    super()
  }

  render() {
    return (
      <div className={styles.main}>
        <Panel>
          <Panel.Heading className={styles.tableTitle}>捐款记录</Panel.Heading>
          <Panel.Body>
            <Table responsive>
              <thead>
                <tr>
                  <th>#</th>
                  <th>捐款时间</th>
                  <th>捐款方式</th>
                  <th>捐款额度</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>1</td>
                  <td>2017-09-02</td>
                  <td>微信</td>
                  <td>100.00</td>
                </tr>
                <tr>
                  <td>2</td>
                  <td>2017-09-03</td>
                  <td>微信</td>
                  <td>10.00</td>
                </tr>
                <tr>
                  <td>3</td>
                  <td>2017-09-03</td>
                  <td>微信</td>
                  <td>10.00</td>
                </tr>
                <tr>
                  <td>1</td>
                  <td>2017-09-02</td>
                  <td>微信</td>
                  <td>100.00</td>
                </tr>
                <tr>
                  <td>2</td>
                  <td>2017-09-03</td>
                  <td>微信</td>
                  <td>10.00</td>
                </tr>
                <tr>
                  <td>3</td>
                  <td>2017-09-03</td>
                  <td>微信</td>
                  <td>10.00</td>
                </tr>
                <tr>
                  <td>1</td>
                  <td>2017-09-02</td>
                  <td>微信</td>
                  <td>100.00</td>
                </tr>
                <tr>
                  <td>2</td>
                  <td>2017-09-03</td>
                  <td>微信</td>
                  <td>10.00</td>
                </tr>
                <tr>
                  <td>3</td>
                  <td>2017-09-03</td>
                  <td>微信</td>
                  <td>10.00</td>
                </tr>
                <tr>
                  <td>1</td>
                  <td>2017-09-02</td>
                  <td>微信</td>
                  <td>100.00</td>
                </tr>
                <tr>
                  <td>2</td>
                  <td>2017-09-03</td>
                  <td>微信</td>
                  <td>10.00</td>
                </tr>
                <tr>
                  <td>3</td>
                  <td>2017-09-03</td>
                  <td>微信</td>
                  <td>10.00</td>
                </tr>
              </tbody>
            </Table>
          </Panel.Body>
        </Panel>
      </div>
    )
  }
}

export default LeftMain
