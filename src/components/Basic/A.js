import React from 'react';
export default props => (
	<a
		{...props}
		target={props.target ? props.target : '_blank'}
		rel="noopener noreferrer"
	>
		{props.children}
	</a>
);
