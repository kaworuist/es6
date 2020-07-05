import React from 'react'

export default class Life extends React.Component{
    constructor(props){
        super(props);
        this.state={
            count:5
        }
    }

    render(){
        return<div>
            <p>React生命周期介绍</p>
            <button>click</button>
            <p>{this.state.count}</p>
        </div>
    }
}