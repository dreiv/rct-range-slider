import React, { Component } from 'react'
import './App.css'
import RangeSlider from './components/RangeSlider'

class App extends Component {
	constructor(props) {
		super(props)

		this.state = {
			value: 0,
			enabled: true,
		}
	}

	handleValueChange = ({ target: { value } }) => {
		this.setState({ value })
	}

	handleEnabledChange = () => {
		this.setState(prev => ({ enabled: !prev.enabled}))
	}

	render() {
		const { value, enabled } = this.state

		return (
			<div className="App">
				<div className="slider__wrapper">
					<h3>Sliding slider:</h3>
					<RangeSlider
						value={value}
						onChange={this.handleValueChange}
						disabled={!enabled}
					/>
					<p>after slider</p>
				</div>

				<h3>Control slider value: </h3>
				<input
					type="number"
					value={value}
					onChange={this.handleValueChange}
					min="0"
					max="3"
				/>

				<h3>Control slider enabled: </h3>
				<input
					type="checkbox"
					value={enabled}
					onChange={this.handleEnabledChange}
					/>
			</div>
		)
	}
}

export default App
