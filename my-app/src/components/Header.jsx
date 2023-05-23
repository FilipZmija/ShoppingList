import React from "react";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";

function Header() {
	return (
		<header>
			<h1>
				<ShoppingCartIcon style={{ marginTop: "10px" }} />
				Shopping list
			</h1>
		</header>
	);
}

export default Header;
