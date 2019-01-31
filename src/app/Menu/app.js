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
                <div className="menu_item"><NavLink to="/">React</NavLink></div>
                <div className="menu_item"><NavLink to="/redux">Redux</NavLink></div>
                <div className="menu_item"><NavLink to="/flux">Flux</NavLink></div>
            </div>
            
        )
    }

}

export default App