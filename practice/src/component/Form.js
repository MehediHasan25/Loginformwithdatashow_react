import React, { Component } from "react";



class Form extends Component {
  state = {
  
     name: "",
    pass: ""
 
  };

 
  handleChange = e => this.setState({[e.target.name]:e.target.value}); 
  
  handleSubmit= e =>{
    e.preventDefault();

    this.props.onSubmit(this.state);
    
   // console.log(this.state);

    this.setState({
        name:"",
        pass:""
    });
   
}
  
  render() {
    const {name, pass} = this.state;

    

    return (

     
      <form onSubmit={this.handleSubmit}>
       
        <div className="form-group">
          <label htmlFor="name">Name</label>
          <input
            type="text"
            name="name"
            className="form-control"
            id="name"
            placeholder="Enter name"
            value={name}
            onChange={this.handleChange}
          />
        </div>
        <div className="form-group">
          <label htmlFor="pass">Password</label>
          <input
            type="password"
            name="pass"
            className="form-control"
            id="pass"
            placeholder="Password"
            value={pass}
            onChange={this.handleChange}
          />
        </div>
        
        <button  type="submit" className="btn btn-primary">
          Submit
        </button>
       
       
      </form>
      
    );
  }
}

export default Form;


