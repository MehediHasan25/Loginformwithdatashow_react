import React, { Component } from 'react';
import axios from 'axios';
import Form from './Form';


class Show extends Component {
    state = { 
        mydata:{}
     };
     onSubmit = (mydata) =>{
        // this.setState({data:data})
      axios.post(`http://localhost:3002/login`, {mydata})
      .then(res => {
        //console.log(res);
       this.setState((res.data));
      // console.log(res.data);
      })

     }
    render() { 
        return (
            <div>
            <h1>React form</h1>
            <Form onSubmit={this.onSubmit}/>
            <br/> <br/>

                <h1 style={{textAlign:"center", color: "blue"}}> Welcome to the React</h1>
                <br/> <br/>

            <h3 style={{textAlign:"left", color: "green"}}>Name: {this.state.mydata.name}</h3>
            <br/>
            <h3 style={{textAlign:"left", color: "green"}}>Password: {this.state.mydata.pass}</h3>
            </div>
          );
    }
}
 
export default Show;