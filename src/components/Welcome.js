// import React from 'react';
// let Welcome=()=>{
//   return(
//     <h1>its my fucking component</h1>
//     );
// }
// export default Welcome;
import React from 'react'

export default class Welcome extends React.Component {
	render() {
		return (
			<div>
				
		<h1>my name is {this.props.name} college is {this
			.props.college} </h1>
			</div>
		)
	}
}