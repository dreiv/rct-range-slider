import React, { Component } from 'react'
import { callAll } from '../utils'
import './RangeSlider.css'

export default class RangeSlider extends Component {
	constructor(props) {
		super(props)

		this.state = { value: 0 }
	}

	static getDerivedStateFromProps = ({ value }) => (value ? { value } : null)

	internalOnChange = ({ target: { value } }) => {
		this.setState({ value })
	}

	render() {
		const { className, onChange, ...props } = this.props
		const { value } = this.state
		const oO = (value / 4) * 100
		const rangeStyle = { width: `${oO}%` }

		return (
			<label className="slider">
				<input
					type="range"
					value={value}
					min="0"
					max="4"
					onChange={callAll(this.internalOnChange, onChange)}
					{...props}
				/>
				<div className="slider__range-container">
					<div className="slider__range-inverse" />
					<span className="slider__handle"/>
					<div className="slider__range" style={rangeStyle} />
				</div>
				<div className="slider__range-labels">
					<span title="1"></span>
					<span title="2"></span>
					<span title="3"></span>
					<span title="4"></span>
					<span title="5"></span>
				</div>
			</label>
		)
	}
}
