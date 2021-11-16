import React, { Component } from 'react';

//1st Step
import axios from 'axios'

//Post Data to server

class PostForm extends Component {

    constructor(props){
        super(props)

        this.state = {
            userId: '',
            title: '',
            body: ''
        }
    }

    changeHandler = (event) => {
        this.setState({[event.target.name]: event.target.value})
    }

    submitHandler = (event) => {
        event.preventDefault()
        console.log(this.state)
        axios.post('https://jsonplaceholder.typicode.com/posts',this.state)

        .then(response =>{
            console.log(response)
        })
        .catch(error =>{
            console.log(error)
            this.setState({errorMsg: 'Error retreiving data'})
        })

    }

    render() {

        const { errorMsg } = this.state

        return (
            <div>
                <form onSubmit={this.submitHandler}>
                    <div>
                        <input type="text" name="userId"  onChange={this.changeHandler} />
                    </div>
                    <div>
                        <input type="text" name="title"  onChange={this.changeHandler} />
                    </div>
                    <div>
                        <input type="text" name="body"  onChange={this.changeHandler} />
                    </div>
                    <button type="submit">Submit</button>
                </form>
            </div>
        );
    }
}

export default PostForm;