import React, {Component} from 'react'
import './style.sass'
import Index from '../index/app'
import Menu from '../Menu/app'

class App extends Component {

    constructor() {
        super()
    }

    render(){

        return(

            <React.Fragment>
                <Menu/>
                <Index className="margen" ></Index>
                {/* <Match/> */}
            </React.Fragment>
            
        )
    }

}

export default App