import React, {Component} from 'react'

import TaskForm from '../components/TaskForm'
import LoginForm from '../components/LoginForm'

class MainWindow extends Component{
    constructor(){
        super()

        this.state = {
            user: []
        }
    }

    render(){
        return(
            <div>
                <h3>Logueate chavo</h3>
                <LoginForm />
            </div>
        )
    }
}

export default  MainWindow