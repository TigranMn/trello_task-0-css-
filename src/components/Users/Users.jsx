import React, {  useState } from "react";
import User from "../User/User";


export default function Users({users, dispatch}) {
	const [currUsername, setCurrentUsername] = useState('')
  return (<div>
	<h1>Users</h1>
	<div className="addUser">
		<button onClick={() => {dispatch({"type": "ADD_USER", "payload": {"value":currUsername}})}}>Add a user</button>
		<input type={'text'} onChange= {(e) => setCurrentUsername(e.target.value)}></input>
	</div>
	<div className="usersContainer">
		{users.map((el, i) => <User dispatch = {dispatch} id = {el.userId} name = {el.name}  key={i} />)}
	</div>
  </div>);
}
