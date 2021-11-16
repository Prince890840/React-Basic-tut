import React,{Component} from "react"

class Welcome extends Component{
    render(){
        return <h1 contentEditable="true">Class Component</h1>
    }
}

const pro =  "Component";

function myname(){
    let name = "Prince";
    return name;
}

export default Welcome;

export {pro,myname};