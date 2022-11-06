import { useState, useReducer } from "react";
import { Route, Routes } from "react-router-dom";
import Users from "./components/Users/Users";
import { users } from "./API/users/users";
import SingleUserPage from "./components/SingleUserPage/SingleUserPage";
import Board from "./components/Board/Board";

const ACTIONS = {
	"ADD_USER": "ADD_USER",
	"ADD_BOARD": "ADD_BOARD",
	"DELETE_USER": "DELETE_USER",
	"DELETE_BOARD": "DELETE_BOARD",
	"ADD_STATUS": "ADD_STATUS",
	"DELETE_STATUS": "DELETE_STATUS",
	"DELETE_TASK": "DELETE_TASK",
	"ADD_TASK": "ADD_TASK"
}

function reducer(state, action){
	switch(action.type){
		case ACTIONS.ADD_USER:	
			if(action.payload.value.trim())
				return {"data": [...state.data,{...newUser(action.payload.value)}]}
		case ACTIONS.ADD_BOARD:
			state.data.find(el => el.userId == action.payload.id).boards.push({
				boardId:Date.now(),
				boardName: action.payload.value,
				tasks: {todo:[], done:[], doing:[]},
			})
			return {data:[...state.data]}
		case ACTIONS.DELETE_USER:
			return {data: [...state.data.filter(el => el.userId != action.payload.id)]}
		case ACTIONS.DELETE_BOARD:
			return {data: [...state.data.map(el => {
				if(el.userId == action.payload.id){
					el.boards = [...el.boards.filter(el => el.boardId != action.payload.boardId)]
				}
				return el
			})]}
		case ACTIONS.ADD_STATUS:
			return {data: [...state.data.map(el => {
				if(el.userId == action.payload.id){
					const board = el.boards.find(el => el.boardId == action.payload.boardId)
					const status = action.payload.status
					board.tasks = {...board.tasks, [status]: []}
				}
				return el
			})]}
		case ACTIONS.DELETE_STATUS:
			return {data: [...state.data.map(el => {
				if(el.userId == action.payload.id){
					const board = el.boards.find(el => el.boardId == action.payload.boardId)
					delete board.tasks[action.payload.status]
				}
				return el
			})]}
		case ACTIONS.DELETE_TASK:

			return {data: [...state.data.map(el => {
				if(el.userId == action.payload.userId){
					const board = el.boards.find(el => el.boardId == action.payload.boardId)
					board.tasks[action.payload.status] = [...board.tasks[action.payload.status].filter(el => el.taskId != action.payload.taskId)]
				}
				return el
			})]}
		case ACTIONS.ADD_TASK:
			return {data: [...state.data.map(el => {
				if(el.userId == action.payload.userId){
					const board = el.boards.find(el => el.boardId == action.payload.boardId)
					board.tasks[action.payload.status].push({taskId:Date.now(), taskName:action.payload.value})
				}
				return el
			})]}
	}
}

function newUser(name) {
	return {userId:Date.now(), "name": name, boards: []}
}

function App() {
	const [state, dispatch] = useReducer(reducer, {"data": users})


	return (	<Routes>
					<Route path="/users/:id" element={<SingleUserPage dispatch = {dispatch} users = {state.data} />} />
					<Route index path="/" element={<Users dispatch= {dispatch} users = {state.data} />} />
					<Route path="/users/:id/boards/:boardId" element = {<Board users = {state.data} dispatch = {dispatch} />} />
				</Routes>
	);
}

export default App;