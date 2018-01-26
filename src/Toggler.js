import React, { Component } from 'react';


class Toggler extends Component {
	constructor(props) {
		super(props);
		// state?
	}

	render() {
		let current = 'ON', next = 'OFF';
		return (
			<div>It's {onoff}!
				<button>Turn it {next}</button>
			</div>
		);
	}
}

export default Toggler;
