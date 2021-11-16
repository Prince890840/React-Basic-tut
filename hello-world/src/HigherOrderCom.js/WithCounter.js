import React, { Component } from 'react';

//In our case OriginalComponent is ClickCounter
const UpdatedComponent = (OriginalComponent , incrementNumber) => {

    //  Hoc accept OriginalComponent as a parameter and return newComp 
    class NewComponent extends Component{
        
        // Reuse The Code Rather than the duplicate it(count and inccount from ClickCounter)
        constructor(props)
        {
            super(props)

            this.state = {
                count: 0
            }
        }

        incrementCount = () => {
            this.setState(prevState =>{
                return { count: prevState.count + incrementNumber }
            })
        }

        render(){
            console.log(this.props.name)
            return <OriginalComponent 
                        //pass count and IncrementCount in OriginalComp
                        count = {this.state.count} 
                        name = {this.props.name}
                        incrementCount = {this.incrementCount}
                        {...this.props} //when you create hoc make sure pass down rest of props 
                        
                        //OriginalComp enhance this Props
                    />

            // render method is required method in class Component
        }
    }
    return NewComponent
}

export default UpdatedComponent