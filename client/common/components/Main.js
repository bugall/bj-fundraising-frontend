import React, {Component} from 'react'
import styles from '../sass/Main'

class Main extends Component {
    constructor() {
        super()
    }

    render() {
        const {children} = this.props

        return (
            <div className={styles.main}>
                {children}
            </div>
        )
    }
}

export default Main
