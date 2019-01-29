import React, {Component} from 'react'
import './style.sass'
import Index from '../index/app'

class App extends Component {

    constructor() {
        super()
    }

    render(){

        return(

            <React.Fragment>
                <Index></Index>
            </React.Fragment>
            
        )
    }

}

export default App