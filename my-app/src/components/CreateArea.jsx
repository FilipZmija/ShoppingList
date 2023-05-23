import React, { useEffect, useState } from "react";
import AddIcon from "@mui/icons-material/Add";
import Fab from "@mui/material/Fab";
import Zoom from "@mui/material//Zoom";

function CreateArea(props) {
	const [isExpanded, setExpanded] = useState(false);

	const [note, setNote] = useState({
		title: "",
		content: "",
	});

	useEffect(() => {
		if (props.toEdit) {
			setNote(props.toEdit);
		}
	}, [props.toEdit]);

	function handleChange(event) {
		const { name, value } = event.target;

		setNote((prevNote) => {
			return {
				...prevNote,
				[name]: value,
			};
		});
	}

	function submitNote(event) {
		props.onAdd({ title: note.title, content: note.content.split("\n") });
		setNote({
			title: "",
			content: "",
		});
		event.preventDefault();
	}

	function expand() {
		setExpanded(true);
	}

	return (
		<div>
			<form className='create-note'>
				{isExpanded && (
					<input
						name='title'
						onChange={handleChange}
						value={note.title}
						placeholder='Title'
					/>
				)}

				<textarea
					name='content'
					onClick={expand}
					onChange={handleChange}
					value={note.content}
					placeholder='Create a list...'
					rows={isExpanded ? 5 : 1}
				/>

				<Zoom in={isExpanded}>
					<Fab onClick={submitNote}>
						<AddIcon />
					</Fab>
				</Zoom>
			</form>
		</div>
	);
}

export default CreateArea;
