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
		const { className, onChange, disabled, ...props } = this.props
		const { value } = this.state
		const oO = (value / 3) * 100
		const rangeStyle = { width: `${oO}%` }
		const arr = [0, 1, 2, 3]
		const sliderClasses = ["slider"]

		if (disabled) {
			sliderClasses.push('disabled')
		}

		return (
			<label className={sliderClasses.join(' ')}>
				<div className="slider__range-track">
					<div className="slider__range-inverse" />
					<span className="slider__handle"/>
					<div className="slider__range" style={rangeStyle} />
					<div className="slider__labels">
						{ arr.map((item, idx) => {
							const isActive = item === Math.floor(value)

							return (
								<div className="slider__label-wrapper" key={idx}>
									<label className={isActive ? 'active' : null}>
										{`Item${idx}`}
									</label>
								</div>
							)})
						}
					</div>
				</div>
				<input
					type="range"
					value={value}
					min="0"
					max="3"
					onChange={callAll(this.internalOnChange, onChange)}
					disabled={disabled}
					{...props}
				/>
			</label>
		)
	}
}
