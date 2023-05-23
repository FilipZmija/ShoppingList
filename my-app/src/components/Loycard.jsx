import React from "react";
function Loycard(props) {
	const { number, shop } = props.info;
	return (
		<>
			<div
				className={`loy-card  ${shop}`}
				onClick={() => {
					props.setActive(true);
					props.setCurrentCard(props.info);
				}}
			>
				<div className={`hero ${props.active ? "blur" : null}`}>
					<h3>Card No: {number}</h3>
				</div>
			</div>
		</>
	);
}
export default Loycard;
