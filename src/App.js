import React, { Component } from 'react'
import './App.css'
import RangeSlider from './components/RangeSlider'

class App extends Component {
	constructor(props) {
		super(props)

		this.state = { value: 0 }
	}

	handleValueChange = ({ target: { value } }) => {
		this.setState({ value })
	}

	render() {
		const { value } = this.state

		return (
			<div className="App">
				<div className="slider__wrapper">
					<h3>Sliding slider:</h3>
					<RangeSlider value={value} onChange={this.handleValueChange} />
					<p>after slider</p>
				</div>

				<h3>Control slider value: </h3>
				<input
					type="number"
					value={value}
					onChange={this.handleValueChange}
					min="0"
					max="4"
				/>
			</div>
		)
	}
}

export default App
