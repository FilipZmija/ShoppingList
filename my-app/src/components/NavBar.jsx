import * as React from "react";
import Box from "@mui/material/Box";
import BottomNavigation from "@mui/material/BottomNavigation";
import BottomNavigationAction from "@mui/material/BottomNavigationAction";
import RestoreIcon from "@mui/icons-material/Restore";
import FavoriteIcon from "@mui/icons-material/Favorite";
import InfoIcon from "@mui/icons-material/Info";
import { Link } from "react-router-dom";
const cards = [
	{
		label: "Home",
		icon: <RestoreIcon />,
		to: "/",
	},
	{
		label: "Loyalty cards",
		icon: <FavoriteIcon />,
		to: "/loy",
	},
	{
		label: "About Us",
		icon: <InfoIcon />,
		to: "/aboutus",
	},
];
function SimpleBottomNavigation() {
	const [value, setValue] = React.useState(() => {
		let value = 0;
		cards.forEach((item, index) => {
			if (window.location.pathname == item.to) {
				value = index;
			}
		});
		return value;
	});
	console.log();

	return (
		<div
			style={{
				justifyContent: "center",
				alignItems: "center",
				display: "flex",
			}}
		>
			<Box sx={{ width: 500 }} className={"bottom-nav"}>
				<BottomNavigation
					showLabels
					value={value}
					onChange={(event, value) => {
						setValue(value);
					}}
				>
					{cards.map((item, index) => {
						return (
							<BottomNavigationAction
								label={item.label}
								icon={item.icon}
								to={item.to}
								component={Link}
								key={index}
							/>
						);
					})}
				</BottomNavigation>
			</Box>
		</div>
	);
}
export default SimpleBottomNavigation;
