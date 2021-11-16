import React, { Component } from 'react';

//1st Step
import axios from 'axios'

class PostList extends Component {

    //2nd Step create state property which store list of post

    constructor(props){
        super(props)

        this.state = {
            //state propert initialize to an empty array
           posts: [],
           error: ''
        }
    }

    //3rd step (code of get request)

    componentDidMount(){
        axios.get('https://jsonplaceholder.typicode.com/posts')

        //if url is wrong then msg display Error retreiving data

        .then(response =>{
            console.log(response)
            this.setState({posts: response.data})  
            //when data is retreive update setState Property
        })
        .catch(error =>{
            console.log(error)
            this.setState({errorMsg: 'Error retreiving data'})
        })

    }

    render() {
        const { posts,errorMsg } = this.state
            //change state component will re-render
        return (
            <div>
              List of Post
              {
                  posts.length ? 
                  posts.map(post => <div key={post.id}>{post.title}
                                    </div>
                            ) : null
              }
              {
                  errorMsg ? <div>{errorMsg}</div> : null                 
              }
            </div>
        )
    }
}

export default PostList;