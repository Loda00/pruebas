import React from 'react'

import './style.sass'


class Todos extends React.Component {
    constructor() {
        super()
        this.state = {
            todo: [
                {
                    id: 1,
                    title: 'Hi'
                }
            ]
        }
    }

    render(){

        const todo = this.state.todo.map((item,id) => {
            return <div>
                <button>E</button>
                <button>D</button>
            </div>
        })

        return(
            <div className="todos">
                <div><input type="text" name="tarea" /></div>
                
            </div>
        )
    }
}

export default Todos