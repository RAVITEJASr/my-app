import React, { Component } from 'react';
import { Grid, Cell } from 'react-mdl';

class Education extends Component {
  render() {
    return(
      <Grid>
        <Cell col={1}>
          <h4>{this.props.Year}</h4>
           </Cell>
           <Cell col={3} >
           <h4 style={{marginTop:'0px'}}>{this.props.Course}</h4>

</Cell>
        <Cell col={8}>
          <h4 style={{marginTop:'0px'}}>{this.props.schoolName}</h4>
          </Cell>
        
      </Grid>
    )
  }
}

export default Education;
