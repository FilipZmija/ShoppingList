import React from "react";
import CloseIcon from "@mui/icons-material/Close";
import BarcodeGenerated from "react-barcode";
import BarCode from "./BarCode";

function CurrentCard(props) {
	const { number, shop } = props.currentCard;

	return (
		<div
			className={`current-${shop} ${
				props.active ? "current" : "current-hidden"
			}`}
		>
			<h2 style={{ height: "40px" }}>Card No: {number}</h2>
			<h3
				className='close'
				onClick={() => {
					props.setActive(false);
				}}
			>
				<CloseIcon sx={{ fontSize: 40 }} />
			</h3>
			<BarcodeGenerated
				value={number}
				width={props.active ? 6 : 0}
				height={props.active ? 140 : 0}
				marginBottom={5}
			/>
		</div>
	);
}
export default CurrentCard;
