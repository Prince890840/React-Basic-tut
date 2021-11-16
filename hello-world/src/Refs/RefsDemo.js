import React, { Component } from 'react';

class RefsDemo extends Component {

    constructor(props){
        super(props)

        this.inputRef = React.createRef()

        //2nd Approch step:1
        this.callbackRef = null

        //step:2 Assign Dom Element
        this.setCallbackRef = element => {
            this.callbackRef = element
        }
    }

    componentDidMount(){
        // this.inputRef.current.focus()
        // console.log(this.inputRef)

        // 4th Step
        //check if it is notnull(ref has a value)
        if(this.callbackRef){
            this.callbackRef.focus()
        } 
    }

    clickHandler = () => {
       alert(this.inputRef.current.value)
    }

    render() {
        return (
            <div>
                <input type="text" ref={this.inputRef}></input>
                <br />
                <label>TypeHere</label>
                {/* 3rd Step callbackRef to the input Feild */}
                <input type="text" ref={this.setCallbackRef}></input>
                
                <button onClick={this.clickHandler}>Click</button>
            </div>
        );
    }
}

export default RefsDemo;