import React, { Component } from 'react';
import axios from 'axios'

class ContentFeed extends Component{
    constructor(){
        super()

        this.state = {
            user_info: []
        }

        this.fillResponse = this.fillResponse.bind(this)
    }

    getRequest(){
        axios.get(`http://localhost:8000/api/v1/getServicesByDate/2019-09-12/67`)
        .then(res => res.data.results)
        .then(res => this.setState({'user_info':res}))
        .catch(error=>{
            alert("Error")
        })
    }

    fillResponse(){
        this.getRequest()
        console.log(this.state)
    }

    render(){
        return(
            <div >
                <button onClick={this.fillResponse} className='btn-info btn-lg'>Contenido</button>
                <ul className='jumbotron'>
                    {this.state.user_info.map(function(item, index){
                        return (
                            <div  key={index}>
                                <span className='font-weight-bold text-secondary'>{item.id} - {item.status} - {item.service_time}</span>
                            </div>
                        )
                    })}
                </ul>
            </div>
        )
    }
}

export default ContentFeed