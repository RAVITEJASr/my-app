import React, {component} from 'react'

export default class classState extends React.Component {
	
		constructor() {
		
		super()
		this.state={
			count:0
		}
	}

increment=()=>{
	this.setState =
		{count:this.state.count+1}
	
}
	render() {
		return (
			<div>
			<h1>{this.state.count}</h1>
				<button onClick={this.increment}>Increment</button>
			</div>
		)
	}
}
