import React, { Component } from "react";
import TodoForm from "./TodoForm";

class TodoList extends Component {
	state = { todos: [] };
	render() {
		return (
			<div>
				<TodoForm />
			</div>
		);
	}
}

export default TodoList;
