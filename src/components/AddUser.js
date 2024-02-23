 import React, {Component} from "react";
 class AddUser extends Component{
    state={
        name:"",
        email:""
    };
    onNameChange(event){
        this.setState({[event.target.name]: event.target.value });

    }
    onEmailChange(event){
        this.setState({[event.target.name]:event.target.value});

    }
    onAddSubmit(event){
        const {addUser}=this.props;
        const {name,email}=this.state;
        const newUser={ id:Math.random(),
        name:name,
        email:email
        }
        addUser(newUser);
        console.log("Form Submit");
        event.preventDefault();
    }
    render(){
        const {name,email}=this.state; 
        return (<div className="card">

            <h5>Form</h5>
            <h4 className="card-header">Add New User</h4>
        <div className="card-body">
        <form onSubmit={this.onAddSubmit.bind(this)}>
            <div className="form-group">
                <label htmlFor="name">Name</label>
                <input type="text" 
                name="name" 
                id="name" 
                placeholder="Enter Name"
                className="form-control"
                value={name}
                onChange={this.onNameChange.bind(this)}/>
            </div>
            <div className="form-group">
                <label htmlFor="email">Email</label>
                <input type="text" 
                name="email" 
                id="email" 
                placeholder="Enter email"
                className="form-control"
                value={email}
                onChange={this.onEmailChange.bind(this)}/>
            </div>
            <button type="submit" className="btn btn-danger btn-block">Add New User</button>
        </form>
        </div>
        </div>);
    }
 }
 export default AddUser;