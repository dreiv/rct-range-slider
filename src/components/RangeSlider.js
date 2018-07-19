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
		const inverseStyle = { left: `${(progress / 4) * 100}%` }

		return (
			<label className={`slider ${className}`}>
				<input
					type="range"
					value={progress}
					min="0"
					max="4"
					onChange={this.handleChange}
					{...props}
				/>

				<div className="slider__overlay" />
				<div className="slider__range-inverse" style={inverseStyle} />
			</label>
		)
	}
}
