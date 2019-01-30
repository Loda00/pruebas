import React, { Component } from 'react'
import {Button,Row, Modal,Input, Icon} from 'react-materialize'
import Boton from '../Button/app'
import axios from 'axios'
import './style.sass'
import '../../public/favicon.ico'

class App extends Component {

    constructor() {
        super()
        this.state = {
            personas: [],
            name: '',
            age: '',
            country: ''
        }
        axios.defaults.baseURL = 'http://localhost:7070'
        // axios.defaults.headers.common = {'Authorization': `Bearer ${token}`}
        this.addUser = this.addUser.bind(this)
        this.catchInput = this.catchInput.bind(this)
    }

    getData() {
        axios.get('/data')
            .then(rs => {
                const data = rs.data
                this.setState({ personas: data })
                console.log(data)
            })
            .catch(e => console.log(e))
        console.log('api extraida !')
    }

    componentWillMount() {
        this.getData()
    }

    addUser(e) {

        const { name, country, age } = this.state

        if (name.length == 0) {
            M.toast({ html: 'Ingrese su nombre' })
            e.preventDefault()
            return
        }

        if (country.length == 0) {
            M.toast({ html: 'Ingrese el País' })
            e.preventDefault()
            return
        }

        if (age.length == 0) {
            M.toast({ html: 'Ingrese el Edad' })
            e.preventDefault()
            return
        }

        e.preventDefault()
        this.postData()
    }

    postData = () => {
        const { name, age, country } = this.state
        const id = (Math.random() * 1000).toString().split('.')[1];
        const data = { id: Number(id), name, age: Number(age), country }

        axios.post('/data', data)
            .then(() => {
                this.getData()
                this.cleanForm()
                M.toast({html: 'Agregado !'})
            })
            .catch(e => console.log(e))
    }


    editUser = (user) => {
        
        const { id, name, age, country} = user
        
        this.setState({
            ...user
        })
        console.log('editando', this.state)

        console.log('user', {...user})
    }

    deleteUser = (id) => {
        console.log(id)
        axios.delete(`/data/${id}`)
        .then(() => {
            this.getData()
            M.toast({html: 'Eliminado !'})
        })
        .catch(e => console.log(e))
    }

    cleanForm () {
        this.setState({
            name: '',
            age: '',
            country: ''
        })
    }

    // componentDidMount () {
    //     this.
    // }

    // componentWillUpdate(){
    //     this.setState({
    //         name: this.state.name,
    //         age:  this.state.age,
    //         country:  this.state.country
    //     })
    // }


    catchInput = (e) => {
        const { name, value } = e.target
        const { country, age } = this.state
        console.log('this.state', this.state.name, country, age)
        this.setState({
            [name]: value
        })
    }

    render() {

        return (

            <React.Fragment>
                <div className="formulario">
                    <form onSubmit={this.addUser}>
                        {/* <div className="input-field col s12">
                            <input id="name" type="text" name="name" value={this.state.name} onChange={this.catchInput} className="validate" />
                            <label htmlFor="name">Nombres y Apellidos</label>
                        </div>
                        <div className="input-field col s12">
                            <input id="country" type="text" name="country" value={this.state.country} onChange={this.catchInput} className="validate" />
                            <label htmlFor="country">País</label>
                        </div>
                        <div className="input-field col s12">
                            <input id="age" type="number" name="age" value={this.state.age} onChange={this.catchInput} className="validate" />
                            <label htmlFor="age">Edad</label>
                        </div> */}
                        <Row>
                            <Input defaultValue={this.state.name} autoComplete="off" name="name" onChange={this.catchInput} s={12} label="Nombres y Apellidos" />
                            <Input defaultValue={this.state.country} autoComplete="off" name="country" onChange={this.catchInput} s={12} label="País"/>
                            <Input defaultValue={this.state.age} autoComplete="off" name="age" onChange={this.catchInput} s={12} label="Edad" />
                        </Row>
                        <Boton name="AGREGAR" />
                    </form>
                </div>
                <div className="tabla">
                    <table className="striped highlight">
                        <thead>
                            <tr>
                                <th>Nombres</th>
                                <th>Edad</th>
                                <th>País</th>
                                <th>Editar</th>
                                <th>Eliminar</th>
                            </tr>
                        </thead>
                        <tbody>
                            {
                                this.state.personas.map((persona, index) => {
                                    return (
                                        <tr key={index}>
                                            <td>{persona.name}</td>
                                            <td>{persona.age}</td>
                                            <td>{persona.country}</td>
                                            <td>
                                            <Button onClick={() => {$('#modal').modal('open'), this.editUser(persona)
                                            }}>Editar</Button>
                                                <Modal header='Actualizar Usuario' id="modal" className="modal">
                                                    <Row>
                                                        <Input defaultValue={this.state.name} autoComplete="off" onChange={this.catchInput} name="name" label="Nombres y Apellidos" s={12} label="First Name" />
                                                        <Input defaultValue={this.state.country} autoComplete="off" onChange={this.catchInput} name="country" s={12} label="País" />
                                                        <Input defaultValue={this.state.age} autoComplete="off" onChange={this.catchInput} name="age" s={12} label="Edad" />
                                                    </Row>
                                                    <div className="modal_botones">
                                                        <Button modal="close" onClick={() => this.postData(persona)} >Guardar</Button>
                                                        <Button modal="close" >Cerrar</Button>
                                                    </div>
                                                </Modal>
                                                </td>
                                            <td><Button onClick={() => this.deleteUser(persona.id)}>Eliminar</Button></td>
                                        </tr>
                                    )
                                })
                            }
                        </tbody>
                    </table>
                </div>
            </React.Fragment>
        )
    }

}

export default App