import React from "react";
import DeleteIcon from "@mui/icons-material/Delete";
import EditIcon from "@mui/icons-material/Edit";
import RemoveIcon from "@mui/icons-material/Remove";
import TextField from "@mui/material/TextField";
import axios from "axios";
import { useState } from "react";
function Note(props) {
	const [items, setItems] = useState(
		props.content.map((item, index) => {
			return { id: index, name: item, checked: false };
		})
	);
	const deleteElement = async (note) => {
		const response = await axios.post("http://localhost:5000/lists/delete", [
			note,
		]);
		return response;
	};
	const [edit, setEdit] = useState(false);
	function handleClick() {
		console.log(props.id);
		deleteElement(props.id);
		props.onDelete(props.id);
	}

	function handleRemove(id) {
		setItems(
			items.map((item) => {
				if (item.id === id) {
					return { ...item, name: "" };
				}
				return item;
			})
		);
	}

	function handleCheck(id) {
		setItems(
			items.map((item) => {
				if (item.id === id) {
					return { ...item, checked: !item.checked };
				}
				return item;
			})
		);
	}

	function generateList(item) {
		return (
			<li
				style={{ listStyleType: "none", display: "flex" }}
				className={"nonedit-li"}
				key={item.id}
			>
				<input
					key={item.id}
					className='checkbox'
					type='checkbox'
					checked={item.checked}
					onChange={() => {
						handleCheck(item.id);
					}}
				/>
				<span className='listItem'>{item.name}</span>
			</li>
		);
	}

	function generateEditableList(item, index) {
		return (
			<li style={{ listStyleType: "none", display: "flex" }} key={item.id}>
				<TextField
					hiddenLabel
					key={item.id}
					id='filled-hidden-label-small'
					defaultValue={item.name}
					variant='filled'
					size='small'
					className='listItemEditable'
					onChange={(event) => {
						setItems((prev) => {
							prev[index].name = event.target.value;
							return prev;
						});
					}}
				/>
				<RemoveIcon
					fontSize='small'
					style={{ marginRight: "0px", marginLeft: "auto" }}
					className='icon-icon'
					onClick={() => {
						handleRemove(item.id);
					}}
				/>
			</li>
		);
	}

	//
	return (
		<div className='note'>
			<h1>{props.title}</h1>
			<ul>
				{items
					.sort((a, b) =>
						a.checked === b.checked ? 0 : a.checked ? 1 : -1
					)
					.map((item, index) => {
						return item.name !== ""
							? edit
								? generateEditableList(item, index)
								: generateList(item, index)
							: null;
					})}
			</ul>
			<button
				onClick={() => {
					setEdit(!edit);
				}}
			>
				<EditIcon />
			</button>
			<button onClick={handleClick}>
				<DeleteIcon />
			</button>
		</div>
	);
}
export default Note;
