import React, { Component } from 'react'
import styles from '../sass/RightMain'
import { Card, Input } from 'antd'

const Search = Input.Search;

class RightMain extends Component {
  constructor() {
    super()
  }

  render() {
    return (
      <div className={styles.main}>
        <Card title="搜索">
          <Search placeholder="input search text" enterButton="Search" size="large" />
        </Card>
      </div>
    )
  }
}

export default RightMain 
