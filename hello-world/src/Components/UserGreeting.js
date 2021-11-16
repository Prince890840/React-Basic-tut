import React, { Component } from 'react';

/*Conditional Rendring
1. If-else
2.Element variable
3.Ternary Conditional operator
4.short circute operator*/

class UserGreeting extends Component {


    constructor(){
        super()
        this.state = {
            isLoggedIn : false
        }
    }

    render() {
        /*1st  APPROCH
        if(this.state.isLoggedIn){
            return (
                <div>Welcome Viswas</div>
            )
        } else {
            <div>Welocme Guest</div>
        }

        return (
        <div>
            <div>Welcome Guest</div>
            <div>Welcome Vishwas</div>                   
        </div>
        );*/

        /*2ND Approch -->Element Variable
        let message
        if(this.state.isLoggedIn){
            message = <div>Welcome Vishwas</div>
        }else{
            message = <div>Welcome Guest</div>
        }

        return <div>{message}</div>*/

        /*3rd Approch -->Ternary Conditional Operator
        return(
            this.state.isLoggedIn ? 
            (<div>Welcome Vishwas</div>) : (<div>Welcome Guest</div>)
        )*/

        //4th Approch --> Short circute Operator

        return this.state.isLoggedIn &&  <div>Welcome Vishwas</div>
    }
}

export default UserGreeting;