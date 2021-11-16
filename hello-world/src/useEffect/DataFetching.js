import React, { useEffect, useState } from "react";
import axios from "axios";

function DataFetching() {
    const [post,setPosts] = useState([])

    const [id,setId] = useState(1)

    const [idfrombuttonclick,setidfrombuttonclick] = useState(1)

    const handleClick = () => {
        idfrombuttonclick(id)
    }

    useEffect(() => {
        axios
        .get(`https://jsonplaceholder.typicode.com/posts/${id}`)
        //.get(`https://jsonplaceholder.typicode.com/posts/${idfrombuttonclick}`)

        //if url is wrong then msg display Error retreiving data

        .then(response =>{
            console.log(response)
            setPosts(response.data)  
            //when data is retreive update setState Property
        })
        .catch(error =>{
            console.log(error)
        })
    },[id])
    //},[idfrombuttonclick])

    return(
        <div>
            <input type="text" value={id} onChange={(event) =>setId(event.target.value)} />
            {/* <ul>
                {posts.map(post =>(
                    <li key={post.id}>{post.title}</li>
                ))}
            </ul> */}
            {/* <button onClick={handleClick}>fetch Data</button>
            <br /> */}
            {post.title}
        </div>
    )
}

export default DataFetching