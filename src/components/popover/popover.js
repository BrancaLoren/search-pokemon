import React from 'react'
import './popover.scss';

import { Button, Typography, Popover } from '@material-ui/core';

class PopoverProfile extends React.Component {
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

	render() {
		const open = Boolean(this.state.open);
		const id = open ? 'simple-popover-' + this.props.item : undefined;
		return (
			<div>
				<Button aria-describedby={id} variant="contained"
					onClick={(event) => this.handleClick(event)}>
					{this.props.item}
				</Button>
				<Popover
					id={id}
					open={open}
					anchorEl={this.state.open}
					onClose={() => this.handleClose()}
					anchorOrigin={{
						vertical: 'bottom',
						horizontal: 'center',
					}}
					transformOrigin={{
						vertical: 'top',
						horizontal: 'center',
					}}>
					<Typography className='content-popover'>{this.props.content || "Some thing its wrong"}</Typography>
				</Popover>
			</div>
		);
	}

}

export default PopoverProfile;
