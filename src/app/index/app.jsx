import React, { Component } from 'react'
import { TextField, Button, Dialog, DialogTitle, DialogContent, DialogActions, DialogContentText } from '@material-ui/core'
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
            country: '',
            isOpenModal: false
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
                this.cleanForm()
                this.getData()
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

    handleCloseModal = () => {
        this.setState({
            isOpenModal: false
        })
    }

    handleOpenModal = () => {
        this.setState({
            isOpenModal: true
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
                        <div>
                            <TextField value={this.state.name} autoComplete="off" name="name" onChange={this.catchInput} label="Nombres y Apellidos" />
                            <TextField value={this.state.country} autoComplete="off" name="country" onChange={this.catchInput} label="País"/>
                            <TextField value={this.state.age} autoComplete="off" name="age" onChange={this.catchInput} label="Edad" />
                        </div>
                        <Boton name="AGREGAR" ></Boton>
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
                                            <Button onClick={this.handleOpenModal}  >Editar</Button>
                                            <Dialog
                                                open={this.state.isOpenModal}
                                                onClose={this.handleCloseModal}
                                                // PaperComponent={PaperComponent}
                                                aria-labelledby="editar"
                                            >
                                                <DialogTitle id="editar">Subscribe</DialogTitle>
                                                <DialogContent>
                                                    <DialogContentText>
                                                        <TextField value={this.state.name} autoComplete="off" name="name" onChange={this.catchInput} label="Nombres y Apellidos" />
                                                        <TextField value={this.state.country} autoComplete="off" name="country" onChange={this.catchInput} label="País"/>
                                                        <TextField value={this.state.age} autoComplete="off" name="age" onChange={this.catchInput} label="Edad" />
                                                    </DialogContentText>
                                                </DialogContent>
                                                <DialogActions>
                                                    <Button onClick={this.handleCloseModal} variant="contained" color="primary">
                                                        Save
                                                    </Button>
                                                    <Button onClick={this.handleCloseModal} variant="contained" color="primary">
                                                        Exit
                                                    </Button>
                                                </DialogActions>
                                            </Dialog>
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