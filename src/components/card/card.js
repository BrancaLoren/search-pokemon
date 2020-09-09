import React from 'react'
import './card.scss';

import { withStyles, makeStyles } from '@material-ui/core/styles';
import { Card, Tooltip, CardContent, CardMedia, Button, Typography } from '@material-ui/core';

const CustomTooltip = withStyles((theme) => ({
	tooltip: {
		fontSize: 25,
	},
}))(Tooltip);

class CardProfile extends React.Component {
	constructor(props) {
		super(props)
	}

	renderAbilites() {
		let abilites = [];
		let data = this.props.value;

		for (let i = 0; i < data.length; i++) {
			let current = data[i];
			let item = Object.keys(current)[0];
			abilites.push(
				<CustomTooltip key={i + item} className="profile-abilities" title={current[item]}>
					<Button>{item}</Button>
				</CustomTooltip>
			);
		}
		return abilites;
	}

	render() {
		return (
			<Card className="card-profile-container">
				<Typography gutterBottom variant="h5" component="h2" id="profile-form">
					pikachu
        </Typography>
				<CardMedia
					className="card-profile-img"
					image="./dist/default.png"
					title="Contemplative Reptile"
				/>
				<CardContent id="profile-buttons">
					{this.renderAbilites() || null}
				</CardContent>
			</Card>
		);
	}

}

export default CardProfile;
