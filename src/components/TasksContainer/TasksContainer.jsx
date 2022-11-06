import React, { useState } from "react";
import Task from "../Task/Task";

export default function TasksContainer({dispatch,status, board, id, boardId}) {

	const [newTask, setNewTask] = useState('')
	
  return (<div>
	<h2>{status}</h2>
	<button onClick={() => {dispatch({type: "ADD_TASK", payload: {value:newTask,userId: id, boardId: boardId, status:status}})}}>Add task</button>
	<br />
	<input type={'text'} onChange = {(e) => { setNewTask(e.target.value)}}></input>
	<button onClick={() => {dispatch({type:"DELETE_STATUS", payload: {id:id, boardId: boardId, status:status}})}}>Delete Status</button>
	{board.tasks[status].map(el => <Task userId = {id} status = {status} boardId = {boardId} dispatch = {dispatch} key={el.taskId} id = {el.taskId} name = {el.taskName} />)}
  </div>);
}
