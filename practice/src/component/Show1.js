import React, { Component } from 'react';
import { Consumer } from '../../src/context';



class Show1 extends Component {

    render() {
        return (
            <Consumer>
                {value => {
                    const { formData } = value;
                    console.log(formData);
                    return (
                        <React.Fragment>
                            
                            <h1 className="display-4" style={{textAlign:"center",color:"green"}}>Welcome to React</h1>

                          
                            <h1 className="lead">Name: {formData[0].name}</h1>
                            <h1 className="lead">Password: {formData[0].pass}</h1>
                        
                        {/* <h1>Name: {medata.name}</h1> 
                        <h1>Password:{medata.pass}</h1> */}
                        </React.Fragment>
                
                    )
                }}
                    

            </Consumer>
                
)

    }
}

export default Show1;



      
                      
                     

                       
                       
        