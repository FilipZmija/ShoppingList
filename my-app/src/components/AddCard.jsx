import * as React from "react";
import { useState } from "react";
import Button from "@mui/material/Button";
import { Autocomplete } from "@mui/material";
import TextField from "@mui/material/TextField";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogContentText from "@mui/material/DialogContentText";
import DialogTitle from "@mui/material/DialogTitle";
const shops = ["Biedronka", "Lidl", "Rossmann", "Zabka", "Payback"];
function AddCard({ open, setOpen, handleAdd }) {
	const handleClose = () => {
		setOpen(false);
	};
	const [card, setCard] = useState({
		store: "",
		number: "",
	});

	return (
		<div style={{ display: "block" }}>
			<Dialog open={open} onClose={handleClose}>
				<DialogTitle style={{ color: "black" }}>
					Add loyalty card
				</DialogTitle>
				<DialogContent>
					<DialogContentText>
						You can add your card here.
					</DialogContentText>

					<Autocomplete
						id='disable-close-on-select'
						options={shops}
						renderInput={(params) => (
							<TextField
								{...params}
								label='Shop name'
								variant='standard'
							/>
						)}
						onChange={(event, value) => {
							console.log("now");
							setCard((prev) => {
								return {
									...prev,
									shop: value?.toLowerCase(),
								};
							});
						}}
					/>
					<br />
					<TextField
						autoFocus
						margin='dense'
						id='number'
						label='Card Number'
						variant='standard'
						onChange={(event) =>
							setCard((prev) => {
								return { ...prev, number: event.target.value };
							})
						}
					/>
				</DialogContent>
				<DialogActions>
					<Button
						onClick={() => {
							handleAdd(card);
							handleClose();
						}}
					>
						Add
					</Button>
					<Button onClick={handleClose}>Cancel</Button>
				</DialogActions>
			</Dialog>
		</div>
	);
}
export default AddCard;
