import React from 'react'
import './card.scss';

import PopoverProfile from '../popover/popover'
import { Card, CardContent, CardMedia, Typography } from '@material-ui/core';

class CardProfile extends React.Component {
	constructor(props) {
		super(props)
		this.state = {
			open: false
		}
	}

	handleClick(event) {
		this.setState({ open: event.currentTarget });
	};

	handleClose() {
		this.setState({ open: null });
	};

	renderAbilites() {
		let abilites = [];
		let data = this.props.value;

		for (let i = 0; i < data.length; i++) {
			let current = data[i];
			let item = Object.keys(current)[0];

			abilites.push(
				<PopoverProfile item={item} content={current[item]}></PopoverProfile>
			);
		}
		return abilites;

	}

	render() {
		return (
			<Card className="card-profile-container">
				<Typography gutterBottom variant="h5" component="h2" id="profile-form">
					{this.props.name}
				</Typography>
				<CardMedia
					className="card-profile-img"
					image={this.props.img}
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
