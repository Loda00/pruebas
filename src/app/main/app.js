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
                {/* <div className="menu">
                    <div className="menu_item"><a href="#">React</a></div>
                    <div className="menu_item"><a href="#">Redux</a></div>
                    <div className="menu_item"><a href="#">Flux</a></div>
                </div> */}
                <Index className="margen" ></Index>
            </React.Fragment>
            
        )
    }

}

export default App