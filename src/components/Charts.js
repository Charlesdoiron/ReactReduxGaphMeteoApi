import React from 'react';
import { Sparklines, SparklinesLine, SparklinesReferenceLine } from 'react-sparklines';

export default (props) => {
	return(
			<Sparklines 
						width={180} 
						height={120}
						data={props.data} >
							<SparklinesLine 
							color={props.color}
							style={{ fill: "none" }}>
							</SparklinesLine>
					</Sparklines>
		)
}