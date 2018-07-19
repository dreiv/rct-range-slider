import React from 'react'
import './RangeSlider.css'

export default function RangeSlider({ className, ...props }) {
	return (
		<label className={`toggle ${className}`}>
			<input type="range" defaultValue="2" min="0" max="4" {...props} />
		</label>
	)
}
