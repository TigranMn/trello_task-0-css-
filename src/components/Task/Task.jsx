import React from "react";

export default function Task({dispatch,id, name, boardId,status, userId}) {

  return (
	<div>
	<h1>{name}</h1>	
	<button onClick={() => {dispatch({type:"DELETE_TASK",payload: {taskId:id, status:status, userId:userId, boardId: boardId}})}}>Delete Task</button>
	</div>
  );
}
