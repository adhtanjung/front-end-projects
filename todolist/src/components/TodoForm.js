import React, { Component } from "react";
import { IoMdAddCircle } from "react-icons/io";
import { AiTwotoneEdit } from "react-icons/ai";
import { BsCheck } from "react-icons/bs";
import { MdDelete } from "react-icons/md";
import { ImCancelCircle } from "react-icons/im";
import { Button, Input } from "reactstrap";
import "./styles.css";

class TodoForm extends Component {
	state = { input: "", todos: [], selectedTodo: null, edit: "" };

	addTodo = (e) => {
		e.preventDefault();
		const { input } = this.state;
		if (!/^\s*$/.test(input)) {
			this.setState({
				todos: [
					...this.state.todos,
					{ text: this.state.input, complete: false },
				],
			});
		}
		this.setState({ input: "" });
	};
	handleInput = (e) => {
		this.setState({ input: e.target.value });
	};
	handleEdit = (e) => {
		this.setState({ edit: e.target.value });
	};
	handleCompleted = (i) => {
		this.setState({
			todos: this.state.todos.map((val, index) =>
				i === index
					? {
							...val,
							complete: !val.complete,
					  }
					: val
			),
		});
	};
	deleteTodo = (i) => {
		this.setState({
			todos: this.state.todos.filter((val, index) => {
				return i !== index;
			}),
		});
	};
	editTodo = (i) => {
		this.setState({ selectedTodo: i });
	};
	cancelEdit = () => {
		this.setState({
			selectedTodo: null,
		});
	};
	confirm = (text, i) => {
		if (this.state.edit === "") {
			this.setState({
				todos: this.state.todos.map((val, index) =>
					i === index
						? {
								...val,
								text: text,
						  }
						: val
				),
			});
		} else {
			this.setState({
				todos: this.state.todos.map((val, index) =>
					i === index
						? {
								...val,
								text: this.state.edit,
						  }
						: val
				),
			});
		}
		this.setState({
			selectedTodo: null,
		});
	};
	renderTodos = () => {
		return this.state.todos.map(({ text, complete }, i) =>
			i === this.state.selectedTodo ? (
				<form className="d-flex my-2" onSubmit={() => this.confirm(text, i)}>
					<Input
						type="text"
						onChange={this.handleEdit}
						defaultValue={text}
						style={{ width: "400px" }}
					/>
					<Button color="warning" className="mx-2">
						<BsCheck />
					</Button>
					<Button onClick={this.cancelEdit} color="primary">
						<ImCancelCircle />
					</Button>
				</form>
			) : (
				<div key={i} className="d-flex my-2  align-items-center">
					<div
						onClick={() => this.handleCompleted(i)}
						style={{
							textDecoration: complete ? "line-through" : "",
							width: "400px",
						}}
						className="d-flex justify-content-center todos"
					>
						<h3 style={{ fontFamily: "Fredoka One" }}>{text}</h3>
					</div>
					<div>
						<Button
							onClick={() => this.editTodo(i)}
							color="warning"
							className="mx-2"
						>
							<AiTwotoneEdit />
						</Button>
						<Button onClick={() => this.deleteTodo(i)} color="primary">
							<MdDelete />
						</Button>
					</div>
				</div>
			)
		);
	};
	render() {
		return (
			<div
				className="d-flex flex-column align-items-center todo-card"
				style={{ color: "white" }}
			>
				<div className="mt-3">
					<h1 style={{ fontFamily: "Fredoka One" }}>TODO LIST!</h1>
				</div>

				<form onSubmit={this.addTodo} className="d-flex">
					<Input
						type="text"
						placeholder="add a todo"
						onChange={this.handleInput}
						value={this.state.input}
						style={{ width: "400px" }}
					/>
					<Button color="warning" className="mx-2">
						<IoMdAddCircle />
					</Button>
				</form>

				<div className="my-5">{this.renderTodos()}</div>
			</div>
		);
	}
}

export default TodoForm;
