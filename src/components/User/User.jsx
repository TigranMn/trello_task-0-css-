import React from "react";
import { Link } from "react-router-dom";

export default function User({name,  id, dispatch}) {

  return (<div className="user">
	<span>{name}</span>
	<Link to= {`/users/${id}`} >Boards</Link>
	<button onClick={() => {dispatch({type: "DELETE_USER", payload: {id}})}}>Delete</button>
  </div>);
}
