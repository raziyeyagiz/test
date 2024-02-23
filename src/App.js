
import React,{ Component } from "react";
import AddUser from "./components/AddUser";
import Users from "./components/Users";
class App extends Component {
  
  constructor(props){
    super(props);
    this.deleteUser=this.deleteUser.bind(this);
    this.addUser=this.addUser.bind(this);
    this.state={users:[
      {id:1,
      name:"Raziye",
    email:"raziye@gmail.com"},
    {id:2,
      name:"oguz",
    email:"oguz@gmail.com"},
    {id:3,
      name:"tolga",
    email:"tolga@gmail.com"},
    ]}
  }
  addUser(newUser){
    let updatedUsers=this.state.users;
    updatedUsers=updatedUsers.push(newUser);
    this.setState({users:updatedUsers});
  }
  deleteUser(id){
    let updatedUsers=this.state.users;
    updatedUsers=updatedUsers.filter(user=>user.id!==id);
    this.setState({users:updatedUsers});
  }
  render(){
    const title="User App";
    const isAuthorized=false;
  return (
    <div className="container">
   <h5>Default Text {title}</h5>
   {
    isAuthorized ?<p>Authorized</p>:<p>Not Authorized</p>
   }
   <h4>User App</h4>
   <hr/>
   <AddUser addUser={this.addUser}/>
   <hr/>
   <Users deleteUser={this.deleteUser} users={this.state.users}/>
  <label htmlfor="name">name</label>
   <p className="lead">This is sample text</p>
    </div>
  );
}

}

export default App;
