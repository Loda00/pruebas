import React, {Component} from 'react'
import { NavLink } from 'react-router-dom'
import './style.sass'

class App extends Component {

    constructor() {
        super()
    }

    render(){

        return(

            <div className="menu">
                <div className="menu_item"><a to="/">React</a></div>
                <div className="menu_item"><a to="/redux">Redux</a></div>
                <div className="menu_item"><a to="/flux">Flux</a></div>
            </div>
            
        )
    }

}

export default App