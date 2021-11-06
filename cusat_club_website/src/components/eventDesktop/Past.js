import { StyleSheet, css } from "aphrodite";
import React from "react";
import { COLORS } from "../../styles/Constants";
import Carousel from "react-elastic-carousel";
import Session1 from "../../assets/sessions/Session1.jpeg";
import Session2 from "../../assets/sessions/session 2.jpg";
import Session3 from "../../assets/sessions/session 3,4.jpg";
import Session5 from "../../assets/sessions/Session 5.jpg";
import Session6 from "../../assets/sessions/Session 6.jpg";
import Session7 from "../../assets/sessions/Session7.JPG";
import Session8 from "../../assets/sessions/Session8.jpeg";
import Session9 from "../../assets/sessions/Session 9.jpeg";
import Session10 from "../../assets/sessions/Session 10.jpeg";
import Session11 from "../../assets/sessions/Session 11.jpeg";
import Session12 from "../../assets/sessions/Session 12.jpg";
import Session13 from "../../assets/sessions/Session_13.jpeg";
import Session14 from "../../assets/sessions/session_14.jpeg";
import Session15 from "../../assets/sessions/Session 15.png";

const breakPoints = [
	{ width: 1, itemsToShow: 1 },
	{ width: 550, itemsToShow: 2 },
	{ width: 768, itemsToShow: 3 },
];

const Up = () => {

	return (

        <>
			<Carousel breakPoints={breakPoints}>
				<img src={Session15} alt="poster" className={css(styles.poster)} />
				<img src={Session14} alt="poster" className={css(styles.poster)} />
				<img src={Session13} alt="poster" className={css(styles.poster)} />
				<img src={Session12} alt="poster" className={css(styles.poster)} />
				<img src={Session11} alt="poster" className={css(styles.poster)} />
				<img src={Session10} alt="poster" className={css(styles.poster)} />
				<img src={Session9} alt="poster" className={css(styles.poster)} />
				<img src={Session8} alt="poster" className={css(styles.poster)} />	
				<img src={Session7} alt="poster" className={css(styles.poster1)} />
				<img src={Session6} alt="poster" className={css(styles.poster1)} />
				<img src={Session5} alt="poster" className={css(styles.poster1)} />
				<img src={Session3} alt="poster" className={css(styles.poster1)} />
				<img src={Session2} alt="poster" className={css(styles.poster1)} />
				<img src={Session1} alt="poster" className={css(styles.poster1)} />
			</Carousel>
			<div className={css(styles.thirdRow)}>
            <div className={css(styles.subtTitle)}>
				CLICK ON THE POSTER TO VIEW
            </div>
            <div className={css(styles.motion)}></div>
        </div>
        </>
        
						
	);
};



const styles = StyleSheet.create({
	
	secondRow: {
		display: "flex",
		flexDirection: "row",
		columnGap: 40,
		marginLeft: 35,
		marginRight: 35,
		marginTop: 60,
		justifyContent: "space-between",
		alignItems: "center",
	},
	poster: {
		':hover': {
			opacity: "0.8",
		},
		margin: "0 25px",
		minWidth: 300,
		minHeight: 300,
		borderRadius: 15,
		cursor: "pointer"
	},
	poster1: {
		':hover': {
			opacity: "0.8",
		},
		
		margin: "0 25px",
		width: 406,
		height: 370,
		borderRadius: 15,
		cursor: "pointer",
		'@media only screen and (max-width: 1870px)': {
			width: 489,
			height: 489,

		},
		'@media only screen and (max-width: 1680px)': {
			width: 421,
			height: 421,

		},
		'@media only screen and (max-width: 1500px)': {
			width: 406,
			height: 365,

		},
	},
    thirdRow: {
		display: "flex",
		flexDirection: "column",
		justifyContent: "center",
		alignItems: "center",
		marginTop: 30,
		color: COLORS.tertiary,
		fontSize: 30,
		lineHeight: "37px",
	},
	motion: {
		marginTop: 15,
		marginBottom: 15,
	},
});

export default Up;
