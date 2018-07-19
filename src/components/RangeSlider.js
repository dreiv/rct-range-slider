import React, { Component } from 'react'
import './RangeSlider.css'

export default class RangeSlider extends Component {
	constructor(props) {
		super(props)

		this.state = {
			progress: 2,
		}
	}

	handleChange = ({ target: { value } }) => {
		this.setState({ progress: +value })
	}

	render() {
		const { className, ...props } = this.props
		const { progress } = this.state
		return (
			<label className={`toggle ${className}`}>
				<p>hello try this</p>
				<input
					type="range"
					value={progress}
					min="0"
					max="4"
					onChange={this.handleChange}
					{...props}
				/>

				<p>progress: {progress}</p>
			</label>
		)
	}
}
