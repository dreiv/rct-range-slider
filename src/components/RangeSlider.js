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

	handleClick = value => {
		const evt = {target: {value}}
		this.props.onChange(evt)
		this.setState({ value })
	}

	render() {
		const { className, onChange, ...props } = this.props
		const { value } = this.state
		const oO = (value / 3) * 100
		const rangeStyle = { width: `${oO}%` }
		const arr = [0, 1, 2, 3]

		return (
			<label className="slider">
				<input
					type="range"
					value={value}
					min="0"
					max="3"
					onChange={callAll(this.internalOnChange, onChange)}
					{...props}
				/>
				<div className="slider__range-container">
					<div className="slider__range-inverse" />
					<span className="slider__handle"/>
					<div className="slider__range" style={rangeStyle} />
				</div>
				<div className="slider__range-labels">
					{ arr.map((item, idx) => {
						const isActive = item === +value
						const cls = isActive ? 'active' : null

						return (
							<React.Fragment>
								<button
									key={idx}
									className={cls}
									onClick={this.handleClick.bind(this, item)}
								/>
							</React.Fragment>
						)})
					}
				</div>
			</label>
		)
	}
}
