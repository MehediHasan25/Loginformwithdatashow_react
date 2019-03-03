import React, { Component } from 'react';
import axios from 'axios';
import { Consumer } from '../../src/context';


class Form1 extends Component {
    state = {

        name: "",
        pass: ""

    };

    handleChange = e => this.setState({ [e.target.name]: e.target.value });

    handleSubmit = async (dispatch, e) => {
        e.preventDefault();

        const { name, pass } = this.state;

        const newdata = {
            name,
            pass
        }

        const res = await axios.post(`http://localhost:3002/login`, newdata);
           
                dispatch({ type: 'ADD', payload: res.data });

                this.props.history.push('/data');

        // this.setState({
        //     name: '',
        //     pass: ''
        // });
       

    };


    render() {
        const { name, pass } = this.state;
        return (
            <Consumer>
                {value => {
                    const { dispatch } = value;
                    return (
                        <form onSubmit={this.handleSubmit.bind(this,dispatch)}>

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

                            <button type="submit" className="btn btn-primary">
                                Submit
                                </button>


                        </form>
                    )
                }}
            </Consumer>
        );
    }
}

export default Form1; 