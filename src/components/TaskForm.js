import React, { Component } from 'react';
import axios from 'axios'

class TaskForm extends Component{
    constructor(){
        super();
        this.state={
            baths: '',
            rooms: '',
            floors: ''
        }
        this.onSendform = this.onSendform.bind(this)
        this.handleChange = this.handleChange.bind(this)
    }

    getRequest(){
        axios.get(`https://pokeapi.co/api/v2/pokemon/${this.state.baths}/`)
        .then(res =>{
            console.log(res);
            /*
            res.data.abilities.map(function(item, i){
                console.log("Request:",1, item.ability);
            })
            */
        })
    }

    onSendform(event){
        event.preventDefault();
        //this.getRequest()
        console.log("name", event.target.name)
        this.setState({
            [event.target.name]: event.target.value
        })
        console.log(this.state);
        console.log(`baños: ${this.state.baths}`);
    }

    handleChange(e){
        this.setState({
            [e.target.name]: e.target.value
        })
        console.log("Cambio", this.state)
    }

    render(){
        return(
            <div className='jumbotron'>
                <h2 className='h2 badge badge-info p-2 text-wrap'>Cotización: <b>$ {this.state.baths}</b></h2>
                <form onSubmit={this.onSendform} >
                    <input type="text" className='form-control mt-2 col-md-12' placeholder='baños' name='baths' onChange={this.handleChange} />    
                    <input type="text" className='form-control mt-2 col-md-12' placeholder='cuartos' name='rooms' onChange={this.handleChange}/> 
                    <input type="text" className='form-control mt-2 col-md-12' placeholder='pisos' name='floors' onChange={this.handleChange}/> 
                    <button className='btn btn-success mt-4' type='submit'>Cotzar</button>   
                </form>    
            </div>
        )
    }
}

export default TaskForm 