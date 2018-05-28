import React, {Component} from 'react'
import styles from '../sass/Main'
import {
  Grid
} from 'react-bootstrap'

class Main extends Component {
    constructor() {
        super()
    }

    render() {
        const {children} = this.props
        return (
          <Grid>
            {children}
          </Grid>
        )
    }
}

export default Main
