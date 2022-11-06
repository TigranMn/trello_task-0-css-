import React, { useState } from "react";
import { Link } from "react-router-dom";

export default function UserBoards({ dispatch,boardId, name, id }) {
	

	return (
		<div className="boardContainer">
			<Link to={`/users/${id}/boards/${boardId}`}>{name}</Link>
			<button onClick={() => {dispatch({type: "DELETE_BOARD", payload: {id, boardId}})}}>Delete</button>
		</div>
	);
}
