import React, { useEffect, useState } from "react";

import Note from "./Note";
import CreateArea from "./CreateArea";
import axios from "axios";
function App() {
	const [notes, setNotes] = useState([]);
	const [toEdit, setEdit] = useState();
	const getLists = async () => {
		const response = await axios.get("http://localhost:5000/lists");
		setNotes(response.data);
	};

	useEffect(() => {
		const lists = getLists();
	}, []);

	const addList = async (note) => {
		console.log(note);
		const response = await axios.post("http://localhost:5000/lists/add", [
			note,
		]);
		return response;
	};

	function addNote(newNote) {
		addList(newNote);
		setNotes((prevNotes) => {
			return [...prevNotes, newNote];
		});
	}

	function deleteNote(id) {
		setNotes((prevNotes) => {
			return prevNotes.filter((noteItem, index) => {
				return index !== id;
			});
		});
	}

	return (
		<div>
			<CreateArea onAdd={addNote} toEdit={toEdit} />
			<div className='notes-created'>
				{notes.map((noteItem, index) => {
					return (
						<Note
							key={index}
							id={index}
							title={noteItem.title}
							content={noteItem.content}
							onDelete={deleteNote}
							setEdit={setEdit}
						/>
					);
				})}
			</div>
		</div>
	);
}

export default App;
