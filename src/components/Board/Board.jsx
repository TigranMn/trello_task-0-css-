import React, { useState } from "react";
import { useParams } from "react-router-dom";
import TasksContainer from "../TasksContainer/TasksContainer";

export default function Board({users, dispatch}) {
	const [newStatus, setNewStatus] = useState()
	const {id, boardId} = useParams()
	const user = users.find(el => el.userId == id)
	const board = user.boards.find(el => el.boardId == boardId)

  return (<div className="userTasks">
	<input type={"text"} onChange = {(e) => { setNewStatus(e.target.value)}}></input>
		<button onClick={() => {dispatch({type:"ADD_STATUS",payload:{id:user.userId, boardId:board.boardId, status:newStatus}})}}>Add status</button>
		{Object.keys(board.tasks).map((el,i) => <TasksContainer id = {id} boardId = {boardId} dispatch = {dispatch} key={i} board = {board}  status = {el} />)}
  </div>);
}
