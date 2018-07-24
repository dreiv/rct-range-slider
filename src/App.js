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
				<RangeSlider value={value} onChange={this.handleValueChange} />

				<h3>Control slider value: </h3>
				<input type="number" value={value} onChange={this.handleValueChange} />
			</div>
		)
	}
}

export default App
