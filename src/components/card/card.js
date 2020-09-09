import React from 'react'
import './card.scss';

import { Card, CardActionArea, Tooltip, CardContent, CardMedia, Button, Typography } from '@material-ui/core';

class CardProfile extends React.Component {
	constructor(props) {
		super(props)
	}

	renderAbilites() {
		let abilites = [];
		let data = this.props.value;
		console.log('data', data)

		for (let i = 0; i < data.length; i++) {
			abilites.push(
				<Tooltip key={i + data[i]} className="profile-abilities" title={"qualquercoisa"}>
					<Button>{data[i]}</Button>
				</Tooltip>
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
