import React, {Component} from 'react'
import ReactFancyBox from 'react-fancybox'
import 'react-fancybox/lib/fancybox.css'
import './style.sass'
import '../../public/favicon.ico'
import Button from '../button/app'
import axios from 'axios'

class App extends Component {

    constructor() {
        super()
        this.state = {
            personas : [],

        }
        axios.defaults.baseURL= 'http://localhost:7070'
        // axios.defaults.headers.common = {'Authorization': `Bearer ${token}`}
        // this.postData = this.postData.bind(this)
    }

    postData = () => {
        axios.get('/data')
        .then(rs => {
            const data = rs.data
            this.setState({personas: data})
            console.log(data)
            M.toast({html: 'Datos extraidos !!!'})
        })
        .catch(e => console.log(e))
        console.log('api extraida !')
    }
    
    componentWillMount() {
    }

    render(){

        return(

            <div className="row">
                <div className="menu">
                    <div className="menu_item"><a href="#">React</a></div>
                    <div className="menu_item"><a href="#">Redux</a></div>
                    <div className="menu_item"><a href="#">Flux</a></div>
                </div>
                <div className="col s8">
                    <table>
                        <thead>
                            <tr>
                                <th>Nombres</th>
                                <th>País</th>
                            </tr>
                        </thead>
                        <tbody>
                            {
                                this.state.personas.map((persona, index) => {
                                    return (
                                        <tr key={index}>
                                            <td>{persona.name}</td>
                                            <td>{persona.country}</td>
                                        </tr>
                                    )
                                })
                            }
                        </tbody>
                    </table>
                </div>
                <div>
                    <Button name="LISTAR" click={this.postData} />
                </div>
                <ReactFancyBox
                    thumbnail="https://loremflickr.com/320/240"
                    image="https://loremflickr.com/320/240"/>
            </div>
            
        )
    }

}

export default App