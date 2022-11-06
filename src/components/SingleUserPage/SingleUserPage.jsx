import React, { useState } from "react";
import { useParams } from "react-router-dom";
import UserBoards from "../UserBoards/UserBoards";

export default function SingleUserPage({dispatch ,users}) {
	const [newBoardName, setNewBoardName] = useState('')

	const {id } = useParams()
	const user = users.find((el) => el.userId == id)
  return <div>
	<h2>{user.name}</h2>
	<input type={'text'} onChange = {(e) => setNewBoardName(e.target.value)}></input>
	<button onClick={() => {dispatch({"type": "ADD_BOARD", payload: {value: newBoardName, id}})}}>Add board</button>
	<div className="singleUserBoards">
		{user.boards.map((el, i) => <UserBoards dispatch = {dispatch} boardId = {el.boardId} id = {user.userId}  key = {i} name = {el.boardName} />)}
	</div>
  </div>;
}
