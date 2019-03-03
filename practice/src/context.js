import React, { Component } from 'react';

const Context = React.createContext();

const reducer = (state,action) =>{
    switch(action.type){
        case 'ADD':
        return{
            ...state,
            formData : [action.payload, ...state.formData]
        };
        default:
        console.log('default showing ');
    }
    

}


export class Provider extends Component{
    state = {

        formData:[],

        dispatch: action => this.setState(state=>
            reducer(state,action))
    };

     render() {
         return(
            
            <Context.Provider value={this.state}>
                {this.props.children}
            </Context.Provider>
         );
     }


    }

    export const Consumer = Context.Consumer;