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
		const inverseStyle = { width: `${100 - oO}%` }
		const handleStyle = { left: `${oO}%` }

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
				<div className="slider__range">
					<div className="slider__range-inverse" style={inverseStyle} />
				</div>
				<div className="slider__handle-wrapper">
					<span className="slider__handle" style={handleStyle} />
				</div>
			</label>
		)
	}
}
