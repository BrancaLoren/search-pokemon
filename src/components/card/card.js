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

		let current = data[0];
		for (let j = 0; j < current.length; j++) {
			let teste = current[j];
			let item = Object.keys(teste);

			abilites.push(
				<PopoverProfile item={item} content={teste[item]}></PopoverProfile>
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
