import React, { Component } from 'react';
import PureComp from './PureComp';
import RegularComponent from './RegularComponent';
import MemoComponent from './MemoComponent';

class ParentComponent extends Component{

    constructor(props){
        super(props)

        this.state = {
            name: 'Vishwas'
        }
    }

    componentDidMount(){
        setInterval(() => {
        this.setState({
            name: 'Vishwas'
        })
        },2000)
    }

    render(){
        console.log('*******************ParentComponent Render********************')
        return(
            <div>
                Parent Component
                <MemoComponent name={this.state.name}/>
                {/* <RegularComponent name={this.state.name}/>
                <PureComp name={this.state.name} /> */}
            </div>
        )
    }
}

export default ParentComponent