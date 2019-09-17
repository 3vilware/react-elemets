import React, { Component } from 'react';

class LoginForm extends React.Component{

    render(){
        return(
            <div className='jumbotron'>
                <form onSubmit={this.onSendform} >
                    <input type="text" className='form-control mt-2 col-md-12' placeholder='Usuario' name='user' onChange={this.handleChange} />    
                    <input type="text" className='form-control mt-2 col-md-12' placeholder='Contraseña' name='pwd' onChange={this.handleChange}/> 
                    <button className='btn-lg btn-success mt-4' type='submit'>Entrar</button>   
                </form>    
            </div>
        )
    }
}

export default LoginForm