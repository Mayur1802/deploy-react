import React, {Component} from 'react'
import {Grid,Cell } from 'react-mdl';

 class Certificate extends Component{
    render(){

        return(
            <Grid>
                <Cell col={4}>
                    <p>Certificate</p>
                    
                     </Cell>
                <Cell col={8}>
                <h4 style={{marginTop:'0px'}}>{this.props.courseName}</h4>
                <p>{this.props.courseDescription}</p>
                 </Cell>
            </Grid>
         
         )

    }

}

export default Certificate;