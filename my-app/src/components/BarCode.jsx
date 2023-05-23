import React, { useEffect } from "react";
import { useState } from "react";
import Loycard from "./Loycard";
import "./styles/loycard.css";
import CurrentCard from "./CurrentCard";
import IconButton from "@mui/material/IconButton";
import AddIcon from "@mui/icons-material/Add";
import AddCard from "./AddCard";
import axios from "axios";
function BarCode() {
	const [currentCard, setCurrentCard] = useState({});
	const [active, setActive] = useState(false);
	const [open, setOpen] = React.useState(false);
	const [cards, setCards] = useState([]);

	const getCards = async () => {
		let response = await axios.get("http://localhost:5000/cards");
		console.log(response);
		setCards(response.data);
	};
	const addCards = async (card) => {
		console.log(card);
		let response = await axios.post("http://localhost:5000/cards/add", [
			card,
		]);
		console.log(response);
	};

	useEffect(() => {
		getCards();
	}, []);
	const handleAdd = (card) => {
		addCards(card);
		setCards((prev) => {
			prev.push(card);
			return prev;
		});
	};
	const handleClickOpen = () => {
		setOpen(true);
	};
	const generateCards = (item) => {
		return (
			<Loycard
				active={active}
				setActive={setActive}
				setCurrentCard={setCurrentCard}
				info={item}
			/>
		);
	};
	console.log(currentCard);
	return (
		<>
			<div
				style={{
					display: "flex",
					alignItems: "center",
					justifyContent: "center",
					marginTop: "10px",
				}}
			>
				<IconButton
					sx={{ bgcolor: "white" }}
					size='large'
					onClick={handleClickOpen}
				>
					<AddIcon />
				</IconButton>
				<AddCard open={open} setOpen={setOpen} handleAdd={handleAdd} />
			</div>

			<div className={`loy-area ${active ? "blur" : null}`}>
				{cards?.map((item) => generateCards(item))}
			</div>
			<div className='loy-area'>
				<CurrentCard
					active={active}
					setActive={setActive}
					currentCard={currentCard}
				/>
			</div>
		</>
	);
}
export default BarCode;
